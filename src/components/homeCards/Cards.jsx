const Cards = (props) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-lg sm:hover:scale-110 duration-100 cursor-pointer h-64  w-52 bg-gradient-to-b from-red-500 to-gray-500 max-sm:w-full">
        
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{props.title}</div>
        </div>
        <div className="px-6 pt-4 pb-2 h-full">
            <img src={props.image} alt="" />
        </div>
    </div>
    
  )
}

export default Cards