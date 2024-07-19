//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
//import {App} from './step_test/App';
import {App} from './step13/App'; //<---

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {console.log('render')}
    <App/>
  </>
);
