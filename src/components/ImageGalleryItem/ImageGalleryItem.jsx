import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({imgs, onClick, showModal}) {

  return (
    <>
          {imgs.map((img) => {
              return (<li key={img.webformatURL} className={css.galleryItem}>
                <img onClick={() => {onClick(img.largeImageURL)}} className={css.galleryItemImg} src={img.webformatURL} alt={img.tags}  />
                      </li>)
          })}
      
    </>
        

  )
};