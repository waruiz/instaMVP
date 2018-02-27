export const showFollowers = (followerList) => {
  console.log('You clicked show followers')
  return {
    type: 'SHOW_FOLLOWERS',
    payload: followerList // do we need payload?
  }
}