export const showFollowing = (followingList) => {
  console.log('You clicked show following')
  return {
    type: 'SHOW_FOLLOWING',
    payload: followingList // do we need payload?
  }
}