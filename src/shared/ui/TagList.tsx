import { List } from '@/shared/ui/TagList.styles';

type TagListProps = {
  items: readonly string[];
  label?: string;
};

export function TagList({ items, label = '사용 기술' }: TagListProps) {
  return (
    <List className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
}
