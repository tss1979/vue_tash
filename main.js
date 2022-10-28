Vue.component('task-list', {
  props: ['tasks'],
  template: `
    <ul class="list">
      <li class="item" :class="{done: task.isDone}" v-for="task in tasks" :key="task.text">
        <input type="checkbox" v-model="task.isDone" >
        {{ task.text }}
        <like-button></like-button><span style="padding-left:10px"></span>
        <dislike-button />
      </li>
    </ul> 
  `
});


Vue.component('like-button', {
  data: function() {
    return {
      likes: 0,
    }
  },
  template: `<button @click="likes++" type="button">&#9829; {{likes}}</button> `
});

Vue.component('dislike-button', {
  data: function() {
    return {
      dislikes: 0,
    }
  },
  template: `<button @click="dislikes++" type="button">&#128078; {{ dislikes }}</button>`
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Enter your new task',
    listTitle: 'Main tasks',
    tasks: [
      {
        text:'Развернуть окружение в Codepen',
        isDone: true,
        class: 'item done',
      },
      {
        text:'Пройти курс по Vue',
        isDone: false,
        class: 'item',
      },
      {
        text:'Сделать интернет-магазин на Vue',
        isDone: false,
        class: 'item',
      },
    ]

  },
  methods: {
    addTask: function() {
      this.tasks.push({ text: this.message, isDone: false});
      this.message = '';
    },
    count: function() {
      return this.tasks.filter(task => !task.isDone).length;
    },
    getDoneTasks: function() {
      return this.tasks.filter(task => task.isDone)
    },
    getNotDoneTasks: function() {
      return this.tasks.filter(task => !task.isDone)
    }
  }
});





