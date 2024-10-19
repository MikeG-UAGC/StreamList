import React, { useState } from 'react';

function Cart() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!input.trim()) {
      setError('Item name cannot be empty!');
      return;
    }

    const newItem = {
      id: cartItems.length + 1,
      text: input
    };

    setCartItems([...cartItems, newItem]);
    setInput('');
  };

  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the cart items */}
      <h2>Cart Items: {cartItems.length}</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            {/* Delete button */}
            <button onClick={() => handleDeleteItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
