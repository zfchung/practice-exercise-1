const axios = require("axios");

async function requestGitHub(parameter: string) {
  const response = await axios.get("https://api.github.com/" + parameter);
  return response;
}

export async function getGitHubUserName(userID: string) {
  // return request("users/" + userID).then((user) => user.name);
  const user = await requestGitHub("users/" + userID);
  return user.data.name;
}

getGitHubUserName("zfchung").then((response) => console.log(response));
