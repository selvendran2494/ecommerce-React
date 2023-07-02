import { useState } from "react";

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form style={{ margin: "3rem" }}>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={() => {}} className="btn btn-primary">
        Submit
      </button>
      <div>
        Entered firstName : {firstName} <br/>
        Entered password : {password}
      </div>
    </form>
  );
};
export default LoginForm;
