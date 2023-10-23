const TriangleForm = ({onSubmit, register, handleSubmit, formState}) => {

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
                <h5 className="card-title">Enter Dimensions</h5>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="needs-validation" id="dimensions-form">
                    <div className="form-group row mt-3">
                        <div className="col">
                            <input {...register("x", validation)} placeholder="X" className='form-control' data-testid="x-field"/>
                            <p className="text-danger" data-testid="x-error">{errors.x?.message}</p>
                        </div>

                        <div className="col">
                            <input {...register("y", validation)} placeholder="Y" className='form-control' data-testid="y-field"/>
                            <p className="text-danger" data-testid="y-error">{errors.y?.message}</p>
                        </div>

                        <div className="col">
                            <input {...register("z", validation)} placeholder="Z" className='form-control' data-testid="z-field"/>
                            <p className="text-danger" data-testid="z-error">{errors.z?.message}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default TriangleForm;