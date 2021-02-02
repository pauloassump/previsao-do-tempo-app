import axios from 'axios'

export default {
  pesquisarClima(city) {
    return axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=fb9ecfc0f9df1d12fdbe43a7563033cb')
  }
}