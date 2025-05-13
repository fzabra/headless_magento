import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  sku: string;
  small_image?: { url: string };
  price?: string;
  installment?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          imageUrl={product.small_image?.url || '/placeholder.png'}
          price="R$ 199,90"
          installment="4x R$ 49,97"
          href={`/product/${product.sku}`}
          isFavorited={false}
        />
      ))}
    </div>
  );
}
