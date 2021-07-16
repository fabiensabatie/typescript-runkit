import TreeItem from "@material-ui/lab/TreeItem";
import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";

const TreeViewItem = () => {
  return (<div>
    <ContextMenuTrigger id="context_menu">
        <TreeItem nodeId="1" label={<div className="text-sm font-body">Applications</div>} onLabelClick={console.log}>
          <TreeItem nodeId="4" label={<div className="text-sm font-body">Webstorm</div>} />
        </TreeItem>
    </ContextMenuTrigger>
  </div>);
}

export default TreeViewItem;