<template>
        <div id="container">
            <form @submit.prevent="sendForm">
                <div
                id="form-container">
                    <h1 id="form-title">
                        O que tem para fazer?
                    </h1>
                <div class="mb-3">
                <textarea
                v-model="note"
                class="form-control"
                id="textArea"
                rows="3"
                placeholder="Exp: Sair as 19:00"
                required
                ></textarea>
                </div>
                <div id="moneyInput">
                    <label for="money">Exige dinheiro ?</label>
                    <div>
                        <input type="number"
                        id="money"
                        required
                        class="form-control"
                        v-model="money"
                        placeholder="R$">
                    </div>
                </div>
                <div>
                    <label for="category">Categorias</label>
                    <div id="app">
                            <select
                            class="form-control"
                            id="category"
                            required
                            v-model="category">
                                <option value="">
                                    Selecione uma categoria
                                </option>
                                <option
                                v-for="category in categories"
                                :key="category"
                                :value="category">
                                {{ category }}
                            </option>
                            </select>
                    </div>
                </div>
                <div>
                    <label for="date">Lembrete para:</label>
                    
                    <div id="date-input">
                    <input
                    required
                    class="form-control"
                    type="date"
                    id="date"
                    v-model="date">
                    </div>
                </div>
                <div id="buttons">
                        <div>
                            <button id="save" class="btn btn-primary" type="submit">
                            Salvar
                            </button>
                        </div>
                </div>
                </div>
            </form>
        </div>
</template>
<script lang="ts">
export default {
    
    name: "NewNote",
    data(){
        return{
            note: '',
            money: '',
            category: [],
            categories: [
                'Pouco relevante',
                'Moderado' ,
                'Importante' ,
                'Urgente' ,
            ],
            date: ''
        }
    },
    methods:{
        async sendForm(){
            const data = {
                note: this.note,
                money: this.money,
                category: this.category,
                date: this.date,
            }
            const dataJson = JSON.stringify(data)
            
            const req = await fetch('http://localhost:3000/notes', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: dataJson
            })
            const res = await req.json()
            this.$router.push('/notes');
            this.note = ''
            this.money = ''
            this.category = []
            this.date = ''
            }
        },
    }
</script>
<style scoped>
    
    #form-container{
        max-width: 450px;
        margin: 0 auto;
    }
    #textArea{
        height: 150px;
    }
    #form-title{
        margin-bottom: 20px;
        font-size: 38px;
        margin-top: 10px;
    }
    #buttons div {
    display: inline-block;
    margin-right: 10px; 
    margin-top: 20px;
}
#save{
    padding-left: 60px;
    padding-right: 60px;
    background-color: rgb(0, 208, 195);
    border: none;
}
#delete{
    border-radius: 50%;
    border: none;
}
label{
    margin-bottom: 8px;
    margin-top: 10px;

}
#date-input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}


</style>