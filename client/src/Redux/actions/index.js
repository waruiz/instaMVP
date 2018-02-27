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

export const addFollower;

export const acceptFollowerRequest;

export const denyFollowerRequest;

export const navigateToUserProfile;

export const logout;