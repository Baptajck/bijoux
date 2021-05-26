import { useEffect } from "react";
import s from "./Home.module.scss";

function Home({ fetchProducts, user, products }) {
  const { firstname, lastname } = user;
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Bienvenue {firstname} {lastname} !
      </h1>
      {products.map(({ name, description, price, quantity }, i) => (
        <div key={i} className={s.card}>
          <h2 className={s.cardTitle}>{name}</h2>
          <p className={s.cardDescription}>{description}</p>
          <p className={s.cardPrice}>
            {price}€ - il en reste {quantity}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
