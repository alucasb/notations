<template>
  <h1 id="noteTitle" class="display-5">Detalhes da anotação</h1>
  <div id="notesComponent">
          <Notes />
  </div>
  <div id="container">
    <div id="note-container">
      <div id="component">
          <p id="note-title">Nota:</p>
          <p id="note">
            {{ noteData.note }}
          </p>
          <p>
            Valor atribuido: {{ noteData.money }}
          </p>
          <p>
            Relevância: {{ noteData.category }}
          </p>
          <p>
            Data: {{ formatDate(noteData.date) }}
          </p>
      </div>
      <div>
        <button id="deletebtn" @click="showConfirm = true" class="btn btn-danger">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
      </div>
      <confirmation :show-modal="showConfirm" @confirmed="deleteNote(noteData.id)" @canceled="cancelDelete"></confirmation>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import moment from 'moment';
import Notes from '../components/Notes.vue';
import Confirmation from '../components/Confirmation.vue';

export default {
  components:{
    Notes,
    Confirmation
  },
  data() {
    return {
      noteData: [],
      showConfirm: false
    };
  },
  updated(){
    const id = this.$route.params.id;
    this.getNote(id)
  },
  mounted() {
    const id = this.$route.params.id;
    this.getNote(id);
  },
  methods: {
    async getNote(id: string | string[]) {
      try {
        const res = await axios.get(`http://localhost:3000/notes/${id}`);
        this.noteData = res.data;
        
      } catch (error) {
        console.error(error);
      }
    },
    async deleteNote(id){
      const req = await axios.delete(`http://localhost:3000/notes/${id}`)
      const res =  req
      this.$router.push('/notes');
    },
    formatDate(date){
      return moment(date).format('DD/MM/YYYY');
    },
    cancelDelete(){
      this.showConfirm = false
    }
  },
};
</script>

<style scoped>
#container{
  display: grid;
  place-items: center;
  height: 60vh;
}
#note{
  font-size: 18px;
}
#deletebtn{
  margin-top: 20px;
}
#note-title{
  font-weight: bold;
  font-size: 20px;
}
#note-container{
    display: inline-block;
    flex-direction: column;
}
#noteTitle{
  text-align: center;
}
#notesComponent{
    display: flex;
    float: left;
    margin-left: 5px;
    max-width: 350px;
    margin-right: 50px;
    max-height: 500px;
    overflow-y: auto;
}
</style>
