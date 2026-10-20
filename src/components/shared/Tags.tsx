export function TagList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
