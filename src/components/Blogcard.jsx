import "../css/blogs.css"
import read from "../assets/read.png"
import moment from 'moment'



export default function Blogcard(props){

    let isoDate = props.created;
  
    let newDate = moment.utc(isoDate).format("MMM Do, YYYY");
    
    
return(
    
    <div className="blogcard">
        <img className="blogthumb" src={props.thumbnail} alt="blogthumb" />
        <div  className="blogtext">
            <div className="categorybar">
            <p style={{color:"#4CA9EE"}}>{props.category} Yoga </p>
            <p className="minsread"><img src={read} alt="" /> {props.read} 5 Mins Read</p>
            </div>
            <h2> {props.title} </h2>
            <span> {props.author} |</span>  <span> {('converted date', newDate)} </span>
        </div>
    </div>
)
}


