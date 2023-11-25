import axios from "axios";

export const signup = (url, firstName, lastName, email, username, days, mounths, years, gender, password) => {
  return axios
    .post(url, {
      firstName,
      lastName,
      email, 
      username,
      days, 
      mounths, 
      years, 
      gender, 
      password
    })
    .then(({ data }) => {
      return (
        data
        )
      })
      .catch((error) => {
        console.error(error)
      });
    }
    
    export const login = (url, email, password) => {
      return axios
      .post(url, {
        email,
        password
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
    
    export const logout = (url) => {
      return axios
      .delete(url)
      .then(({ data }) => {
        return (
        data
      )
    })
    .catch((error) => {
      console.log(error)
    });
}

export const getAllUser = (url) => {
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

export const getFillterUser = (url) => {
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

export const getAllunfriendUser = (url) => {
  return axios
    .get(url)
    .then(({ data }) => {
      console.log(data)
      return (
        data
      )
    })
    .catch((error) => {
      console.log(error)
    });
}

export const getTargetUser = (url) => {
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

export const validateToken = (url, accessToken) => {
  return axios
    .post(url, {
      accessToken
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

export const avatarUser = (url, image) => {
  return axios
    .put(url, {
      image
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


