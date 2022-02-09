<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>hola mundo</h1>
    <button @click="dayBook" class="btn btn-primary" >primary</button>
    <button @click="dayBook" class="btn btn-secondary" >secondary</button>
    <button @click="dayBook" class="btn btn-success" >success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
    dayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
