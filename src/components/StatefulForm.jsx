import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("PassWord Has to be more than 6 charectars");
    } else {
      setError("");
      console.log(name, email, pass);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleName}
          type="text"
          name="text"
          placeholder=" name"
        />
        <br />
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          placeholder=" email"
        />
        <br />
        <input
          onChange={handlePass}
          type="password"
          name="password"
          id=""
          placeholder=" password"
          required
        />
        <br />
        <button>Submit</button>
      </form>

      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default StatefulForm;
