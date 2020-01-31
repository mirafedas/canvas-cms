<template>
  <div class="wrapper">
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body, #__nuxt, #__layout {
  height: 100%;
}

#__layout {
  display: flex;
  flex-direction: column;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  height: 100%;
}

main {
  height: calc(100% - 50px);
}
</style>
