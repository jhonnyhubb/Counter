import {useState} from 'react';
import Button from '../Button';

const Card = () => {

    const [value, setValue] = useState(0)

    function Add(){
        setValue(value+1)
    }

    function Remove(){
        setValue(value-1)
    }
    
    return(
        <>
            <div className="card">
                <div class="card text-center">
                    <div class="card-header">
                        <h5 class="card-title">Counter</h5>
                    </div>
                    <div className="card-body">
                        <Button 
                            className="btn btn-success" 
                            onClick={Add}
                        >
                            Add
                        </Button>               

                        <p>{value}</p>

                        <Button 
                            className="btn btn-danger" 
                            onClick={Remove}
                        >
                            Remove
                        </Button>
                    </div>                
                </div>                  
            </div>
        </>
    )
}

export default Card;