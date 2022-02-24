import { UserActionTypes } from './User.action.types';

export const setUserAction = (user) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});