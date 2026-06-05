'use client';
import {useState} from 'react';

const Button = ({text, onClick, onHover}: {text: string, onClick?:() => void, onHover?:() => void}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onClick={onClick} onMouseEnter={() => {setIsHovered(true); onHover?.()}} onMouseLeave={() => setIsHovered(false)} className={`${isHovered ? 'background-foreground rounded-lg' : 'background-foreground rounded-lg border- ' }`}>
{text}
        </button>
    )
}

export default Button;