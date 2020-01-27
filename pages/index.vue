<template>
  <div class="main-wrapper">
    <div class="main-content">
      <header>
        Header
      </header>
      <main>
        <StartPage />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  </div>
</template>

<script>
import StartPage from '../components/StartPage'

export default {
  components: {
    StartPage
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.main-wrapper {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}

.main-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

header,
footer {
  height: 100px;
  background-color: grey;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 4em;
}

footer {
  display: flex;
  justify-self: flex-end;
}
</style>
