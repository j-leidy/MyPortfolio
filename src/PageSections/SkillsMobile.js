import React, { useEffect, useRef, useState } from "react";
import { Glow, Icon, IconWithText, SkillsBody, SkillsRow} from "./SkillsStyleMobile";

import iconc from '../Icons/cpng.png';
import iconsqlite from '../Icons/sqlitepng.png';
import pythonicon from '../Icons/python.png';
import mongodbicon from '../Icons/mongodb.png';
import discordicon from '../Icons/discord.png';
import cssicon from '../Icons/cssicon.png';
import htmlicon from '../Icons/htmlicon.png';
import jsicon from '../Icons/jsicon.png';
import reacticon from '../Icons/reacticon.png';



const SkillsMobile = ({lightdark}) => {

    const SkillsBodyRef = useRef();
    const [BodyVisible, setBodyVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setBodyVisible(entry.isIntersecting)
        });
        observer.observe(SkillsBodyRef.current)
    },[SkillsBodyRef,BodyVisible]);




    return(
        <SkillsBody ref={SkillsBodyRef} inView = {BodyVisible} active = {lightdark}>
            <SkillsRow>
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={iconc}/>
                    </IconWithText>
                
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={iconsqlite}/>
                    </IconWithText>
                
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={pythonicon}/>
                    </IconWithText>
                
            </SkillsRow>
            <SkillsRow>
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={mongodbicon}/>
                    </IconWithText>
                
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={discordicon}/>
                    </IconWithText>
                
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={cssicon}/>
                    </IconWithText>
                
            </SkillsRow>
            <SkillsRow>
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={htmlicon}/>
                    </IconWithText>
                
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={jsicon}/>
                    </IconWithText>
                    
                <Glow>
                </Glow>
                    <IconWithText>
                        <Icon src={reacticon}/>
                    </IconWithText>
                
            </SkillsRow>

        </SkillsBody>
    );
};

export default SkillsMobile;