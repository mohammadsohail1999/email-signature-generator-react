/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      return { ...state, ...action.payload };

    case "CLEAR_FIELDS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
