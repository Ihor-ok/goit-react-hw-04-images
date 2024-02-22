import css from './Button.module.css'


export default function Button({handleLoadMore}) {
  
  return (
     <div className={css.container}>
          <button onClick={handleLoadMore} className={css.buttonLoadMore} type='button'>Load more</button>
     </div>
        
  )
};