import swal from "sweetalert";
import axios from "axios";

export const getUserProfileInfo = () => {
  return async (dispatch) => {
    // console.log("getProfile info");

    const result = await fetch(
      `${process.env.REACT_APP_API_URL}viewProfile?userId=5eda799e1074640854c85c1b`
    );
    const resultData = result.json();

    resultData
      .then((data) => {
        //console.log("data.. ", data.data);
        if (data.code == 200) {
          dispatch({ type: "GET_USER_PROFILE", payload: data.data });
          //   this.state.userInfo = data.data;
          //   this.state.firstName = data.data.firstName;
        }
      })
      .catch((err) => {
        console.log("err... ", err);
      });
    // let name = event.target.name;
    // let val = event.target.value;
    // let formValue = { name: name, val: val };
    // dispatch({ type: "GET_FORM", payload: formValue });
  };
};

const checkMimeType = (event) => {
  // gettting file object
  let files = event.target.files;

  // define message container

  let err = "";

  //list allow mime type

  const types = ["image/png", "image/jpeg", "image/gif"];

  // loop access array
  for (let x = 0; x < files.length; x++) {
    // compare file type doesn't match

    if (types.every((type) => files[x].type !== type))
      // create err msg and assign to container
      err += files[x].type + " is not supported formate \n\n  ";
    // Assign msg to error
  }

  if (err !== "") {
    // if message is not same old massage that mean has error

    event.target.value = null;

    //console.log(err);

    return false;
  }

  // for (let z = 0; z < err.length; z++) {
  //   // Loop created toast msg
  //   console.log(err);
  //   this.setState({ chkMimeType: err });
  //   event.target.value = null;
  //   //toast.error(err[z]);
  // }

  return true;
};

export const onImageChange = (event) => {
  return async (dispatch) => {
    if (event.target.files && event.target.files[0]) {
      //checkMimeType(event);

      if (checkMimeType(event)) {
        let fileInfo = event.target.files[0];
        let imageData = new FormData();
        const userId = "5eda799e1074640854c85c1b";
        imageData.append("profilePic", fileInfo);
        imageData.append("userId", userId);
        const headers = {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRhMjZhMThlZmVjMjE3ZmM5ZjVhODkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDRaYWZacEFBb2hBMzNkLkFydXd5UmV3ODZJUnpyQUFhUzNPTUJjVk9PSzZvem9QV1FnSGQ2IiwiaWF0IjoxNTkyMzc4NTc5fQ.BopgLeRSzWkaeD2uZqOqVJnxWX7c872mtl-0tcYWxao",
        };

        let reader = new FileReader();

        reader.onload = (e) => {
          dispatch({
            type: "IMAGE",
            payload: e.target.result,
          });

          const imageUrlInfo = { profilePic: e.target.result, userId: userId };
          fetch(`${process.env.REACT_APP_API_URL}editProfileImg`, {
            method: "post",
            body: JSON.stringify(imageUrlInfo),
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => res.json())
            .then((messages) => {
              console.log(messages.code);
              console.log(messages);
              if (messages.code === 200) {
                swal("Success!", "Image Updated successfully", "success");
              } else {
                swal(
                  "Error!",
                  "Some thing want wrong,Please try again!",
                  "success"
                );
              }
            });

        };
        reader.readAsDataURL(event.target.files[0]);
      } else {
        swal(
          "Info!",
          "Please upload only png,jpeg,jpg formate image and image size should be less then 60KB",
          "info"
        );
      }
    }
  };
};

export const addUser = (data) => {
  return async (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}api/addNewUser`, {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUwZDNjMTAwYWQwNzE1YjAwOTg2NjciLCJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkV09YTkxtSktLS09ONWZuR1B2MnNmTzk5ZjZ6Uy5IUkw2YWxyc2MyaFEuU0d0cWpWMUQvTm0iLCJpYXQiOjE1OTI0Nzk2MTV9.d19ohyjKajPresIyh8pm1PLnmVPfq3MBBMVT2asrbj0"        
      },
    })
    .then((res) => {
        let result = res.json();
        result.then((resultData) => {
            if(resultData.code == 200) {
                swal("Success!", "user created successfully", "success");
            } else {
              swal(
                "Error!",
                "Some thing went wrong,Please try again!",
                "success"
              );
            }
        })
        .catch((error) => {
            console.log('error ', error);
            swal(
                "Error!",
                "Some thing went wrong,Please try again!",
                "success"
              );
        })
    })
    .catch((error) => {
        console.log('error ', error);
        swal(
            "Error!",
            "Some thing went wrong,Please try again!",
            "success"
          );
    });
  }
}