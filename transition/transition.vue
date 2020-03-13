<template>
    <div>
        <button @click="mudaNome"> {{nomeButton}} </button>
        <transition name="modal" appear>
                <div class="modal-wrapper" v-if="ativo" @click="fecharModal">
                    <div class="modal">
                        <h2>Cadastre-se</h2>
                        <form>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <br>
                                <input type="email" name="email" id="email" placeholder="Digite seu e-mail aqui">
                            </div>
                            <div class="form-group">
                                <label for="nome">Nome:</label>
                                <br>
                                <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha:</label>
                                <br>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua senha aqui">
                            </div>
                            <input type="submit" value="enviar" id="enviar">
                        </form>
                    </div>
                </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ativo: false,
                nomeButton: "Cadastro"
            };
        },
        methods: {
            mudaNome() {
                if (this.ativo) {
                    this.nomeButton = "Cadastro";
                } else {
                    this.nomeButton = "Voltar";
                }
                this.ativo = !this.ativo;
            },
            fecharModal({ currentTarget, target }) {
                if (currentTarget === target) this.ativo = false;
            }
        },
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    h2 {
        margin: 0px 0px 20px 0px;
        text-align: center;
        color: rgba(32, 32, 32, 0.65);
    }

    .modal-wrapper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.4);
        overflow-y: scroll;
    }

    .modal {
        background: #e5e5e5;
        padding: 20px;
        border-radius: 4px;
        max-width: 400px;
        margin: 120px auto 0 auto;
        z-index: 10;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input,
    button {
        width: 100%;
        border: 2px solid rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        padding: 15px 10px;
        font-size: 1rem;
        margin-bottom: 20px;
    }

    input[type="submit"],
    button {
        width: 200px;
        background: rgb(0, 134, 94);
        color: white;
        text-transform: uppercase;
        font-size: 1rem;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    input[type="submit"]:active,
    button:active {
        background: rgb(0, 134, 94);
    }

    button {
        margin: 40px 0 0 40px auto;
        display: block;
        cursor: pointer;
        position: absolute;
        z-index: 1;
    }
    
    #enviar {
        margin: 0 auto;
        display: block;
        position: relative;
    }


    .modal-enter,
    .modal-leave-to {
    opacity: 0;
    }

    .modal-enter-active,
    .modal-leave-to {
    transition: opacity 1s;
    }

    .modal-enter-to .modal {
    animation: slide 1s;
    }

    .modal-leave-to .modal {
    animation: slide 1s reverse;
    }
</style>