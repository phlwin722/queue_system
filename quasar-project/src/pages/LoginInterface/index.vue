<template>
  <div class="flex flex-center">
   <div class="q-pa-md" style="max-width: 400px">
    <h2 style="text-center">Login </h2>
   <q-form
     @submit="onSubmit"
     @reset="onReset"
     class="q-gutter-md"
   >
     <q-input
       filled
       v-model="email"
       label="Email "
       type="email"
       hint="Email"
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something',
       ]">
       </q-input>
    
     
     <q-input 
         v-model="password" 
         filled :type="isPwd ? 'password' : 'text'" 
         hint="Password"
         label="Password"
         lazy-rules
       :rules="[
         val => val !== null && val !== '' || 'Please type your password',
       ]"
         >
         <template v-slot:append>
           <q-icon
             :name="isPwd ? 'visibility_off' : 'visibility'"
             class="cursor-pointer"
             @click="isPwd = !isPwd"
           />
         </template>
     </q-input>
     <div 
        class="text-right cursor-pointer"
        @click="registerPage">
         Register
     </div>
     <q-toggle 
         v-model="accept" 
         label="I accept the license and terms" 
     />

     <div>
       <q-btn 
           label="Submit" 
           @click="goAdmin"
           color="primary"
       />
     </div>
   </q-form>

 </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'  
  
export default {
 setup () {
   const $q = useQuasar()
   const router = useRouter(); // ✅ Define router instance

   const email = ref(null)
   const password = ref(null)
   const accept = ref(false)

   const registerPage = () => {
      router.push('/register')
    }

    const goAdmin = () => {
      router.push('/admin/dashboard'); // ✅ Use router instance
    };
  

   return {
     email,
     accept,
     password: ref(''),
     isPwd: ref(true),
     registerPage,
     goAdmin,

/*      onSubmit () {
       if (accept.value !== true) {
         $q.notify({
           color: 'red-5',
           textColor: 'white',
           icon: 'warning',
           message: 'You need to accept the license and terms first'
         })
       }
       else {
         $q.notify({
           color: 'green-4',
           textColor: 'white',
           icon: 'cloud_done',
           message: 'Submitted'
         })
       }
     },
 */
   }
 }
}
</script>