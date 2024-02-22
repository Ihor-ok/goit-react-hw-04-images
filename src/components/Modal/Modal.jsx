import { useEffect } from 'react'
import css from './Modal.module.css'


function Modal({ largeImageURL, closeModalClick, closeModalKey }) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleKeyDown = (event) => {
   
    if (event.key === 'Escape') {
      closeModalKey();
      
    }
  }

    return (<>
      <div className={css.modal} onClick={closeModalClick}>
        <div className={css.modalContent}>
        <img src={largeImageURL} alt='largeImage' />
        </div>
      </div>
    </>)

}

export default Modal