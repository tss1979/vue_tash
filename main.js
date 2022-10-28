Vue.component('like-button', {
  data: function() {
    return {
      likes: 0,
    }
  },
  template: `<button @click="likes++" type="button">&#9829; {{likes}}</button> `
})

Vue.component('dislike-button', {
  data: function() {
    return {
      dislikes: 0,
    }
  },
  template: `<button @click="dislikes++" type="button">&#128078; {{ dislikes }}</button>`
})

const app = new Vue({
  el: '#app',
  data: {
    message: 'Enter your new task',
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
    }
  }
})

