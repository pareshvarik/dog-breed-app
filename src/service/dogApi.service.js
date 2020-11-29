import axios from "axios";

//method to get the Dog List
export function getAllDogList() {
  return axios.get("https://dog.ceo/api/breeds/list/all");
}

//method to get the  dog image random (one image particular breed)
export function getDogImage(dogname) {
  return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`);
}

//method to get random dog image mixed breed
export function getDogRandomImage() {
  return axios.get(`https://dog.ceo/api/breeds/image/random/48`);
}

//method to get all the bread image of particular dog with sub breed
export function getAllDogImage(dogname, subbreedname) {
  if (subbreedname == undefined) {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images`);
  } else {
    return axios.get(
      `https://dog.ceo/api/breed/${dogname}/${subbreedname}/images`
    );
  }
}
