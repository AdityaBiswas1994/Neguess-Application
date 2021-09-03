import React from 'react'
import { Component } from 'react'
import {  Menu, Image, Button } from 'semantic-ui-react'
import logo from '../image/neguess_logo.png'
import { Link } from 'react-router-dom'


export default class Header extends Component {

  
    login()
    {

    }

    signup()
    {
        
    }
 
    render(){
    return (
        <div>
            <div className='mg'>
     <Menu  secondary>
     <Link to="/">
           <Image src={logo}  rectangular size='small'/>
           </Link>
           <Menu.Menu position='right'>
            
            <Menu.Item
             name=''
           />
           <Link to="/Rules">
             <Button size='medium' basic color='blue' onClick={()=> this.login()}>Documentation</Button>
             </Link>
             <Menu.Item
             name=''
           />
           <Link to="/AboutUs">
             <Button size='medium' basic color='blue' onClick={()=> this.signup()}>About Us</Button>
             </Link>
            
           </Menu.Menu>
 
           
           
         </Menu>
         </div>
        </div>
    )
    }
}
