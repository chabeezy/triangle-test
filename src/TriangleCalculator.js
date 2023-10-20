import TriangleForm from './TriangleForm';
import ResultCard from './ResultCard';
import InfoCard from './InfoCard';

import { useState} from 'react';

const TriangleCalculator = () => {
    const [lengths, setLengths] = useState([0, 0, 0]);

    const [result, setResult] = useState("");
    const [resultDelivered, setResultDelivered] = useState(false);

    const onSubmit = (data, e) => {
        if(data.x === data.y && data.y === data.z) {
            setResult("Equilateral")
        } else if(data.x === data.y || data.x === data.z || data.y === data.z) {
            setResult("Isoceles")
        } else {
            setResult("Scalene")
        }
        setLengths([parseInt(data.x), parseInt(data.y), parseInt(data.z)]);
        setResultDelivered(true); 
    }

    return (
        <>
        <div className="container">
            <div className="row mt-2">
                <div className="col">
                    <TriangleForm onSubmit={onSubmit}/>
                </div>

                {resultDelivered && <div className="col"><ResultCard result={result} lengths={lengths} /></div>}

                <div className="col"><InfoCard /></div> 
            </div>
        </div>
        </>
    );
}
export default TriangleCalculator;