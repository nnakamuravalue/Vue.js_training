<template>
  <div class="home">
    <p>{{greetText}}</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
    </p>
    <p>
      <ResetButton initialValue="Hello" v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyButton from "@/components/MyButton.vue";
import ResetButton from "@/components/ResetButton.vue"; // @ is an alias to /src

@Component({
  components: {
    ResetButton,
    MyButton
  },
})
export default class Home extends Vue {
  public greetText: string = "Hello";

  public onMyButtonClicked(){
    this.greetText = "Hola";
  }
}

</script>
