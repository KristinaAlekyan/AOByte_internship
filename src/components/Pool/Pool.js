import './pool.css';
import Post from '../Post/Post';
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const Pool = ({ posts, currentPage, postsPerPage, totalPostsQuantity, changePage, search, searchText}) => {
    return (
        <section className = "posts">
            
            <Search searchText = {searchText} search = {search} />
                <div className = "poolContainer"><b>Posts are here    </b>
                    {posts.map(post => 
                        <Post
                            key = {post.id}
                            id = {post.id}
                            post_title = {post.post_title}    
                            comments = {post.comments}  
                            disabled = {post.disabled}       
                        />
                    )}
                </div> 
            <Pagination                
                currentPage = {currentPage}
                postsPerPage = {postsPerPage}
                totalPostsQuantity = {totalPostsQuantity}
                changePage = {changePage}
            />
        </section>
    );
};

export default Pool;