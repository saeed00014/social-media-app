import axios from "axios"

export const createPost = (url, user_id, text, imageAdrress, like) => {
  console.log(imageAdrress)
  return axios
  .post(url, {
    user_id,
    text,
    imageAdrress,
    like
  })
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  });
}

export const createPostMedia = (url2, fd) => {
  return axios
  .post(url2, fd)
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  });
}

export const getAllPost = (url) => {
  return axios
  .get(url)
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getAllTargetUserPost = (url) => {
  return axios
  .get(url)
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deletePost = (url) => {
  return axios
  .delete(url)
    .then(({ data }) => {
    return data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const updateCard = (url, user_id, text, like) => {
  return axios
  .put(url, {
    user_id,
    text,
    like
  })
  .then(({ data }) => {
    return data.posts
  })
  .catch((error) => {
    console.log(error)
  });
}
