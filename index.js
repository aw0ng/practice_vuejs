var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    guess: "",
  },
  methods: {
    newGuess: function () {
      var guess = "newGuess";
      if (guess === 33) {
        console.log("YOU WIN!");
      }
    },
    reset: function () {
      console.log("reset");
    },
  },
});
