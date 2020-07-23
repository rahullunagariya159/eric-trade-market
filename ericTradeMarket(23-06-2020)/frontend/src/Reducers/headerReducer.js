const headerState = {
  searchInfo: {},
  searchVal: "",
};

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case "SEARCH_INFO":
      return {
        ...state,
        searchInfo: action.payload,
      };
    case "SEARCH_VAL":
      return {
        ...state,
        searchVal: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
