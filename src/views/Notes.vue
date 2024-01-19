<template>
    <div>
        <h1>anotações</h1>
        <div v-if="notations">
            <p>
                tem anotações
            </p>
        </div>
        <div v-else>
            <p>
                Sem anotações ainda
            </p>
            <router-link 
            class="btn btn-primary"
            to="/newnote">
            Nova anotação
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Notes',
    data(){
        return{
            notations: false
        }
    },
}
</script>
<style>
    
</style>