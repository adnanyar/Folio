// actions.js
import { INCREMENT } from './actionTypes';

export const incrementAction = (data) => ({
  type: INCREMENT,
  data:data
});

// Define other action creator functions as needed   