<template>
  <div>
    <div class="jumbotron text-center" style="margin-bottom:0">
      <h1>Controle de Colégios</h1>
      <p>Sistema para gestão de alunos e professores</p>
    </div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">Acessos</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/students/" class="nav-link">Alunos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teachers/" class="nav-link">Professores</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about/" class="nav-link">Sobre</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
