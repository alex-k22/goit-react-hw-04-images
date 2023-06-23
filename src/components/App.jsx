import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { fetchPhotos } from 'services/images-api';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const onFormSubmit = ({ newQuery }) => {
    if (query === newQuery) {
      return;
    }
    setQuery(newQuery);
  };

  const onShowMoreButtonClick = () => {
    if (images.length >= 500) {
      toast.warn('The end of collection');
      return;
    }

    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchData = async () => {
      try {
        setStatus('pending');
        const { data } = await fetchPhotos(query.trim(), page);

        if (data.hits.length === 0) {
          toast.error('Sorry, but nothing found');
          setStatus('rejected');
        }
        if (data.hits.length > 0) {
          setStatus('resolved');
        }

        setImages(i => [...i, ...data.hits]);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setStatus('rejected');
      }
    };
    fetchData();
  }, [query, page]);

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      {images && <ImageGallery images={images} />}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Button onClick={onShowMoreButtonClick} />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
