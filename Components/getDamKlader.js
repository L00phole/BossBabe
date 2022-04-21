import wp from "../lib/wp/wp";
export default async function getDamKlader() {
  const { data } = await wp(`
query NewQuery {
  productCategory(id: "dam", idType: SLUG) {
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
          price(format: RAW)
        }
      }
    }
  }
}

`);
  return data.productCategory.products.nodes;
}
