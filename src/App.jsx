import "./App.css";
import ReusableForm from "./components/ReusableForm";
// import HookForm from "./components/HookForm";
// import RefForm from "./components/RefForm";
// import SimpleForm from "./components/SimpleForm";
// import StatefulForm from "./components/StatefulForm";

function App() {

  const handleSignUp = (data)=>{
    console.log('sign up data',data)
  }
  const handleLogIn = (data)=>{
    console.log('login data',data)
  }

  return (
    <>
      <h1>React Forms</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      <ReusableForm formTitle={"Sign Up"} btnTitle={"Submit"} handleSubmit={handleSignUp} ></ReusableForm>
      <ReusableForm formTitle={"Login"} btnTitle={"log In"} handleSubmit={handleLogIn} ></ReusableForm>
    </>
  );
}

export default App;
