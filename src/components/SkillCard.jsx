import React from 'react'
import { Skills } from './Slide';

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
            <h4 className="flex justify-center text-center inline-block text-lg text-white font-bold mt-3">{time}</h4>
        </div>
    );
}

export function SkillCard3({imgSrc, altText, title , info, description, languages}) {
    return (
        <div className={`mb-2 border border-sky-900 rounded-lg shadow`} >
            <div className="relative group overflow-hidden">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="mx-auto w-full rounded-lg h-60 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                        <Skills className="text-3xl font-bold mb-2">{title}</Skills>
                        <h2 className="text-2xl font-bold " style={{ color: '#51E2F5' }}>{description}</h2>
                        <p className='text-xl font-bold text-rose-600' >{info}</p>
                    </div>
                    {/* <div className='mt-1 grid grid-cols-8'>
                        <img
                            src={reactjs}
                            alt="reactjs"
                            className="mx-auto w-10 h-10 object-contain"
                        />
                        <img
                            src={nodejs}
                            alt="nodejs"
                            className="mx-auto w-10 h-10 object-contain"
                        />
                        <img
                            src={postgres}
                            alt="postgres"
                            className="mx-auto w-10 h-10 object-contain"
                        />
                    </div> */}
                </div>  
            </div>
        </div>
    );
}

export function Card ({ imgSrc, altText, title, info }) {
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