import { useLocation } from 'react-router-dom';
import truck from "/simple_truck_01.png"


const links=[
    {
        name:"Book parcel",
        href:"/",
        // icon:<MessageSquareIcon />,
        color:"text-red-400",
        
    },{
        name:"Track order",
        href:"/",
        // icon:<ImageIcon />,
        color:"text-green-400",
        
    },{
        name:"File complaint",
        href:"/",
        // icon:<VideoIcon />,
        color:"text-blue-400",
        
    },{
        name:"Modify order",
        href:"/",
        // icon:<Music2Icon />,
        color:"text-purple-500",
        
    }
    
]

const Sidebar = () => {
    let location = useLocation();
    const path=location.pathname;
  return (
    <>
        <div className='w-full flex h-full'>
            <div className="flex flex-col gap-2 h-[100vh] bg-gray-900 w-1/5 ">
                <a href="/" className="flex items-center gap-5">
                    <img height={45} width={45} src={truck} className=" py-5 pl-5 " />
                    <h2 className="text-white text-2xl font-bauhaus">Saathi dakiya</h2>
                </a>
                
                <div className="flex flex-col gap-2 pt-6 px-4">
                    {
                        links.map((link,index)=>{
                            return(
                                <a href={link.href} className={`flex items-center gap-2 px-4 py-3 rounded-xl  ${path===link.href?'bg-gray-600':null} hover:bg-gray-600 duration-200 cursor-pointer`} key={index}>
                                    {/* <div className={link.color}>
                                        {link.icon}
                                    </div> */}
                                    <div  className="text-white text-xl font-writing ">{link.name}</div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-4/5 '>

            </div>
        </div>
    </>
  )
}

export default Sidebar