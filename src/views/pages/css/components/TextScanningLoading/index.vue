<template>
    <h2>Loading...</h2>
</template>

<script setup lang='ts'>
</script>
<style lang="less" scoped>
h2 {
  display: inline-block;
  position: relative;
  font-size: 10vw;
  color: #252839;
  -webkit-text-stroke: .3vw#383d52;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
}

h2::before {
  content: 'Loading...';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-text-stroke: 0vw#383d52;
  color: #01fe87;
  border-right: 2px solid #01fe87;
}

h2::before {
  width: 0%;
  overflow: hidden;
  animation: animate 5s linear infinite alternate;
}

@keyframes animate {
  0% {
    width: 0%;
  }
  90% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}
</style>
