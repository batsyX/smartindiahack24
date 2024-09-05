import Cards from '@/components/homeCards/Cards';
import HomeContainer from '@/components/homeContainer/HomeContainer';
import user from "/user.png"


const listCards=[
    {
        title:"Scan to deliver",
        image:user
    },
    {
        title:"pickup mails and parcels",
        image:user
    },
    {
        title:"Start delivering",
        image:user
    },
    {
        title:"Raise issue with delivery",
        image:user
    },
]


const Home = () => {
    return (
        <div>
            <HomeContainer/>
            <div className='divider flex md:ml-10 mt-20 max-md:flex max-md:justify-center '>
                <div className='bg-black md:w-[300px] w-4/5 h-2 rounded-lg  '>

                </div>
            </div>
            <div className='flex max-md:flex-col justify-between '>
                <div className='w-3/5 gap-2 mt-10 md:ml-10 flex justify-between max-md:w-full flex-wrap max-md:px-5 '>
                    {
                        listCards.map((card,index)=>{
                            return(
                                <Cards key={index} title={card.title} image={card.image}/>
                            )
                        })
                    }
                </div>
                <div className='w-2/5 h-[600px] mt-10 max-md:w-full flex justify-center pb-10'>
                    <div className='h-full w-11/12  bg-gradient-to-r from-gray-400 to-gray-400 rounded-xl text-center'>
                        chatbot
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;