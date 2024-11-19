<template>
    <section class="container about-section mt-4">
      <h2>About Me</h2>
      <p>
        Hi! I'm 
        <span class="name-highlight">Raman<span class="inner-highlight">preet</span></span>, 
        a cooking enthusiast. I love experimenting with flavors and sharing my creations with the world. Join me in my culinary journey!
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutSection",
  };
  </script>
  
  <style scoped>
  .about-section {
    padding: 50px 30px;
    text-align: center;
    color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #26735B;
  }
  
  
  h2 {
    font-size: 2.5em;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    position: relative;
  }
  
  h2::after {
    content: "";
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #ffffff, #000000);
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
  }
  
  p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-top: 10px;
  }
  
  .name-highlight {
    font-weight: bold;
    font-size: 1.3em;
  background: linear-gradient(90deg, #E3E36B, #a7a09c);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
  }
  
  .name-highlight::before,
  .name-highlight::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10%;
    background: rgba(255, 126, 95, 0.2);
    top: 0;
    left: 0;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  
  .name-highlight:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  .inner-highlight {
    color: #ddd2d6;
    font-style: italic;
    font-size: 1.3em;
  }
  
  .inner-highlight:hover {
    text-decoration: underline;
  }
  </style>
  