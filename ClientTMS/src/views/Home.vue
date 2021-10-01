<template>
  <v-app >
<v-card>
      <v-app-bar
      app
      fixed
      dark
      height="50"
      
      color="dark"  
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/Views/thingsess.png"
          
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../assets/Views/name.png"
          width="100"
          
        />
      </div>

      <v-spacer></v-spacer>

     <router-link exact class="text-dark font-weight-thin " style="font-size:20px; color:white;text-decoration: none;" to="/">Home</router-link>
      <router-link exact class="font-weight-thin mx-3 " style="font-size:20px; color:white;text-decoration: none;" to="/about">About</router-link>

                   
      <router-link exact class="nav-link text-dark font-weight-thin " style="font-size:20px; color:white;text-decoration: none;" to="/signin">Signin</router-link>
      
     
     
    </v-app-bar>
</v-card>

    
     <transition name="transition">
        <router-view/>
      </transition>
 
  </v-app>
</template>



<style scoped>
.transition-enter, .transition-leave{
    opacity: 0;
}
.transition-enter-active, .transition-leave-active{
      transition: opacity 0.5s;
}
router-link{
  text-decoration: none;
}
</style>
    