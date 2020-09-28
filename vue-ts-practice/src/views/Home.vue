<template>
  <div class="home">
    <p>{{greetText}}</p>
    <p>Count of greetings : {{count}}</p>
    <p v-if="isRegular">Thanks for your greetings!</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClicked" class="greeting-btn">Greetings</MyButton>
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import MyButton from "@/components/MyButton.vue";
import ResetButton from "@/components/ResetButton.vue"; // @ is an alias to /src

@Component({
  components: {
    ResetButton,
    MyButton
  },
})

export default class Home extends Vue {
  private count: number = 0;
  // private isRegular: boolean = false;
  public greetText: string = "Hello";

  public get isRegular(): boolean{
    // if (this.count === 5){
    //   alert("Became regular!");
    // }
    return this.count >= 5;
  }

  @Watch("Count")
  public countChanged(){
    if (this.count === 5){
      alert("Became regular!");
    }
  }

  public onMyButtonClicked(count: number){
    this.count = count;
    // if(this.count >= 5){
    //   this.isRegular = true;
    // }
    this.greetText = "Hola";
  }
}

</script>
