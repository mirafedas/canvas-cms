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

<style lang="scss">
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
  font-family: 'Titillium Web';
  height: 100%;
}

main {
  height: calc(100% - 150px);
}

button {
  display: flex;
  align-self: center;
  justify-self: center;
  height: 30px;
  margin: 10px 0;
  border-radius: 20px;
  border: 1px solid green;
  color: green;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    border: 1px solid orange;
    color: orange;
  }

  &:active {
    border: 1px solid orange;
    box-shadow: inset 1px 1px 10px orange;
  }
}
</style>
