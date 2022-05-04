import './search.css';

const Search = ({ searchText, search }) => {
    return (
        <section >
            <label >Search :</label>
            <input
                id = "search"
                value = {searchText}
                onChange = {search}
            />
        </section>
    );
}

export default Search;