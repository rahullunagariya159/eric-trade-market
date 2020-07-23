const iState = {
  name: "",
  email: "",
  mobile: "",
  dob: "",
  password: "",
  confpass: "",
  isReg: "",
  logemail: "",
  logpass: "",
  isLogin: "",
  forgotEmail: "",
  invalidEmail: "",
  loggedIn: false,
};

const authReducer = (state = iState, action) => {
  switch (action.type) {
    case "GET_FORM":
      //console.log(action.payload.val);
      //action.payload.name = action.payload.val;

      return {
        ...state,
        [action.payload.name]: action.payload.val,
      };

    case "REG_MSG":
      return {
        ...state,
        isReg: action.payload,
      };

    case "GET_LOGINFORM":
      return {
        ...state,
        [action.payload.name]: action.payload.val,
      };

    case "IS_LOGIN":
      //console.log(action.payload);
      return {
        ...state,
        isLogin: action.payload,
      };
    case "FORGOTEMAIL_INPUT":
      return {
        ...state,

        forgotEmail: action.payload,
      };
    case "INVALID_EMAIL":
      return {
        ...state,
        invalidEmail: action.payload,
      };
    case "CHANGE_LOGEDIN":
      console.log("chnage login stte" + action.payload);
      return {
        ...state,
        loggedIn: action.payload,
      };
    // case "IS_LOGGEDIN":
    //   console.log("is logginf : " + action.payload);
    //   return {
    //     ...state,
    //     loggedIn: action.payload
    //   };
    case "CHANGE_LOGOUT":
      return {
        ...state,
        loggedIn: action.payload,
      };
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

export default authReducer;
