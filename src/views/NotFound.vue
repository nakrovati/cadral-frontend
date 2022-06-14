<template>
  <main class="intro">
    <div class="container">
      <img
        alt="A robot with a magnifying glass searches for URLs"
        ref="image"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import imageRobot404 from "Images/404-robot.jpg";
import imageRobot404Safari from "Images/404-robot-safari.jpg";

const image = ref();

onMounted(() => {
  const { userAgent } = navigator;

  if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    image.value.src = imageRobot404Safari;
  } else {
    image.value.src = imageRobot404;
  }
});
</script>

<style lang="scss" scoped>
.intro {
  padding: 0 20px;

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 100px 0;
    width: 100%;
  }
}
</style>
