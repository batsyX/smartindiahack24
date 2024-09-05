import Cards from '@/components/homeCards/Cards';
import HomeContainer from '@/components/homeContainer/HomeContainer';

import img1 from "/pngwing.com (1).png"
import plus from "/plus.png"
import track from "/trackpngwing.com (2).png"
import arrow from "/arrow-right.png"
import calen from "/modifypngwing.com (2).png"
import calenEdit from "/icons8-edit-property-48.png"
import complaint from "/complaiontpngwing.com (2).png"
import complaintIcon from "/icons8-complaint-48.png"
import Cbot from '@/components/chatBot/Cbot';

const listCards=[
    {
        title:"Book a Mail/Parcel",
        image:img1,
        icon:plus,
        link:"/bookMail"
    },
    {
        title:"Track your POST",
        image:track,
        icon:arrow,
        link:"/trackPost"
    },
    {
        title:"Modify your orders",
        image:calen,
        icon:calenEdit,
        link:"/modifyOrders"
    },
    {
        title:"Register Complaints",
        image:complaint,
        icon:complaintIcon,
        link:"/registerComplaints"
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
                <div className='w-3/5 gap-y-2 gap-x-0 mt-10 md:ml-10 flex justify-around  max-md:w-full flex-wrap max-md:px-5 '>
                    {
                        listCards.map((card,index)=>{
                            return(
                                <Cards key={index} title={card.title} image={card.image} icon={card.icon} link={card.link}/>
                            )
                        })
                    }
                </div>
                <div className='w-2/5 h-[600px] mt-10 max-md:w-full flex justify-center pb-10'>
                    <div className='h-full w-11/12  bg-gradient-to-r rounded-xl text-center  flex justify-center'>
                        <Cbot />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;