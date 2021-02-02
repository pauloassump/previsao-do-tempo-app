<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <div class="text-center">
        <Previsao />
      </div>
      <v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Previsao from '@/components/Previsao'

export default {
  components: {
    Previsao
  }
}
</script>
