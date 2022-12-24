import React, {Component} from "react";
import {MobileNav,MobileNavBar, BurgerCheckHolder, FakeCheckbox, BurgerSpanOne, BurgerSpanTwo, BurgerSpanThree, MobileNavCard, MobileNavCardLinkHolder, MobileNavCardLinkDiv, MobileNavCardButton} from "../ComponentStyling/NavBarStyle";
import '../App.css';
import Home from '../PageSections/Home.js';
import ParticlesComponent from '../Components/Particles/Particles.js';
import { WholePage } from "./MainPageStyle";

class MainPage extends Component{
    constructor(){
        super()
        this.state = {
            checked : false,
        }

        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)

    }
    componentDidMount(){
    }
    handleCheckbox(event){
        if(event === true){
            //this is if the checkbox is checked
            console.log(event,"  checked")
            this.setState({
                checked : event
            },() => {console.log("Call back when true: " , this.state.checked)})
        }
        if(event === false){
            //this is if the checkbox is not checked
            console.log(event,"  not checked")
            this.setState({
                checked : event
            },() => {console.log("Call back when false: " , this.state.checked)})
        }
    };
    

    handleButtonClick = (e,sectionName) =>{
        console.log(e)
        const target = document.getElementById(sectionName)
        target.scrollIntoView()
    }
    
    render(){return(
        
            <>
                <MobileNav >
                    <MobileNavBar>
                        <BurgerCheckHolder active = {this.state.checked}>
                            <BurgerSpanOne active = {this.state.checked}></BurgerSpanOne>
                            <BurgerSpanTwo active = {this.state.checked}></BurgerSpanTwo>
                            <BurgerSpanThree active = {this.state.checked}></BurgerSpanThree>
                            <FakeCheckbox 
                            type= "checkbox"
                            onChange={(e) => this.handleCheckbox(e.target.checked)}
                            active = {this.state.checked}
                            />
                        </BurgerCheckHolder>
                        <MobileNavCard active = {this.state.checked}>
                            <MobileNavCardLinkHolder>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e,"WorkSection")}>Home</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton href="/contact">Contact</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton href="/resume">Resume</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton >Work</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                            </MobileNavCardLinkHolder>
                        </MobileNavCard>

                    </MobileNavBar>
                </MobileNav>
                <WholePage>
                    
                    <Home id = "home"/>
                    {/*<div id="WorkSection" ref={this.testscroll}><Work/></div>*/}
                </WholePage>
                
            </>
        )
    }
}

export default MainPage;