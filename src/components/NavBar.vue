<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            
            <router-link class="nav-link active" to="/notes">Anotações</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/newnote">Nova anotação</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/note/10">id de teste de anotação</router-link>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    
    </div>
</template>
<script lang="ts">

export default {
    name: 'NavBar'
}
</script>

<style >
    
</style>