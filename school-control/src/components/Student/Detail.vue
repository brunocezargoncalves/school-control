<template>
  <div class="wrap container">
    <div class="row">
        <div class="col">
          <Title :text="`Aluno: ${student.name}`" :btnBack="true">
            <button class="btn btn-dark">Editar</button>
          </Title>
        </div>
    </div>
    <table>
      <tbody>
        <tr>
          <td class="col-min">Matrícula</td>
          <td>
            <label>{{ student.id }}</label>
          </td>
        </tr>
        <tr>
          <td class="col-min">Nome</td>
          <td>
            <label>{{ student.name }}</label>
            <input v-model="student.name" type="text" />
          </td>
        </tr>
        <tr>
          <td class="col-min">Sobrenome</td>
          <td>
            <label>{{ student.lastname }}</label>
            <input v-model="student.lastname" type="text" />
          </td>
        </tr>
        <tr>
          <td class="col-min">Data de Nascimento</td>
          <td>
            <label>{{ student.birthdate }}</label>
            <input v-model="student.birthdate" type="text" />
          </td>
        </tr>
        <tr>
          <td class="col-min">Professor</td>
          <td>
            <label>{{ student.teacher.name }}</label>
            <select v-model="student.teacher">
              <option v-for="(teacher, index) in teachers" :key="index" v-bind="teacher">
                {{teacher.name}}
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
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
