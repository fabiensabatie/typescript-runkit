import React, { useState } from "react";
import Menu from "./sidebar/menu/menu";
import TreeViewFileSystem from "./sidebar/tree-view/tree-view";
import Search from "./sidebar/search/search";
import Dependency from "./sidebar/dependency/dependency";

interface SideBarProps {
  setSelectedFile : () => void;
}

const SideBar = (props: SideBarProps) => {
  const [sidebar, setSidebar] = useState<"files" | "search" | "dependency">("files");

  return (<div className="w-full h-full flex text-white">
    <div className="w-1/6 h-full  bg-black-secondary">
      <Menu
        onFileSelected={() => setSidebar("files")}
        onSearchSelected={() => setSidebar("search")}
        onDependencySelected={() => setSidebar("dependency")}
      />
    </div>
    <div className="w-5/6 h-full z-4  bg-black-secondary">
      {sidebar === "files" && <TreeViewFileSystem />}
      {sidebar === "search" && <Search />}
      {sidebar === "dependency" && <Dependency />}
    </div>
  </div>);
}

export default SideBar;