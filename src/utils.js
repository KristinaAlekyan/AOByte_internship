export function addAverageRate(data) {
    return data.map(post => {
        let sum = 0;
        post.comments.forEach(comment => sum += comment.comment_rate);

        let averageRate = (sum / post.comments.length);
        return { ...post, averageRate };
    });
}

export function findMaxRatePost(posts) {
    const enabledPosts = posts.filter(post => !post.disabled);

    if (!enabledPosts.length) {
        return;
    }
    return enabledPosts.reduce((prev, current) => {
        return (+prev.averageRate > +current.averageRate) ? prev : current;
    })
}

export function sortPostsList(state) {
    const sortedList = [...state.list];

    if (state.sort) {
        sortedList.sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
    } else {
        sortedList.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
    }

    return sortedList;
}
export function getCurrentPosts(currentPage, postsPerPage, posts) {
    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    return posts.slice(indexFirstPost, indexLastPost);
}
export function getSearchedPosts(posts, searchText) {
    return posts.filter(post => {
        return post.post_title.toUpperCase().includes(searchText.toUpperCase()) ||
            post.comments.find(comment => {
                return comment.comment_title.toUpperCase().includes(searchText.toUpperCase());
            })
    });
}