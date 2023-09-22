const ReusableForm = ({ formTitle, btnTitle, handleSubmit }) => {

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.text.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data)
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="text" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <button>{btnTitle}</button>
      </form>
    </div>
  );
};

export default ReusableForm;
