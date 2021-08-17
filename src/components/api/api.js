const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const getPostComents = async(postId, setResult, url) => {
  const searchResult = await fetch(url)
    .then(response => response.json());

  setResult(searchResult.filter(post => post.postId === postId));
};

export const getUserName = async(setResultt, value) => {
  const searchResult = await fetch(USERS_URL)
    .then(response => response.json());

  setResultt(searchResult);
};
