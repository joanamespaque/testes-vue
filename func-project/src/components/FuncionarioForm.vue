<template>
  <div>
    <slot></slot>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col>
          <v-text-field
            name="nome"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-account"
            :type="'text'"
            label="Nome Completo"
            :rules="[$store.state.rules.required, minfields(8, 'nome')]"
            v-model="nome"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="celular"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-cellphone"
            :type="'tel'"
            label="Celular"
            :rules="[$store.state.rules.required, minfields(10, 'celular')]"
            v-mask="['(##) ####-####', '(##) #####-####']"
            v-model="celular"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="rg"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-card-account-details-outline"
            :type="'number'"
            label="RG"
            :rules="[$store.state.rules.required]"
            v-model="rg"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="cpf"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-id-card"
            :type="'text'"
            label="CPF"
            :rules="[$store.state.rules.required, minfields(14, 'cpf')]"
            v-mask="'###.###.###-##'"
            v-model="cpf"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            color="teal darken-2"
            prepend-inner-icon="mdi-gender-male-female"
            :items="sexos"
            item-text="nome"
            item-value="value"
            :rules="[$store.state.rules.required]"
            label="Sexo"
            v-model="sexo"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            name="data_nascimento"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-calendar-account"
            :type="'date'"
            label="Data de Nascimento"
            :rules="[$store.state.rules.required]"
            v-model="data_nascimento"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="salario"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-account-cash"
            :type="'number'"
            label="Salário"
            :rules="[$store.state.rules.required]"
            v-model="salario"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            color="teal darken-2"
            :items="departamentos"
            item-text="nome"
            item-value="id"
            :rules="[$store.state.rules.required]"
            label="Departamento"
            v-model="id_depto"
          ></v-select>
        </v-col>
      </v-row>
      <h3>Endereço</h3>
      <v-row>
        <v-col>
          <v-text-field
            name="cep"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-map-marker"
            :type="'number'"
            label="CEP"
            v-model="cep"
            v-on:keyup.native="preencherCep"
            :rules="[$store.state.rules.required, minfields(8, 'cep'), maxfields(8)]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="rua"
            color="teal darken-2"
            class="input-change"
            :type="'text'"
            label="Rua"
            prepend-inner-icon="mdi-sign-real-estate"
            id="rua"
            v-model="rua"
            :rules="[$store.state.rules.required]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="numero"
            color="teal darken-2"
            class="input-change"
            :type="'number'"
            label="Número"
            prepend-inner-icon="mdi-home-floor-0"
            :rules="[$store.state.rules.required]"
            v-model="numero"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="complemento"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-domain"
            :type="'text'"
            label="Complemento"
            v-model="complemento"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            name="bairro"
            color="teal darken-2"
            class="input-change"
            :type="'text'"
            label="Bairro"
            prepend-inner-icon="mdi-home-group"
            id="bairro"
            v-model="bairro"
            :rules="[$store.state.rules.required]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="cidade"
            color="teal darken-2"
            class="input-change"
            :type="'text'"
            label="Cidade"
            prepend-inner-icon="mdi-city"
            id="cidade"
            v-model="cidade"
            :rules="[$store.state.rules.required]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            name="estado"
            label="Estado"
            color="teal darken-2"
            id="estado"
            v-model="estado"
            :items="estados"
            item-text="nome"
            item-value="sigla"
            :rules="[$store.state.rules.required]"
          ></v-select>
        </v-col>
      </v-row>
      <h3>Informações da Conta</h3>
      <v-row>
        <v-col>
          <v-text-field
            name="email"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-email"
            :type="'email'"
            label="E-mail"
            :rules="[$store.state.rules.email, $store.state.rules.required]"
            v-model="email"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="senha"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-lock"
            :type="'password'"
            label="Senha"
            v-model="senha"
            :rules="[$store.state.rules.required, minfields(8, 'senha')]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            name="senha"
            color="teal darken-2"
            class="input-change"
            prepend-inner-icon="mdi-lock"
            :type="'password'"
            label="Confirmar Senha"
            v-model="confirmaSenha"
            :rules="[combinaSenha, $store.state.rules.required, minfields(8, 'confirma-senha')]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-switch
            color="teal darken-2"
            class="ma-4"
            label="Tornar Administrador"
            name="admin"
            v-model="admin"
          ></v-switch>
        </v-col>
      </v-row>
      <div class="buttons">
        <slot name="divbuttons"></slot>
        <v-btn :disabled="!valid" color="teal lighten-1" class="mr-4" @click="validate">Cadastrar</v-btn>

        <v-btn color="yellow darken-3" dark @click.stop="confirmaReset = true">Resetar</v-btn>

        <v-dialog v-model="confirmaReset" max-width="360">
          <v-card>
            <v-card-title class="headline">Você tem certeza que deseja resetar esse formulário?</v-card-title>

            <v-card-text>Ao concordar, todos os campos do formulário serão limpos.</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="teal lighten-1 " text @click="confirmaReset = false, reset()">Concordar</v-btn>

              <v-btn color="blue-grey lighten-1" text @click="confirmaReset = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-form>
  </div>
