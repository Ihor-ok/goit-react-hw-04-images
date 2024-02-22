import { useState } from 'react'
import css from './ImageGallery.module.css'

import Modal from 'components/Modal/Modal'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"


function ImageGallery({imgs}) { 

  const [largeImageURL, setLargeImageURL] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
    
  const showModal = () => {
      setIsShowModal(true);
      
    }

  const closeModalClick = (e) => {
      if (e.target.tagName === 'IMG') { return }
        
      setIsShowModal(false);

      }

    const closeModalKey = () => {
      
      setIsShowModal(false);
     
    }

    const onClick = (url) => {
      setLargeImageURL(url);
      showModal();
    
    }
   
        return (
            <>
                <ul className={css.gallery}>
                    <ImageGalleryItem imgs={imgs} onClick={onClick } showModal={showModal} />
                
                </ul>
                
                {isShowModal && <Modal largeImageURL={largeImageURL} closeModalKey={closeModalKey} closeModalClick={closeModalClick} />}
            </>
        )
    
}

export default ImageGallery