import axios from "axios"

export const getOneMessage = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export const createMessage = (url, user_id, targetUser_id, text) => {
  return axios
  .post(url, {
    user_id,
    targetUser_id,
    text
  })
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}