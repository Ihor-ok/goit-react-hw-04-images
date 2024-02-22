import { useState } from 'react'


import Searchbar from 'components/Searchbar/Searchbar'
import fetchImgWithQuery from 'components/services/api'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import Loader from './Loader/Loader'

function App() {

  const [value, setValue] = useState('');
  const [imgs, setImgs] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(0);
  const [isVisibleLoader, setIsVisibleLoader] = useState(false);
  const [isVisibleButtonLoad, setIsVisibleButtonLoad] = useState(false);

  function handleChange(evt)  {
  
    setValue(evt.target.value)

  }

  async  function handleSubmit(evt) {

    evt.preventDefault()
    if (value === '') { return }
    
    setImgs(null);
    setSearchQuery(value);
    setIsVisibleLoader(true);
    setPage(1);

    const response = await fetchImgWithQuery(value, 1);
    setIsVisibleButtonLoad(true);

    if (response.data.hits.length === 0) {
      setIsVisibleButtonLoad(false);
  
      alert('This image was not found! Enter a new name for the image.')

    }
    
    setIsVisibleLoader(false);
    setImgs(response.data.hits);
    setPage(prev => { return prev + 1 });
    setValue('');

  }
  
  async function handleLoadMore() {
    setIsVisibleLoader(true);
     
    const response = await fetchImgWithQuery(searchQuery, page);
    
    setIsVisibleLoader(false);
    setImgs([...imgs, ...response.data.hits]);
    setPage(prev => { return prev + 1 });
    
  }

      
    return (
      <>
        <Searchbar value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
        
        {imgs && <ImageGallery imgs={imgs} />}
        {isVisibleLoader &&  <Loader/>}
        {isVisibleButtonLoad && <Button handleLoadMore={handleLoadMore} />}
        
        
      </>

    )
  

}



export default App

