import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const SideMenu = () => {
  const [collapseMenu, setCollapseMenu] = useState(true);

  return(
    <div className="flex flex-col h-screen">
      <ProSidebar collapsed={collapseMenu}>
        <SidebarHeader>
          <Link to="/">
            <p>BACK</p>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <div className="cursor-pointer" onClick={() => setCollapseMenu(!collapseMenu)}>EXPAND</div>
          <Menu>
            <SubMenu title="MENU">
              <MenuItem>RECURRING CHARGES</MenuItem>
              <MenuItem>RECENT TRANSACTIONS</MenuItem>
              <MenuItem>BILL CALENDAR</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default SideMenu;