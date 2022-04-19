import wp from "../../lib/wp/wp";
import getDetaljSida from "./../../Components/getDetaljSida";

const Products = () => {
  return <div></div>;
};
export default Products;
export const getStaticPaths = async () => {
  const { data } = await wp(`
    query NewQuery{
      products{
        nodes {
          id
          slug
        }
      }
    }
  `);
  const paths = data?.products?.nodes?.map((product) => {
    return { params: { slug: product.slug } };
  });
  console.log("my paths===", paths);
  return { paths, fallback: "blocking" };
};
export async function getStaticProps(context) {
  console.log("context", context);
  const product = await getDetaljSida(context.params.slug);
  return { props: { product } };
}
