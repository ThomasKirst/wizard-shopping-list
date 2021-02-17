import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ items, onItemClick, onItemDelete }) {
  return (
    <section>
      {items.map(({ id, title, isDone }) => (
        <ShoppingItem
          title={title}
          isDone={isDone}
          onItemClick={() => onItemClick(id)}
          onItemDelete={() => onItemDelete(id)}
        />
      ))}
    </section>
  );
}
