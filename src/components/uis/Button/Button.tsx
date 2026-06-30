import { useEffect, useState } from 'react';
import style from './Button.module.css';

interface IButtonProps {
    children: React.ReactNode|Array<React.ReactElement|string>;
    color?: 'tomato'|'skyblue'|'green';
    type?: 'submit'|'reset'|'button';
    onClicked: () => void;
}
/**
 * Bouton avec gestion de formulaire pour validation ou onclick
 * @param param0 IButtonProps props du composant
 * @returns React.ReactNode constitution du composant bouton
 */
const Button = ({type = 'button', children, color, onClicked=()=>{}}:IButtonProps) => {  
    const [isClicked, setIsClicked] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    }, [isClicked]);
    
    return (
        <button 
            className={`${style.Button} DarkBackground${isClicked?' '+style.clicked:''}`} 
            style={{color:color}}
            onClick={() => {
                setIsClicked(true);
                onClicked()
            }}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button