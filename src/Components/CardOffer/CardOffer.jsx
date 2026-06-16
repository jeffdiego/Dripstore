export const CardOffer = (props) => {
    return (
        <>
            <div className={props.classNameBackground}>
                <div className="offers__content">
                    <h2 className="offers__title">
                        {props.title}
                    </h2>
                    <p className="offers__subtitle">
                       {props.subtitle}
                    </p>
                    <button className={props.classNameButton}>
                        {props.textButton}
                    </button>
                </div>
                <img
                    className="offers__image"
                    src={props.img}
                    alt="Controle de videogame"
                />
            </div>
        </>
    )
}