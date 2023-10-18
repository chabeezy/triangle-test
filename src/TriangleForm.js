import { useState} from 'react';

const TriangleForm = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    const [result, setResult] = useState("");
    const [resultDelivered, setResultDelivered] = useState(false);

    const handleChange = (event, callback) => {   
        const result = event.target.value.replace(/\D/g, '');
        callback(parseInt(result));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(x === y && y === z) {
            setResult("Equilateral")
        } else if(x === y || x === z || y === z) {
            setResult("Isoceles")
        } else {
            setResult("Scalene")
        }
        setResultDelivered(true);
    }

    return (
        <>
        <center>
        <div class="card col-4">
        <div class="card-body">
            <h5 class="card-title">Triangle Test</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">X</label>
                    <div className="col-sm-10">
                        <input type="text"
                            required
                            value={x}
                            onChange={(e) => handleChange(e, setX)}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Y</label>
                    <div className="col-sm-10">
                        <input type="text"
                            required
                            value={y}
                            onChange={(e) => handleChange(e, setY)}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Z</label>
                    <div className="col-sm-10">
                        <input type="text"
                            required
                            value={z}
                            onChange={(e) => handleChange(e, setZ)}
                            className="form-control"
                        />
                    </div>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            {resultDelivered && <div>Result: {result}</div>}
        </div>
        </div>
        </center>
        </>
    );
}

export default TriangleForm;