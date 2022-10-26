const app = new Vue({
  el: '#app',
  data: {
    message: 'Enter your new task',
    disabled: true,
    tasks: [
      {
        text:'Развернуть окружение в Codepen',
        checked: true,
        class: 'item done',
      },
      {
        text:'Пройти курс по Vue',
        checked: false,
        class: 'item',
      },
      {
        text:'Сделать интернет-магазин на Vue',
        checked: false,
        class: 'item',
      },
    ]

  }
})

