import React, { useState, useEffect } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  SketchOutlined, ToolOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import logo from '../../images/logo2.png'
import { getCategories } from "../../functions/category";

const { SubMenu, Item } = Menu;

const CategoryNav = () => {
  const [current, setCurrent] = useState("home");
  const [categories, setCategories] = useState([]);

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  useEffect(() => {
   
    getCategories().then((c) => {
      setCategories(c.data);
      
    });
  }, []);

   

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="pl-5 pr-4">
       {categories.map((c)=>(
       
            <Item key={c.slug} icon={<SketchOutlined />}>
                <Link to={`/category/${c.slug}`} replace>{c.name}</Link>
            </Item>
                
       ))}
     
      
    </Menu>
  );
};

export default CategoryNav;
