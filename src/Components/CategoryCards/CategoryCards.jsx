
export const CategoryCards = (props) => {
    return (
        <>
            <div className="prod">
                <img src={props.img} alt="" />
                <p>{props.name}</p>
            </div>
        </>
    )
}