// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi') ||message.includes('Hello') || message.includes('Hi')) {
      actions.handleHello();
    }
    else if(message.includes('what do') || message.includes('you do')){
      actions.whatIdo();
    }
    else if(message.includes('where is the nearest POST office from here') || message.includes('nearest post office') || message.includes('post office')){
      actions.handlePostOffice();
    }
    else if((message.includes('postal code of') && message.includes('noida')) || message.includes('what is the postal code of noida') || message.includes('noida postal code')){
      actions.findPostal();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;