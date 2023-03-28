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
    <div>
      <h1>Code Converter</h1>
      <label>
        JavaScript code:
        <textarea value={jsCode} onChange={(e) => setJsCode(e.target.value)} />
      </label>
      <br />
      <button onClick={() => handleConvertToTypeScript}>
        Convert to TypeScript
      </button>
      <br />
      <br />
      <label>
        TypeScript code:
        <textarea value={tsCode} onChange={(e) => setTsCode(e.target.value)} />
      </label>
      <br />
      <button onClick={handleConvertToJavaScript}>Convert to JavaScript</button>
    </div>
  );
}
