import TriangleGraphic from "./TriangleGraphic.js";
import { useEffect, useState} from 'react';

const ResultCard = ({result, lengths}) => {
    const isInvalidTriangle = (lengths) => {
        const x = lengths[0], y = lengths[1], z = lengths[2];
        return x >= y + z || y >= x + z || z >= x + y;
    } 

    const [invalid, setInvalid] = useState(isInvalidTriangle(lengths));
    useEffect(() => {setInvalid(isInvalidTriangle(lengths))}, [lengths])
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Result: {invalid ? "Invalid" : result}</h5>
                {invalid ? <p>The triangle cannot be drawn because a side is greater or equal to the sum of the two other sides.</p> : 
                    <TriangleGraphic lengths={lengths} />}
            </div>
        </div>
        </>
    );
}
export default ResultCard;