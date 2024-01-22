import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: '/', component: ()=> import('../views/Home.vue') },
    { path: '/newnote', name: 'NewNote', component: ()=> import('../components/NewNote.vue') },
    { path: '/notes', name: 'Notes', component: ()=> import('../components/Notes.vue'), props: true },
    { path: '/note/:id', name: 'note', component: () => import('../views/Note.vue'), props: true },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router