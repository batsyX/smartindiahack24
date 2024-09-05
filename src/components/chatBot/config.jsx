import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Sathi dakiya';

const Config = {
  initialMessages: [createChatBotMessage(`Hi! I'm here to help.`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default Config;