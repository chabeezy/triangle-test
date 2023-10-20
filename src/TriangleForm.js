import { useForm } from 'react-hook-form';

const TriangleForm = ({onSubmit}) => {
    const { register, handleSubmit, formState } = useForm({
        mode: "onBlur"
    });

    const { errors } = formState;

    const validation = {
        required: "Required",
        pattern:{
            value:/^[1-9]\d*$/,
            message: "Invalid integer"
        },
    }

    return (
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Triangle Test</h5>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="needs-validation">
                    <div className="form-group row mt-3">
                        <div className="col mb-3">
                            <input {...register("x", validation)} placeholder="X" className='form-control' valid={errors.x?false:true} />
                            <p className="text-danger">{errors.x?.message}</p>
                        </div>

                        <div className="col mb-3">
                            <input {...register("y", validation)} placeholder="Y" className='form-control' />
                            <p className="text-danger">{errors.y?.message}</p>
                        </div>

                        <div className="col">
                            <input {...register("z", validation)} placeholder="Z" className='form-control' />
                            <p className="text-danger">{errors.z?.message}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default TriangleForm;