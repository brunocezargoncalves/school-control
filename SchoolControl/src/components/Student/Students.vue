<template>
  <div>

    <Title text="Alunos" />
    
    <div>
      <input type="text" placeholder="Nome" v-model="name" v-on:keyup.enter="add()" />
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
          <!-- <td>{{ index + 1 }}</td> -->
          <td>{{ student.name }}</td>
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

  import Title from '../_shared/Title';

  export default {
    components: {
      Title
    },
    data() {
      return {
        Title: "Students",
        name: "",
        students: [
        ],
      };
    },
    created() {
      this.$http
      .get('http://localhost:3000/students')
      .then(res => res.json())
      .then(students => this.students = students)
    },
    props: {},
    methods: {
      add() {
        let _student = {
          name: this.name,
          lastname: ''
        };        

      this.$http
      .post('http://localhost:3000/students', _student)
      .then(res => res.json())
      .then(studentReturned => {
        this.students.push(studentReturned);
        this.name = "";
      })

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
        })        
      },
    },
  };
</script>

<style scoped>

</style>
