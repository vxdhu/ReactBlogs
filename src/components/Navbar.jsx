import "../css/Navbar.css"


export default function Navbar(){
    return (
 
        <header className="header-for-navbar">
        <div className="navbar-top">
            <div className="brandwrap-top">
                <a className="desktop-brandwrap" href="index.html"><img src="https://ik.imagekit.io/healthhighway2020/Group_1YBxSKuiyUd.svg?updatedAt=1633715883579" alt="logo"/></a>
                <a className="mobile-brandwrap" href="index.html"><img src="https://ik.imagekit.io/healthhighway2020/hhlogoH_5JuGbkrkE.svg?updatedAt=1634284862307" alt="logo"/></a>
            </div>
            <nav>
                <ul className="nav-links-top">
    
                    <li><a to="#" className="joinbtn" id="landing-joinus">JoinUs</a></li>
                    <li> <button className="loginIcon">
                    
                </button> </li>
                </ul>
            </nav>
        </div>
        </header>
    

   );

}