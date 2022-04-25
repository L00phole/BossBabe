import wp from "../lib/wp/wp";
export default async function getOutlet() {
  const { data } = await wp(`
query NewQuery {
  productCategory(id: "rea", idType: SLUG) {
    id
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
           salePrice(format: RAW)
          regularPrice(format: RAW)

        }
      }
    }
  }
}

`);
  return data.productCategory.products.nodes;
}
