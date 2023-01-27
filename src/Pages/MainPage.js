import React, { Component } from "react";
import { MobileNav, MobileNavBar, BurgerCheckHolder, FakeCheckbox, BurgerSpanOne, BurgerSpanTwo, BurgerSpanThree, MobileNavCard, MobileNavCardLinkHolder, MobileNavCardLinkDiv, MobileNavCardButton, MobileNavIconHolder, SliderBG, SliderCheckHolder, SliderCheckbox, ExtraGlow } from "../NavBarStyling/NavBarStyle";
import '../App.css';
import Home from '../PageSections/Home.js';
import { WholePage } from "./MainPageStyle";
import AnimArrow from "../Components/AnimatedArrow";
import About from "../PageSections/About";
import Projects from "../PageSections/Projects";
import Experience from "../PageSections/Experience";
import Degrees from "../PageSections/Degrees";
import Footer from "../PageSections/Footer";
import ContactSection from "../PageSections/ContactSection";


class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
            lightmode: false
        }


        this.checkRef = React.createRef();
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    handleCheckbox(event, which) {
        if (event === true && which === "menu") {
            //this is if the checkbox is checked
            this.setState({
                checked: event

            }, () => { })

        }
        if (event === false && which === "menu") {
            //this is if the checkbox is not checked
            this.setState({
                checked: event
            }, () => { })
        }
        if (event === true && which === "lightdark") {
            //this is if the checkbox is checked
            this.props.setLightOrDark(event)
            this.setState({
                lightmode: event

            }, () => { })

        }
        if (event === false && which === "lightdark") {
            //this is if the checkbox is not checked
            this.props.setLightOrDark(event)
            this.setState({
                lightmode: event
            }, () => { })

        }
    };


    handleButtonClick = (e, sectionName) => {
        const target = document.getElementById(sectionName)
        target.scrollIntoView({ behavior: "smooth" })
        this.setState({
            checked: false

        }, () => { })
        this.checkRef.current.checked = false;
    };

    render() {
        return (

            <>

                <MobileNav >
                    <MobileNavBar>
                        <MobileNavIconHolder />
                        <SliderCheckHolder>
                            <ExtraGlow active={this.state.lightmode} />
                            <SliderBG active={this.state.lightmode}>
                                <SliderCheckbox
                                    type="checkbox"
                                    onChange={(e) => this.handleCheckbox(e.target.checked, "lightdark")}
                                    active={this.state.lightmode}
                                />
                            </SliderBG>
                        </SliderCheckHolder>
                        <BurgerCheckHolder active={this.state.checked}>
                            <BurgerSpanOne active={this.state.checked}></BurgerSpanOne>
                            <BurgerSpanTwo active={this.state.checked}></BurgerSpanTwo>
                            <BurgerSpanThree active={this.state.checked}></BurgerSpanThree>
                            <FakeCheckbox
                                ref={this.checkRef}
                                type="checkbox"
                                onChange={(e) => this.handleCheckbox(e.target.checked, "menu")}
                                active={this.state.checked}
                            />
                        </BurgerCheckHolder>
                        <MobileNavCard active={this.state.checked}>
                            <MobileNavCardLinkHolder>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e, "home")}>Home</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e, "about")}>About</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e, "projects")}>Projects</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e, "degrees")}>Degrees</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                                <MobileNavCardLinkDiv>
                                    <MobileNavCardButton onClick={(e) => this.handleButtonClick(e, "experience")}>Experience</MobileNavCardButton>
                                </MobileNavCardLinkDiv>
                            </MobileNavCardLinkHolder>
                        </MobileNavCard>

                    </MobileNavBar>
                </MobileNav>
                <WholePage>
                    <div className="container" id="home"><Home lightdark={this.state.lightmode} /></div>
                    <AnimArrow lightdark={this.state.lightmode} />
                    {/*<div id="WorkSection" ref={this.testscroll}><Work/></div>*/}
                    <div className="container" id="about"><About lightdark={this.state.lightmode} /></div>
                    <div className="container" id="projects"><Projects lightdark={this.state.lightmode} /></div>
                    <div className="container" id="degrees"><Degrees lightdark={this.state.lightmode} /></div>
                    <div className="container" id="experience"><Experience lightdark={this.state.lightmode} /></div>
                    <div className="container" id="contact"><ContactSection lightdark={this.state.lightmode}/> </div>
                    <div className="container" id="footer"><Footer /></div>
                </WholePage>
            </>

        )
    }
}

export default MainPage;