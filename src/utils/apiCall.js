const api = "https://5e9c7e640fd0b50016f74630.mockapi.io";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `api/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
