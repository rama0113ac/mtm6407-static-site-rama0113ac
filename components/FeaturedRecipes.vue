<template>
    <section class="featured-recipes mt-4">
      <h2>Featured Recipes</h2>
      <div class="recipe-grid">
        <div
          v-for="(recipe, index) in limitedRecipes"
          :key="index"
          class="recipe-card"
        >
          <img :src="recipe.image" :alt="recipe.title" />
          <div class="overlay">
            <h3>{{ recipe.title }}</h3>
            <p>{{ recipe.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FeaturedRecipes",
    props: {
      limit: {
        type: Number,
        default: 3, 
      },
    },
    data() {
      return {
        recipes: [
          { title: "Spaghetti Bolognese", image: require("../assets/images/Spaghetti.jpg"), description: "A classic Italian dish." },
          { title: "Chocolate Cake", image: require("../assets/images/easy_chocolate.jpg"), description: "Rich and moist dessert." },
          { title: "Caesar Salad", image: require("../assets/images/Caesar-Salad.jpg"), description: "Crisp, fresh, and flavorful." }
              ],
      };
    },
    computed: {
      limitedRecipes() {
        return this.recipes.slice(0, this.limit); 
      },
    },
  };
  </script>
  
  <style scoped>
  .featured-recipes {
    padding: 60px 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: #26735B;
  }
  
  h2 {
    font-size: 2.5em;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 30px;
    letter-spacing: 2px;
    position: relative;
  }
  
  h2::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #ffffff, #000000);
    margin: 10px auto 0;
    border-radius: 2px;
  }
  
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
  
  .recipe-card {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  .recipe-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    transition: opacity 0.3s ease;
  }
  
  .recipe-card:hover img {
    opacity: 0.5;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
    text-align: center;
  }
  
  .recipe-card:hover .overlay {
    opacity: 1;
  }
  
  .overlay h3 {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  
  .overlay p {
    font-size: 1em;
    line-height: 1.5;
  }
  </style>
  