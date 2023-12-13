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