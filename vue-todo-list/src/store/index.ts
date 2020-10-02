import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {Result} from "@/store/result";
import {Task} from "@/models/task.model";

Vue.use(Vuex)

const store: StoreOptions<Result<Task[]>> = {
  state: {
    success: true,
    message: undefined,
    errorCode: 200,
    version: '1.0.0',
    data: new Array<Task>(),
  },
  mutations: {
    addTask(state, task: Task) {
      state.data.push(task)
    },
    editTask(state, task: Task) {
      let taskIndex: number = state.data.findIndex(t => t.id == task.id)
      state.data[taskIndex] = task;
    },
    removeTask(state, task: Task) {}
    let taskIndex: number = state.data.findIndex
  },
  actions: {
  },
  getters: {
  }
}

export default new Vuex.Store(store)
