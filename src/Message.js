import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CardContent } from "@mui/material";
import "./Message.css";

function Message(props) {
  const isUser = props.usernamee === props.username;
  return (
    <div className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" varient="h5" component="h2">
            {props.username} : {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
