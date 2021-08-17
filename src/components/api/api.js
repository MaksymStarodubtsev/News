export const getPostComents = async(postId, setResult, url) => {
  const searchResult = await fetch(`${url}/${postId}`)
    .then(response => response.json());

  setResult(searchResult);
};
