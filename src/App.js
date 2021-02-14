import Form from './Form';
import ShoppingItem from './ShoppingItem';

import './App.css';

function App() {
  const title = 'Hello World! This is my first React App!';

  return (
    <div className="App">
      <h1>{title}</h1>
      <Form />
      <ShoppingItem title="Milk" />
      <ShoppingItem title="Coffee" isDone />
    </div>
  );
}

export default App;
