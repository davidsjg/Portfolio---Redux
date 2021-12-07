import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./Contact2.module.css";
import fish from "./fish.JPG";
import fish2 from "./fish2.JPG";
import fish3 from "./fish3.jpg";

import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_HTcdS3U6s5IFjdiYFuFJt");

function Contact2() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    useMess: "",
    reply_to: "",
  });

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

    send(
      "service_m4i6k16",
      "template_0otklia",
      toSend,
      "user_HTcdS3U6s5IFjdiYFuFJt"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
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
          <Form onSubmit={onSubmit} className={styles["contact__form"]}>
            <InputGroup className="mb-3" style={{ marginBottom: 2 }}>
              <FormControl
                placeholder="YourName"
                aria-label="YourName"
                aria-describedby="basic-addon1"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
                ref={userName}
              />
            </InputGroup>
            <InputGroup className="mb-3" style={{ marginBottom: 2 }}>
              <FormControl
                placeholder="Your Email Address"
                aria-label="YourEmail"
                aria-describedby="basic-addon1"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
                ref={userEmail}
              />
            </InputGroup>
            <InputGroup className="mb-3" style={{ marginBottom: 2 }}>
              <FormControl
                as="textarea"
                placeholder="Your Message"
                aria-label="YourMessage"
                aria-describedby="basic-addon1"
                name="useMess"
                value={toSend.useMess}
                onChange={handleChange}
                ref={userMessage}
              />
            </InputGroup>
            <Button
              type="submit"
              variant="secondary"
              className={styles["submitButton"]}
            >
              Submit
            </Button>
          </Form>
          <div></div>
        </div>
      </Container>
    </div>
  );
}

export default Contact2;

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
