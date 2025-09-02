export function Navbar(){
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark " aria-label="Second navbar example">
            <div className="container-fluid d-flex justify-space-between">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-ship me-2"></i><span className="text-info">Breaking Bad Encyclopedia </span></a>

                <div className="collapse navbar-collapse " id="navbarsExample02">
                    <ul className=" navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Characters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Episodes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cast</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Join Us!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};