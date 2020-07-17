<template>
  <div>
    <Title
      :text="
        'Alunos' +
          (teacherId != undefined ? ' do professor: ' + teacher.name : '')
      "
    />

    <div v-if="teacherId">
      <input
        type="text"
        placeholder="Nome do aluno"
        v-model="name"
        v-on:keyup.enter="add()"
      />
      <button @click="add()">Adicionar</button>
    </div>

    <table cellspacing="0" cellpadding="0">
      <thead>
        <th>Matrícula</th>
        <th>Nome</th>
        <th>Ações</th>
      </thead>
      <tbody v-if="students.length">
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.id }}</td>
          <router-link :to="`./studant/detail/${ student.id }`" tag="td" style="cursor: pointer;"
            >{{ student.name }} {{ studant.lastname }}</router-link
          >
          <td>
            <button @click="remove(student)">Remover</button>
          </td>
        </tr>
      </tbody>
      <tbody v-if="!students.length">
        Nenhum aluno encontrado!
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
      teacherId: this.$route.params.teacher_id,
      teacher: {},
      name: "",
      students: [],
    };
  },
  created() {
    if (this.teacherId) {
      this.getTeachers();
      this.$http
        .get("http://localhost:3000/students?teacher.id=" + this.teacherId)
        .then((res) => res.json())
        .then((retunedStudents) => (this.students = retunedStudents));
    } else {
      this.$http
        .get("http://localhost:3000/students")
        .then((res) => res.json())
        .then((retunedStudents) => (this.students = retunedStudents));
    }
  },
  props: {},
  methods: {
    add() {
      let _student = {
        name: this.name,
        lastname: "",
        teacher: {
          id: this.teacher.id,
        },
      };

      this.$http
        .post("http://localhost:3000/students", _student)
        .then((res) => res.json())
        .then((retunedStudent) => {
          this.students.push(retunedStudent);
          this.name = "";
        });

      // console.log("-----------");
      // this.students.forEach(student => {
      //   console.log(student);
      // });
    },
    remove(student) {
      this.$http
        .delete(`http://localhost:3000/students/${student.id}`)
        .then(() => {
          let _index = this.students.indexOf(student);
          this.students.splice(_index, 1);
        });
    },
    getTeachers() {
      this.$http
        .get("http://localhost:3000/teachers/" + this.teacherId)
        .then((res) => res.json())
        .then((returnedTeacher) => {
          this.teacher = returnedTeacher;
        });
    },
  },
};
</script>

<style scoped></style>
