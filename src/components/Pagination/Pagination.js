import './pagination.css';

const Pagination = ({ postsPerPage, totalPostsQuantity, currentPage, changePage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPostsQuantity / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbers.map(number => {
                return (
                    <li key={number} className="paginationItem">
                        <button
                            type = "button"
                            className = { number === currentPage ? ('paginationButton currentPage'):('paginationButton')}
                            onClick={() => changePage(number)}
                        >
                            {number}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default Pagination;