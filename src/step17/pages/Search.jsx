import { useLocation } from "react-router-dom";
const users = [
  {id:1, name:"홍길동", job:"백수",     hobby:"steal",},
  {id:2, name:"손흥민", job:"운동선수", hobby:"football",},
  {id:3, name:"김형준", job:"선수",     hobby:"playing_game",},
]

export function Search(){
  const {search} =useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');
  const user = users.find(user=> user.hobby === query);
  return (  
        <div>
          { user ? (   
            <>
            <h1>찾는 취미는? {query} </h1>
            <p>이름:{user.name}</p>
            <p>이름:{user.job}</p> 
            </> 
          ):(
            <p>해당취미를 가진사람이 없습니다.</p>
          )}
        </div>
  );
}