export default {
  
  addSomeoneToFollow: () => {
    return {
      type: "ADD_SOMEONE_TO_FOLLOW"
    };
  },

  updateTimeline: submissions => ({
    type: "UPDATE_TIMELINE",
    payload: submissions
  }),

  updateUserPosts: posts => ({
    type: "UPDATE_USER_POSTS",
    payload: posts
  }),

  updatePostComments: comments => ({
    type: "UPDATE_POST_COMMENTS",
    payload: comments
  }),

  updateAddState: (image_url, caption) => ({
    type: "UPDATE_ADD_STATE",
    payload: { image_url: image_url, caption: caption }
  }),

  updateFollowers: followers => ({
    type: "UPDATE_FOLLOWERS",
    payload: followers
  }),

  updateFollowing: following => ({
    type: "UPDATE_FOLLOWING",
    payload: following
  }),

  updateUserInfo: (about) => (
    {
      type: 'UPDATE_USER_INFO',
      payload: about
    }
  ),

  updateAddRequestState: (username) => (
    {
      type: 'UPDATE_ADD_REQUEST_STATE',
      payload: {
        username : username
      }
    }
  ),

  updateCurrUser: (user) => (
    {
      type: 'UPDATE_CURR_USER',
      payload: user
    }
  ),

  updateAddLikeState: (likes) => (
    {
      type: 'UPDATE_ADD_LIKE_STATE',
      payload: likes
    }
  ),

  updateCurrUserInfo: userInfo => (
    {
      type: 'UPDATE_CURR_USER_INFO',
      payload: userInfo
    }
  )

};
