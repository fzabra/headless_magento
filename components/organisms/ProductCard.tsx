import Link from 'next/link';
import ProductImage from '../molecules/ProductImage';
import PriceDisplay from '../molecules/PriceDisplay';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

interface ProductCardProps {
  name: string;
  imageUrl: string;
  price: string;
  installment?: string;
  href: string;
  isFavorited?: boolean;
}

export default function ProductCard({
  name,
  imageUrl,
  price,
  installment,
  href,
  isFavorited = false,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow transition flex flex-col items-center text-center">
        <ProductImage src={imageUrl} alt={name} isFavorited={isFavorited} />
        <Text size="sm" className="uppercase mb-2 text-normal text-gray-500 font-semibold">{name}</Text>
        <PriceDisplay price={price} installment={installment} />
        <Link href={href}>
        <Button>COMPRAR</Button>
        </Link>
    </div>
  
  );
}
