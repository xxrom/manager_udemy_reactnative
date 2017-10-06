import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
  console.log('action');
  console.log(EMAIL_CHANGED);
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};