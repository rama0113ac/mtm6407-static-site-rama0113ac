<template>
    <div class="about-page">
   
      <section class="intro">
        <h2>Welcome to My Cooking Site</h2>
        <p>
          Welcome to My Cooking Site! Here, you'll find a variety of delicious recipes, cooking tips, and fun stories from my kitchen to yours. Whether you're a beginner or an experienced chef, I hope to inspire you with tasty dishes and creative ideas.
        </p>
      </section>
  
  
      <section class="mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to bring people together through food. We believe that cooking should be fun, easy, and a way to explore new cultures and flavors. From family-friendly meals to gourmet dishes, we aim to provide recipes for every occasion and skill level.
        </p>
      </section>

      <section class="team">
  <h3>Meet the Team</h3>
  <div class="team-members">
    <div class="team-member">
      <img src="/mtm6407-static-site-rama0113ac/images/CHEF-EMMA.jpg" alt="Chef Emma" />
      <h4>Chef Emma</h4>
      <p>Head Chef & Recipe Developer</p>
    </div>
    <div class="team-member">
      <img src="/mtm6407-static-site-rama0113ac/images/john.jpg" alt="Chef John" />
      <h4>Chef John</h4>
      <p>Assistant Chef & Food Stylist</p>
    </div>
    <div class="team-member">
      <img src="/mtm6407-static-site-rama0113ac/images/sarah.jpg" alt="Chef Sarah" />
      <h4>Ramanpreet</h4>
      <p>Pastry Chef & Dessert Expert</p>
    </div>
  </div>
</section>


  
     
      <section class="contact">
        <h3>Contact Us</h3>
        <p>
          Have any questions or feedback? We'd love to hear from you! You can reach us via email at <a href="mailto:info@mycookingsite.com">info@mycookingsite.com</a>.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  
  <style scoped>

  .about-page {
    padding: 40px 20px;
    background-color: #26735B;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    max-width: 1200px;
    font-family: Arial, sans-serif;
  }

  h2, h3 {
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  
  h3 {
    font-size: 2rem;
    color: #ffffff;
  }
  

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ffffff;
    margin-bottom: 20px;
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  

  section {
    margin-bottom: 40px;
  }
  

  .intro, .mission {
    text-align: center;
  }
  
 
  .team {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .team h3 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .team-members {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px; 
  }
  
  .team-member {
    text-align: center;
  }
  
  .team-member img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 50%; 
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .team-member h4 {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  
  .team-member p {
    color: #ffffff;
  }

  .contact {
    background-color: #26735b;
    padding: 20px;
    border-radius: 10px;
    color: white;
    text-align: center;
  }
  
  .contact p {
    color: rgb(255, 255, 255);
  }
  
  .contact a {
    color: #ffffff;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .team-members {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    .team-member {
      padding: 10px;
    }
  
    .team-member img {
      max-width: 200px;
    }
  
    h2 {
      font-size: 2rem;
    }
  
    h3 {
      font-size: 1.5rem;
    }
  
    p {
      font-size: 1rem;
    }
  }
  </style>
  