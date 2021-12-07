import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./Contact.module.css";
import fish from "./fish.JPG";
import fish2 from "./fish2.JPG";
import fish3 from "./fish3.jpg";

function Contact() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userMessage, setUserMessage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    {
      if (userName === "" || userEmail === "" || userMessage === "") {
        return alert("Please fill in name or email and a message.");
      } else if (userEmail === "" || userMessage === "") {
        return alert("Please fill in name or email.");
      } else if (userEmail === "" || userMessage === "") {
        return alert("Please fill in name or email.");
      } else {
        console.log("all input fields good to go");
      }
    }
  };

  return (
    <div>
      <Container>
        <div className={styles["fish"]}>
          <img src={fish} alt="" />
        </div>
        <div className={styles["fish2"]}>
          <img src={fish2} alt="" />
        </div>
        <div className={styles["fish3"]}>
          <img src={fish3} alt="" />
        </div>
        <div className={styles["display"]}>
          <div>
            <p>Please feel free to contact me!</p>
          </div>
          <form onSubmit={onSubmit} className={styles["contact__form"]}>
            <span>Name</span>
            <input onChange={(e) => setUserName(e.target.value)} />
            <span>Email</span>
            <input onChange={(e) => setUserEmail(e.target.value)} />
            <span>Phone</span>
            <input onChange={(e) => setUserEmail(e.target.value)} />
            <span>Message</span>
            <input onChange={(e) => setUserMessage(e.target.value)} />
            <div className={styles["submitButton"]}>Submit</div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;

const Container = styled.div`
  min-height: calc(100vh - 185px);
  background-image: url("/images/pic9.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin: 50px 100px;
  transition: 250ms;
`;
