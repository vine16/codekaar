import Editor from "./Editor";
import React, { useContext } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;
export default function Code() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF0000"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#00FF00"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JS"
        icon="{}"
        color="#0000FF"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
}
