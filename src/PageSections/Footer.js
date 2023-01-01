import React from "react";
import { AuthorFooter, AuthorItem, AuthorItemCopyright, AuthorName, FooterBody, GithubLink, ImageLink, LinkedInLink, LinkImage, SocialLinksFooter } from "./FooterStyle";

import GitIcon from "../Icons/GithubWhite.png"
import LinkdIcon from  "../Icons/LIWhite.png"

const Footer = () => {
    return(
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
                    All site content © 2023 John Leidy II
                </AuthorItemCopyright>
            </AuthorFooter>
            <SocialLinksFooter>
                <GithubLink >
                    <ImageLink href="https://github.com/j-leidy" target="_blank">
                        <LinkImage src={GitIcon}/>
                    </ImageLink>
                </GithubLink>
                <LinkedInLink>
                    <ImageLink href= "https://www.linkedin.com/in/jrleidyii/" target= "_blank">
                        <LinkImage src={LinkdIcon}/>
                    </ImageLink>
                </LinkedInLink>
            </SocialLinksFooter>
        </FooterBody>
    );
};

export default Footer;