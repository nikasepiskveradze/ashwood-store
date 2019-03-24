import React, { Component } from "react";
import sepiskver from "../images/sepiskver.jpg";
import keti from "../images/keti.jpg";
import tamar from "../images/tamar.jpg";
import cloth from "../images/cloth.jpg";

const white_ball = {
  background:'white',
  width:'90px', 
  height:'90px', 
  marginTop: '-205px', 
  marginLeft: '210px', 
  position: 'absolute'
};

const teamPictures = {
  width: '120px',
  height: '120px',
  margin: '30px auto',
  display: 'block',  
  background: 'white'
}

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid w-75 mb-5 mt-5 pt-5">
          <div class="row mb-5">
            <div class="col-sm-6 mb-5">
              <img src={cloth} class="img-fluid"/>
              <div class="rounded-circle" style={white_ball}></div>
            </div>
            <div class="col-sm-6 mb-5">
              <div style={{height: '2px', width: '60px', background: '#394163'}}></div>
              <h2 class="mt-3 mb-3">How We Started</h2>
              <span class="d-block text-muted font-weight-lighter"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed numquam cum animi sunt excepturi. Dolore dignissimos consectetur reprehenderit, modi quia beatae, ipsam, at voluptatem tempore consequatur ducimus repellat veritatis sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/>
              <span class="d-block text-muted font-weight-lighter"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed numquam cum animi sunt excepturi. Dolore dignissimos consectetur reprehenderit..</span>
            </div>
          </div>



          <div class="row">
            <div class="col-sm-12">
              <div class="container-fluid" style={{height: '2px', width: '60px', background: '#394163'}}></div>
              <h4 class="text-center mt-3 mb-3">The Team</h4>
            </div>


            <div class="col-sm-4 pb-5 container">
                <img class="rounded-circle img-fluid team-pictures" style={teamPictures} src={sepiskver}/>
                <h5 class="text-center font-weight-light">Nika Sepiskveradze</h5>
                <h6 class="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">member</h6><br/>
                <span class="d-block text-center text-muted font-weight-lighter mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi vel, sint totam harum in eos necessitatibus nihil ut tenetur?</span>
                
            </div>
            <div class="col-sm-4 pb-5 container">
              <img class="rounded-circle img-fluid" style={teamPictures} src={keti}/>
              <h5 class="text-center font-weight-light">Ketevan Natobaidze</h5>
              <h6 class="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">member</h6><br/>
              <span class="d-block text-center text-muted font-weight-lighter mb-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi vel, sint totam harum in eos necessitatibus nihil ut tenetur?</span>
              
            </div><div class="col-sm-4 pb-5 container">
              <img class="rounded-circle img-fluid team-pictures" style={teamPictures} src={tamar}/>
              <h5 class="text-center font-weight-light">Tamar Menteshashvili</h5>
              <h6 class="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">member</h6><br/>
              <span class="d-block text-center text-muted font-weight-lighter mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi vel, sint totam harum in eos necessitatibus nihil ut tenetur?</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default About;
