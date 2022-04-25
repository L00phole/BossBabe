import wp from "../lib/wp/wp";

export default async function getRecommendedProducts() {
  const data = await wp(`
query NewQuery {
  productCategory(id: "rekommenderas", idType: SLUG) {
    products {
      nodes {
        id
        image {
          altText
          mediaItemUrl
        }
        slug
        name
        ... on SimpleProduct {
          id
          name
          price(format: RAW)
        }
      }
    }
  }
}
`);

  return data.data.productCategory.products.nodes;
}
