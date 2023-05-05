import React, { useContext } from "react";
import { themeContext } from "../App";

export default function Chat() {
  let value = useContext(themeContext);
  return <div>CHat nhan duoc gia tri count : {value}</div>;
}
