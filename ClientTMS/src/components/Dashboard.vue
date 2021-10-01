<template>
<div id="app">
      <v-app>
          
    <v-navigation-drawer width="250" :clipped="clipped" v-model="drawer" enable-resize-watcher app height="100%" class="white text-dark lighten-3">
      <!-- Contenido de sidebar-->
    <div >
        <v-row style="height:150px">
          <v-col class="d-flex justify-center align-center" >
                 <v-avatar 
                 class="pa-3" 
                 width="100"
                 height="100"
                 color="dark"
                   >
                    <img
                     
                      src="https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-microchip-icon-png-image_1545441.jpg"
                      alt="John"
                    >
                 </v-avatar>
          </v-col>
        </v-row>
     </div>
   
    <v-list>

       <v-list-item link @click="home()">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="rastreadorgps()">
        <v-list-item-icon>
          <v-icon>mdi-google-maps</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Sonoff</v-list-item-title>
      </v-list-item>

       <!-- Aqui se pone dash bajo -->

    <!-- fin list group-->

    </v-list>
 <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout" dark color="dark" rounded elevation="7" block>
            Cerrar sesion
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer> 
  
        <v-app-bar dark color="dark" fixed app :clipped-left="clipped" height="50px"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../assets/Views/nombre.png"
          width="100"
          
        /></v-toolbar-title>

      <v-spacer></v-spacer>

     
    </v-app-bar> 
   <v-main>
       <router-view></router-view>
   </v-main>


    
  </v-app>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name:'doc',
    data(){
        return{
          admins: [
        ['Management', 'mdi-home-group'],
        ['Settings', 'mdi-cog-outline'],
      ],
            drawer: true,
            clipped: false,
          items: [
        {
          action: 'mdi-home-group',
          items: this.$store.state.vivienda, //[{ title: 'List Item Signin', url:'/home/signin' }],
          title: 'Viviendas',
        },  
      ],
        itemsBalance: [
        {
          action: 'mdi-eye',
          items: this.$store.state.vivienda, //[{ title: 'List Item Signin', url:'/home/signin' }],
          title: 'Balances',
        },  
      ],
        }
    },
    methods:{
      rastreadorgps(){
        this.$router.push('/dashboard/'+ localStorage.getItem('userix')+'/sonoff').catch(err=>'');
      },
  
      home(){
        this.$router.push('/dashboard/'+localStorage.getItem('userix')).catch(err=>'');
      },
      logout(){
        localStorage.clear();
          
        this.$store.commit('clearstate');
        this.$router.push('/');
      }
    },
    updated(){
   
    },
   async created(){
   
    }
}
</script>
<style scoped>
.ad{
  text-decoration-color: darkgoldenrod;
}
</style>