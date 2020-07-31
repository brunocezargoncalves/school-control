<template>
  <div>
    <nav>
      <router-link to="/students/" class="first">Alunos</router-link>
      <router-link to="/teachers/">Professores</router-link>
      <router-link to="/about/">Sobre</router-link>
    </nav>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  nav {
    min-height: 25px;
    margin: 10px 0 25px;
  }

  nav a {
    background: #e1e1e1;
    border: 2px solid #999;
    border-top: 0;
    border-left: 0;
    color: #2c3e50;
    display: block;
    float: left;
    font-size: 1.2em;
    font-weight: bold;
    margin: 0 10px 0;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
  }

  nav a:hover {
    border: 1px solid #999;
    border-top: 0;
    border-left: 0;
  }

  nav a:active {
    border: 0;
  }

  nav a.first {
    margin-left: 0;
  }

   nav a.router-link-active {
     background: #666;
     border-color: #333;
     color: #fff;
   }
</style>
