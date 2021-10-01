<template>
 <v-app class="about">
   <section style="height:50px"></section>
   
   <section class="container">
    <v-banner
    elevation="9"
    icon="mdi-information"
    
    >
    <p class="">Cuida y cuidate del <strong>Covid-19 manten la distancia adecuada y sigue los protocolos de bioseguridad, para
      mayor informacion presiona </strong> <a href="https://www.google.com/">Aqui</a></p>
    </v-banner>
   </section>

    <section class="container">
      <v-main>
        <div class="titulo text-center">
          <h2 class="mb-4" style="color:green">ThingSees IoT</h2>
          <p>ThingSees en una plataforma gratuita de IoT(Internet de las cosas), nuestro proposito es brindar
            soluciones tecnologicas para la seguridad de las personas y bienes materiales.

          </p>
          <p>
            Somos una <strong>Startup</strong> que lleva tiempo en el sector IoT investogando y desarrollando y nuestro logo es siempre el 
            bienestar del mundo creando servicios y productos que puedan ayudar al medio ambiente y a la poblacion.

          </p>
          <p>
            Si quieres colaborar en el desarrollo de ThingSees puedes visitar nuestra pagina web para mas detalles <strong>www.thingsees.com.</strong> 
            El sensor de registro biometrico es un dispositivo open source por lo tanto quien sea puede realizarlo para
            mayor informacion revisar la seccion de doc(documentacion) 
          </p>
          <p>
            Si bien la plataforma es gratuita y lo sera siempre recibimos donaciones o que nos invites un cafe :)
          </p>
        </div>

        <section class="mt-3 ">
        <v-flex style="height:300px">
          <v-layout justify-center>
            <div>
              <v-img class="p-5"
            lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="700"
                    max-width="700"
                    src="https://lenovopress.com/assets/images/DS0084/Pivot3%20Image%20Bottom%20Page%201.png"
              
            ></v-img>
            </div>
          </v-layout>
        </v-flex>
      </section>
      </v-main>
    </section>

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
  name:'about',
  data(){
    return{
        icons: [
        
        'mdi-github',
        'mdi-instagram',
        'mdi-youtube',
      ],
    }
  }
}
</script>

<style scoped>
.about{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 27%, rgba(151, 151, 151, 0.228) 78%);
}
.hello {
  width: 200%;
  height: 300px;
  
}
.helloq {
  width: 200%;
  height: 300px;
  display: flex;
}

</style>