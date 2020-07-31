<template>
  <div>
    <Title :text="`Aluno: ${student.name}`" />
    <table>
      <tbody>
        <tr>
          <td class="col-min">Matrícula</td>
          <td>
            <label>{{ student.id }}</label>
          </td>
        </tr>
        <tr>
          <td>Nome</td>
          <td>
            <label>{{ student.name }}</label>
            <input v-model="student.name" type="text" />
          </td>
        </tr>
        <tr>
          <td>Sobrenome</td>
          <td>
            <label>{{ student.lastname }}</label>
            <input v-model="student.lastname" type="text" />
          </td>
        </tr>
        <tr>
          <td>Data de Nascimento</td>
          <td>
            <label>{{ student.birthdate }}</label>
            <input v-model="student.birthdate" type="text" />
          </td>
        </tr>
        <tr>
          <td>Professor</td>
          <td>
            <label>{{ student.teacher.name }}</label>
            <input v-model="student.teacher.name" type="text" />
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
    };
  },
  created() {
    if (this.studentId) {
      this.$http
        .get("http://localhost:3000/students/" + this.studentId)
        .then((res) => res.json())
        .then((retunedStudent) => (this.student = retunedStudent));
    }
  },
  methods() {},
};
</script>

<style lang="scss" scoped></style>
