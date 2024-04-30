import { records } from "../actions/actionTypes";

const initialState = {
  weather: [],

};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case records.WEATHER_DATA:
      return { ...state, weather: action.payload };

    default:
      return state;
  }
}
