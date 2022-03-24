export default function Trendingcard(props) {
    return (
        <div className="trendingcard">

            <div className="trcardindex">{props.index}</div>
            <div className="trcardtext">
                <p> {props.title} </p>
                <span>{props.created}</span>
            </div>



        </div>
    )
};