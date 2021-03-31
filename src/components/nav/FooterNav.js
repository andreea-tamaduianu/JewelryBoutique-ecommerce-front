import React, { useState, useEffect } from "react";
import { Menu, Badge } from "antd";
import {
   PhoneOutlined, ReadOutlined, FileDoneOutlined,TeamOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import logo from '../../images/logo2.png'
import { getCategories } from "../../functions/category";

const { SubMenu, Item } = Menu;

const FooterNav = () => {
  const [current, setCurrent] = useState("home");
  
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

 
  return (
    <Menu
    onClick={handleClick}
    style={{ width: 256 }}
    
    mode="inline"
  >
    <SubMenu key="legal" icon={<FileDoneOutlined />} title="Legal">
     
        <Menu.Item key="termeni_si_conditii">
            <Link to="/terms-and-conditions">Termeni si conditii</Link>
        </Menu.Item>
        <Menu.Item key="politica_de_confidentialitate">
            <Link to="/privacy-policy">Politica de confidentialitate</Link>
        </Menu.Item>
        <Menu.Item key="politica_cookie">
            <Link to="/cookie-policy">Politica Cookie</Link>
        </Menu.Item>
        
     
    </SubMenu>

    <SubMenu key="about_us" icon={<TeamOutlined />} title="Despre noi">
     
        <Menu.Item key="povestea_noastra">
            <Link to="/our-story">Povestea noastra</Link>
        </Menu.Item>
        <Menu.Item key="why_choose_us">
            <Link to="/why-choose-us">De ce sa alegi JewelryBoutique?</Link>
        </Menu.Item>
        <Menu.Item key="production_facilities">
            <Link to="/production-facilities">Facilitatile noastre de productie</Link>
        </Menu.Item>
        
     
    </SubMenu>
    <SubMenu key="help_faq" icon={<PhoneOutlined />} title="HELP & FAQ">
     
        <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="intrebari_frecvente">
            <Link to="/faq">Intrebari frecvente</Link>
        </Menu.Item>
        <Menu.Item key="politica_de_returnare">
            <Link to="/return-policy">Politica de returnare</Link>
        </Menu.Item>
        
     
    </SubMenu>
    <SubMenu key="ghiduri" icon={<ReadOutlined />} title="Ghiduri">
     
        <Menu.Item key="ghid_alegere_piatra_pretioasa">
            <Link to="/stone-guide">Ghid alegere piatra pretioasa</Link>
        </Menu.Item>
        <Menu.Item key="ghid_alegere_verighete">
            <Link to="/wedding-ring-guide">Ghid alegere verighete</Link>
        </Menu.Item>
        <Menu.Item key="ghid_piatra_lunii_de_nastere">
            <Link to="/birthstone-guide">Ghidul pietrei lunii in care v-ati nascut</Link>
        </Menu.Item>
        
     
    </SubMenu>
    
   
   
  </Menu>
  );
};

export default FooterNav;
