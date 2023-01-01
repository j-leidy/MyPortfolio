import React from "react";
import { ArrowContainer, Arrow, TotalContainer } from "./AnimatedArrowStyle";

const AnimArrow = ({lightdark}) =>{
    return(
        <TotalContainer>
            <ArrowContainer>
                <Arrow active = {lightdark}></Arrow>
            </ArrowContainer>
        </TotalContainer>
    );
};

export default AnimArrow;