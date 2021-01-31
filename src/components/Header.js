import React from 'react';
import '../css/Header.css';
import home from '../assets/home.svg'
import URL from '../assets/url'






import Axios from 'axios';


    


  


class Header extends React.Component{

    

   logout = ()=>{
       Axios({
            method:'GET',
            // url:'http://localhost:8000/user/logout',
            // url:'https://college-management-portal-app.herokuapp.com/user/logout',
            url:URL+'user/logout',

            withCredentials:true
           
       }).then((res)=>{
           console.log(res);
           this.setState({user:'No User'})
           this.props.setLoginState(false,'','No User');
       }).catch(err=>console.log(err));
     
   }



  

    render(){
        return(
            <div className="header">
                <img id='home' src={home} />
                <h1>College Management Portal</h1>


                <div className='user'>
                    <h3>{this.props.user}</h3>
                   
                   { this.props.loggedIn ? <button onClick={this.logout}>Logout</button> :''}
                </div>

            </div>
        );
    }
}

export default Header;