import React, {FC} from 'react';
import {Box, Container, Grid} from "@mui/material";

const TopBar: FC = () => {
  return (
    <div className="top-bar">
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={1} className="logo">
            <a href="#">
              <img src="/images/logo-new.png" alt=""/>
            </a>
          </Grid>
          <Grid item xs={7} className="menu">
            <ul>
              <li><a className="effect-underline" href="#">Home</a></li>
              <li><a className="effect-underline" href="#about">About</a></li>
              <li><a className="effect-underline" href="#how-to-buy">How to Buy</a></li>
              <li><a className="effect-underline" href="#tokenomics">Tokenomics</a></li>
              <li><a className="effect-underline" href="#presale">Presale</a></li>
              <li><a className="effect-underline" href="#roadmap">Roadmap</a></li>
            </ul>
          </Grid>
          <Grid item xs={4} className="buttons">
            <a href="https://drive.proton.me/urls/ABBBQHJPTM#JRZKa3Z1LhQL" target="_blank"
               className="light-btn">LightPaper</a>
            <a href="https://vip.pepsace.com/" target="_blank" className="dark-btn"><i>Buy $SACE</i></a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopBar;
