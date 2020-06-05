import React from "react";
import {Link,BrowserRouter} from "react-router-dom";


const Bottom = () =>
{
   return(
   <BrowserRouter>

   <div style={{backgroundColor:"black"}}>

   <ul className="footer">

       <li><Link to = "/" >Get the IMDb App</Link></li>
       <li><Link to = "/" >Help</Link></li>
       <li><Link to = "/" >Site Index</Link></li>
       <li><Link to = "/" >IMDbPro</Link></li>
       <li><Link to = "/" >Box Office Mozo</Link></li>
       <li><Link to = "/" >IMDb Developer</Link></li>
      </ul>

      <ul className="footer2" >
       <li><Link to = "/" >Press Room</Link></li>
       <li><Link to = "/" >Advertising</Link></li>
       <li><Link to = "/" >Jobs</Link></li>
       <li><Link to = "/" >Conditions of Use</Link></li>
       <li><Link to = "/" >Privacy Policy</Link></li>
       <li><Link to = "/" >Interest Based Ads</Link></li>
       </ul>
       <div style={{textAlign:"center",color:"white"}}>an amazon company</div>
       </div>

    </BrowserRouter>
   )
}

export default Bottom;