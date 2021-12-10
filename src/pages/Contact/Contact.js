import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import styles from "./Contact.module.css";
import fish from "./fish.JPG";
import fish2 from "./fish2.JPG";
import fish3 from "./fish3.jpg";

import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_HTcdS3U6s5IFjdiYFuFJt");

function Contact() {
  const navigate = useNavigate();

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    useMess: "",
    reply_to: "",
  });

  const from = useRef();
  const email = useRef();
  const message = useRef();

  const [from_Name, setFrom_Name] = useState();
  const [reply_to, setReply_to] = useState();
  const [useMess, setUseMess] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    let curUser = from.current.value;
    let curEmail = email.current.value;
    let curMessage = message.current.value;

    {
      if (curUser === "" || curEmail === "" || curMessage === "") {
        return alert("Please fill in all input fields.");
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
        alert("Email sent successfully");
        console.log("SUCCESS!", response.status, response.text);
        from.current.value = "";
        email.current.value = "";
        message.current.value = "";
        navigate("/");
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
        <Link to="/" className={styles["homeLink"]}>
          <div className={styles["homeButton"]}>Return Home</div>
        </Link>
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
            <input
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              ref={from}
            />

            <span>Email</span>
            <input
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              ref={email}
            />

            <span>Message</span>
            <input
              name="useMess"
              value={toSend.useMess}
              onChange={handleChange}
              ref={message}
            />

            <button type="submit" className={styles["submitButton"]}>
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;

const Container = styled.div`
  min-height: calc(100vh - 185px);
  background-image: url("https://i.imgur.com/YxzpERh.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin: 50px 100px;
  transition: 250ms;
`;
