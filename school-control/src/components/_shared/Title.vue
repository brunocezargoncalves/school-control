<template>
    <div>
        <div class="title">
            <div class="actions">
                <slot></slot>
                <button v-show="btnBack" @click="back()" class="btn btn-dark">Voltar</button>
            </div>
            <h2>{{ text }}</h2>        
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            text: String,
            btnBack: Boolean
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
.title {
    margin-top: 25px;
}
</style>