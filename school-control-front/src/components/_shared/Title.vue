<template>
    <div>
        <div class="mt-sm-4">
            <h2>{{ text }}</h2>
            <p>{{ description }}
            <div class="my-sm-4">
                <button v-show="backButton" @click="back()" class="btn btn-outline-dark mr-sm-3">Voltar</button>
                <slot></slot>
            </div>      
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            text: String,
            description: String,
            backButton: Boolean
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
</style>