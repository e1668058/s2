import React, {Component, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    
    scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        },15);
    }

    render() {
        return (
            <div class="menu-container">
                
                <input type="checkbox" id="chkBar"/>
                <div class="bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="Sl">
                    <p>Salon de coiffure Shang Long</p>
                </div>

                <div class="links">
                    {/* <a onClick={()=>{this.scrollToTop(1000)}}><p>Contact</p></a> */}
                    <a href="#contact"><p>Contact</p></a>
                    <a href="#schedule"><p>Horaire</p></a>
                    <a href="#map"><p>Itinéraire</p></a>
                </div>
            </div>
            
        )
    }
}
export default withRouter(Menu);