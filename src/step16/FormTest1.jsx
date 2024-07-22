import {useState} from 'react'

export function FormTest1(){
  const [value, setValue] = useState('');
  const handleChange = (event)=>{
    setValue(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert('입력값: '+value);
  }
  return (
    <form  onSubmit={handleSubmit}>
      <label>이름</label>
      <input type="text"  id="name" onChange={handleChange}/>
      <button type="submit">제출</button>
    </form>
  );

}