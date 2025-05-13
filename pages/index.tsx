import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries/getProducts';
import { apolloClient } from '../lib/apollo';
import ProductCard from '../components/organisms/ProductCard';

export default function Home() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, { client: apolloClient });

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse border p-4 rounded bg-gray-100 h-[280px]" />
        ))}
      </div>
    );
  }

  if (error) return <p>Erro: {error.message}</p>;

  console.log(data)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.products.items.map((product: any) => (
        <>
        <ProductCard
          key={product.id}
          name={product.name}
          imageUrl={product.small_image?.url || '/placeholder.png'}
          price={product.price.regularPrice.amount.value}
          installment="4x R$ 49,97"
          href={`/product/${product.sku}`}
          isFavorited={false}
        />
        </>
      ))}
    </div>
  );
}
