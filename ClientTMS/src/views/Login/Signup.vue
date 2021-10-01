

<template>
  <v-app class="signin">
    <section style="height:50px"></section>
    <div style="">

<v-sheet
  
  class="signin rounded-xl mx-auto mt-5 "
  elevation="11"
  height="360"
  width="300"
  
>
<v-main>
   <div>
     
   </div>
  <h3 class="text-center p-0" style="">Registrarse</h3>
  <div class="mx-auto" style="width:270px">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="text-center"
  >
   
 <v-text-field
      v-model="user"
      
      label="User"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
        type="password"
          v-model="password"
          :counter="10"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
    <div class="mx-auto mb-1">
      <v-btn @click="signup" >Registrarse</v-btn>
    </div>
    <a class="text-center mt-3" @click="login">Login</a>

 

  


  
  </v-form>
  </div>
</v-main>
</v-sheet>


    </div>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    data: () => ({
      
      user:'',
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
      checkbox: false,
    }),

    methods: {
      async signup(){
        const data={
          name:this.user,
          email:this.email,
          password:this.password
        }
        let config={
          headers:{"Content-Type":"application/json"}
        }
        await axios.post(process.env.VUE_APP_URL_SERVER+'/signup-user',data,config).then(({data})=>{
          this.email=''
          this.user=''
          this.password=''
         
          if(data.status=='oki'){
            this.$router.push('/signin')
          }else{
             this.$alert('no ');
          }
         
        }).catch(err=>console.log('err'));
      },
      login(){
        this.$router.push('/signin')
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
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