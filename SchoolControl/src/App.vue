<template>
  <div id="app">
    <div id="wrapper">
      <Nav />
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
  import Nav from "./components/_nav/Nav";
  import TeacherList from "./components/Teacher/List";
  import StudentList from "./components/Student/List";
  import About from "./components/About/About";

  export default {
    name: "App",
    components: {
      /* eslint-disable vue/no-unused-components */      
      Nav,
      StudentList,
      TeacherList,
      About
    }
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
    width: 100%;
  }

  #app #wrapper {
    display: block;
    margin: 15px auto;
    width: 600px;
  }

  #app #wrapper table {
    text-align: center;
    margin: 15px 0 0;
    width: 100%;
  }

  #app #wrapper table th {
    background-color: #2c3e50;
    color: #fff;
  }

  #app #wrapper table th,
  #app #wrapper table td {
    border: 1px solid #2c3e50;
    padding: 5px 0;
  }

  .clear {
    clear: both;
  }

  .col-min {
    width: 5%;
  }
</style>
