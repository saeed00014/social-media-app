import axios from "axios"

export const getAllLike = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  });
}

export const createLike = (url, post_id, user_id) => {
  return axios
  .post(url, {
    post_id,
    user_id
  })
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  });
}

export const deleteLike = (url) => {
  return axios
  .delete(url)
  .then(({ data }) => {
    console.log(data)
    return data
  })
  .catch((error) => {
    console.log(error)
  });
}