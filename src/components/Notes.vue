<template>
        <div id="notesContainer">
            <h2 id="titleNote" class="display-2">
                Suas anotações
            </h2>
            <div v-if="notes && notes.length == 0">
                <div id="noNotes">
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
            </div>
            <div id="notes" v-else>
                <div id="notes-rows">
                    <div class="note-row" v-for="note in notes" :key="note.id">
                        <div :class="{ 'long-title': note.note.length > 4 }">
                            {{ note.note }}
                        </div>
                        
                        <div v-if="note.money">Valor: {{ note.money }}</div>
                        <div v-else>
                            Sem valor
                        </div>
                        <div>{{ note.category }}</div>
                        <div v-if="note.date">
                            {{ formatDate(note.date) }}
                        </div>
                        <div v-else>
                            Sem data
                        </div>
                        <div>
                            <button @click="showConfirm = true" id="cancel" class="btn btn-danger">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>
                                <router-link
                                :to="{ name: 'note', params: { id: note.id}}"
                                class="btn btn-primary"
                                >
                                    Acessar
                                </router-link>
                        </div>
                        <confirmation :show-modal="showConfirm" @confirmed="deleteNote(note.id)" @canceled="cancelDelete"></confirmation>
                    </div>
                </div>
            </div>
        </div>
</template>
<script lang="ts">
import moment from 'moment'
import Confirmation from './Confirmation.vue';

export default {
    name: 'Notes',
    components: {
        Confirmation
    },
    data() {
        return {
            notesLength: false,
            notes: null,
            notation_id: null,
            category: [],
            showConfirm: false
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
        async deleteNote(id){
            const req = await fetch(`http://localhost:3000/notes/${id}`, {
                method: "DELETE"
            })
            const res = await req.json()
            this.showConfirm = false;
            this.getNotes()
        },
        formatDate(date){
        return moment(date).format('DD/MM/YYYY');
    },
        showDeleteConfirmation(){
            this.showConfirm = true;
        },
        cancelDelete() {
            this.showConfirm = false;
        }
}
}
</script>
<style scoped>
    #linkToNewNote{
        background-color: rgb(0, 208, 195);
        border: none;
        padding: 8px 30px;
        margin-top: 10px;
    }
    #titleNote{
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
        display: flex; 
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
    max-width: 40px; 
    display: inline-block;
}
#noNotes{
    margin-top: 80px;
    text-align: center;
}
</style>