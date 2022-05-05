import './pool.css';
import Post from '../Post/Post';
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const Pool = ({ posts, currentPage, postsPerPage, totalPostsQuantity, changePage, search, searchText, addComment}) => {
    return (
        <div >
            
            <Search searchText = {searchText} search = {search} />
            <ul >
                {posts.map(post => {
                    return (
                        <Post 
                            key = {post.id} 
                            post = {post} 
                            addComment = {addComment}
                        />
                    );
                })}
            </ul> 
            <Pagination    
                currentPage = {currentPage}
                postsPerPage = {postsPerPage}
                totalPostsQuantity = {totalPostsQuantity}
                changePage = {changePage}
            />
        </div>
    );
};

export default Pool;