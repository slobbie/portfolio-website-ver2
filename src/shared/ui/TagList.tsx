import { usePress } from '@/shared/lib/interaction';
import { List, Tag } from '@/shared/ui/TagList.styles';

type TagListProps = {
  items: readonly string[];
  label?: string;
};

export function TagList({ items, label = '사용 기술' }: TagListProps) {
  /* 상태도 ref도 없는 값이라 태그 전체가 하나를 나눠 씁니다. */
  const press = usePress({ press: false });

  return (
    <List className="tag-list" aria-label={label}>
      {items.map((item) => (
        <Tag key={item} {...press}>
          {item}
        </Tag>
      ))}
    </List>
  );
}
