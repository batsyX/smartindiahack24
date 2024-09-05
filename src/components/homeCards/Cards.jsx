const Cards = (props) => {
  return (
    
    <a href={props.link}>
        <div className=" rounded-xl overflow-hidden shadow-lg sm:hover:scale-110 duration-100 cursor-pointer h-64  max-md:w-64 w-52  bg-gradient-to-b from-red-500 to-gray-500 max-sm:w-full max-md:flex relative" >
          
          <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2 text-white">{props.title}</div>
          </div>
          <div className="px-6 pt-4 max-md:pt-10 h-full max-md:px-0  relative">
              <img src={props.image}  alt="" className="md:absolute bottom-16" />
          </div>
          <div className=" absolute top-32  left-6 md:top-20 ">
              <img src={props.icon} alt="" className="w-[60px] h-[60px] md:w-[45px] md:h-[45px] "/>
          </div>
      </div>
    </a>
    
  )
}

export default Cards