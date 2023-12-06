import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const sideLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Category",
    path: "/category",
  },
  {
    label: "Products",
    path: "/product",
  },
  {
    label: "Payment Options",
    path: "/payment-options",
  },
  {
    label: "Orders",
    path: "/orders",
  },
  {
    label: "Customers",
    path: "/customers",
  },
  {
    label: "AdminSignup",
    path: "/register",
  },
  {
    label: "Profile",
    path: "/profile",
  },
];

function SideBar() {
    const {pathname} = useLocation();
    const userInfo = useSelector((state) => state.userInfo.user);
  return (
    <div>
      <nav>
        <div className="mt-3 text-center">Welcome {userInfo.fName}</div>
        <hr />
      </nav>
      <div>
        <ul className='list-unstyled side-links'>
            {sideLinks.map((input) => {
                const active = input.path === pathname ? "active" : "";
                return (
                  <li className={`mt-2 p-2 ms-2 ${active}`} key={input.path}>
                    <Link to={input.path} className="nav-link">
                      {input.label}
                    </Link>
                  </li>
                );

            })}
            
                
        </ul>
      </div>
      <div>

      </div>
    </div>
  );
}

export default SideBar