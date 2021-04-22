/* eslint-disable import/prefer-default-export */
import user from '../components/sidebar/user';
import { firebase, FieldValue, db } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await db.collection('users').where('username', '==', username).get();
  return result.size > 0;
}

export async function getUserByUserId(userId) {
  const result = await db.collection('users').where('userId', '==', userId).get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));
  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await db.collection('users').limit(10).get();
  console.log(result);
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}
