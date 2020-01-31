<template>
  <div class="footer-wrapper">
    <a href="http://www.pandasfoundation.org.uk/online-support/">Support Pandas</a>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: grey;
}

a {
  color: white;

  &:hover {
    color: orange;
  }
}
</style>
