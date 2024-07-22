import { useState,useEffect } from "react";

export function FormTest4(){
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numGuest, setNumGuest] = useState(0);
  const handleChangeCheck = (event)=>{
    const _chekced = event.target.checked;
    setHaveBreakfast(_chekced);    
    console.log('아침식사1 => '+haveBreakfast);
  }
  const handleChangeInput = (event)=>{
    const _value = event.target.value;
    setNumGuest(_value);    
    console.log('인원1 => '+numGuest);
  }
  useEffect(
    ()=>{
      console.log('아침식사2=> '+haveBreakfast);
    },[haveBreakfast]
  );
  useEffect(
    ()=>{
      console.log('인원2=> '+numGuest);
    },[numGuest]
  );

  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(`아침식사:${haveBreakfast}, 인원:${numGuest}`);
  }
  
  return (
    <form onSubmit={handleSubmit} >
      <label >
        아침식사
        <input type="checkbox"  checked={haveBreakfast}
        onChange={handleChangeCheck}/>
      </label>
      <br/>
      <label >
        <input type="number"  value={numGuest}
        onChange={handleChangeInput}/>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}