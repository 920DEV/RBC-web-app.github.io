import React ,{useState}from "react";

const Signup = (props) => {

  const [email, setEmail] = useState(" ");

  const  [pass,setPass] = useState(" ");

  const [u_name, setUsername] = useState(" ");

  // handling email and user name
  const handleSubmit = (e) => {
    e.preventDefalut();
    console.log(email);
    console.log(pass);
  };

  return (
    <>
      <section className="signup-section">
        <aside className="singup-image">Side image</aside>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="U_name">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Your User Name"
            value={u_name}    // user name
            onClick= {(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter Your Password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already Registered ! Login Here</button>
      </section>
    </>
  );
};

export default Signup;
