
export const Cards = () => {
    return (
        <>
            <div className="card-content">
                <div className="card-image">
                    <img src={props.img} alt="Smartphone Galaxy" height={100} />
                </div>
                <div className="card-details">
                    <svg className="Heart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h4>{props.name}</h4>
                    <div className="estrelas">
                        <span className="estrela1">&#9733;</span>
                        <span className="estrela2">&#9733;</span>
                        <span className="estrela3">&#9733;</span>
                        <span className="estrela4">&#9733;</span>
                        <span className="estrela5">&#9733;</span>
                    </div>
                    <p className="preco">R$ {props.value}</p>
                    <p className="parcelamento">em até {props.parcelas}x de R$ {props.dividedValue}</p>
                </div>
            </div>
        </>
    )
}