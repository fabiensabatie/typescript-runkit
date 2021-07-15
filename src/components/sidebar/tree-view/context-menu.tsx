import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

const ContextMenuComponent = () => {
  return (
    <ContextMenu id="context_menu">
      <div className="bg-contextMenuBackground text-clearWhite py-2 z-9999" style={{width : "300px"}}>
      <MenuItem onClick={console.log}>
        <div className="py-1 px-5 text-med cursor-pointer hover:bg-contextMenuBackgroundHovered">New File</div>
      </MenuItem>
      <MenuItem onClick={console.log}>
        <div className="py-1 px-5 text-med cursor-pointer hover:bg-contextMenuBackgroundHovered">New Folder</div>
      </MenuItem>
      <MenuItem divider />
      <MenuItem onClick={console.log}>
        <div className="py-1 px-5 text-med cursor-pointer hover:bg-contextMenuBackgroundHovered">Cut</div>
      </MenuItem>
      <MenuItem onClick={console.log}>
        <div className="py-1 px-5 text-med cursor-pointer hover:bg-contextMenuBackgroundHovered">Copy</div>
      </MenuItem>
      <MenuItem onClick={console.log}>
        <div className="py-1 px-5 text-med cursor-pointer hover:bg-contextMenuBackgroundHovered">Paste</div>
      </MenuItem>
      </div>
    </ContextMenu>
  );
}

export default ContextMenuComponent;