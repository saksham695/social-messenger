import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => setUserName(prompt("Please Enter Your Name")), []);

  useEffect(() => {
    // runs when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot?.docs?.map((doc) => {
            return {
              id: doc.id,
              message: doc.data(),
            };
          })
        );
      });
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //setMessages([...messages, { userName: userName, message: input }]);
    console.log(messages);
    setInput("");
  };
  return (
    <div className="app">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt=""
      />

      <h2>Welcome {userName} </h2>

      <form className="app-form">
        <FormControl onSubmit={sendMessage} className="app-form-control">
          <InputLabel htmlFor="my-input">Enter a message</InputLabel>
          <Input
            className="app-input"
            id="my-input"
            placeholder="Enter a message..."
            value={input}
            onChange={handleChange}
          />
          <IconButton
            className="app-icon-button"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages?.map(({ message, id }) => {
          return <Message message={message} key={id} userName={userName} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
