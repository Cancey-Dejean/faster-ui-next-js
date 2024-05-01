import { GraphQLClient, gql } from "graphql-request";

const hygraph_api_endpoint =
  "https://us-west-2.cdn.hygraph.com/content/clvll0m3e08ol07wbs5qmm1ho/master";

// const hygraph = new GraphQLClient(
//   'https://api-us-west-2.hygraph.com/v2/clvll0m3e08ol07wbs5qmm1ho/master'
// );

const graphQLClient = new GraphQLClient(hygraph_api_endpoint);

export const queryGlobalSettings = async () => {
  const query = gql`
    query GlobalQuery {
      globals {
        companyName
      }
    }
  `;

  const response = await graphQLClient.request(query);
  return response;
};

export const queryHomePage = async () => {
  const query = gql`
    query HomePagePageQuery {
      page(where: { slug: "home" }) {
        metaTitle
        metaDescription
      }
    }
  `;

  const response = await graphQLClient.request(query);
  return response;
};
