import Text from '../atoms/Text';

interface PriceDisplayProps {
  price: string;
  installment?: string;
}

export default function PriceDisplay({ price, installment }: PriceDisplayProps) {
  return (
    <div className="mb-3">
      <Text size="lg" weight="bold" className="text-black">{price}</Text>
      {installment && (
        <Text size="sm" className="text-gray-500">{installment}</Text>
      )}
    </div>
  );
}
