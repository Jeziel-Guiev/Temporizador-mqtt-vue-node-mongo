

<template>
  <v-app class="signin">
    <section style="height:50px"></section>
    <div style="">

<v-sheet
  
  class="signin rounded-xl mx-auto mt-5 "
  elevation="11"
  height="300"
  width="300"
  
>
<v-main>
  <h3 class="text-center p-0" style="">Iniciar sesion</h3>
  <div class="mx-auto" style="width:270px">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="text-center"
  >
   

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      type="email"
      required
    ></v-text-field>
    <v-text-field
        type="password"
          v-model="password"
          :counter="20"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
    <div class="mx-auto  mb-1">
      <v-btn @click="ingresar" >Ingresar</v-btn>
    </div>
    <a class="btn text-center" @click="signin">Registrate</a>

    </v-form>
    </div>
  </v-main>
</v-sheet>


    </div>


                <section class="footer" style="margin-top:200px">
            <v-card height="px">
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
import axios from 'axios'
  export default {
    data: () => ({
      icons: [
        
        'mdi-github',
        'mdi-instagram',
        'mdi-youtube',
      ],
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Password must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
    }),

    methods: {
      async ingresar(){
        const data={
          email:this.email,
          password:this.password
        }
        this.$router.push('/dashboard/'+localStorage.getItem("userix"))
        let config={headers:{"Content-Type":"application/json"}}
        await axios.post(process.env.VUE_APP_URL_SERVER+'/signin-user',data,config).then(({data})=>{
          this.email=''
          this.password=''
          if(data.state==1){
            localStorage.setItem("userix", data.name);
            localStorage.setItem("rolx", data.rol);
            localStorage.setItem("emailx", data.cuenta);
            localStorage.setItem("tokenXD", data.token);
            this.$router.push('/dashboard/'+localStorage.getItem("userix"))
          }else{
                       alert(data.message);
             }
        
        }).catch(err=>alert('error password'));

      },
      signin(){
        this.$router.push('/signup')
      },
      validate () {
        this.$refs.form.validate()
      },
     
    
    },
  }
</script>
<style scoped>
.signin{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 27%, rgba(151, 151, 151, 0.228) 78%);
}
</style>