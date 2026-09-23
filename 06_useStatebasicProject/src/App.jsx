import { useState } from "react";
import Card from "./Componets/Card";
import NavBar from "./Componets/NavBar";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Ice Cream",
      image: "icecream.jpg",
      price: 80,
      category: "Dessert",
    },
    {
      id: 2,
      name: "Pizza",
      image: "pizza.jpg",
      price: 250,
      category: "Fast Food",
    },
    {
      id: 3,
      name: "Burger",
      image: "burger.jpg",
      price: 150,
      category: "Fast Food",
    },
    {
      id: 4,
      name: "Cold Drink",
      image: "cold-drink.jpg",
      price: 60,
      category: "Beverage",
    },
    {
      id: 5,
      name: "French Fries",
      image: "fries.jpg",
      price: 100,
      category: "Snacks",
    },
  ];

  const [total, setTotal] = useState(0);

  const [totalproduct, setProduct] = useState(0);

  function addbtn(price) {
    setTotal(total + 1);
    setProduct(totalproduct + price);
  }

  function removebtn(price) {
    if (total > 0) {
      setTotal(total - 1);
      setProduct(totalproduct - price);
    }
  }

  return (
    <div>
      <NavBar total={total} totalproduct={totalproduct} />

      {products.map((pro) => {
        return (
          <Card key={pro.id} pro={pro} addbtn={addbtn} removebtn={removebtn} />
        );
      })}
    </div>
  );
};

export default App;
