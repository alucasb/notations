import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: '/', component: ()=> import('../views/Home.vue') },
    { path: '/newnote', component: ()=> import('../components/NewNote.vue') },
    { path: '/notes', component: ()=> import('../components/Notes.vue') },
    { path: '/note/:id', component: ()=> import('../views/Note.vue') },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router