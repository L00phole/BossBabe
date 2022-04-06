const wp = async (query, options) => {
  const hasVariables = options?.variables ? true : false;
  const token = Buffer.from(
    process.env.CMS_GRAPHQL_AUTH_USER + ':' + process.env.CMS_GRAPHQL_AUTH_USER_PASS
  ).toString('base64');
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ${token}',
      },
      body: JSON.stringify({
        query,
        variables: options?.variables,
      }),
    });
    const data = await response.json();
    if (!data.data) {
      throw 'ERROR';
    }
    return data.data;
  } catch (error) {
    console.log('ERROR =>', error);
    return false;
  }
};

export default wp;