import React from 'react'

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
