import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './css/CopyRightBar.css';
import { Link } from 'react-router-dom';
import linkedinLogo from './img/linkedinLogo.png';
import githubLogo from './img/githubLogo.png';
import discordLogo from './img/discordLogo.png';

export class CopyRightBar extends Component {
    static displayName = CopyRightBar.name;


    render() {
        var linkedinAddress = "https://www.linkedin.com/in/janek-tuisk/";
        var githubAddress = "https://github.com/jTuisk/";
        var discordAddress = "https://discord.gg/zcd2csffSx";

        return (
            <footer className="box-shadow" light>
                <Container>

                    <div className="icons">
                        <a href={linkedinAddress}><img src={linkedinLogo} className="icon" alt="Linkedin" /></a>
                        <a href={githubAddress}><img src={githubLogo} className="icon" alt="Github" /></a>
                        <a href={discordAddress}><img src={discordLogo} className="icon" alt="Discord" /></a>
                    </div>
                   
                    <p> All rights reserved © Snowstorm Studios</p>
                </Container>
            </footer>
        );
    }
}