import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, userName }, ref) => {
  const isUser = userName === message.userName;
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
      </Card>
    </div>
  );
});

export default Message;
