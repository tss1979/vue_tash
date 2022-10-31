Vue.component('task-list', {
  props: ['tasks'],
  template: `
    <ul class="list">
      <li class="item" :class="{done: task.isDone}" v-for="task in tasks" :key="task.text">
        <input type="checkbox" v-model="task.isDone" >
        {{ task.text }}
        <like-button v-model="task.likes"></like-button><span style="padding-left:10px"></span>
        <dislike-button v-model="task.disLikes"/>
      </li>
    </ul> 
  `
});


Vue.component('like-button', {
  model: {
    prop: "counter",
    event: "counter-change"
  },
  props: ["counter"],
  methods: {
    increment(){
      this.$emit('counter-change', ++this.counter)
    }
  },
  template: `<button @click="increment" type="button">&#9829; {{ counter }}</button> `
});

Vue.component('dislike-button', {
  model: {
    prop: 'dislikeCounter',
    event: 'counter-change'
  },
  props: ["dislikeCounter"],
  methods: {
    increment(){
      this.$emit('counter-change', ++this.dislikeCounter)
    }
  },
  template: `<button @click="increment" type="button">&#128078; {{ dislikeCounter }}</button>`
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Enter your new task',
    headerLikes: 0,
    headerDisLikes: 0,
    formLikes: 0,
    formDisLikes: 0,
    listTitle: 'Main tasks',
    tasks: [
      {
        text:'Развернуть окружение в Codepen',
        isDone: true,
        class: 'item done',
        likes: 0,
        disLikes: 0,
      },
      {
        text:'Пройти курс по Vue',
        isDone: false,
        class: 'item',
        likes: 2,
        disLikes: 0,
      },
      {
        text:'Сделать интернет-магазин на Vue',
        isDone: false,
        class: 'item',
        likes: 3,
        disLikes: 0,
      },
    ]

  },
  methods: {
    addTask: function() {
      this.tasks.push({ text: this.message, isDone: false, likes: 0, disLikes: 0});
      this.message = '';
    },
  },
  computed: {
    count() {
      return this.tasks.filter(task => !task.isDone).length;
    },
    doneTasks() {
      return this.tasks.filter(task => task.isDone)
    },
    notDoneTasks() {
      return this.tasks.filter(task => !task.isDone)
    }, 
    totalLikes() {
      return this.headerLikes + this.formLikes + this.tasks.reduce((total, task) => total + task.likes, 0);
    },
    totalDisLikes() {
      return this.headerDisLikes + this.formDisLikes + this.tasks.reduce((total, task) => total + task.disLikes, 0);
    }
  }
});





