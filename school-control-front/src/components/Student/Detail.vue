<template>
  <div class="wrap container">
    <div class="row">
        <div class="col">
          <Title :text="`Aluno: ${student.name}`" :backButton="true">
            <button class="btn btn-dark">Editar</button>
          </Title>
        </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form">
          <div class="form-group">
            <label>Matrícula: </label>
            <span class="form-control">{{ student.id }}</span>
          </div>
          <div class="form-group">
            <label for="name">Nome: </label>
            <input v-model="student.name" type="text" id="name" class="form-control" />
          </div>
          <div class="form-group">
            <label for="lastname">Sobrenome: </label>
            <input v-model="student.lastname" type="text" id="lastname" class="form-control" />
          </div>
          <div class="form-group">
            <label for="birthdate">Data de Nascimento: </label>
            <input v-model="student.birthdate" type="text" id="birthdate" class="form-control" />
          </div>
          <div class="form-group">
            <label for="teacher">Professor: </label>
            <select v-model="student.teacher" id="teacher" class="form-control">
              <option v-for="(teacher, index) in teachers" :key="index" v-bind="teacher">
                {{ teacher.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col my-sm-4">
        <button class="btn btn-primary">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../_shared/Title";
export default {
  components: {
    Title,
  },
  data() {
    return {
      studentId: this.$route.params.student_id,
      student: {},
      teachers: {}
    };
  },
  created() {
    if (this.studentId) {
      this.$http
        .get("http://localhost:3000/students/" + this.studentId)
        .then((res) => res.json())
        .then(retunedStudent => this.student = retunedStudent);

      this.$http
        .get("http://localhost:3000/teachers")
        .then((res) => res.json())
        .then(returnedTeachers => this.teachers = returnedTeachers);
    }
  },
  methods() {},
};
</script>

<style scoped>
</style>
