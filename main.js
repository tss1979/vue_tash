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

