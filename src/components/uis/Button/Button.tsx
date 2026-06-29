import style from './Button.module.css';

interface IButtonProps {
    text: string
    color?: 'tomato'|'skyblue'|'green'
    onClick: () => void
}

const Button = (props:IButtonProps) => {
    console.log(props);
    
  return (
    <div 
        className={style.Button + ' DarkBackground'} 
        style={{color:props.color}}
        onClick={(evt) => {
            console.log(evt)
            props.onClick()
        }}
    >
        {props.text}
    </div>
  )
}

export default Button