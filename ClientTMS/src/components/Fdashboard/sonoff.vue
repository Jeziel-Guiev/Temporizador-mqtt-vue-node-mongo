<template>
  <div>
    <v-app class="container">
     <div class="container">
        <h2 class="text-center">Sonoff</h2>
        <v-sheet elevation="4" rounded>
          <div class="text-center"><p>Encender apagar led</p></div>
          <v-row>
            <v-col cols="4" class="d-flex justify-center align-center">
              <v-btn @click="createConnection">Crear conecion </v-btn>
              <v-icon size="50" :color="color">mdi-nut</v-icon>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
               <v-btn @click="destroyConnection">Disconnet</v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
                <div>
                   <v-switch
                        :disabled="stateswitch"
                        v-model="switch1"
                        
                      ></v-switch>
                      <v-icon size="50" :color="colorbombilla">mdi-lightbulb-on</v-icon>
                    
                </div>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet elevation="4" rounded>
          <div class="container mt-5">
            <div class="text-center"><p>Detector de movimiento</p></div>
          <v-row>
            <v-col cols="4" class="d-flex justify-center align-center">
              <v-btn @click="doSubscribe">Subscribe</v-btn>
              <v-icon size="50" :color="colorsm">mdi-nut</v-icon>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
               <v-btn @click="doUnSubscribe">deSubscribe</v-btn>
             
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
               <v-icon size="50" :color="colordm">mdi-podcast</v-icon>
               <h2>detectado: {{contador}}</h2>
            </v-col>
          </v-row>
            <v-row>
             
            <v-col cols="12" class="d-flex justify-center align-center">
              <div class="text-center">
                 fechas de deteccion
              </div>
           
            </v-col>
           <v-col cols="12">
               <v-simple-table height="200px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        detectado
                      </th>
                     <th class="text-left">
                        fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in arraydetectation"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                     <td>{{ item.fecha }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
           </v-col>
          </v-row>
          </div>
        </v-sheet>

        <v-sheet elevation="4" rounded>
          <div class="container mt-5">
            <div class="text-center"><p>Temporizador</p></div>
         
          <v-row>
             <v-col cols="6" class="d-flex justify-center align-center">
             <v-time-picker
                format="ampm"
            
                
                
                v-model="temporizador.start"
              ></v-time-picker>
            </v-col>
            <v-col cols="6" class="d-flex justify-center align-center">
                <v-time-picker
                format="ampm"
                v-model="temporizador.end"
              ></v-time-picker>
            </v-col>
             <v-col cols="6" class="d-flex justify-center align-center">
              <v-btn :color="butoncolor" @click="setintervaler">Enceder</v-btn>
            </v-col>
             <v-col cols="6" class="d-flex justify-center align-center">
              <v-btn @click="stopsetinterval">Detener</v-btn>
            </v-col>
          </v-row>
           </div>
        </v-sheet>
     </div>
    </v-app>
  </div>
</template>

<script>
import mqtt from 'mqtt'
  export default {
    data () {
      return { 
        butoncolor:'dark',
        temporizador:{
          start:'',
          end:''
        },
        modalstart:false,
        modalend:false,
        egreso:{
          detail:''
        },
        datestart:new Date().toISOString().substr(0, 10),
        dateend:new Date().toISOString().substr(0, 10),
        Idsetinterval:'',
        arraydetectation:[],
        contador:0,
        colordm:'dark',
        colorsm:'red',
        colorbombilla:'black',
        stateswitch:true,
        color:'red',
        switch1: false,
        
        connection: {
              host: 'localhost',
              port: 8083,
              endpoint: '/mqtt',
              clean: true, // Reserved session
              connectTimeout: 4000, // Time out
              reconnectPeriod: 4000, // Reconnection interval
              // Certification Information
              clientId: '23esp9823',
              username: 'uneria23',
              password: '1234',
            },
            subscription: {
              topic: 'esp8266/led',
              qos: 0  ,
            },
            publish: {
              topic: 'esp8266/led',
              qos: 0,
              payload: 'off',
            },
            receiveNews: '',
            qosList: [
              { label: 0, value: 0 },
              { label: 1, value: 1 },
              { label: 2, value: 2 },
            ],
            client: {
              connected: false,
            },
            subscribeSuccess: false,
      }
    
    },
    watch:{
      
      switch1:{
        immediate:true,
        handler(){
           if (this.client.connected) {
          
        if(this.switch1==true){
          this.colorbombilla='orange'
          this.doPublish('off');
        }else{
          this.colorbombilla='dark'
          this.doPublish('on');
        }           
           }

       }
      }
    },
    methods: {
      setintervaler(){
        const { topic, qos, payload } = this.publish;
        const client=this.client;
        
       this.butoncolor='green'
       const prueba=(new Date()).setHours(0,0,0,0)
    
        const fechainicial=new Date(((new Date(prueba)).toISOString().substr(0, 10))+"T"+this.temporizador.start+":00");
        const fechafinal=new Date(((new Date(prueba)).toISOString().substr(0, 10))+"T"+this.temporizador.end+":00");

     // console.log(fechainicial);
      this.Idsetinterval= setInterval(function(){
          //  console.log('hello');

           
           
                var value=(new Date());
               // console.log(value)
               
                if(value>=fechainicial && value<=fechafinal){
               
                  
                    client.publish(topic,payload, qos, error => {
                      if (error) {
                        console.log('Publish error', error)
                      }
                    })
                }else{
                 client.publish(topic,'on', qos, error => {
                      if (error) {
                        console.log('Publish error', error)
                      }
                    })
                }
        }, 3000);
      },
      stopsetinterval(){
        this.butoncolor='dark'
        clearInterval(this.Idsetinterval);
      },
      doSubscribe() {
        const { topic, qos } = this.subscription
        this.client.subscribe('esp8266/pir', { qos }, (error, res) => {
          if (error) {
            console.log('Subscribe to topics error', error)
            return
          }
          this.colorsm='green';
          this.subscribeSuccess = true
          console.log('Subscribe to topics res', res)
          })
      },
      createConnection(){
      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = `ws://${host}:${port}${endpoint}`
      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        this.color='green';
        this.stateswitch=false;
        console.log('Connection succeeded!')
      })
        this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.receiveNews='';
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message)
        console.log(this.receiveNews)
        if(this.receiveNews=="detectado"){
          const detectado={
            name:this.contador,
            fecha:(new Date()).toISOString().substr(0, 19)
          }
          this.arraydetectation.push(detectado)
          this.contador++;
          this.colordm='green'
        }else{
          if(this.receiveNews=="no"){
              this.colordm='dark'
          }
        }
         this.receiveNews='';
      })
      },
      doUnSubscribe() {
        const { topic } = this.subscription
        this.client.unsubscribe('esp8266/pir', error => {
          if (error) {
            console.log('Unsubscribe error', error)
          }
          this.colorsm='red';
        })
      },
      doPublish(data) {
        
        const { topic, qos, payload } = this.publish
        this.client.publish(topic, data, qos, error => {
          if (error) {
            console.log('Publish error', error)
          }
          
        })
      },
      destroyConnection() {
        if (this.client.connected) {
          try {
            this.color='red';
            this.stateswitch=true;
            this.client.end()
            this.client = {
              connected: false,
            }
            console.log('Successfully disconnected!')
          } catch (error) {
            console.log('Disconnect failed', error.toString())
          }
        }
      }
    },
    destroyed(){
    this.destroyConnection();
    console.log('destroyed perfil');
  },

  }
</script>