import Cards, { cardData } from '../component/card';
import CarouselHolder from '../component/carousel';
import Skeleton from 'react-loading-skeleton';
import { useLoading } from '../utils/loader';
import { Pages } from '../component/pagination';
import { useState } from 'react';


export default function Home() {
    const isLoading = useLoading()
    const [currentPage,setCurrentPage] = useState(1)
    const cardsPerPage = 15
    const totalPages = Math.ceil(cardData.length / cardsPerPage)
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentCards = cardData.slice(indexOfFirstCard,indexOfLastCard)
    return (
        <>

         {/* ads */}
         <div className='mt-14'>
             <img src="/ads1.jpg" alt=""  className='w-100 h-20 object-cover' />
         </div>
         {/* end ads */}

        <div className="container mt-36 flex justify-center carousel-container" >
        { isLoading ? <Skeleton  width={400} height={200} containerClassName='flex justify-center mt-40'/> : <CarouselHolder />}
        </div>
        

            {/* cards */}
        <div className="cards container mt-20">
                <h1 className='text-black font-extrabold text-3xl my-3'>Latest Post</h1>
                {isLoading ? <Skeleton width={200} height={200}  count={3}  containerClassName='flex space-x-5 text-center justify-center' /> : <Cards cards={currentCards}/>}
            </div>
            {/* end cards */}


            {/* Pagination */}
            <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
            {/* end of pagination */}

            {/* place ads */}
                {isLoading ? <Skeleton width={500} height={100} containerClassName='flex text-center justify-center my-20'/> : 
            <div className="container flex justify-center items-center text-center bg-zinc-300 my-8 py-3 rounded-md w-50 hover:bg-zinc-400">
                <a href="#" className='ads space-y-2 '>
                    <h3 className='font-medium text-base'>Advertisement</h3>
                    <h1 className='font-semibold text-lg text-zinc-800'>You can place ads</h1>
                    <h3 className='font-medium text-base'>750 x 100</h3>
                </a>
            </div>
               }
            {/* place ads */}

             {/* ads */}
         <div className='mt-14'>
         <img src="/ads2.jpg" alt=""  className='w-100 h-20 object-cover' />
     </div>
     {/* end ads */}
        </>
    );
}