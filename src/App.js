import { useEffect, useState } from 'react';
import * as text from './text/text'
import './App.scss';

const App = () => {
  const [state, setState] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [contents, setContents] = useState([text.deafaultText]);

  const test = (e) => {
    if(e.key === 'Enter') (console.log('enter'))
  }

  useEffect((e) => {
    document.addEventListener('keyup', (e) => test(e))
    if(!isLogin) (setContents([...text.deafaultText]))
  })


  return (
      <div className='App'>
        {contents}
      </div>
  );
}


export default App;