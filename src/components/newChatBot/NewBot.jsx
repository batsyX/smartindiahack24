import React from 'react'
import { useState } from 'react'


const NewBot = () => {

    const [message, setMessage] = useState('')
    const [ messageArray, setMessageArray ] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessageArray([...messageArray, {role:"user",content:message}]);
        console.log(messageArray);
        // try {
        //   const response =await fetch('url.com', {prompt:message});
        //   console.log(response);
        //   await setMessageArray((prev) => 
        //   [...prev, {role:"system",content:response.data.message.content}]);
        // } catch (error) {
        //   console.log(error)
        // }finally{
        //   setMessage('');
        // }
      }
      const handleChange = (e) => {
        setMessage(e.target.value)
      }
  return (
    <div className='w-[400px] h-[600px] rounded-xl bg-gray-300'>
        <div className="px-5 pt-16  min-h-32 flex flex-col gap-4">
            {
                messageArray && messageArray.map((message,index) => (
                <div key={index} className={`flex items-center gap-2 ${message.role==='user'?' self-end':' self-start '}`}>
                    {/* <div className={`text-${message.role==="user"?"green":"red"}-500 bg-${message.role==="user"?"green":"red"}-100 p-3 rounded-xl`}>
                    {
                        message.role==="user"?<UserRoundIcon size={22} />:<BotIcon size={22} />
                    }
                    </div> */}
                    <div className="flex flex-col gap-1">
                    <p className="text-xl ">{message.content}</p>
                    </div>
                </div>
                ))
            }
        </div>
        <div className="relative px-5">
            <form onSubmit={handleSubmit} className="flex items-center gap-4" >
                <input required placeholder="what can you do for me?" onChange={handleChange} value={message} type="text" className="text-xl w-full border-0 border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 py-3 px-1" />
                <button className=" bg-gradient-to-r from-pink-400 to-red-500 text-white p-2 rounded-xl" type="submit">Send</button>
            </form>

        </div>
    </div>
  )
}

export default NewBot
