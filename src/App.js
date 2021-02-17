import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Headline from './Headline';
import Form from './Form';
import ShoppingList from './ShoppingList';

import './App.css';

function App() {
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
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <ShoppingList
        items={shoppingItems}
        onItemClick={toggleShoppingItem}
        onItemDelete={deleteShoppingItem}
      />
    </div>
  );
}

export default App;
