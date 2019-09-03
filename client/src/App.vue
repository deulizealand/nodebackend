<template>
  <div id="app">
    <div id="nav">
      <ul v-for="persons in person" :key="persons.id">
        <li>
          <span>{{persons.first_name}}</span>
        </li>
        <li>
          <span>{{persons.last_name}}</span>
        </li>
      </ul>
  </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      person: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
      axios.get('http://localhost:3000/users').then(res=> {
        this.person = res.data.values
        console.log(res.data.values)
      }).catch ((err) => {
        console.log(err);
      })
    }
  }
}

</script>
