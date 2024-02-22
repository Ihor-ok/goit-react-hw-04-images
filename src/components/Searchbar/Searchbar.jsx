import css from './Searchbar.module.css'


function Searchbar({handleSubmit, handleChange, value}) { 
       
        return (
            <>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={handleSubmit}>
                        <button type="submit" className={css.SearchFormButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.94-5-5.78-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.84 2.56 5.31 5.34 5.78a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                        </button>

                        <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={value}
                        />
                    </form>
                </header>
                
            </>
        )
    
}

export default Searchbar