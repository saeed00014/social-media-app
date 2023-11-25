import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem('token') ? 
    localStorage.getItem('token') : '',
  loginUser: localStorage.getItem('user') ? 
  JSON.parse(localStorage.getItem('user')) : '',
  targetUser: '',
  isMyProfile: false,
  allLoginUsers: [],
  allMessages: [],
  allPosts: [],
  allUserAddedPost: [],
  alltargetUserPosts: [],
  myOnlineFriends: [],
  allSuggestedFriends: [],
  allPostComments: []
}

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setToken(state, action) {
      const newLogin = action.payload
      
      newLogin && newLogin.user ? localStorage.setItem('user', JSON.stringify
      ([newLogin.user])) : localStorage.setItem('user', JSON.stringify([]))
      
      newLogin && newLogin.token ? localStorage.setItem('token', newLogin.token) :  localStorage.setItem('token', '')
    },
    setTargetUser(state, action) {
      const targetUser = action.payload
      state.targetUser = targetUser
      if(targetUser[0] && state.loginUser[0].id == targetUser[0].id) {
        state.isMyProfile = true
      }
    },
    setAllLoginUser(state, action) {
      const allNewLoginUsers = action.payload
      state.allLoginUsers = allNewLoginUsers
    },
    setAllOnlineFriends(state, action) {
      const allMyOnlineFriends = action.payload

      const makeData = () => {
        state.myOnlineFriends = []
        allMyOnlineFriends[0] && allMyOnlineFriends.forEach(friend => {
          const friendData = state.allLoginUsers.find((user) => user.id == friend.friend_id)
          state.myOnlineFriends.push(friendData)
        });
      }
      makeData()
    },
    setAllSuggestedFriends(state, action) {
      const allSuggestedFriends = action.payload
      state.allSuggestedFriends = allSuggestedFriends
        
      // state.myOnlineFriends.map((friend) => friend.id).forEach(friend => {
      //   state.allSuggestedFriends = 
      //     state.allSuggestedFriends.filter((friend2) => 
      //       friend2.id !== friend
      //   )
      // })
    },
    setSelfMessage(state, action) {
      const newMessage = action.payload
      state.allMessages.push(newMessage)
    },
    setAllMessage(state, action) {
      const allChat = action.payload
      state.allMessages = allChat
    },
    setAllPost(state, action) {
      const allPost = action.payload
      state.allPosts = allPost
    },
    setAllUserAddedPost(state, action) {
      const allUserAddedPost = action.payload
      state.allUserAddedPost.push(allUserAddedPost)
    },
    setAllTargetUserPost(state, action) {
      const allTargetUserPosts = action.payload
      state.alltargetUserPosts = allTargetUserPosts
    },
    setOneTargetUserPost(state, action) {
      const oneTargetUserPost = action.payload
      state.alltargetUserPosts.push(oneTargetUserPost[0])
    },
    DeletePost(state, action) {
      const targetPost = action.payload
      state.allPosts = 
        state.allPosts.filter((post) => targetPost.id !== post.id)
      state.alltargetUserPosts = 
        state.alltargetUserPosts.filter((post) => targetPost.id !== post.id)
    },
    setAllComment(state, action) {
      const allComment = action.payload
      state.allPostComments = allComment
    },
    setSelfComment(state, action) {
      const newComment = action.payload
      state.allPostComments.push(newComment[0])
    }
  }
})

export const { setToken, setTargetUser, setAllLoginUser, setAllOnlineFriends, setAllSuggestedFriends,  handleSelfChat, setAllMessage, setSelfMessage, setAllPost, setAllUserAddedPost, setAllTargetUserPost, setOneTargetUserPost, DeletePost, handleLikeCount, setAllLike, setSelfLike, setAllComment, setSelfComment } = UiSlice.actions;

export default UiSlice