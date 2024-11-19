<template>
    <div class="recipe-card">
      <img :src="image" :alt="title" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  .recipe-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
  }
  .recipe-card img {
    width: 100%;
    height: auto;
  }
  .recipe-card h3 {
    margin: 10px 0;
  }
  </style>
  