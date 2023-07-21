export default {
    loadList: async (q, offset) => {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json();
    }
}

