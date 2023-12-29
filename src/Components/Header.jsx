import React from 'react'


import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://icons-for-free.com/iconfiles/png/512/play+sharing+social+media+video+icon-1320195426184466653.png'
              height='30'
              alt=''
              loading='lazy'
            />
            Media - App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header