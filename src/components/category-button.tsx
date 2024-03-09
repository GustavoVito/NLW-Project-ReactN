import { Pressable, PressableProps, Text } from 'react-native';
import { clsx } from 'clsx';

type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx('bg-slate-100 px-4 justify-center rounded-md h-10', isSelected && "border-2 border-red-600")}
      {...rest}
    >
      <Text className="text-slate-800 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
