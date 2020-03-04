import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Content.scss';

class Content extends Component {
    
    
    render() {
        return (
            <div class="content-container">
                <div class="title">
                    <h1>Salon de coiffure Shang Long</h1>
                </div>

                <div class="pic">
                    <picture>
                        <img alt="" src="../../public/images/img1.jpg"></img>
                    </picture>
                </div>

                <div class="line">
                    <span></span>
                </div>

                <div class="gallery">
                    <h2>Galerie</h2>
                    <div class="img-container">
                        <img alt="" src="./images/img9.jpg"></img>
                        <img alt="" src="./images/img2.jpg"></img>
                        {/* <img src="./images/img3.jpg"></img> */}
                    </div>
                    <div class="img-container">
                        <img alt="" src="./images/img4.jpg"></img>
                        <img alt="" src="./images/img5.jpg"></img>
                        {/* <img src="./images/img6.jpg"></img> */}
                    </div>
                    <div class="img-container">
                        <img alt="" src="./images/img7.jpg"></img>
                        <img alt="" src="./images/img8.jpg"></img>
                        {/* <img src="./images/img9.jpg"></img> */}
                    </div>
                    <div class="img-container">
                        <img alt="" src="./images/img3.jpg"></img>
                        <img alt="" src="./images/img6.jpg"></img>
                    </div>
                </div>

                <div class="line">
                    <span></span>
                </div>

                <div class="info" id="idInfo">
                    <div class="address" id="contact">
                        <div>
                            <h2>Address</h2>
                            <p>1071 Rue Saint-Urbain, Montréal, QC H2Z 9Y9</p>
                        </div>
                        <div>
                            <h2>Téléphone</h2>
                            <a href="tel:514-826-1188">(514) 826-1188</a>
                        </div>
                    </div>

                    <div class="invisible" id="line2">
                        <h2>WKA</h2>
                    </div>

                    <div class="schedule" id="schedule">
                        <h2>Heures d'ouverture</h2>
                        <div class="day">
                            <span>Dimanche :</span>
                            <span>10h00 - 18h30</span>
                        </div>
                        <div class="day">
                            <span>Lundi :</span>
                            <span>10h00 - 18h30</span>
                        </div>
                        <div class="day">
                            <span>Mardi :</span>
                            <span>10h00 - 18h30</span>
                        </div>
                        <div class="day">
                            <span>Mercredi :</span>
                            <span>Fermé</span>
                        </div>
                        <div class="day">
                            <span>Jeudi :</span>
                            <span>10h00 - 18h30</span>
                        </div>
                        <div class="day">
                            <span>Vendredi :</span>
                            <span>10h00 - 18h30</span>
                        </div>
                        <div class="day">
                            <span>Samedi :</span>
                            <span>10h00 - 18h30</span>
                        </div>
                    </div>
                    
                </div>

                <div class="map" id="map">
                    <h2>Itinéraire</h2>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe title="googlemap" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=1071%20Rue%20Saint-Urbain%2C%20Montr%C3%A9al%2C%20QC%20H2Z%209Y9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            {/* <a href="https://ytify.com">ytify.com</a> */}
                        </div>
                    </div>
                </div>

            </div>   
        )
    }
}
export default withRouter(Content);