import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = () => (<h2>홈</h2>);
const About = () => (<h2>도움말</h2>);

export function Router1(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );

}