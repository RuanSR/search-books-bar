
const BookService = {
    async get(search, index ,maxResult = 10){
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResult}&startIndex=${index}`)
        return await response.json();
    }
}

export default BookService;