import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input } from "@mui/material";
import Message from "./Message";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      username: "Geeth",
      text: "Hey friends",
    },
    {
      username: "Madhawa",
      text: "whatsup",
    },
  ]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  console.log(input);
  console.log(messages);
  return (
    <div className="App">
      <h1>Messenger</h1>
      <form>
        <FormControl>
          <InputLabel color="success">Enter a message</InputLabel>
          <Input
            value={input}
            color="success"
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            size="small"
            type="submit"
            color="success"
            onClick={sendMessage}
          >
            Post
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message
          usernamee={username}
          username={message.username}
          text={message.text}
        />
      ))}
    </div>
  );
}

export default App;
