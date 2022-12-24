import React from "react";
import { Icon, IconWithText, SkillsBody, SkillsRow, SkillsTitle } from "./SkillsStyleHome";

import iconc from '../Icons/cpng.png';
import iconsqlite from '../Icons/sqlitepng.png';
import pythonicon from '../Icons/python.png';
import mongodbicon from '../Icons/mongodb.png';
import discordicon from '../Icons/discord.png';
import cssicon from '../Icons/cssicon.png';
import htmlicon from '../Icons/htmlicon.png';
import jsicon from '../Icons/jsicon.png';
import reacticon from '../Icons/reacticon.png';



const SkillsHome = () => {
    return(
        <SkillsBody>
            <SkillsTitle>
                Toolkit
            </SkillsTitle>
            <SkillsRow>
                <IconWithText>
                    <Icon src={iconc}/>
                </IconWithText>
                <IconWithText>
                    <Icon src={iconsqlite}/>
                </IconWithText>
                <IconWithText>
                    <Icon src={pythonicon}/>
                </IconWithText>
            </SkillsRow>
            <SkillsRow>
                <IconWithText>
                    <Icon src={mongodbicon}/>
                </IconWithText>
                <IconWithText>
                    <Icon src={discordicon}/>
                </IconWithText>
                <IconWithText>
                    <Icon src={cssicon}/>
                </IconWithText>
            </SkillsRow>
            <SkillsRow>
                <IconWithText>
                    <Icon src={htmlicon}/>
                </IconWithText>
                <IconWithText>
                    <Icon src={jsicon}/>
                </IconWithText>
                <IconWithText>
                    <Icon src={reacticon}/>
                </IconWithText>
            </SkillsRow>

        </SkillsBody>
    );
};

export default SkillsHome;