import './App.css';
import { useEffect, useRef, useState } from 'react';
import Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

function App() {
  const stompClient = useRef({})
  const [messageBox, setMessageBox] = useState([])
  const [listBox,setListBox] = useState([])
  const [textVal, setTextval] = useState("")
  const [num, setNum] = useState(0);
    const sock = new SockJS('http:localhost:8080/webSocket');

  const sendClick2 = () => {
    const newMessage = { userName: "AAA", content: textVal };
    try { 
      console.log(newMessage)
      stompClient.current.send("/hello", {}, JSON.stringify(newMessage));
      
    } catch (e) {
      console.log(e)
    }
  
  }

  useEffect(() => {
    console.log("Hello")
    stompClient.current = Stomp.over(sock)
    stompClient.current.connect({},()=>{
      stompClient.current.subscribe('/topic/roomId',(data)=>{
        const newMessage = JSON.parse(data.body);
        console.log("newMessage")
        setMessageBox(messageBox => [...messageBox, newMessage.content]);
        console.log("newMessage")
      });
  });
  },[]);
  const send = () => {
    setNum(num+1)
  }

  const changeText = (e) => {
    setTextval(e.target.value)
  }
  return (
    <div className="App">
      <div>{messageBox}</div>
      <div>{num}</div>
      <input type="text" name="textBox" onChange={changeText} value={textVal} />

      <button onClick={sendClick2}>click</button>
      <button onClick={send}>sss</button>
    </div>
  );
}

export default App;
