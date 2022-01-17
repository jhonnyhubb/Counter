
const Button = ({children, className, onClick}) => {
    return(
        <button 
            type="button" 
            className={className} 
            onClick={onClick}
        >
            {children}
        </button>
        
    )
}

export default Button;

/*
<button 
            type="button" 
            className="btn btn-danger" 
            onClick={Remove}
        >
            remove
        </button>
        */