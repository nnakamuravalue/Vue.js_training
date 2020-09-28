<template>
  <div class="home">
    <MyButton greet="Hello"></MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';
import MyButton from "@/components/MyButton.vue"; // @ is an alias to /src

@Component({
  components: {
    MyButton
  },
})
export default class Home extends Vue {
  public greetText: string = "Hello";
}

</script>
