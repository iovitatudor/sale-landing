import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const PeroBottom: FC = () => {
  return (
    <Container maxWidth={"xl"}>
      <div className="pero-bottom">

        <Grid container className="options-list">
          <Grid item md={5} xs={12}>
            <img src="/images/Pero-image%201.svg" alt="" width="98%"/>
          </Grid>
          <Grid item md={7} xs={12} className="pero-bottom-info">
            <p>
              $Sace is a meme coin with no intrinsic value or expectation of financial return. There is no formal team
              or
              roadmap. the coin is completely useless and for entertainment purposes only.
            </p>
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default PeroBottom;