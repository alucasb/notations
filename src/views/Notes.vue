<template>
    <div>
        <h1>anotações</h1>
        <div>
            <p v-if="notations">
                tem anotações
            </p>
            <p v-else>
                não tem anotações
            </p>
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