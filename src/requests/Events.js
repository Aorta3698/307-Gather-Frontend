import axios from "axios";

const backend = "https://polygather.azurewebsites.net/";
// const backend = "http://localhost:5000/";

// get all the events and return the data
// return the response from the backend
export async function getAllEvents() {
  try {
    const response = await axios.get(backend + "events");
    return response.data.event_list;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// take an event and add it to the backend
// return the response from the backend
export async function addEvent(event) {
  try {
    const response = await axios.post(backend + "events", event);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// take an event as input and tell backend to delete it
// return the response from the backend
export async function deleteEvent(event) {
  try {
    const response = await axios.delete(backend + "events/" + event._id);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
}
