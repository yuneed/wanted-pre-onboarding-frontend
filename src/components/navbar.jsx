import React, { Component } from 'react'; 

class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <i class="navbar-logo fa-thin fa-hippo"></i>
                <span>할일 목록 리스트</span>
                <span className='navbar-count'>0</span>
            </div>
        )
    }
}

export default Navbar;