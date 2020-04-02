<template>
    <section>
        <Login v-if="!$store.state.login"/>
            <ListaFuncionarios v-else-if="$store.state.usuario.admin"/>
                <ListaTarefas v-else/>
    </section>

</template>

<script>
    import Login from '@/components/Login.vue'
    import ListaFuncionarios from '@/components/ListaFuncioarios.vue'
    import ListaTarefas from '@/components/ListaTarefas'

    export default {
        name: 'Home',
        components: {
            Login,
            ListaFuncionarios,
            ListaTarefas
        }
    }
</script>