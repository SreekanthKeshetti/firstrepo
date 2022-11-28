const app = Vue.createApp({
  data() {
    return {
      sreekanthGoal: 'finish the course and learn Vue',
      vueLink: 'https://vuejs.org',
      greetOne: 'hi ',
      greetTwo: 'hello'
    }
  },
  methods: {
    outputGoal() {
      const randNum = Math.random();
      if (randNum < 0.5) {
        return this.greetOne
      } else {
        return this.greetTwo
      }
    }
  }

})
app.mount("#user-goal")