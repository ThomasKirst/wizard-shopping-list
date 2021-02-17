import { useState } from 'react';

import Form from './Form';
import ShoppingItem from './ShoppingItem';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const title = 'Hello World! This is my first React App!';

  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(title) {
    setShoppingItems([
      ...shoppingItems,
      { title, isDone: false, id: uuidv4() },
    ]);
  }

  function toggleShoppingItem(itemId) {
    setShoppingItems(
      shoppingItems.map((item) => {
        if (item.id === itemId) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
    /*
    const itemIndex = shoppingItems.findIndex((item) => item.id === itemId);
    const shoppingItem = shoppingItems[itemIndex];

    setShoppingItems([
      ...shoppingItems.slice(0, itemIndex),
      { ...shoppingItem, isDone: !shoppingItem.isDone },
      ...shoppingItems.slice(itemIndex + 1),
    ]);
    */
  }

  function deleteShoppingItem(itemId) {
    setShoppingItems(shoppingItems.filter((item) => item.id !== itemId));
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <Form onCreateShoppingItem={addShoppingItem} />
      {shoppingItems.map((item) => (
        <ShoppingItem
          key={item.id}
          title={item.title}
          isDone={item.isDone}
          onItemClick={() => toggleShoppingItem(item.id)}
          onItemDelete={() => deleteShoppingItem(item.id)}
        />
      ))}
    </div>
  );
}

export default App;
