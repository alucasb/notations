<template>
    <div>
        <div>
            <h1>Pagina de nota</h1>
            <p>
                Tem que ter um menu lateral para as notas  
            </p>
            <p>
                o que pode ser feito é colocar o componente de lista de notas aqui
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params.id)


</script>
<style>
    
</style>