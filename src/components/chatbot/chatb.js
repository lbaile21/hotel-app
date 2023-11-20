import React, { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader,
} from "@minchat/react-chat-ui";
// import { backendCall } from "../scripts/scripts";
import { parseInput } from "../../scripts/parseInput"


export const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      text: "What do you think? This location has great reviews about both snorkeling and hiking!",
      user: {
        id: 'AI Concierge',
        name: 'AI Concierge',
        avatar: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lyyXmbeoK5JiIBNCnzzjjg.png',
      },
    },
  ]);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages are updated
    const scrollContainer = chatContainerRef.current;
    setTimeout(() => {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }, 500);
  }, [messages]);

  let addMessage = (text, userId, userName) => {
    let newMessage = {
      text,
      user: {
        id: userId,
        name: userName,
      },
    };
    setMessages([...messages, newMessage]);


    setTimeout(async () => {
    //const info = await backendCall(); //THIS IS ACTUAL SERVER USECASE
    console.log(newMessage.text);
    let info = await parseInput(newMessage.text);
    if(info == "Sounds great!") {
     setTimeout(async () => {
        navigate("/hotels/:id");
     }, 1500)
    }
    //console.log("info... " + JSON.stringify(info.data))
    
      let responseMessage = {
        //text: info.data, 
        text: info,
        user: {
          id: 'AI Conceirge',
          avatar: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lyyXmbeoK5JiIBNCnzzjjg.png',
        },
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1500); 
  };

  return (
    <MainContainer style={{ height: '75vh', width: '30%' }}>
      <MessageContainer>
        <MessageHeader />
        <MessageList currentUserId='dan' messages={messages} />
        <MessageInput
          placeholder="Type message here"
          onSendMessage={(text) => addMessage(text, 'dan', 'Your Name')}
        />
      </MessageContainer>
    </MainContainer>
  );
};
