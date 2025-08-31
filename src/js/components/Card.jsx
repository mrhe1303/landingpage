export function Card() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/250px-Walter_White_S5B.png" className="card-img-top" alt="Walter White" />
                        <div className="card-body text-center d-flex flex-column">
                            <h5 className="card-title">Walter White</h5>
                            <p className="card-text flex-grow-1">Frustrated high school teacher turned methamphetamine dealer.</p>
                            <a href="#" className="btn btn-primary mt-auto">Read bio</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/250px-Jesse_Pinkman_S5B.png" className="card-img-top" alt="Jesse Pinkman" />
                        <div className="card-body text-center d-flex flex-column">
                            <h5 className="card-title">Jesse Pinkman</h5>
                            <p className="card-text flex-grow-1">Crystal meth cook and dealer. Works with his former teacher Walter White.</p>
                            <a href="#" className="btn btn-primary mt-auto">Read bio</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Hank_Schrader_S5B.png/250px-Hank_Schrader_S5B.png" className="card-img-top" alt="Hank" />
                        <div className="card-body text-center d-flex flex-column">
                            <h5 className="card-title">Hank Schrader</h5>
                            <p className="card-text flex-grow-1">Special DEA agent. Wants to apprehend the enigmatic drug dealer "Heisenberg."</p>
                            <a href="#" className="btn btn-primary mt-auto">Read bio</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Gustavo_Fring_BCS_S3E10.png/250px-Gustavo_Fring_BCS_S3E10.png" className="card-img-top" style={{ height: "407px" }} alt="Gus" />
                        <div className="card-body text-center d-flex flex-column">
                            <h5 className="card-title">Gus Fring</h5>
                            <p className="card-text flex-grow-1">Successful business by day, ruthless narcotics dealer by night.</p>
                            <a href="#" className="btn btn-primary mt-auto">Read bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}