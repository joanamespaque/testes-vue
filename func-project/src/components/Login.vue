<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="teal lighten-1" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-col >
                                        <v-text-field
                                            name="email"
                                            color="teal darken-2"
                                            class="input-change"
                                            prepend-inner-icon="mdi-account"
                                            :rules="[rules.required, rules.email]"
                                            :type="'email'"
                                            label="E-mail"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col >
                                        <v-text-field
                                            name="senha"
                                            color="teal darken-2"
                                            prepend-inner-icon="mdi-lock"
                                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            :type="show ? 'text' : 'password'"
                                            label="Senha"
                                            @click:append="show = !show"
                                        ></v-text-field>
                                    </v-col>
                                </v-form>
                                    <v-card-actions>
                                        <v-spacer />
                                        <v-btn color="teal lighten-1" dark>Login</v-btn>
                                    </v-card-actions>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                show: false,
                password: 'Password',
                email: '',
                rules: {
                required: value => !!value || 'Esse campo deve ser preenchido.',
                min: value => value ? value.length >= 8 || 'Mínimo 8 caracteres' : "Preenchido",
                email:  v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido.'
                },
            }
        },
        props: {
            source: String,
        },
    }
</script>