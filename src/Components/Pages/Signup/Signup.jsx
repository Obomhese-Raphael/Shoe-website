import "./Signup.css";
import nike_logo from "../../../assets/logo(2).webp";
import jordan_logo from "../../../assets/jordan-logo(4).png";
import { useState } from "react";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emails, setEmails] = useState([]);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;

    if (validateEmail(email)) {
      setSuccessMessage(
        "Signup successful. Check your Gmail to confirm your account."
      );
      setEmails([...emails, email]);
      console.log("Signup Successful");
    } else {
      setErrorMessage("Invalid Email, Try again");
      console.log("Signup not Sucessful");
    }
  };

  return (
    <div className="signup sign-up-form">
      <img src={nike_logo} className="signup-nike" alt="" />
      <img src={jordan_logo} className="signup-jordan" alt="" />
      <p className="msg">
        Enter your email to join us or sign <br /> in.
      </p>
      <div className="select">
        <p className="ngn">
          <a href="#">Nigeria</a>
        </p>
        <a className="change" href="">
          Change
        </a>
      </div>
      <form action="POST" className="input-group" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email*"
          className="input-box"
          autoComplete="on"
          type="email"
          required
        />
        {successMessage ? (
          <p className="success-message">{successMessage}</p>
        ) : (
          <p className="error-message">{errorMessage}</p>
        )}
        <button className="continue submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
