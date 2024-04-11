import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "./Api/ApiFetch";
import { setBooks, selectFilteredBooks } from "./Components/booksSlice";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

const App = () => {
  const dispatch = useDispatch();
  const filteredBooks = useSelector(selectFilteredBooks);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await fetchData();
      dispatch(setBooks(data));
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      <div className="App">
        <Navbar />
        <div className="main-container ">
          {filteredBooks.map((book, index) => (
            <Card key={index} book={book} />
          ))}
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
