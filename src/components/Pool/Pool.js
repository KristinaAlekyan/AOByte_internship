import './pool.css';
import Post from '../Post/Post';
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const Pool = ({ posts, currentPage, totalPostsQuantity, onChangePage, onSearch, searchText, onAddComment, onAddReply}) => {
    return (
        <div >            
            <Search 
                searchText = {searchText} 
                onSearch = {onSearch}
            />
            <ul >
                {posts.map(post => {
                    return (
                        <Post 
                            key = {post.id} 
                            post = {post} 
                            onAddComment = {onAddComment}
                            onAddReply = {onAddReply}
                        />
                    );
                })}
            </ul> 
            <Pagination    
                currentPage = {currentPage}
                totalPostsQuantity = {totalPostsQuantity}
                onChangePage = {onChangePage}
            />
        </div>
    );
};

export default Pool;