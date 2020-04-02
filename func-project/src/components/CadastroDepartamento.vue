<template>
  <v-card-text>
    <h1>Cadastro Departamento</h1>
    <v-app>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col>
            <v-text-field
              name="nome"
              color="teal darken-2"
              class="input-change"
              :type="'text'"
              label="Nome do Departamento"
              :rules="[$store.state.rules.required,  value => value ? value.length >= 2 || 'Mínimo 2 caracteres' : 'Preenchido']"
              :min="4"
            ></v-text-field>
          </v-col>
          <v-col>
            <div class="buttons">
              <v-btn
                :disabled="!valid"
                color="teal lighten-1"
                class="mr-4"
                @click="validate"
              >Cadastrar</v-btn>

              <!-- <v-btn color="amber" dark @click="reset">Resetar</v-btn> -->
              <v-btn color="amber" dark @click.stop="confirmaReset = true">Resetar</v-btn>

              <v-dialog v-model="confirmaReset" max-width="360">
                <v-card>
                  <v-card-title
                    class="headline"
                  >Você tem certeza que deseja resetar esse formulário?</v-card-title>

                  <v-card-text>Ao concordar, o campo do formulário será limpo.</v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="teal lighten-1 "
                      text
                      @click="confirmaReset = false, reset()"
                    >Concordar</v-btn>

                    <v-btn color="blue-grey lighten-1" text @click="confirmaReset = false">Cancelar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-app>
  </v-card-text>
</template>

<script>
export default {
  name: "CadastroDepartamento",
  data() {
    return {
      valid: true,
      confirmaReset: false
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.buttons {
  margin-top: 20px !important;
}
.v-form {
  width: 60%;
}
</style>