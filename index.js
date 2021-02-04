/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      // seen: true,
      // todos: [{ text: "Learn JavaScript" }, { text: "Learn Vue" }, { text: "Build something awesome" }],
      name: "Vue.js",
    };
  },
  methods: {
    reverseMessage: function () {
      console.log("reverseMessage", this.message);
      this.message = this.message.split("").reverse().join("");
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
});
