<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.title"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="currentTutorial.description"/>
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.publish ? "Publish" : "Pending "}}
      </div>
    </form>

    <button class="badge badge-primary mr-2" @click="updatePublished(true)">Publish</button>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">Delete</button>

    <button type="submit" class="badge badge-success" @click="updateTutorial">Update</button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import TutorialDataService from "../services/TutorialDataService";

@Component
export default class Tutorial extends Vue {
  private currentTutorial: any = null;
  private message: string = "";

  getTutorial(id: string) {
    TutorialDataService.get(id)
        .then((response) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        }).catch((e) => {
      console.log(e);
    });
  }

  updatePublished(status: boolean) {
    const data = {
      id: this.currentTutorial.id,
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status,
    };

    TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  updateTutorial(){
    TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then((response) => {
          console.log(response.data);
          this.message = "The tutorial was update successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.currentTutorial.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" })
        })
        .catch((e) => {
          console.log(e);
        });
  }

  mounted() {
    this.message = "";
    this.getTutorial(this.$router.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>