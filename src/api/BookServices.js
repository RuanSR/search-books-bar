const BookService = {
	async get(search, maxResult, index) {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResult}&startIndex=${index}`
		);
		// eslint-disable-next-line no-return-await
		return await response.json();
	},
};

export default BookService;

// const BookService = {
// 	async get(search, index, maxResult = 10) {
// 		const response = await fetch(
// 			`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResult}&startIndex=${index}`
// 		);
// 		// eslint-disable-next-line no-return-await
// 		return await response.json();
// 	},
// };

// export default BookService;
