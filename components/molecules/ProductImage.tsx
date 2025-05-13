import Image from 'next/image';
import FavoriteIcon from '../atoms/FavoriteIcon';

interface ProductImageProps {
  src: string;
  alt: string;
  isFavorited?: boolean;
}

export default function ProductImage({ src, alt, isFavorited }: ProductImageProps) {
  return (
    <div className="relative w-full mb-4 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="object-contain"
      />
      <div className="absolute top-2 right-2">
        <FavoriteIcon active={isFavorited} />
      </div>
    </div>
  );
}
