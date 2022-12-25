import React, {Component} from "react";
import {MobileNav,MobileNavBar, BurgerCheckHolder, FakeCheckbox, BurgerSpanOne, BurgerSpanTwo, BurgerSpanThree, MobileNavCard, MobileNavCardLinkHolder, MobileNavCardLinkDiv, MobileNavCardButton} from "../ComponentStyling/NavBarStyle";
import '../App.css';
import Home from '../PageSections/Home.js';


import { WholePage } from "./MainPageStyle";
import AnimArrow from "../Components/AnimatedArrow";
import About from "../PageSections/About";

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
            this.setState({
                checked : event
            },() => {})
        }
        if(event === false){
            //this is if the checkbox is not checked
            this.setState({
                checked : event
            },() => {})
        }
    };
    

    handleButtonClick = (e,sectionName) =>{
        const target = document.getElementById(sectionName)
        target.scrollIntoView({behavior: "smooth"})
        this.setState({
            checked : false
        })
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
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e,"home")}>Home</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e,"about")}>About</MobileNavCardButton>
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
                    <div className="container" id="home"><Home/></div>
                    <AnimArrow/>
                    {/*<div id="WorkSection" ref={this.testscroll}><Work/></div>*/}
                    <div className = "container" id="about"><About/></div>
                </WholePage> 
            </>
        )
    }
}

export default MainPage;