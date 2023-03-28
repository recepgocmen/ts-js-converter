import { useState } from "react";
import convertCode from "../../public/components/convert";

export default function Convert() {
  const [jsCode, setJsCode] = useState("");
  const [tsCode, setTsCode] = useState("");

  const handleConvertToTypeScript = async () => {
    const convertedCode = await convertCode(jsCode, "typescript");
    setTsCode(convertedCode);
  };

  const handleConvertToJavaScript = async () => {
    const convertedCode = await convertCode(tsCode, "javascript");
    setJsCode(convertedCode);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        style={{ marginTop: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Code Converter
      </h1>
      <div style={{ width: "80%" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>JSX code:</h2>
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            style={{ width: "100%", minHeight: "10rem" }}
          />
        </label>
        <button
          onClick={() => handleConvertToTypeScript()}
          style={{
            display: "block",
            margin: "1rem auto",
            padding: "5px",
            border: "1px solid white",
          }}
        >
          Convert to TSX
        </button>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>TSX code:</h2>
          <textarea
            value={tsCode}
            onChange={(e) => setTsCode(e.target.value)}
            style={{ width: "100%", minHeight: "10rem" }}
          />
        </label>
        <button
          onClick={handleConvertToJavaScript}
          style={{
            display: "block",
            margin: "1rem auto",
            padding: "5px",
            border: "1px solid white",
          }}
        >
          Convert to JSX
        </button>
      </div>
    </div>
  );
}
