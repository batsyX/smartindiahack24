// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.I am your helper feel free to ask your doubt if you are not sure how to proceed');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const whatIdo = () => {
    const botMessage = createChatBotMessage('I am a chatbot. I am here to help you with your queries.Since i am new i am able to provide Very specific details.Sorry for the inconvenience.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePostOffice = () => {
    const botMessage = createChatBotMessage('The nearest POST office you will find is the PostOffice- Sector-19B (Near Marigold Public School) pin-201301');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const findPostal = () => {
    const botMessage = createChatBotMessage('The postal code of Noida is 201301');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            whatIdo,
            handlePostOffice,
            findPostal
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;