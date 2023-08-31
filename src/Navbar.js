import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

function Navbar({ router }) {
  console.log(router);
  return (
    <header>
      <nav>
        <div>
          <p>Eunice</p>
        </div>
        <ul className="links">
          <li>
            <p
              class={`link ${router === "/aboutme" ? "active" : ""}`}
              onClick={() => window.location.replace("/aboutme")}
            >
              About me
            </p>
          </li>
          <li>
            <p
              class={`link  ${router === "/portfolio" ? "active" : ""}`}
              onClick={() => window.location.replace("/portfolio")}
            >
              Portfolio
            </p>
          </li>
          <li>
            <p
              class={`link  ${router === "/contact" ? "active" : ""}`}
              onClick={() => window.location.replace("/contact")}
            >
              Contact
            </p>
          </li>
          <li>
            <p
              class={`link  ${router === "/resume" ? "active" : ""}`}
              onClick={() => window.location.replace("/resume")}
            >
              Resume
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
