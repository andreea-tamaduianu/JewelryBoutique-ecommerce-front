import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ()=>(
    <nav>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/product"  className="nav-link">Creeaza produs nou</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/products"  className="nav-link">Lista produse</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/category"  className="nav-link">Categorii</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/sub"  className="nav-link">Subcategorii</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/coupon"  className="nav-link">Cupoane</Link>
            </li>

            <li className="nav-item">
                <Link to="/user/password"  className="nav-link">Schimba parola</Link>
            </li>
        </ul>
    </nav>
)

export default AdminNav;