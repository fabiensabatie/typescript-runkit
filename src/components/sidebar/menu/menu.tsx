import React from "react";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SettingsIcon from '@material-ui/icons/Settings';

interface MenuProps {
  onFileSelected : () => void;
  onSearchSelected : () => void;
  onDependencySelected : () => void;
}

const Menu = ({onFileSelected, onSearchSelected, onDependencySelected} : MenuProps) => {
  return (<div className="w-full h-full flex flex-col items-center justify-start">
    <DescriptionOutlinedIcon onClick={onFileSelected} className="mt-5 cursor-pointer"></DescriptionOutlinedIcon>
    <SearchOutlinedIcon onClick={onSearchSelected} className="mt-5 cursor-pointer"></SearchOutlinedIcon>
    <SettingsIcon onClick={onDependencySelected} className="mt-5 cursor-pointer"></SettingsIcon>
  </div>);
}

export default Menu;