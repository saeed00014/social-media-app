import axios from "axios"

export const getAllFriend = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export const getAllUserFollow = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
      return (
        data
      )
    })
    .catch((error) => {
      console.log(error)
    });
}

export const getOneFriend = (url) => {
  return axios
  .get(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export const createFriend = (url, user_id, friend_id) => {
  return axios
  .post(url, {
    user_id, 
    friend_id
  })
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export const deleteFriend = (url) => {
  return axios
  .delete(url)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}