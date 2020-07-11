<template>
  <div id="app">
    <Student />
  </div>
</template>

<script>
  import Student from "./components/Student/Students.vue";

  export default {
    name: "App",
    components: {
      Student,
    },
  };
</script>

<style>
  html,
  body,
  h1,
  table,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #eee;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  h1 {
    padding: 5px 0 25px;
  }

  #app {
    display: block;
    margin: 15px auto;
    width: 600px;
  }

  #app table {
    text-align: center;
    margin: 15px 0 0;
    width: 100%;
  }

  #app table th {
    background-color: #2c3e50;
    color: #fff;
  }

  #app table th,
  #app table td {
    border: 1px solid #2c3e50;
    padding: 5px 0;
  }
</style>
