import { getAllDogList, getDogImage } from "../service/dogApi.service.js";

const state = {
  dogBreedList: {},
  dogBreedObject: [],
  dogBreedNameAndImage: [],
};
const mutations = {
  setBreedList(state, dogBreedList) {
    state.dogBreedList = dogBreedList;
  },
  setBreedObject(state, dogBreedObj) {
    state.dogBreedObject = dogBreedObj;
  },
  setDogBreedNameAndImage(state, dogBreed) {
    state.dogBreedNameAndImage = dogBreed;
  },
};
const actions = {
  async getAllBreedObject(state) {
    let dogBreedListResult = await getAllDogList();
    let dogBreedObj = dogBreedListResult.data["message"];
    state.commit("setBreedObject", dogBreedObj);
  },
  async getAllBreedList(state) {
    let respose = await getAllDogList();
    state.commit("setBreedList", Object.keys(respose.data.message));
  },
  async getAllBreedAndImage(state) {
    let dogBreed = [];
    let breed = { breedName: "", breedImage: "" };
    let respose = await getAllDogList();
    let breedlist = Object.keys(respose.data.message);
    for (let index = 0; index < breedlist.length; index++) {
      let image = await getDogImage(breedlist[index]).then((res) => {
        return res.data.message;
      });
      breed = { breedName: breedlist[index], breedImage: image };
      dogBreed.push(breed);
    }
    state.commit("setDogBreedNameAndImage", dogBreed);
  },
};
export default {
  state,
  actions,
  mutations,
};
