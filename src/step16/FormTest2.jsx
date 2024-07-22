import {useState} from 'react'

export function FormTest2(){
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
      <label>요청사항:
      <textarea id="name" onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  );

}