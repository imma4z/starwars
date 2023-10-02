
function Ship({ ship, award, index }: any) {
    return (
        <div className="col-sm-7 mt-2">
            <div className="card border-warning">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="thumbnail">
                            <img src={require(`../assets/${index}.png`)} />
                            <div className="d-flex award">
                                <h5 className="card-title">{ship.name}</h5>
                                {ship.films.length == award && <img src={require("../assets/award.png")} />}
                            </div>
                            <p className="card-text">Model: {ship.model}</p>
                        </div>
                        <div>
                            <h5 className="card-title">Number of films</h5>
                            <p className="card-text">{ship.films?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ship;
