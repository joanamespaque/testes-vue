<template>
    <header>
        <nav v-if="$store.state.login">
        <router-link class="btn" to="/login">Sair</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
    }
</style>