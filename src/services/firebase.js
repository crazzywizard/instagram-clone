/* eslint-disable import/prefer-default-export */
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
