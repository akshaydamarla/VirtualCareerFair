export const BASEURL = "http://localhost:9999/";

export function callApi(reqMethod, url, data, responseHandler) {
  let options;
  if (reqMethod === "GET" || reqMethod === "DELETE")
    options = { method: reqMethod, headers: { 'Content-Type': 'application/json' } };
  else
    options = { method: reqMethod, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };

  fetch(BASEURL + url, options)
    .then((response) => {
      if (!response.ok) throw new Error(response.status + ': ' + response.statusText);
      return response.json();
    })
    .then((res) => responseHandler(res))
    .catch((err) => alert(err));
}