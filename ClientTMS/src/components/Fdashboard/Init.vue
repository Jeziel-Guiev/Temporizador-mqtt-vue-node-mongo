<template>
    <v-app>
        <section>
            <div class="container text-left mt-4">
                <div class="display-1">Hola {{title}} bienvenido <v-icon color="green">mdi-circle-slice-8</v-icon></div>
            </div>
        </section>

        <section>
            <div class="container">
             <v-row >
                 <v-col cols="12" sm="4" >
                      <v-card class="mx-auto"
                        max-width="344"
                        outlined>
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                            HORA ACTUAL <v-icon color="pink lighten-1">mdi-clock</v-icon>
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                            Bolivia-Cbba
                            </v-list-item-title>
                            <v-list-item-subtitle>{{new Date().toISOString().substr(0, 10)}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar
                                tile
                                size="80"
                                color="white"
                                class="mx-auto my-auto"
                            >
                            <v-icon size="80" color="pink lighten-1">mdi-clock</v-icon>
                            </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions>
                        </v-card-actions>
                    </v-card>
                 </v-col>
                 <v-col cols="12" sm="4">
                      <v-card class="mx-auto"
                        max-width="344"
                        outlined>
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                            CLIMA <v-icon color="blue lighten-2">mdi-cloud</v-icon>
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                            {{temp/10}} ⁰C
                            </v-list-item-title>
                            <v-list-item-subtitle>Hermoso dia</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar
                                tile
                                size="80"
                                color="white"
                                class="mx-auto my-auto"
                            >
                            <v-icon size="80" color="blue lighten-2">mdi-cloud</v-icon>
                            </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions>
                        </v-card-actions>
                    </v-card>
                 </v-col>
                 <v-col cols="12" sm="4">
                      <v-card class="mx-auto"
                        max-width="344"
                        outlined>
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                            THINGSESS <v-icon color="red accent-3">mdi-heart</v-icon>
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                            Developend
                            </v-list-item-title>
                            <v-list-item-subtitle><a href="">www.thingsess.com</a></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar
                            class="mx-auto my-auto"
                                tile
                                width="70"
                                height="75"
                                color="white"
                            >
                            <img src="../../assets/Views/JGlogo.png" alt="">
                            </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions>
                        </v-card-actions>
                    </v-card>
                 </v-col>
             </v-row>
             <v-row>
                 <v-col>
                     <v-sparkline
                        :fill="fill"
                        :gradient="selectedGradient"
                        :line-width="width"
                        :padding="padding"
                        :smooth="radius || false"
                        :value="value"
                        auto-draw
                    ></v-sparkline>
                 </v-col>
             </v-row>
            </div>
        </section>
       
    </v-app>
</template>

<script>
import axios from 'axios'
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
    name:'init',
    data(){
        
        return{
                fill: true,
                selectedGradient: gradients[4],
                gradients,
                padding: 8,
                radius: 10,
                value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                width: 2,
            temp:'',
            location:null,
            errlocation:null,
            form:{
                name:localStorage.getItem('userix'),
                cuenta:localStorage.getItem('emailx'),
                rol:localStorage.getItem('rolx')
            },
            title:localStorage.getItem('userix'),
             recent: [
                {
                active: true,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'miBalance',
                },
                {
                active: true,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Mike Carlson',
                },
            
            ],
            
        }
    },
    async created(){
      //  console.log('creado')
         navigator.geolocation.getCurrentPosition(pos =>{
            this.location={
                lat:pos.coords.latitude,
                lon:pos.coords.longitude
            };
            console.log(pos.coords)
            axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+pos.coords.latitude+'&lon='+pos.coords.longitude+'&appid='+process.env.VUE_APP_URL_API_KEY).then(({data})=>{
                console.log(data)
                this.temp=data.main.temp
            }).catch(err=> console.log('err geolocation'))
        }, err =>{
            this.errlocation=err.message
        })
    }
}
</script>