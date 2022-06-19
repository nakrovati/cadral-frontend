<template>
  <div class="intro">
    <div>{{ props.dateCreated }}</div>
    <h3>{{ props.initialUrl }}</h3>
    <p>{{ props.shortUrl }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  shortUrl: { type: String, required: true },
  initialUrl: { type: String, required: true },
  dateCreated: { type: String, required: true },
});
</script>
