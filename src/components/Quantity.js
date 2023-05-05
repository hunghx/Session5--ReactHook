import React, { useState, useEffect, useRef } from "react";
import Children from "./Children";

export default function Quantity({ count }) {
  const [number, setNumber] = useState();
  const [check, setCheck] = useState(true);
  // useRef

  const numberCount = useRef();

  const handleIncreaseAuto = () => {
    numberCount.current = setInterval(function () {
      setNumber((pre) => pre + 1);
    }, 1000);
  };
  const handleStopIncrease = () => {
    clearInterval(numberCount.current);
  };

  const changecheck = () => {
    setCheck(!check);
  };
  // hàm tăng
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  // hàm giảm
  const handleDeIncrease = () => {
    setNumber(number - 1);
  };

  //useEffect dạng không có phụ thuộc : được gọi khi component mount lần đầu và sau mỗi lần re-render lại .
  useEffect(() => {
    console.log("use-effect dạng 1 được gọi");
  });
  // useEffect có phụ thuộc là 1 mảng rỗng : được gọi duy nhất 1 lần khi component được mount
  useEffect(() => {
    console.log("use-effect dạng 2 được gọi");
    setNumber(count);
  }, []);
  // useEffect có phụ thuộc khác mảng rỗng : được gọi sau khi component được mount, khi có sự thay đổi của các phụ thuộc
  useEffect(() => {
    console.log("====================================");
    console.log("luỹ thừa bậc 2 của number" + Math.pow(number, 2));
    console.log("====================================");
  }, [number]);
  return (
    <div>
      {console.log("render")}
      <span onClick={handleDeIncrease}> - </span>
      <span>{number}</span>
      <span onClick={handleIncrease}> + </span>

      <button onClick={changecheck}>change</button>
      <Children />

      <button onClick={handleIncreaseAuto}>start</button>
      <button onClick={handleStopIncrease}>Stop</button>
    </div>
  );
}
