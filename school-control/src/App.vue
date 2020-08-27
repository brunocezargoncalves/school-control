<template>
  <div id="app">
    <div id="wrapper" class="container-fluid container-md p-0">
      <Header />
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/_shared/Header";
  import TeacherList from "./components/Teacher/List";
  import StudentList from "./components/Student/List";
  import About from "./components/About/About";

  export default {
    name: "App",
    components: {
      /* eslint-disable vue/no-unused-components */      
      Header,
      StudentList,
      TeacherList,
      About
    }
  };
</script>

<style>
  #app {
    width: 100%;
  }
</style>
