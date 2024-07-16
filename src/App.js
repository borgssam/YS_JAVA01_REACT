import logo from './logo.svg';
import './App.css';
function Ul(){
  return (
    <ul>
      <li>강아지</li>
      <li>토끼</li>
      <li>고양이</li>
      <li>거북이</li>
    </ul>
  );
}
function Table(){
  return (
    <table border='1px'>
      <tr>
        <td>이름</td>
        <td>나이</td>
      </tr>
      <tr>
        <td>홍길동2</td>
        <td>24</td>
      </tr>
      <tr>
        <td>이순신2</td>
        <td>60</td>
      </tr>
    </table>

  );
}
function App() {
  return (
    <div className="App">
      <Ul></Ul>
      <Table></Table>
      
    </div>
  );
}

export default App;
