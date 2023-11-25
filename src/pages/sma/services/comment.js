import axios from "axios"

export const getAllComment = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export const createComment = (url, text, post_id, user_id) => {
  return axios
  .post(url, {
    text,
    post_id,
    user_id
  })
  .then(({ data }) => {
    console.log('data')
    console.log(data)
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export const deleteComment = (url) => {
  return axios
  .delete(url)
  .then(({ data }) => {
    console.log(data)
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}