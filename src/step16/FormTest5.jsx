import { useState, useEffect } from "react";

export function FormTest5(){
  const [name, setName]  = useState('');
  const [gender, setGender] = useState('여자');
  const handleChageName = (event)=>{
    setName(event.target.value);
  }
  useEffect(()=>{
    console.log('이름=>' + name);
  }, [name]);

  const handleChangeGender = (event)=>{
    setGender(event.target.value);
  }

  useEffect(()=>{
    console.log('성별=>' + gender);
  }, [gender]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(` 이름=>${name} \n 성별=>${gender}`);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" onChange={handleChageName} value={name} />
      </label>
      <br/>
      성별:
      <select value={gender} onChange={handleChangeGender}>
      <option value="남자">남자</option>
      <option value="여자">여자</option>
      </select>
      <br/>
      <button type="submit">제출</button>
    </form>
    </>
  );
}