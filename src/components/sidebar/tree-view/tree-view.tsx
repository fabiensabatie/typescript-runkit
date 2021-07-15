import React from "react";
// import { Store } from "../../../adapters/store";
// import { EditorFileMap } from "../../../domain/port/store/editor-file.store.port";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { ContextMenuTrigger } from "react-contextmenu";
import ContextMenuComponent from "./context-menu";

const TreeViewFileSystem = () => {
  // const fileSystem:EditorFileMap = Store.files(state => state.fileSystem);

  return (<div>
    <ContextMenuComponent></ContextMenuComponent>
    <div className="text-sm uppercase bg-black-input w-full box-border p-2 mb-2">Files</div>
    <ContextMenuTrigger id="context_menu">
      <TreeView
        className="z-4"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
      >
        <TreeItem nodeId="1" label={<div className="text-sm font-body">Applications</div>} onLabelClick={console.log}>
          <TreeItem nodeId="2" label={<div className="text-sm font-body">Calendar</div>} />
          <TreeItem nodeId="3" label={<div className="text-sm font-body">Chrome</div>} />
          <TreeItem nodeId="4" label={<div className="text-sm font-body">Webstorm</div>} />
        </TreeItem>
        <TreeItem nodeId="5" label={<div className="text-sm font-body">Documents</div>}>
          <TreeItem nodeId="6" label={<div className="text-sm font-body">Material</div>}>
            <TreeItem nodeId="7" label={<div className="text-sm font-body">src</div>}>
              <TreeItem nodeId="8" label={<div className="text-sm font-body">index</div>}/>
              <TreeItem nodeId="9" label={<div className="text-sm font-body">tree</div>} />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </ContextMenuTrigger>
  </div>);
}

export default TreeViewFileSystem;