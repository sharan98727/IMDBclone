import React from 'react'
import Search from './search'
import Menu from './Menu';
import Button from './Button'
 import {Link} from 'react-router-dom';
 //import WatchList from "./watchlist"






import '../bootstrap-4.0.0/bootstrap-4.0.0/dist/css/bootstrap.min.css'

export default function Navigation() {
  return (
    <div >
    <nav className = " navbar-expand-sm bg-dark navbar-dark text-white ">
     <form class="form-inline">
       
    <h3><span class="badge mx-2 badge-warning"><b>IMDB</b></span></h3>
    
   
  
    <Link className="navbar-brand ml-2" to="/watchlist">
    <Menu  title = "Menu"/>
   </Link>
   

     <Link className="navbar-brand ml-3" to="/search">
       <Search />
   </Link>
   <Link className="navbar-brand ml-2" to="/">
    <Button  title = "IMDBPro"/>
   </Link>
   <span className="bg-dark">|</span>

   <Link className="navbar-brand ml-2" to="/watchlist"  >
    <Button  title = "WatchList"/> 
   </Link>
   <Link className="navbar-brand ml-2" to="/Signin">
    <Button  title = "Sign In"/>
   </Link>

   
 
      </form>
      </nav>
  
    </div>
  )  
}
