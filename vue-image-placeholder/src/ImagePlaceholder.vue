<template>
  <img :src = "url">
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {

  @Prop ({required: true})
  readonly width!: number;

  @Prop ({required: true})
  readonly height!: number;

  @Prop ({required: true, default: 'random'})
  readonly images!: string;

  get url(): string {
    // let height = this.height;
    // if (!this.height){
    //   height = this.width;
    // }
    return `https://loremflickr.com/${this.width}/${this.height || this.width}/${this.images}`;
  }
}
</script>

<style scoped>

</style>