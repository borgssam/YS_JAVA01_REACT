import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>강아지</li>
        <li>토끼</li>
        <li>고양이</li>
        <li>거북이</li>
      </ul>
      
      <table border='1px'>
        <tr>
          <td>이름</td>
          <td>나이</td>
        </tr>
        <tr>
          <td>홍길동</td>
          <td>24</td>
        </tr>
        <tr>
          <td>이순신</td>
          <td>60</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
