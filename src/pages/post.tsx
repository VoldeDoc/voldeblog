import Skeleton from 'react-loading-skeleton';
import { useLoading } from "../utils/loader";

export default function Post() {
    const isLoading = useLoading()
    return (
        <>
            <div className="container my-20 flex justify-center">
                <div className="max-w-xl">
                    {isLoading ? <Skeleton/> :
                    <button className='bg-blue-800 text-white px-2 py-1 rounded hover:bg-blue-900 '> Technology</button>
}
                    <h2 className="card-title text-zinc-800 font-bold text-2xl">{isLoading ? <Skeleton /> : 'The impact of technology on the workplace: How Technology is changing'}</h2>
                    <div className="details flex items-center sm:space-x-4 mb-4">
                        {isLoading ? <Skeleton circle={true} height={50} width={50} /> : <img src="./home.jpg" alt="blogger image" className='w-10 h-10 rounded-full ' />}
                        <span className='name font-medium text-slate-500'>{isLoading ? <Skeleton /> : 'John Doe'}</span>
                        <span className='date font-medium text-zinc-600'>{isLoading ? <Skeleton /> : '20th may,2024'}</span>
                    </div>
                    {isLoading ? <Skeleton height={300}  width={300}/> : <img src="./home.jpg" className="rounded-lg w-full h-56 object-contain mt-4" alt="image" />}
                    <div className="info mt-4">
                        {isLoading ? <Skeleton count={5} /> : (
                            <>
                                Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}