</template>

<script>
import { getCep, getEstados } from "@/services.js";
import { mapFields } from "@/helpers.js";
import { mask } from "vue-the-mask";
import { api } from "@/services.js";
export default {
  name: "FuncionarioForm",
  directives: { mask },
  computed: {
    combinaSenha() {
      const rule = v => (!!v && v) === this.senha || "As senhas não combinam";
      return rule;
    },
    ...mapFields({
      fields: [
        "nome",
        "sexo",
        "celular",
        "data_nascimento",
        "cpf",
        "rg",
        "salario",
        "email",
        "rua",
        "numero",
        "complemento",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado",
        "admin",
        "senha",
        "confirmaSenha",
        "id_depto"
      ],
      base: "funcionario",
      mutation: "UPDATE_FUNCIONARIO"
    })
  },
  data: () => ({
    sexos: [
      { nome: "Feminino", value: "F" },
      { nome: "Masculino", value: "M" }
    ],
    select: null,
    estados: [],
    confirmaReset: false,
    valid: true,
    departamentos: []
  }),
  methods: {
    async validate() {
      this.$refs.form.validate();
      console.log("entrou na validacao");
      try {
        await this.$store.dispatch(
          "criarfuncionario",
          this.$store.state.funcionario
        );
        // await this.$store.dispatch(
        //   "getfuncionario",
        //   this.$store.state.funcionario.email
        // );
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => {
          if (!response.data.erro) {
            this.rua = response.data.logradouro;
            this.bairro = response.data.bairro;
            this.estado = response.data.uf;
            this.cidade = response.data.localidade;
          }
        });
      }
    },
    maxfields(max) {
      const rule = v =>
        v ? v.length <= max || `Máximo ${max} caracteres` : true;
      return rule;
    },
    minfields(min, field) {
      const rule = v => {
        if (v) {
          if (v.length < min && (field === "cpf" || field === "celular")) {
            return `Mínimo ${min - 3} dígitos`;
          } else if (v.length < min) {
            return `Mínimo ${min} caracteres`;
          } else {
            return true;
          }
        } else {
          return true;
        }
      };
      return rule;
    },
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
    validaNumero() {
      const rule = v =>
        v ? !this.phone.isValid || "O número precisa ser válido." : "Validado";
      console.log("oi");
      return rule;
    }
  },
  created() {
    api.get("/departamento").then(response => {
      this.departamentos = response.data;
      console.log(this.departamentos);
    });
    getEstados().then(r => {
      let data = r.data.sort(function(a, b) {
        return comparaStrings(a.nome, b.nome);
      });
      this.estados = data;
    });
  }
};

function comparaStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : a > b ? 1 : 0;
}
</script>

<style>
</style>