import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class HomeComponent extends Vue {

  mounted (){
    console.log('hello from app');
  }
  
}

