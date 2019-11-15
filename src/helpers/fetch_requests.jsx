export const singleFetchRequest = (url) => {
  let handleErrors = res => {
    if (!res.ok && res !== null) {
      throw Error(res.statusText + ' ' + res.status);
    }
    return res;
  };
  return fetch(url, {
    credentials: "same-origin"
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
};
