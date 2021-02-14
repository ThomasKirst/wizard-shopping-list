import Form from './Form';
import ShoppingItem from './ShoppingItem';
import { useState } from 'react';

import './App.css';

function App() {
  const title = 'Hello World! This is my first React App!';

  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(title) {
    setShoppingItems([...shoppingItems, { title, isDone: false }]);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <Form onCreateShoppingItem={addShoppingItem} />
      {shoppingItems.map((item) => (
        <ShoppingItem title={item.title} isDone={item.isDone} />
      ))}
    </div>
  );
}

export default App;
