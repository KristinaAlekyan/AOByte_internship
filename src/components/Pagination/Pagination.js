import './pagination.css';
import {postsPerPage} from "../../config";

const Pagination = ({ totalPostsQuantity, currentPage, onChangePage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPostsQuantity / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className = "pagination">
            {pageNumbers.map(number => {
                return (
                    <li key = {number} className = "paginationItem">
                        <button
                            type = "button"
                            className = { number === currentPage ? ('paginationButton currentPage'):('paginationButton')}
                            onClick = {() => onChangePage(number)}
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