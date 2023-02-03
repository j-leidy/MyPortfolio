import React from "react";
import { AuthorFooter, AuthorItem, AuthorItemCopyright, AuthorName, FooterBody, SocialBarFooter, ImageLink, SocialBarFooterIcon } from "./FooterStyle";

import GH from "../Icons/GHBW.png";
import FB from "../Icons/FBBW.png";
import IG from "../Icons/IGBW.png";
import LI from "../Icons/LIBW.png";
import TWIT from "../Icons/TWITBW.png";


const Footer = () => {
    return (
        <FooterBody>
            <AuthorFooter>
                <AuthorName>
                    John Leidy II
                </AuthorName>
                <AuthorItem>
                    A.S. Computer Science
                </AuthorItem>
                <AuthorItem>
                    Built using React
                </AuthorItem>
                <AuthorItemCopyright>
                    Source Code, Images, Text, Content  © 2023 John Leidy II
                </AuthorItemCopyright>
            </AuthorFooter>
            <SocialBarFooter>
                <ImageLink href="https://www.instagram.com/swankdayz/" target="_blank">
                    <SocialBarFooterIcon src={IG} />
                </ImageLink>
                <ImageLink href="https://www.facebook.com/" target="_blank">
                    <SocialBarFooterIcon src={FB} />
                </ImageLink>
                <ImageLink href="https://twitter.com/Liquiiiiid" target="_blank">
                    <SocialBarFooterIcon src={TWIT} />
                </ImageLink>
                <ImageLink href="https://www.linkedin.com/in/jrleidyii/" target="_blank">
                    <SocialBarFooterIcon src={LI} />
                </ImageLink>
                <ImageLink href="https://github.com/j-leidy" target="_blank">
                    <SocialBarFooterIcon src={GH} />
                </ImageLink>
            </SocialBarFooter>
        </FooterBody>
    );
};

export default Footer;