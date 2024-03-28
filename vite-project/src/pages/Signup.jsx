export default function Signup() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8 d-flex justify-content-center flex-column">
                        <div className="d-flex  gap-5">
                            <div>
                                <label htmlFor="">Enter your First Name</label>
                                <input type="text" className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label htmlFor="">Enter your Last Name</label>
                                <input type="text" className="form-control" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Enter your Email Address</label>
                            <input type="email" className="form-control" style={{ width: '67%' }} />
                        </div>
                        <div>
                            <label htmlFor="">Enter your Email Password</label>
                            <input type="password" className="form-control" style={{ width: '67%' }} />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary  mb-4 mt-4 ">Sign up</button>
                            <div className="mt-2">
                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
