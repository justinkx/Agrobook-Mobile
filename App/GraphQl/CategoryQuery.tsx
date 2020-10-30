import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      description
      image {
        formats
      }
    }
  }
`;
