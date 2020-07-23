const userState = {
  name: "karan",
  userProfileInfo: {},
  image: "",
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "GET_USER_PROFILE":
      //console.log(action.payload.val);
      //action.payload.name = action.payload.val;

      return {
        ...state,
        userProfileInfo: action.payload,
      };

    case "IMAGE":
      //console.log(action.payload.val);
      //action.payload.name = action.payload.val;

      return {
        ...state,
        image: action.payload,
      };

    case "ADD_USER":
      return {
        ...state,
        userInfo: action.payload
      }
    //   case "DELETE_WISH":
    //     const newWishes = state.mywishes.filter((item) => {
    //       return item._id !== action.payload._id;
    //     });
    //     return {
    //       ...state,
    //       mywishes: newWishes
    //     };
    default:
      return state;
  }
};

export default userReducer;
