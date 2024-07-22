import { useParams } from "react-router-dom";
const users = [
  {id:1, name:"홍길동", job:"백수"},
  {id:2, name:"손흥민", job:"운동선수"},
  {id:3, name:"김형준", job:"선수"},
]

export function User() { 
  const {id} = useParams();
  const user = users.find(item=> item.id === Number(id));

  return (
    <div>
      { user ? (
        <>
        <h2>사용자 아이디 : {id}  </h2>
        <p>이름:{user.name}</p>
        <p>이름:{user.job}</p> 
        </>
      ):(<p>자료없음</p>)
      }
    </div> 
  );
}