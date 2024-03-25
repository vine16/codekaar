import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
const Container = styled(AppBar)`
  background: #060606;
`;

export default function Header() {
  const logo = "./codekaar.png";
  return (
    <Container position="static">
      <Toolbar>
        <img style={{ width: 40 }} src={logo} alt="codeKaar logo" />
      </Toolbar>
    </Container>
  );
}
