
function Ship({ ship, award, index }: any) {
    return (
        <div className="col-sm-7 mt-2">
            <div className="card border-warning">
                <div className="card-body">
                    <div className="d-flex">
                        <div className="thumbnail p-2">
                            <img src={require(`../assets/${index}.png`)} />
                        </div>
                        <div className="p-2">
                            <div className="d-flex award">
                                <h5 className="card-title">{ship.name}</h5>
                                {ship.films.length == award && <img src={require("../assets/award.png")} />}
                            </div>
                            <p className="card-text">Model: {ship.model}</p>
                        </div>
                        <div className="ml-auto p-2" style={{marginLeft:"auto"}}>
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
