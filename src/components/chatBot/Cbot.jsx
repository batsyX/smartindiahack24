import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import "./styles.css"

const Cbot = () => {
  return (
    <div>
        <Chatbot className="chatbot"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
export default Cbot