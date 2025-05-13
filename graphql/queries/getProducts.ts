import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(search: "all") {
      items {
        id
        name
        sku
        price {
            regularPrice {
                amount {
                currency
                value
                }
            }
        }
        price_range {
        minimum_price {
            regular_price {
            currency
            value
            }
        }
        }
        special_price
        sku
        small_image {
        url
        }
        url_key
        url_suffix
        rating_summary
        reviews {
        page_info {
            total_pages
        }
        }
      }
    }
  }
`;