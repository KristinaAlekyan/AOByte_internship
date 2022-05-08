import './search.css';

const Search = ({ searchText, onSearch }) => {
    return (
        <section >
            <label > Search </label>
            <input
                id = "search"
                value = {searchText}
                onChange = {onSearch}
            />
        </section>
    );
}

export default Search;