import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "tailwindcss/tailwind.css";
import SideBar from "./components/sidebar";

const files:{[file: string] : any} = {
  "script.ts": {
    name: "script.ts",
    language: "typescript",
    value: "console.log('test');",
  }
}

const TypeScriptPlayground:React.FunctionComponent = () => {
  const [fileName, setFileName] = useState("script.ts");
  const file = files[fileName];

  return (
    <div className="w-full h-screen flex box-border">
      <div className="w-1/6 h-full">
        <SideBar setSelectedFile={() => setFileName(fileName) }></SideBar>
      </div>
      <div className="w-5/6 h-full">
        <Editor
          height="100vh"
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
        />
      </div>
     
    </div>
  );
}

export default TypeScriptPlayground;