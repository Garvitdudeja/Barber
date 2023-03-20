import React from "react";
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
const info = [{
    name: "Stylish Hair Salon",
    ratings: 3.9,
    photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHorNGIbZg-rOuSgTVaeyD7fj1DeYRd4EjQ&usqp=CAU',
    location: "Old Rajpura",
    price: 100,
}, {
    name: "Groomers",
    photos: "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
    ratings: 4.3,
    location: "Old Rajpura",
    price: 150,
}, {
    name: "Groomers",
    photos: "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
    ratings: 4.3,
    location: "Old Rajpura",
    price: 150,
}, {
    name: "Stylish Hair Salon",
    ratings: 3.9,
    photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHorNGIbZg-rOuSgTVaeyD7fj1DeYRd4EjQ&usqp=CAU',
    location: "Old Rajpura",
    price: 100,
}, {
    name: "Groomers",
    photos: "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
    ratings: 4.3,
    location: "Old Rajpura",
    price: 150,
}, {
    name: "Groomers",
    photos: "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
    ratings: 4.3,
    location: "Old Rajpura",
    price: 150,
}]

const Cards = () => {
    return (<>
        <div className="">

            <div className="mx-auto w-11/12 flex flex-row flex-wrap justify-evenly">
                {info.map((each) => {
                    return (
                        <>
                            <div className="inline-block sm:w-full md:w-1/2 lg:w-1/3 ">
                                <Link to='salon/1' style={{ textDecoration: 'none' }}>
                                    <div className="m-auto  hover:border-4 hover:shadow-md">
                                        <div className="m-3 p-2 ">
                                            <div className="">
                                                <img src={each.photos} style={{ width: "100vw" }} alt="" className="min-w-full rounded-lg" />
                                            </div>
                                            <div className="flex flex-row justify-between pt-2">
                                                <div className="flex flex-col ">
                                                    <div className="text-black" >
                                                        {each.name}
                                                    </div>
                                                    <div className=" text-black">
                                                        {each.location}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    
                                                    <div className=" rounded-md bg-green-700  text-black self-end px-3 py-1">
                                                        <div className="flex flex-row ">
                                                        {each.ratings}
                                                        <FaStar className="mt-1" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="text-black">
                                                        Average : {each.price}<BiRupee className="inline"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>)
}

export default Cards;