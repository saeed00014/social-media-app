import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home/Home"
import ProfilePage from "./pages/profile/Profile"
import ChatPage from "./pages/chat/Chat"
import Header from "./components/Header"

import LoginContainer from "./pages/login/LoginContainer"
import GuestLayout from "./components/GuestLayout"
import SignupContainer from "./pages/login/SignupContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setAllLoginUser, setAllOnlineFriends, setAllPost, setAllSuggestedFriends, setToken } from "./store/UiSlice"
import { getAllPost } from "./services/post"
import { getAllUser, validateToken } from "./services/user"
import { getAllFriend } from "./services/friend"
import Resume from "./resume"

function AppSma() {
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const accessToken = ui.token
  const loginUser = ui.loginUser
  
    useEffect(() => {
      const url = 'http://127.0.0.1:8000/api/auth/vt'
      async function validateTokenFunc() {
        const result = await validateToken(url, accessToken)
        if(result == 'wrong username or password') {
          dispatch(setToken(''))
          location.reload()
        }
        if(result && result !== 'wrong username or password') {
          dispatch(setToken(result))
        }
      }
      validateTokenFunc()
    }, [accessToken])

  useEffect(() => {
    async function getAllUsersFunc() {
      const allLoginUser = await getAllUser('http://127.0.0.1:8000/api/users')
      if(allLoginUser) {
        dispatch(setAllLoginUser(allLoginUser))
        dispatch(setAllSuggestedFriends(allLoginUser))
      }
    }
    getAllUsersFunc()
  }, [])
  
  useEffect(() => {
    async function getAllOnlineFriendsFunc() {
      const url = `http://127.0.0.1:8000/api/friends/${loginUser[0] && loginUser[0].id}`
      const allOnlineFriends = loginUser[0] && await getAllFriend(url)
      console.log(allOnlineFriends)
      if(allOnlineFriends) {
        dispatch(setAllOnlineFriends(allOnlineFriends))
      }
    }
    getAllOnlineFriendsFunc()
  }, [loginUser[0]])

  useEffect(() => {
    async function allPost() {
      const allPost = await getAllPost('http://127.0.0.1:8000/api/posts')
      dispatch(setAllPost(allPost))
    }
    allPost()
  }, [])

  return (
    <BrowserRouter>
    <div  style={{direction: 'rtl'}} className="">
      {accessToken !== '' && <Header />}
      <Routes>
        {accessToken == '' ? <>
          <Route path="sma/*" element={<LoginContainer />} />
          <Route path="sma/resume" element={<Resume />} />
        </>  :  <>
          <Route path="sma/" element={<HomePage />} />
          <Route path="sma/profile/*" element={<ProfilePage />} />
          <Route path="sma/chat/*" element={<ChatPage />} />
          <Route path="sma/login" element={<LoginContainer />} />
          <Route path="sma/signup" element={<SignupContainer />} />
        </>  
        }
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default AppSma
