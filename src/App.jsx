import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/Reusable/ReusableForm'
// import RefForm from './components/SImpleForm/RefForm/RefForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'


// import SimpleForm from './components/SImpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'


function App() {
  
  // const handleSignUpForm = data =>{
  //   console.log('Sign UP', data)
  // }
   
  // const handleUpdateProfile = data =>{
  //   console.log('Profile Update ', data)
  // }

  return (
    <>
      <h1>Form Master</h1>
      <br />

          <Grandpa></Grandpa>

      <div >
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <UseRef></UseRef> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReusableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpForm}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up</p>
        </div>
      </ReusableForm> */}


      {/*  */}
      {/* <ReusableForm 
      formTitle={'Profile update'} 
      submitBtnText='Update'
       handleSubmit={handleUpdateProfile}
       >
        <div>
          <h2>Update Profile</h2>
          <p>Please update your profile</p>
        </div>
       </ReusableForm> */}
      </div>
    </>
  )
}

export default App
