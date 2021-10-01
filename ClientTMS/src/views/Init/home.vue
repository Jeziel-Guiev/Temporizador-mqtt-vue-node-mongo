<template>
 <v-app>
      <!-- app bar -->
   <div class="imagen1">
      <section style="height:50px"></section>
      <section class="mt-3 container">
        <v-flex>
          <v-layout justify-center>
            <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="600"
                    max-width="600"
                    src="https://informesinternet.com/wp-content/uploads/2019/07/iot.png"
              
            ></v-img>
          </v-layout>
        </v-flex>
      </section>
   </div>
          <div class=" container text-center" style="widht:800px">
            <p class="display-3 font-weight-light">Rastrea tu vehiculo desde cualquier parte <strong>del mundo</strong></p>
            
          </div>
      <section class="" style="; margin-top:10px">
        <v-flex class="contenedor">
          <v-layout justify-center >
          
               <v-img
                class="imagen"
                style="box-shadow: inset 10px 10px 50px #fff;"
                    max-height="100%"
                    
                    max-width="100%"
                    src="https://www.multimedia.com.mx/wp-content/uploads/2017/03/IoT.png"
            ></v-img>
         
          </v-layout>
        </v-flex>
            </section>
            <div class="text-center">
            <p class="display-2 font-weight-light">Multiplataforma</p>
            
          </div>
      <section>
          <v-main>
           <v-flex>
             <v-layout justify-center>
                 <div class="butonstart">
                   <v-btn
                      class=""
                      rounded
                      dark
                     
                      elevation="4"
                      color="dark"
                      to="/about"
                    >
                      <v-icon dark>
                        mdi-gesture-tap
                      </v-icon>
              </v-btn>
                 </div>
              
             </v-layout>
           </v-flex>
           <div>
             <h3 class="text-center">Iniciar sesion</h3>
           </div>
          </v-main>
      </section>

          <!-- footer-->

          <section class="footer mt-5">
            <v-card height="10px">
         <v-footer
         
       
            >
              <v-card
                flat
        tile
        width="100%"
        class=" lighten-1 text-center"
              >
                <v-card-text>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--dark">
                  {{ new Date().getFullYear() }} — <strong>ThingSees</strong>
                </v-card-text>
              </v-card>
            </v-footer>
            </v-card>

          </section>
 </v-app>
</template>

<script>
export default {
  name:'home',
  data(){
    return{
            icons: [
        
        'mdi-github',
        'mdi-instagram',
        'mdi-youtube',
      ],
   
      padless: false,
      variant: 'default',
    }
  },
  updated(){
   
  },
  mounted(){
  
  }
}
</script>

<style  scope>
  .imagen1{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 27%, rgba(151, 151, 151, 0.228) 78%);
}
	
.contenedor:hover .imagen {-webkit-transform:scale(1.3);transform:scale(1.3);transition: all .5s ease-in-out}
.contenedor {transition: all .5s ease-in-out;overflow:hidden;}
</style>
