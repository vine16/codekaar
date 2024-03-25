import { useState } from "react";
import React from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "../App.css";
require("codemirror/mode/xml/xml");
require("codemirror/mode/css/css");
require("codemirror/mode/javascript/javascript");

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9x 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060605;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;
export default function Editor({ heading, icon, color, value, onChange }) {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value); //set the changed value
  };
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          onClick={() => setOpen((prev) => !prev)}
          style={{ cursor: "pointer", alignSelf: "center" }}
          fontSize="small"
        />
      </Header>
      <CodeMirror
        className="controlled-editor"
        options={{
          theme: "material",
          lineNumbers: true,
        }}
        value={value}
        onBeforeChange={handleChange}
      />
    </Container>
  );
}
