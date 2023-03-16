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

const SkillsDesktop = ({ lightdark, liquibotref, liquibotwebsiteRef, juicebotRef, cplusDBRef }) => {
    const SkillsBodyRef = useRef();
    const [BodyVisible, setBodyVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setBodyVisible(entry.isIntersecting)
        });
        observer.observe(SkillsBodyRef.current)
    }, [SkillsBodyRef, BodyVisible]);



    //scrollers using refs from mainpage class... 
    //These refs are passed into here and assigned over in Projects.js to each project card
    //in order to prevent the header from hiding the title of the project... we use the css property scroll-margin-top (top: num) does not work on scrollintoview in this case
    const liquibotScroll = () => liquibotref.current.scrollIntoView({ behavior: 'smooth' })
    const liquibotWebsiteScroll = () => liquibotwebsiteRef.current.scrollIntoView({ behavior: 'smooth' });
    const juicebotScroll = () => juicebotRef.current.scrollIntoView({ behavior: 'smooth' });
    const cplusScroll = () => cplusDBRef.current.scrollIntoView({ top: '200px', behavior: 'smooth' });

    return (
        <DesktopSkillsBody ref={SkillsBodyRef} inView={BodyVisible} active={lightdark}>
            <SkillsDesktopContent>
                <DesktopSkillRow active={lightdark}>
                    <DesktopRowItemLeft onClick={cplusScroll}>
                        <DesktopRowItemLeftIcon src={iconc} />
                        <DesktopRowItemLeftText>
                            C++
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight onClick={cplusScroll}>
                        <DesktopRowItemRightText>
                            SQLITE
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src={iconsqlite} />
                    </DesktopRowItemRight>
                </DesktopSkillRow>
                <DesktopSkillRow active={lightdark}>
                    <DesktopRowItemLeft onClick={liquibotScroll}>
                        <DesktopRowItemLeftIcon src={pythonicon} />
                        <DesktopRowItemLeftText>
                            Python
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight onClick={juicebotScroll}>
                        <DesktopRowItemRightText>
                            Mongo DB
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src={mongodbicon} />
                    </DesktopRowItemRight>
                </DesktopSkillRow>
                <DesktopSkillRow active={lightdark}>
                    <DesktopRowItemLeft onClick={liquibotScroll}>
                        <DesktopRowItemLeftIcon src={discordicon} />
                        <DesktopRowItemLeftText>
                            Discord
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight onClick={liquibotWebsiteScroll}>
                        <DesktopRowItemRightText>
                            CSS
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src={cssicon} />
                    </DesktopRowItemRight>
                </DesktopSkillRow>
                <DesktopSkillRow active={lightdark}>
                    <DesktopRowItemLeft onClick={liquibotWebsiteScroll}>
                        <DesktopRowItemLeftIcon src={htmlicon} />
                        <DesktopRowItemLeftText>
                            HTML
                        </DesktopRowItemLeftText>
                    </DesktopRowItemLeft>
                    <DesktopRowItemRight onClick={liquibotWebsiteScroll}>
                        <DesktopRowItemRightText>
                            Javascript
                        </DesktopRowItemRightText>
                        <DesktopRowItemRightIcon src={jsicon} />
                    </DesktopRowItemRight>
                </DesktopSkillRow>
            </SkillsDesktopContent>
        </DesktopSkillsBody>
    );
}

export default SkillsDesktop;