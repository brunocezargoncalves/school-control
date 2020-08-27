<template>
  <div class="wrap container">
    <div class="row">
      <div class="col">
        <Title text="Professores" />
        <p>Lista de professores</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Quant. Alunos</th>
            <th>Ações</th>
          </thead>
          <tbody v-if="teachers.length">
            <tr v-for="(teacher, index) in teachers" :key="index">
              <td>{{ teacher.id }}</td>
              <router-link
                :to="`../students/teacher/${ teacher.id }`"
                tag="td"
                style="cursor: pointer;"
              >
                {{ teacher.name }} {{ teacher.lastname }}
              </router-link>
              <td>
                {{ teacher.numberOfStudents }}
              </td>
              <td>
                <button @click="remove(teacher)" class="btn btn-dark">Remover</button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="!teachers.length">
            Nenhum professor encontrado!
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Adicionar</h3>
        <p>Adicionar novo professor</p>
        <div class="form-group">
          <input v-model="name" v-on:keyup.enter="add()" type="text" placeholder="Nome do professor" class="form-control" />
          <button @click="add()" class="btn btn-dark">Adicionar</button>
        </div>
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
      name: "",
      teachers: [],
      students: [],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/students")
      .then((res) => res.json())
      .then((returnedStudents) => {
        this.students = returnedStudents;
        this.getTeachers();
      });
  },
  props: {},
  methods: {
    add() {
      let _teacher = {
        name: this.name,
        lastname: "",
      };

      this.$http
        .post("http://localhost:3000/teachers", _teacher)
        .then((res) => res.json())
        .then((returnedTeacher) => {
          this.teachers.push(returnedTeacher);
          this.name = "";
        });
    },
    remove(teacher) {
      this.$http
        .delete(`http://localhost:3000/teachers/${teacher.id}`)
        .then(() => {
          let _index = this.teachers.indexOf(teacher);
          this.teachers.splice(_index, 1);
        });
    },
    countStudents() {
      this.teachers.forEach((teacher, index) => {
        teacher = {
          id: teacher.id,
          name: teacher.name,
          numberOfStudents: this.students.filter(
            (student) => student.teacher.id == teacher.id
          ).length,
        };
        this.teachers[index] = teacher;
      });
    },
    getTeachers() {
      this.$http
        .get("http://localhost:3000/teachers")
        .then((res) => res.json())
        .then((returnedTeachers) => {
          this.teachers = returnedTeachers;
          this.countStudents();
        });
    },
  },
};
</script>

<style scoped></style>
