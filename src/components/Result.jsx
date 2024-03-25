import { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  height: auto;
`;
export default function Result() {
  const [src, setSrc] = useState("");
  //we have html, css, js as string
  //we need to combine all 3, as a html doc
  const { html, css, js } = useContext(DataContext);
  const srcCode = `
    <html>
    <body> ${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js, srcCode]);
  return (
    <Container>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100"
        heihgt="100"
      />
    </Container>
  );
}
