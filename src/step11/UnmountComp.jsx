//파일명: src/step11/UnmountComp.jsx
import { useState, useEffect } from "react";

export function UnmountComp(){
  const[mounted, setMounted] = useState(true);
  useEffect(() =>{
    console.log('콤포넌트 마운딩됨');//마운팅된뒤, 수정된뒤 실행
    return ()=>{
      console.log('콤포넌트 언마운팅 전');
    }
  },[]);

  return (
  <div>
    콤포넌트
  </div>
  );


}