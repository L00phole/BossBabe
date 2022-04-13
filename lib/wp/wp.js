const wp = async (query, variables) => {
  console.log(query);
  const token = Buffer.from(`${process.env.USER}:${process.env.PASS}`).toString(
    "base64"
  );
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: variables || null,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log("DATA wp=>", data);
    return data;
  } catch (error) {
    console.error("WP ERROR =>", error);
    return false;
  }
};
export default wp;
