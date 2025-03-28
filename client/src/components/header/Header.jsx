import "./header.css";
import axios from "axios";
import { useState } from "react";

export default function Header() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/enquireduser", {
        fullname,
        mobileno,
        email,
        description
      });
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="header">
      <div className="header-titles">
        <div className="header-div-top">
          <h1>Dr. Krishna Ayurveda Hospital</h1>
          <h3>विद्धकर्म, अग्नीकर्म आणि पंचकर्म केंद्र</h3>
        </div>
        <div className="header-div-bottom">
          <span>100% Ayurvedic Treatment</span>
          <span>Unlocking Wellness Naturally</span>
        </div>
      </div>
      <div className="header-enquiry-form">
        <div class="form">
          <form class="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)}/>
            <input type="tel" placeholder="Enter 10 Digit Mobile No" onChange={(e) => setMobileno(e.target.value)}/>
            <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
            <textarea placeholder="Describe your problem" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Enquire Now</button>
          </form>
        </div>
        <div className="phone-enquiry">
          <span>OR CALL </span>
          <span style={{ color: "orange", fontWeight: "600"}}>8412839460</span>
        </div>
      </div>
    </div>
  );
}
