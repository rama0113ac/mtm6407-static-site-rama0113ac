<template>
  <div class="home-page">
   
    <HeroSection />

    
    <AboutSection />

   
    <FeaturedRecipes :limit="3" />


   
    <TipsAndTricks :limit="3" />


 
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import FeaturedRecipes from "../components/FeaturedRecipes.vue";
import TipsAndTricks from "../components/TipsAndTricks.vue";


export default {
  name: "HomePage",
  components: {
    HeroSection,
    AboutSection,
    FeaturedRecipes,
    TipsAndTricks
  },
};
</script>

<style scoped>
.home-page {
  font-family: 'Arial', sans-serif;
 
}
</style>
