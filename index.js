

const app = Vue.createApp({
  data() {
    return {
        
      Value1: "SIGN UP",
      Value2: "LOGIN",
      loginLink: "./login.html",
      signupLink: "./signup.html",
    };
  },
  methods: {
    outputvalue1() {
      return this.Value1;
    },
    outputvalue2() {
      return this.Value2;
    },
   
  },
});

app.mount("#header");

const app2 = Vue.createApp({
  data() {
    return {
      Value3: "First Name",
      Value4: "Last Name ",
      Value5: "Address",
      Value6: "Password",
      Value7: "Email",
      Value8: "Gender",
      Value9: "City",
      Value10: "State",
      Value11: "Zip code",
      states:[  "Delhi",
      "Maharastra",
      "West Bengal",
      "Uttarakhand",
      "Uttarpradesh",
      "Gujrat",
      "Punjab",
      "Bihar",
      "Himachal Pradesh"],
       
    
    };
  },
  methods:{
    state(num){
          return this.states[num];
             }
          }
});

app2.mount("#formdata");
 
const app3=Vue.createApp({
    data(){
        return{
            Value:"SIGN UP"
        }
    }
 
});

app3.mount("#register");


