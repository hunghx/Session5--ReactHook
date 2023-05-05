import React, { useContext } from "react";
import { themeContext } from "../App";
import Chat from "./Chat";

export default function Children() {
  let count = useContext(themeContext);
  return (
    <div>
      Dây là số count : {count}
      <Chat />
    </div>
  );
}
