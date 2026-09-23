const Card = ({ pro, addbtn, removebtn }) => {
  const { name, image, price, category } = pro;

  return (
    <div>
      <h1>Shopping Card</h1>

      <p>Product Name: {name}</p>

      <img src={image} alt={name} height={100} width={100} />

      <p>Category: {category}</p>

      <p>Price: ₹{price}</p>

      <button onClick={() => addbtn(price)}>Add</button>

      <button onClick={() => removebtn(price)}>Remove</button>
    </div>
  );
};

export default Card;
