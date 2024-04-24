import './App.css';
import { useState } from 'react';

function App() {
  const [responseData, setData] = useState('');
  const [text, setText] = useState(''); // Metni bir state içinde saklayalım

  const gettitle = () => {
    fetch('https://ataturk.vercel.app/en')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error)); // Hata durumunu ele alalım
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img className='foto' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLR5nNg0ihiQX2-y3iwJ_BN5nBLtIoVlvaJutMxaVl_VYXSsBaRlb29rly7sLmyBxzkEqiWsvhZVfyx9GoB6wMgfHv6F0_jqF98A0Hl_qpIczHrxycy2-GByM5_R7GpJukAIFKpp_kaw5KHXSHUoxLIMi_skU9cT5WFS6X9iLhAcnvteJ2OIS-0IG1iOc/w1600/Atat%C3%BCrk%C3%BCn%20%C3%96l%C3%BCm%C3%BC.webp" />
          <div className="text-overlay">
            <div>{text}</div> {/* Kullanıcı tarafından girilecek metin */}
            <div className='randomText'>
              {responseData.quote} {/* "quote" özelliğini görüntüle, ancak responseData boşsa veya quote özelliği yoksa hata almayalım */}
            </div>
          </div>
        </div>
        <button className="App-button" onClick={gettitle} type="button">Create Quote</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          baha
        </a>
        <span className='author'> Author: Baha</span>
      </header>
    </div>
  );
}

export default App;
