import axios from "axios";

const backend = "https://polygather.azurewebsites.net/";
// const backend = "http://localhost:5000/";

async function makeAccountPostCall(person) {
  try {
    const response = await axios.post(backend + "users", person);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function addAccount(person) {
  makeAccountPostCall(person).then((result) => {
    if (result && result.status === 201) {
      return result.data;
    } else {
      return false;
    }
  });
}

async function makeLoginPostCall(person) {
  try {
    const response = await axios.post(backend + "login", person);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function checkCredentials(props) {
  makeLoginPostCall(props.person).then((result) => {
    if (result && result.status === 200) {
      props.setPerson({
        ...props.person,
        password: "",
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        bio: result.data.bio,
        isLogin: true,
      });
      return result.data;
    } else {
      console.log("login failed.");
      return false;
    }
  });
}
