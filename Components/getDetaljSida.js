import wp from "../lib/wp/wp";

export default async function getDetailPage(slug) {
  const data = await wp(
    `
 query NewQuery($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    name
    shortDescription
    slug
    image {
      altText
      id
      mediaItemUrl
    }
    attributes {
      nodes {
        options
      }
    }
    galleryImages {
      nodes {
        altText
        id
        mediaItemUrl
      }
    }
    ... on SimpleProduct {
      id
      price(format: RAW)
      salePrice(format: RAW)
      name
      stockQuantity
    }
  }
}, 
  `,
    { slug }
  );
  console.log(data);
  return data.data.product.id;
}
