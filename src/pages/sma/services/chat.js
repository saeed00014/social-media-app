import axios from "axios"

export const createChat = (url, text, user_id) => {
  return axios
  .post(url, {
    user_id,
    text
  })
  .then(({ data }) => {
    return (
      data
    )
  })
  .catch((error) => {
    console.log(error)
  });
}

export const getAllChat = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  });
}

