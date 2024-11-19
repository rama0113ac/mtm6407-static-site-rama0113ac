
<template>
    <div class="cooking-tips-page">
      <h1>Cooking Tips & Tricks</h1>
      <p>Enhance your culinary skills with these expert tips!</p>
      <ul>
        <CookingTipItem
          v-for="(tip, index) in tips"
          :key="index"
          :title="tip.title"
          :description="tip.description"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import CookingTipItem from '@/components/CookingTipItem.vue';
  
  export default {
    name: "CookingTips",
    components: {
      CookingTipItem,
    },
    data() {
      return {
        tips: [
          {
            title: "Use Fresh Ingredients",
            description: "Always try to use fresh, high-quality ingredients for better taste.",
          },
          {
            title: "Season Early",
            description: "Season your food during the cooking process, not just at the end, to enhance flavors.",
          },
          {
            title: "Rest Meat After Cooking",
            description: "Let your meat rest for a few minutes after cooking to retain its juices.",
          },
          {
            title: "Know Your Knives",
            description: "A good knife can make a huge difference in the speed and precision of your cooking.",
          },
          {
            title: "Don’t Overcrowd the Pan",
            description: "When sautéing, leave space between the ingredients to allow them to cook properly.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .cooking-tips-page {
    text-align: center;
    margin-top: 50px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  </style>
  