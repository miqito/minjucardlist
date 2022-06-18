import { useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import Cards from './Cards'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';
import OffcanvasBody from 'react-bootstrap/esm/OffcanvasBody'
import OffcanvasTitle from 'react-bootstrap/esm/OffcanvasTitle'
import CloseButton from 'react-bootstrap/esm/CloseButton';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)
  const [star, setStar] = useState(0)
  const [order, setOrder] = useState(0)
  const [inputGroup, setInputGroup] = useState('')
  const [inputArtist, setInputArtist] = useState('');
  const searchInput = useRef(null)
  const [page, setPage] = useState(8)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
  const getInputValue = (event)=>{
    // show the user input value to console
    const userValue = event.target.value;
    console.log(userValue);
  }
  return (
    <ThemeProvider >
    <div className="App">
    <div>
      <header className="App-header">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
          <NavbarBrand>
            <img className="logo" src="https://i.imgur.com/GGQbXNG.png"></img>
          </NavbarBrand>
          <Nav>
            <Nav className="justify-content-end">
            <Button variant="primary" onClick={handleShow}>
        Filters
      </Button>
            </Nav>
          </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
    <Offcanvas className="Offcanvas" show={show} onHide={handleClose}  scroll="true">
        <OffcanvasHeader className="Offcanvas">
          <OffcanvasTitle>Filters</OffcanvasTitle>
          <CloseButton variant="white" onClick={handleClose}/>
        </OffcanvasHeader>
        <OffcanvasBody className="Offcanvas">
              <DropdownButton className="searchInput" id="dropdown-basic-button" title={"Filter by Rarity: " + (star == 0 ? "All" : "⭐".repeat(star))}>
                <DropdownItem onClick={(() => {setStar(0)
                setPage(8)
                })}>All</DropdownItem>
                <DropdownItem onClick={(() => {setStar(1)
                setPage(8)
                })}>⭐</DropdownItem>
                <DropdownItem onClick={(() => {setStar(2)
                setPage(8)
                })}>⭐⭐</DropdownItem>
                <DropdownItem onClick={(() => {setStar(3)
                setPage(8)
                })}>⭐⭐⭐</DropdownItem>
                <DropdownItem onClick={(() => {setStar(4)
                setPage(8)
                })}>⭐⭐⭐⭐</DropdownItem>
                <DropdownItem onClick={(() => {setStar(5)
                setPage(8)
                })}>⭐⭐⭐⭐⭐</DropdownItem>
              </DropdownButton>
        <DropdownButton className="searchInput" id="dropdown-basic-button" title={"Sort by Release: " + (order == 0 ? "Newest" : "Oldest")}>
                <DropdownItem onClick={(() => {setOrder(0)
                setPage(8)
                })}>Newest</DropdownItem>
                <DropdownItem onClick={(() => {setOrder(1)
                setPage(8)
                })}>Oldest</DropdownItem>
              </DropdownButton>
              <FormControl
              className="searchInput"
      placeholder="Group..."
      aria-label="Group..."
      aria-describedby="basic-addon1"
      value={inputGroup} onInput={e => {
        setInputGroup(e.target.value)
        setPage(8)}
      } 
    />
              <FormControl
              className="searchInput"
      placeholder="Artist..."
      aria-label="Artist..."
      aria-describedby="basic-addon1"
      value={inputArtist} onInput={e => {
        setInputArtist(e.target.value)
        setPage(8)
      }
      }
    />
      <Button className="searchInput" id="dropdown-basic-button" variant="primary" onClick={(()=> {
        setStar(0)
        setPage(8)
        setInputArtist('')
        setInputGroup('')
      })}>
        Clear filters
      </Button>
        </OffcanvasBody>
      </Offcanvas>
    <div>
    <Cards cardsPorPagina={page} onCardChange={setPage} raridade={star} ordem={order} pesquisa={inputArtist} grupo={inputGroup}/>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
