import { ButtonHTMLAttributes } from 'react';

import '../styles/darkMode.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutLined?: boolean
};

export function DarkMode({ isOutLined = false, ...props }:ButtonProps) {
    return (
        <button 
        className={`darkMode ${isOutLined ? 'outLined' : ''}`} 
        {...props} 
        />
    )
}