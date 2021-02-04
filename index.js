/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      newTodo: "",
      todos: ["mow the lawn", "feed the dog", "take out trash"],
    };
  },
  methods: {
    addTodo: function () {
      console.log(this.newTodo);
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
  },
});
