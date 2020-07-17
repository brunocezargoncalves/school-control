<template>
  <div>
      <title :text="`Aluno: ${ student.name }`">
  </div>
</template>

<script>
import Title from '../_shared/Title'
export default {
    components: {
        Title
    },
    data(){
        return {
            student: {

            }
        }
    },
    methods(){

    }
};
</script>

<style lang="scss" scoped></style>
