import axios from "axios";

const backend = "https://polygather.azurewebsites.net/";

// get all the users and return the data
// return the response from the backend
export async function getAllUsers() {
  try {
    const response = await axios.get(backend + "events");
    return response.data.users_list;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// take a user and add it to the backend
// return the response from the backend
export async function addUser(user) {
  try {
    const response = await axios.post(backend + "users", user);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// take a user as input and tell backend to delete it
// return the response from the backend
export async function deleteUser(user) {
  try {
    const response = await axios.delete(backend + "users/" + user._id);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// take the info that contains the login request and ask
// the backend to verify it.
// Return the user info upon successful, otherwise return false.
export async function login(reqInfo) {
  try {
    const response = await axios.post(backend + "login", reqInfo);
    if (response && response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
