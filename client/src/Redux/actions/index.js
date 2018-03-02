export default {
  addComment: (content, submission_id) => {
    return {
      type: "ADD_COMMENT",
      submission_id,
      content
    };
  },

  toggleLikeSubmission: submission_id => {
    return {
      type: "TOGGLE_LIKE_SUBMISSION",
      submission_id
    };
  },

  addSubmission: (image_url, caption, user_id) => {
    return {
      type: "ADD_SUBMISSION",
      user_id,
      image_url,
      caption
    };
  },

  acceptFollowerRequest: (host_id, follower_id) => {
    return {
      type: "ADD_FOLLOWER",
      host_id,
      follower_id,
      pending: false
    };
  },

  // export const denyFollowerRequest;

  // LEFT OFF HERE
  addSomeoneToFollow: () => {
    return {
      type: "ADD_SOMEONE_TO_FOLLOW"
    };
  },

  // export const navigateToUserProfile;

  // export const logout;

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
  updateCurrUserLocal: (user) => (
    {
      type: 'UPDATE_CURR_USER_LOCAL',
      payload: user
    }
  )


};
