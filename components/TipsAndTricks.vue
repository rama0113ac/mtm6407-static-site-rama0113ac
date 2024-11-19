<template>
    <section class="tips-and-tricks mt-4 container">
      <h2 class="text-center  mb-4">Cooking Tips & Tricks</h2>
      <div class="row">
        
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(tip, index) in tips.slice(0, limit)" :key="index">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-dark">{{ tip.title }}</h5>
              <p class="card-text">{{ tip.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "TipsAndTricks",
    props: {
      limit: {
        type: Number,
        default: 3, 
      },
    },
    data() {
      return {
        tips: [
          { title: "Taste as You Cook", description: "Always taste your food as you cook to ensure it’s flavorful and well-seasoned." },
          { title: "Use Fresh Ingredients", description: "For the best flavor, always choose the freshest ingredients available." },
          { title: "Preheat Your Pan", description: "Preheat your pan before adding oil to prevent sticking and ensure even cooking." },
          { title: "Keep Knives Sharp", description: "Sharp knives are safer and more efficient than dull knives." },
          { title: "Don't Overcrowd the Pan", description: "Leave enough space between food pieces to avoid steaming." },
          { title: "Use Room Temperature Ingredients", description: "Bring ingredients like butter and eggs to room temperature for better results." },
          { title: "Invest in a Good Pan", description: "A good-quality pan can make a big difference in cooking efficiency." },
          { title: "Know Your Spices", description: "Understand the flavor profiles of different spices to elevate your dishes." },
          { title: "Keep it Simple", description: "Sometimes less is more – don't overcomplicate recipes with too many ingredients." },
          { title: "Let Meat Rest", description: "Allow meat to rest after cooking to retain its juices." },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .tips-and-tricks {
    padding: 40px 20px;
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.25em;
    font-weight: bold;
    color: #ffffff;
  }
  
  .card-text {
    font-size: 1em;
    color: #333;
  }
  
  h2 {
    font-size: 2.5em;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 1px;
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
  </style>
  