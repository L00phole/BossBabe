import wp from "../lib/wp/wp";

export default async function getDetailPage(slug) {
  const data = await wp(
    `
 query NewQuery($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    name
    shortDescription(format: RAW)
    slug
    image {
      altText
      id
      mediaItemUrl
    }
    attributes {
      nodes {
        options
        label
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
      description(format: RAW)
    }
    
  }
}, 
  `,
    { slug }
  );
  return data.data.product;
}
