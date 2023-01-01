import React, { useEffect, useRef, useState } from "react";
import { DesktopRowItemLeft, DesktopRowItemLeftIcon, DesktopRowItemLeftText, DesktopRowItemRight, DesktopRowItemRightIcon, DesktopRowItemRightText, DesktopSkillRow, DesktopSkillsBody, SkillsDesktopContent } from "./SkillsDesktopStyle";

import iconc from '../Icons/cpng.png';
import iconsqlite from '../Icons/sqlitepng.png';
import pythonicon from '../Icons/python.png';
import mongodbicon from '../Icons/mongodb.png';
import discordicon from '../Icons/discord.png';
import cssicon from '../Icons/cssicon.png';
import htmlicon from '../Icons/htmlicon.png';
import jsicon from '../Icons/jsicon.png';

const SkillsDesktop = ({lightdark}) => {
    const SkillsBodyRef = useRef();
    const [BodyVisible, setBodyVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setBodyVisible(entry.isIntersecting)
        });
        observer.observe(SkillsBodyRef.current)
    },[SkillsBodyRef,BodyVisible]);
    return(
        <DesktopSkillsBody ref={SkillsBodyRef} inView = {BodyVisible} active = {lightdark}>
            <SkillsDesktopContent>
                <DesktopSkillRow active = {lightdark}>
                    <DesktopRowItemLeft>
                        <DesktopRowItemLeftIcon src={iconc}/>
                        <DesktopRowItemLeftText>
                            C++
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight>
                        <DesktopRowItemRightText>
                            SQLITE
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src= {iconsqlite}/>
                    </DesktopRowItemRight>
                </DesktopSkillRow>
                <DesktopSkillRow active = {lightdark}>
                    <DesktopRowItemLeft>
                        <DesktopRowItemLeftIcon src={pythonicon}/>
                        <DesktopRowItemLeftText>
                            Python
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight>
                        <DesktopRowItemRightText>
                            Mongo DB
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src= {mongodbicon}/>
                    </DesktopRowItemRight>
                </DesktopSkillRow>
                <DesktopSkillRow active = {lightdark}>
                    <DesktopRowItemLeft>
                        <DesktopRowItemLeftIcon src={discordicon}/>
                        <DesktopRowItemLeftText>
                            Discord
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight>
                        <DesktopRowItemRightText>
                            CSS
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src= {cssicon}/>
                    </DesktopRowItemRight>
                </DesktopSkillRow>
                <DesktopSkillRow active = {lightdark}>
                    <DesktopRowItemLeft>
                        <DesktopRowItemLeftIcon src={htmlicon}/>
                        <DesktopRowItemLeftText>
                            HTML
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight>
                        <DesktopRowItemRightText>
                            Javascript
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src= {jsicon}/>
                    </DesktopRowItemRight>
                </DesktopSkillRow>
            </SkillsDesktopContent>
        </DesktopSkillsBody>
    );
}

export default SkillsDesktop;