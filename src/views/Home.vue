<template>
<div>
        <div>
            <div id="title">
                <h1 class="display-2">
                    Home
                </h1>
            </div>
            <div id="content">
                <p>
                    Não deixe suas ideias escaparem, Aqui você pode criar e gerenciar suas anotações de forma rápida e descomplicada
                    tornando assim a tarefa de fazer anotações mais fácil, rápida e eficiente do que nunca. Sua vida organizada está apenas a um toque de distância!
                </p>
                <router-link
                id="linkToNewNote"
                class="btn btn-primary"
                to="/newnote">
                Nova anotação
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Home',
    components:{
    }
}
</script>

<style scoped>
    #title{
        margin: 0 auto;
        margin-left: 3rem;
        margin-top: 20px;
    }
    #content{
        margin-left: 3rem;
        margin-top: 50px;
        max-width: 800px;
    }
    #linkToNewNote{
        background-color: rgb(0, 208, 195);
        border: none;
        padding: 8px 30px;
        margin-top: 20px;
    }
</style>