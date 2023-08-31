import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter your name.."></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Enter your name.."
            ></input>
          </div>{" "}
          <div>
            <label>Name</label>
            <textarea required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
