import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Text({
  children,
  size = 'md',
  weight = 'normal',
  className = '',
  as: Component = 'p',
}: TextProps) {
  const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';
  const weightClass = weight === 'bold' ? 'font-bold' : 'font-normal';

  return (
    <Component className={`${sizeClass} ${weightClass} ${className}`}>
      {children}
    </Component>
  );
}
