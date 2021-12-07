import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./Contact.module.css";

function Contact() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userMessage, setUserMessage] = useState();

  const onSubmit = () => {
    console.log("sup");
  };

  return (
    <div>
      <Container>
        <div className={styles["display"]}>
          <div>
            <p>Please feel free to contact me!</p>
          </div>
          <form onSubmit={onSubmit}></form>
          <span>Name</span>
          <input onChange={(e) => setUserName(e.target.value)} />
          <span>Email</span>
          <input onChange={(e) => setUserEmail(e.target.value)} />
          <span>Phone</span>
          <input onChange={(e) => setUserEmail(e.target.value)} />
          <span>Message</span>
          <input onChange={(e) => setUserMessage(e.target.value)} />
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
  flex-direction: column;
  align-items: flex-end;

  margin: 50px 100px;
  transition: 250ms;
`;
