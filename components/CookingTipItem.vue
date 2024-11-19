
<template>
    <li>
      <strong>{{ title }}:</strong> {{ description }}
    </li>
  </template>
  
  <script>
  export default {
    name: "CookingTipItem",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  strong {
    font-weight: bold;
    color: #eeff00;
  }
  </style>
  