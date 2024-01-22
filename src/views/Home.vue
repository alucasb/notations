<template>
<div>
        <h1 id="title" class="display-2">
            Bem vindo!
        </h1>
    <div id="component">
        <div id="notesComponent">
            <Notes />
        </div>
        <div id="content">
            <p>
                Não deixe suas ideias escaparem, Aqui você pode criar e gerenciar suas anotações de forma rápida e descomplicada
                tornando assim a tarefa de fazer anotações mais fácil, rápida e eficiente do que nunca. Sua vida organizada está apenas a um toque de distância!
            </p>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import Notes from '../components/Notes.vue';
export default {
    name: 'Home',
    components:{
        Notes
    }
}
</script>

<style scoped>
#component{
    display: flex;
    flex: 1;
}
#notesComponent{
    margin-left: 5px;
    max-width: 350px;
    margin-right: 50px;
    max-height: 500px;
    overflow-y: auto;
}

    #title{
        text-align: center;
        margin: 0 auto;
        margin-left: 3rem;
        margin-top: 20px;
    }
    #content{
        margin-left: 3rem;
        margin-top: 50px;
        max-width: 700px;
    }
    #linkToNewNote{
        background-color: rgb(0, 208, 195);
        border: none;
        padding: 8px 30px;
        margin-top: 20px;
    }
</style>