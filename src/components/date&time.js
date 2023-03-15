import React from "react";
import { useState } from "react";
export default function DateAndTime(){
    const date = new Date();
  const[time, setTime] = useState(date.toLocaleString("en-US"));

  setInterval(()=>{
    const time=new Date();
    setTime(time.toLocaleString("en-US"));
  },1000)

    return(
        <>{time}</>
    )
}
