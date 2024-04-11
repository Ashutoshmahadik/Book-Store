import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    filteredBooks: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },
    filterBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredBooks = state.books.filter((book) => {
        const { title, authors, categories } = book.volumeInfo;
        const authorMatch =
          authors &&
          authors.some((author) => author.toLowerCase().includes(searchTerm));
        const categoryMatch =
          categories &&
          categories.some((category) =>
            category.toLowerCase().includes(searchTerm)
          );
        return (
          title.toLowerCase().includes(searchTerm) ||
          authorMatch ||
          categoryMatch
        );
      });
    },
  },
});

export const { setBooks, filterBooks } = booksSlice.actions;

export const selectFilteredBooks = (state) => state.books.filteredBooks;

export default booksSlice.reducer;
