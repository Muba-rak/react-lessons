import React, { useState, useEffect } from "react";
// filter our data based on brand
// loading - shortcircuit evaluation &&
// loading - ternary operator

const Filtered = () => {
  const [nike, setNike] = useState([]);
  const [adidas, setAdidas] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://example-data.draftbit.com/sneakers?_limit=20"
    );
    const data = await res.json();
    const filteredNikes = data.filter((sneaker) => sneaker.brand === "Nike");
    const filteredAdidas = data.filter((sneaker) => sneaker.brand === "adidas");
    setNike(filteredNikes);
    setAdidas(filteredAdidas);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="categories">
      <h1>Shop By Categories</h1>
      <section className="adidas">
        <h3>Adidas</h3>
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Adidas-logo-500x332.png"
          alt="adidas logo"
        />
        <section className="container">
          {adidas.map((product) => {
            const {
              id,
              title,
              brand,
              retailPrice,
              media: { smallImageUrl },
            } = product;

            return (
              <div key={id} className="card">
                <img src={smallImageUrl} alt={title} />
                <h3> {brand} </h3>
                <h4>Price: $ {retailPrice} </h4>
                    <h3>{title} </h3>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </section>
      </section>
      <section className="nike">
        <h3>Nike</h3>
        <img
          src="https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike-thumbnail.png"
          alt="Nike Logo"
        />
        <section className="container">
          {nike.map((product) => {
            const {
              id,
              title,
              brand,
              retailPrice,
              media: { smallImageUrl },
            } = product;

            return (
              <div key={id} className="card">
                <img src={smallImageUrl} alt={title} />
                <h3> {brand} </h3>
                <h4>Price: $ {retailPrice} </h4>
                <h3>{title} </h3>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Filtered;
