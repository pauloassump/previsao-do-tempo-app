<template>
  <div>
    <v-row justify="center" align="center">
    <v-col cols="12" md="6">
      <v-text-field
          append-icon="mdi-magnify"
          v-model="city"
          label="Digite o nome da cidade:"
          @click:append="pesquisar()"
          @keyup.enter="pesquisar()"
        ></v-text-field>
    </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card-title v-if="showTitle" class="white--text">
          PREVISÃO DO TEMPO PARA OS PRÓXIMOS 5 DIAS:
        </v-card-title>
      </v-col>
      <v-card
        v-for="previsao in previsoes"
        :key="previsao.id"
        class="mx-auto mb-5"
        max-width="250"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline blue--text" v-for="clima in previsao.weather" :key="clima.main">
              {{ clima.description | traduzirStatus }}
            </v-list-item-title>
            <v-list-item-subtitle>Horário: {{ previsao.dt_txt | moment("dddd - HH:mm") }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col
              cols="6"
            >
              <p>Min: {{ previsao.main.temp_min | converterTemperatura }} ºC</p>
              <p>Max: {{ previsao.main.temp_max | converterTemperatura }} ºC</p>
            </v-col>
            <v-col cols="6">
              <v-icon v-for="icon in previsao.weather" :key="icon.main" large>
                {{ icon.main | iconeClima }}
              </v-icon>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-subtitle>Umidade: {{ previsao.main.humidity }}%</v-list-item-subtitle>
        </v-list-item>

      </v-card>
    </v-row>
  </div>
</template>

<script>
import Previsao from '@/services/previsao-tempo'

export default {
  data () {
    return {
      previsoes:[],
      showTitle: false,
      city: '',
      info: {
        city: {
          name: null
        },
        dt_txt: null
      }
    }
  },
  filters: {
    converterTemperatura (value) {
      value = value - 273.15
      return Math.floor(value)
    },
    traduzirStatus (value) {
      if (value == 'light rain') {
        value = 'Chuva leve'
      }
      if (value == 'scattered clouds') {
        value = 'Parcial. nublado'
      }
      if (value == 'overcast clouds') {
        value = 'Nublado'
      }
      if (value == 'broken clouds') {
        value = 'Nublado'
      }
      if (value == 'moderate rain') {
        value = 'Chuva moderada'
      }
      if (value == 'few clouds') {
        value = 'Parcial. nublado'
      }
      if (value == 'clear sky') {
        value = 'Céu Limpo'
      }
      if (value == 'light snow') {
        value = 'Neve'
      }
      
      return value
    },
    iconeClima (value) {
      if (value == 'Rain') {
        value = 'mdi-weather-pouring'
      }
      if (value == 'Clouds') {
        value = 'mdi-cloud-outline'
      }
      if (value == 'Clear') {
        value = 'mdi-weather-sunny'
      }
      return value
    }
  },
  methods: {
    pesquisar () {
      Previsao.pesquisarClima(this.city)
      .then(res => {
        this.info = res.data,
        this.previsoes = res.data.list,
        this.showTitle = true
      })
    }
  }
}
</script>