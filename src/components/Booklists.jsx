import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <h2>Title: {book.title} </h2>
    </div>
  );
};
//outputting list
const Booklists = ({ num }) => {
  const books = [
    { id: 1, title: "Sugar Girl 2" },
    { id: 2, title: "Drummer boy" },
    { id: 3, title: "Our Husband has gone mad again" },
    { id: 4, title: "Our wives has gone mad again" },
    { id: 5, title: "Another One" },
  ];
  return (
    <div>
      <h3>Bestselling books {num} </h3>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default Booklists;
