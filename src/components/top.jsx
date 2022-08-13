import React from 'react';
import {Link } from "react-router-dom";

const Top = () => {
    return (
        <>
    <header>
      <div className="container">
        <h1 className="logo"><Link to='/'>HMM</Link></h1>
        <nav>
          <ul className="main_menu">
            <li>
                <Link to='/aboutHMM'>About HMM</Link>
            </li>
                <Link to='/container'>About HMM</Link>
            <li>
              <a
                href="container.html"
                className="border_primary"
                data-linktext="Container"
                >Container</a
              >
            </li>
            <li>
              <a
                href="service.html"
                className="border_primary"
                data-linktext="Service"
                >Service</a
              >
            </li>
            <li><a href="" className="border_primary" data-linktext="IR">IR</a></li>
            <li>
              <a href="" className="border_primary" data-linktext="Contacts"
                >Contacts</a
              >
            </li>
            <li>
              <a href="" className="border_primary" data-linktext="Local sites"
                >Local sites</a
              >
            </li>
          </ul>
        </nav>
        <ul className="top_links">
          <li>
            <form action="#">
              <div className="container">
                <button type="submit" className="btn-search on">
                  <span className="material-symbols-rounded font_icon">search</span>
                </button>
                <label for="top_search" className="hidden">search keyword</label>
                <input
                  type="text"
                  id="top_search"
                  name="q"
                  className="input-search active"
                  placeholder="Search keyword"
                  autocomplete="on"
                />
                <button type="button" className="btn_close on">
                  <span className="material-symbols-rounded font_icon">close</span>
                </button>
              </div>
            </form>
          </li>
          <li>
            <button type="button" className="btn_account">
              <span className="material-symbols-rounded font_icon"
                >account_circle</span
              >
            </button>
          </li>
          <li>
            <button href="#" className="hamburger-button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </header>





        <h1>로고</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>메인</Link>
                </li>
                <li>
                <Link to='/container'>컨테이너</Link>

                </li>
                <li>
                <Link to='/aboutHMM'>어바웃</Link>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default Top;