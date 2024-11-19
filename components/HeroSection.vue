<template>
    <section class="hero-section rounded-lg">
      <div class="content">
        <h1 class="hero-title">Welcome to My Cooking World</h1>
        <p class="hero-description">Discover recipes, tips, and stories from my kitchen to yours!</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: url('assets/Images/hero.jpg') center center / cover no-repeat;
    color: white;
    text-align: center;
    padding: 120px 20px;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); 
  }
  
  .hero-section .content {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: auto;
    color: #fff;
    pointer-events: none; 
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); 
    line-height: 1.2;
    transition: color 0.3s ease, transform 0.3s ease; 
  }
  
  .hero-description {
    font-size: 1.25rem;
    font-weight: 300;
    max-width: 700px;
    margin: 0 auto;
    letter-spacing: 1px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); 
    opacity: 0.9;
    transition: color 0.3s ease, transform 0.3s ease; 
  }
  
  .hero-section .content:hover .hero-title,
  .hero-section .content:hover .hero-description {
    color: #ff8a00;
    transform: scale(1.05); 
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
  
    .hero-description {
      font-size: 1.1rem;
    }
  }
  </style>
  