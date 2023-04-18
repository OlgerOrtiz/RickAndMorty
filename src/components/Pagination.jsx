import React from 'react'

const Pagination = ({ cardsPerPage, currentPage, setCurrentPage, totalCards }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const onSpecificPage = (num) => {
        setCurrentPage(num)
    }

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Previous</button>
            <ul className="pagination-list">
                {
                    pageNumbers.map(numPage => (
                        <li key={numPage}>
                            <button className={`pagination-link ${numPage === currentPage ? 'is-current' : ''}`} 
                            aria-label={`Go to page${numPage}`} 
                            onClick={() =>onSpecificPage(numPage)}>
                                {numPage} </button>
                        </li>
                    ))
                }
            </ul>
                <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Next page</button>
        </nav>
    )
}

export default Pagination