import { useState } from "react"
import { Link } from "react-router-dom";


export default function Filternav(props) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


  return <nav className="filternav-container">

    <ul className="filternav">
      <Link className="active" to={"/all"}>All</Link>
      <Link className="" to={"/events"}>Events</Link>
      <Link className="" to={"/lifestyle"}>Lifestyle</Link>
      <Link className="" to={"/benefits"}>Benefits</Link>
      <li className="filterbtn "><button className="sortbtn">Sort By</button></li>

      <li className="toggle-btn"><span>Social</span>
        <div className="toggle-switch">

          <input type="checkbox" id="chkTest" name="chkTest" />
          <label htmlFor="chkTest">
            <span className="toggle-track"></span>
          </label>

        </div><span>Blogs</span>
      </li>

    </ul>



  </nav>

}