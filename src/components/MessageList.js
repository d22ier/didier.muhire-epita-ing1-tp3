import React from "react";
import { Timeline } from "antd";

const MessageList = ({ messages }) => (
  <Timeline>
  {messages.map(m=>(
  <Timeline.Item key={m.id}>
  {m.date}<strong>{m.user}</strong> : {m.text}
  </Timeline.Item>
  ))}
  </Timeline>
);

export default MessageList;
