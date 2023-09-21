import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

//   if we want the cursor to be auto focused on the name input field 

  useEffect(()=>{
    nameRef.current.focus()
  },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  ref={nameRef} type="text" name="text" />
        <br />
        <input ref={emailRef} type="email" name="email" />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
