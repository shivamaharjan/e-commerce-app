import React from 'react'
import SideBar from './SideBar'
import Header from './Header';
import Footer from './Footer';

function AdminLayout({title,children} ) {
  return (
    <div>
      <div className="d-flex">
        <div className="left w-25 nav-bar">
          <SideBar />
        </div>
        <div className="right w-75">
          <Header />
          <div className="main admin-color">
            <h2 className="px-3 pt-3">{title}</h2>
            <hr />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout