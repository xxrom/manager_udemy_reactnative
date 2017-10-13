import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
  console.log('action');
  console.log(EMAIL_CHANGED);
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};


export const passwordChanged = (text) => {
  console.log('action');
  console.log(PASSWORD_CHANGED);
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
