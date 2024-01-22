<template>
<div class="confirmation" v-if="showModal">
    <div class="confirm-content">
    <div id="content">
        <p>Deseja realmente excluir esta anotação?</p>
        <div id="buttons">
            <button id="delete" class="btn btn-danger buttons" @click="confirmDelete">
                Sim
            </button>
            <button class="btn btn-primary buttons" @click="cancelDelete">
                Não
            </button>
    </div>
    </div>
    </div>
</div>
</template>

<script lang="ts">
export default {
props: {
    showModal: {
    type: Boolean,
    required: true
    }
},
methods: {
    confirmDelete() {
    this.$emit("confirmed");
    },
    cancelDelete() {
    this.$emit("canceled");
    }
}
};
</script>

<style scoped>
.confirmation{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

.confirm-content {
    display: flex;
background-color: white;
justify-content: center;
padding: 20px;
width: 600px;
height: 200px;
border: 1px solid #ccc;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
text-align: center;
border-radius: 20px;
}
.buttons{
    padding: 10px 20px;    
}
#delete{
    margin-right: 10px;
}
#content{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
