export const addComment = (content, submission_id) => {
  return {
    type: 'ADD_COMMENT',
    submission_id,
    content
  }
};

export const toggleLikeSubmission = submission_id => {
  return {
    type: 'TOGGLE_LIKE_SUBMISSION',
    submission_id
  }
};

export const addSubmission = (image_url, caption, user_id) => {
  return {
    type: 'ADD_SUBMISSION',
    user_id,
    image_url,
    caption
  }
};


export const acceptFollowerRequest = (host_id, follower_id) => {
  return {
    type: 'ADD_FOLLOWER',
    host_id,
    follower_id,
    pending: false
  }
};

export const denyFollowerRequest;

// LEFT OFF HERE
export const addSomeoneToFollow = () => {
  return {
    type: 'ADD_SOMEONE_TO_FOLLOW',
  }
};

export const navigateToUserProfile;

export const logout;