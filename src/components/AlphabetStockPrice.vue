<template>
  <div>
    <h2>Alphabet Inc. (GOOGL)</h2>
    <p v-if="price !== null">Current Price: <strong>${{ price }}</strong></p>
    <p v-else>Loading latest price...</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlphabetLivePrice',
  data() {
    return {
      price: null,
      intervalId: null
    }
  },
  methods: {
    async fetchLatestPrice() {
      try {
        const apiKey = 'NM1WITTUMAE64ZNE'
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=${apiKey}`
        )
        const quote = response.data['Global Quote']
        this.price = parseFloat(quote['05. price']).toFixed(2)
      } catch (error) {
        console.error('Failed to fetch stock price:', error)
      }
    }
  },
  mounted() {
    this.fetchLatestPrice()
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
}
p {
  font-size: 1.2rem;
}
</style>
