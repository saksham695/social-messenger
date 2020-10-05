import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";
import Timestamp from "react-timestamp";

function getTimeFromDate(time) {
  var timestamp = time * 1000;
  return new Date(timestamp).toTimeString();
}

const Message = forwardRef(({ message, userName }, ref) => {
  const isUser = userName === message.userName;
  const time = getTimeFromDate(message.timestamp).split(" ")[0].split(":");

  const messageTime =
    time[0] >= 12
      ? `${time[0] - 12} : ${time[1]} pm`
      : `${time[0]} : ${time[1]} am`;

  return (
    <div
      ref={ref}
      className={`message${userName === message.userName ? "-user" : ""}`}
    >
      <Card
        className={
          userName === message.userName
            ? "message-user-card"
            : "message-guest-card"
        }
      >
        <CardContent>
          <Typography color="white" component="h2" variant="h5">
            {!isUser
              ? `${message.userName ? message.userName : "Unknown"}:`
              : ""}{" "}
            {`${message.message} `}
          </Typography>
        </CardContent>
        <p style={{ textAlign: "right", fontSize: "10px" }}>{messageTime}</p>
      </Card>
    </div>
  );
});

export default Message;
