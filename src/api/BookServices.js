const BookService = {
	async get(search, maxResult, index) {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResult}&startIndex=${index}`
		);
		return await response.json();
	},
};

export default BookService;
