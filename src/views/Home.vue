<template>
  <div class="home">
    <div v-for="dog in $store.state.dogBreedNameAndImage" :key="dog.breedName">
      <div class="cardbody">
        <b-card
          :title="dog.breedName"
          :img-src="dog.breedImage"
          img-alt="Image"
          img-height="200"
          img-width="200"
          object-fit="cover"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-button @click="searchData(dog.breedName)" variant="primary">
            Get More image
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  beforeCreate(){
    this.$store.dispatch("getAllBreedAndImage");
    this.$store.dispatch("getAllBreedObject");
    this.$store.dispatch("getAllBreedList")

  }

};
</script>
<style scoped>
.cardbody {
  width: 300px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin: 50px;
  float: left;
  height: 300px;
}
</style>