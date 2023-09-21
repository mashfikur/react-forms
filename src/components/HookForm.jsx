import useInputState from "../hooks/useInputState";

const HookForm = () => {

    const [name,handleChange]=useInputState('Myself')

    const handleSubmit= e =>{
        e.preventDefault();
        console.log('form value',name)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} type="text" name="text" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
