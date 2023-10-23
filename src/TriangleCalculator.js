import TriangleForm from './TriangleForm';
import ResultCard from './ResultCard';
import InfoCard from './InfoCard';
import { useForm } from 'react-hook-form';

import { useState} from 'react';

const TriangleCalculator = () => {
    const [lengths, setLengths] = useState([0, 0, 0]);

    const [result, setResult] = useState("");
    const [resultDelivered, setResultDelivered] = useState(false);

    const { register, handleSubmit, formState, reset } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data, e) => {
        if(data.x === data.y && data.y === data.z) {
            setResult("Equilateral")
        } else if(data.x === data.y || data.x === data.z || data.y === data.z) {
            setResult("Isosceles")
        } else {
            setResult("Scalene")
        }
        setLengths([parseInt(data.x), parseInt(data.y), parseInt(data.z)]);
        setResultDelivered(true); 
    }
    
    const resetClick = () => {
        setResultDelivered(false);
        reset();
    }


    return (
        <>
        <nav className="navbar navbar-dark bg-primary">
            <div class="container">
                    <div className="navbar-brand" href="#">Triangle Test</div>
                    <div className="col-3 float-end"><InfoCard /></div> 
            </div>
        </nav>
        <div class="d-flex justify-content-center mt-2">
            <div className="col-4">
                <div className="container">
                    <div className="row">
                        <TriangleForm onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} formState={formState}/>
                    </div>

                    <div className="row mt-2">
                        <ResultCard result={result} lengths={lengths} resultDelivered={resultDelivered} />
                    </div>

                    <div className="row mt-2">
                        <div className="p-0"> 
                            <div className="float-end p-0">
                                <button className="btn btn-danger mx-2" onClick={resetClick} data-testid="reset-btn">Reset</button>
                                <button className="btn btn-primary" type="submit" form="dimensions-form" data-testid="submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default TriangleCalculator;