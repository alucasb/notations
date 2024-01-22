<template>
        <div>
            <h1 id="title" class="display-2">
                Suas anotações
            </h1>
            <div v-if="notes">
            </div>
            <div v-else>
                <p>
                    Sem anotações ainda
                </p>
                <router-link
                id="linkToNewNote"
                class="btn btn-primary"
                to="/newnote">
                Nova anotação
                </router-link>
            </div>
            <div id="notes">
                <div id="notes-rows">
                    <div class="note-row" v-for="note in notes" :key="note.id">
                        <div :class="{ 'long-title': note.note.length > 20 }">{{ note.note}}</div>
                        
                        <div v-if="note.money">Valor: {{ note.money}}</div>
                        <div v-else>Sem valor</div>
                        <div>{{ note.category }}</div>
                        <div v-if="note.date">{{ note.date }}</div>
                        <div v-else>Sem data</div>
                        <div>
                            <button @click="deleteNote(note.id)" id="cancel" class="btn btn-danger">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>
                            <button @click="accessNote(note.id)" class="btn btn-primary">
                                acessar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script lang="ts">

export default {
    name: 'Notes',
    data() {
        return {
            notes: null,
            notation_id: null,
            category: []
        };
    },
    mounted() {
        this.getNotes();
    },
    methods: {
        async getNotes() {
            const req = await fetch('http://localhost:3000/notes');
            const data = await req.json();
            this.notes = data;
        },
        accessNote(id) {

        },
        async deleteNote(id){
            const req = await fetch(`http://localhost:3000/notes/${id}`, {
                method: "DELETE"
            })
            const res = await req.json()
            
            this.getNotes()
        }
    },
}
</script>
<style scoped>
    #linkToNewNote{
        background-color: rgb(0, 208, 195);
        border: none;
        padding: 8px 30px;
        margin-top: 10px;
    }
    #title{
        margin-top: 20px;
        text-align: center;
        font-size: 3.8rem;
    }
    #notes{
        max-width: 900px;
        margin: 0 auto;
    }
    #notes-rows,
    .note-row{
        display: flex; /* Torna o contêiner um contêiner flexível */
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .note-row{
        width: 100%;
        padding: 12px;
        background-color: rgb(240, 240, 240);
        border-radius: 10px;
    }
    #cancel{
        margin-right: 8px;
    }
    .long-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100px; /* ou qualquer valor que você preferir */
    display: inline-block;
}
</style>