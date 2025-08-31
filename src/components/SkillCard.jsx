import React from 'react'
import { Skills } from './Slide';
import Lang_images from '../constants/Lang_images';

export default function SkillCard({ color, imgSrc, altText, title }) {
    return (
        <div className={`border border-gray-900 rounded-lg shadow p-4`} style={{ borderColor: color }}>
            <div className="relative">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="mx-auto w-20 h-20 object-contain"
                    style={{ borderColor: color }}
                />
                <h4 className="text-center text-lg text-white font-bold mt-3">{title}</h4>
            </div>
        </div>
    );
}

export function SkillCard2({ time, imgSrc, altText, title }) {
    return (
        <div className={`shadow p-4`} >
            <div className="relative flex flex-col justify-center items-center">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="mx-auto w-40 h-40 object-contain"
                />
                <div className='mx-2'>
                    <Skills className="text-center text-2xl text-white font-bold mt-3">Web Development Intership</Skills>
                    <h4 className="text-center text-lg text-white font-bold mt-3">{title}</h4>
                </div>
            </div>
            <h4 className="flex justify-center text-center text-lg text-white font-bold mt-3">{time}</h4>
        </div>
    );
}

export function SkillCard3({ imgSrc, altText, title, link, info, description, languages }) {
    // console.log(languages[0])
    return (
        <div className={`rounded-lg border border-purple-200 bg-gray-700`} data-aos="zoom-in-out" >
            <img
                onClick={() => window.open(link, "_blank")}
                src={imgSrc}
                alt={altText}
                className="w-full rounded-t-lg h-60 object-cover cursor-pointer"
            />
            <div className="flex flex-col gap-4 p-5 text-white rounded-b-lg w-full">
                <Skills className="text-2xl font-[500] ">{title}</Skills>
                <h2 className="text-md font-[600] text-red-400">{description}</h2>
                <p className='text-md font-[300]' >{info}</p>
                <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>
                    {languages.map((lang, index) => {
                        return (
                            <div key={index}>
                                {Lang_images[lang]} 
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export function Card({ imgSrc, altText, title, info }) {
    return (
        <div className="relative group overflow-hidden">
            <img
                src={imgSrc}
                alt={altText}
                className="object-cover object-center mx-auto w-80 h-80 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
};