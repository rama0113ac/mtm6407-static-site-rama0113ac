<template>
    <div class="recipes-page">
     
      <section class="recipes-header">
        <h2>Delicious Recipes</h2>
        <p>Explore our collection of recipes! Find meals for all occasions, from quick weeknight dinners to fancy dishes for special events.</p>
      </section>
  
 
      <section class="recipe-list">
        <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
         
          <img :src="recipe.imagePath" alt="recipe.title" class="recipe-image" />
          <div class="recipe-info">
            <h3>{{ recipe.title }}</h3>
            <p class="recipe-summary">{{ recipe.summary }}</p>
            <router-link :to="'/recipe/' + recipe.id" class="view-recipe-btn">View Recipe</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Recipes",
    data() {
      return {
        recipes: [
          {
            id: 1,
            title: "Spaghetti Bolognese",
            summary: "A classic Italian pasta dish with a rich and savory meat sauce.",
            imagePath:  require("../assets/images/Spaghetti.jpg"),
          },
          {
            id: 2,
            title: "Chicken Alfredo",
            summary: "Creamy and comforting, this dish is a favorite for pasta lovers.",
            imagePath:  require("../assets/images/alfredo.jpg"),
          },
          {
            id: 3,
            title: "Vegetable Stir-Fry",
            summary: "A healthy and colorful dish with a variety of vegetables stir-fried in a savory sauce.",
            imagePath:  require("../assets/images/stirfry.jpg"),
          },
          {
            id: 4,
            title: "Chocolate Cake",
            summary: "Rich, moist, and decadent chocolate cake with a creamy frosting.",
            imagePath:  require("../assets/images/easy_chocolate.jpg"),
          },
          {
            id: 5,
            title: "Beef Tacos",
            summary: "Tasty beef tacos served with fresh toppings in a soft tortilla.",
            imagePath:  require("../assets/images/Beef-Tacos.jpg"),
          },
          {
            id: 6,
            title: "Salmon Salad",
            summary: "A fresh and healthy salad with grilled salmon, mixed greens, and a tangy dressing.",
            imagePath:  require("../assets/images/Salmon-Salad.jpg"),
          },
          {
            id: 7,
            title: "Chicken Caesar Salad",
            summary: "Crispy romaine lettuce topped with grilled chicken, croutons, and Caesar dressing.",
            imagePath:  require("../assets/images/Caesar-Salad.jpg"),
          },
          {
            id: 8,
            title: "Pancakes",
            summary: "Fluffy and light pancakes served with syrup, butter, and your favorite toppings.",
            imagePath:  require("../assets/images/Pancakes.jpg"),
          },
          {
            id: 9,
            title: "Lamb Curry",
            summary: "A flavorful and aromatic curry with tender lamb cooked in a spiced gravy.",
            imagePath:  require("../assets/images/lamb-curry.jpg"),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  .recipes-page {
    padding: 40px 20px;
    background-color: #26735b;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    max-width: 1200px;
    font-family: Arial, sans-serif;
  }
  

  .recipes-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .recipes-header h2 {
    font-size: 2.5rem;
    color: #ffffff;
  }
  
  .recipes-header p {
    font-size: 1.1rem;
    color: #ffffff;
    margin-top: 10px;
  }
  
 
  .recipe-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
 
  .recipe-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  
  .recipe-card:hover {
    transform: scale(1.05);
  }
  

  .recipe-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  

  .recipe-info {
    padding: 20px;
    text-align: center;
  }
  
  .recipe-info h3 {
    font-size: 1.8rem;
    color: #333;
  }
  
  .recipe-summary {
    font-size: 1rem;
    color: #666;
    margin: 10px 0;
  }
  
  .view-recipe-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #26735b;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .view-recipe-btn:hover {
    background-color: #1a4c42;
  }
  </style>
  