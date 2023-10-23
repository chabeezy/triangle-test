import TriangleGraphic from "./TriangleGraphic.js";
import { useEffect, useState} from 'react';

const ResultCard = ({result, lengths, resultDelivered}) => {
    const isInvalidTriangle = (lengths) => {
        const x = lengths[0], y = lengths[1], z = lengths[2];
        return x >= y + z || y >= x + z || z >= x + y;
    } 

    const ResultMessage = ({invalid, result}) => {
        return (
            <>
            <h5 className="card-title" data-testid="result-title">Result: {invalid ? "Invalid" : result}</h5>
            {invalid ? <p data-testid="result-error">The triangle cannot be drawn because a side is greater or equal to the sum of the two other sides.</p> : 
                <TriangleGraphic lengths={lengths} />}
            </>
        );
    }

    const AwaitingResult = () => {
        return(
            <>
            <h5 className="card-title" data-testid="result-title">Awaiting Dimensions</h5>
            </>
        );
    }

    const [invalid, setInvalid] = useState(isInvalidTriangle(lengths));
    useEffect(() => {setInvalid(isInvalidTriangle(lengths))}, [lengths]);
    return (
        <>
        <div className="card">
            <div className="card-body">
                {resultDelivered ? <ResultMessage result={result} invalid={invalid}/> : <AwaitingResult />}
            </div>
        </div>
        </>
    );
}
export default ResultCard;