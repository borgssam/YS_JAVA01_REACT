import './MemberList.css';
export function MemberList(){
  return (
    <>
    <div className="input-container">
      <form action="">
        <table >
          <tr>
            <td>이름</td>
            <td><input type="text" placeholder="이름" id="nameInput"/></td>
            <td rowspan="3"><button id="addBtn">추가</button></td>
          </tr>
          <tr>
            <td>나이</td>
            <td><input type="text" placeholder="나이" id="ageInput"/></td>
          </tr>
          <tr>
            <td>직업</td>
            <td><input  type="text" placeholder="직업" id="jobInput"/></td>
          </tr>
        </table>
      </form>
    </div>

    <div className="list-container">
      <ul id="userList">
        <li>홍길동(34세) 무직 <button className="delBtn">삭제</button></li>
        <li>이순신(54세) 군인 <button className="delBtn">삭제</button></li>
        <li>세종대왕(74세) 정치인 <button className="delBtn">삭제</button></li>
      </ul>

    </div>
    
  </>
  );
}