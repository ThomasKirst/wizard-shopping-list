import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Headline from './Headline';
import Form from './Form';
import ShoppingList from './ShoppingList';

import loadFromLocal from './lib/loadFromLocal';
import saveLocally from './lib/saveToLocal';

import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = 'hogwartsShoppingList';
  const [shoppingItems, setShoppingItems] = useState(
    loadFromLocal(LOCAL_STORAGE_KEY) ?? []
  );

  useEffect(() => {
    saveLocally(LOCAL_STORAGE_KEY, shoppingItems);
  }, [shoppingItems]); // "dependency" on shoppingItems

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
          item.isDone = !item.isDone; // true => false, false => true
        }
        return item;
      })
    );
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
