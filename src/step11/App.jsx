// import { Counter } from "./Counter";
// import { TimerComp } from "./TimerComp";
// import { ComponentWithEffect } from './ComponentWithEffect'; 
// import { UnmountComp } from "./UnmountComp";
import {UseMemoComp} from "./UseMemoComp";
import { UseCallbackComp } from './UseCallbackComp'; // 파일 경로에 따라 수정
export function App(){
  return (
    <>
     {/* <Counter/>  */}
      {/* <TimerComp/>   */}
      {/* <ComponentWithEffect/>  */}
      {/* <UnmountComp/>  */}
      {/*  <UseMemoComp/> */}

     <UseCallbackComp/> 

    </>
  );
}