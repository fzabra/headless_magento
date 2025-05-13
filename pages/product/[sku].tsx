import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import { apolloClient } from '../../lib/apollo';

interface ProductPageProps {
  product: {
    name: string;
    sku: string;
    description: {
      html: string;
    };
  } | null;
}

const PRODUCT_QUERY = gql`
  query GetProduct($sku: String!) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        name
        sku
        description {
          html
        }
      }
    }
  }
`;

export default function ProductPage({ product }: ProductPageProps) {
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-sm text-gray-500">SKU: {product.sku}</p>
      <div
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: product.description.html }}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sku = context.params?.sku as string;

  try {
    const { data } = await apolloClient.query({
      query: PRODUCT_QUERY,
      variables: { sku },
    });

    const product = data.products.items[0] || null;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return {
      props: {
        product: null,
      },
    };
  }
};
