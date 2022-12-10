import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavigationItems } from '../NavigationItems'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import './Layout.css'
export default function Layout() {
  const [openclassName, setOpenclassName] = useState('nav-close')
  const toogleNav = (getClass) => {
   // console.log('click')
    setOpenclassName(getClass)
  }
  return (
    <div id="divId">
      <nav className={openclassName}>
        <div className="nav-links-container">
          <a href="#" className="nav-bar-a-btn">
            <button
              onClick={() => {
                toogleNav('nav-close')
              }}
            >
              X<ion-icon name="close-outline" size="large"></ion-icon>
            </button>{' '}
          </a>
          <br /> <br />
          {NavigationItems.map((link, ind) => (
            <Link key={ind} to={link?.to} className="nav__link">
              <span className="nav__text">{link?.name}</span>
            </Link>
          ))}
          {/**
           <a href="#" className="nav__link">
            <span className="nav__text">PAGES</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="cube-outline" size="large"></ion-icon>
            <span className="nav__text">Dashboard</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="location-outline" size="large"></ion-icon>
            <span className="nav__text">List View</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="settings-outline" size="large"></ion-icon>
            <span className="nav__text">Org Summery</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Team</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Order</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Messages</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Tasks</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Applications</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="settings-outline" size="large"></ion-icon>
            <span className="nav__text">Settings</span>
          </a>
           */}
        </div>
      </nav>

      <main
        style={{ margin: 0, padding: 0 }}
        className={openclassName === 'nav-open' ? 'main-close' : 'main-open'}
      >
        <Container style={{ margin: 0, padding: 0 }}>
          <Row style={{ margin: 0, padding: 0 }}>
            {openclassName === 'nav-open' ? (
              ''
            ) : (
              <Col xs={2}>
                <button
                  style={{
                    margin: 0,
                    padding: 0,
                    border: '10 solid red',
                    width: '20px',
                    height: '20px',
                    borderRadius: '5px',
                    backgroundColor: 'black',
                  }}
                  onClick={() => {
                    toogleNav('nav-open')
                  }}
                ></button>
              </Col>
            )}

            <Col xs={10}>
              <h>Now let's upload your spreadsheet</h>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
