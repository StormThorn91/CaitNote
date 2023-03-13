import s from './style.module.css';

export function ButtonPrimary({ children, onClick, isDisabled }) {
    return(
        <button 
        onClick={onClick} 
        type="button" 
        className={ `btn btn-primary ${s.button}` }
        disabled={isDisabled}
        >
            {children}
        </button>
    );
}