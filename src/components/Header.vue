<template>
  <div class="header">
    <p class="game-name">LOTTO</p>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  border-bottom: 3px solid white;
  background-color: #1f3047;
  display: flex;
  justify-content: center;
  align-items: center;

  .game-name {
    color: white;
    font-family: Nunito-Black;
    font-size: 20px;
    font-weight: 900;
    line-height: 17px;
    text-align: left;
  }
}

@media screen and (max-width: 1366px) {
  .header {
    height: 50px;
    .game-name {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 42px;
    .game-name {
      font-size: 14px;
    }
  }
}
</style>

