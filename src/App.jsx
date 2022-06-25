import { useState, useEffect  } from 'react'
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
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';
import OffcanvasBody from 'react-bootstrap/esm/OffcanvasBody'
import OffcanvasTitle from 'react-bootstrap/esm/OffcanvasTitle'
import CloseButton from 'react-bootstrap/esm/CloseButton';
import MoonIcon from './moon.svg'
import SunIcon from './sun.svg'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)
  const [star, setStar] = useState(0)
  const [order, setOrder] = useState(0)
  const [inputGroup, setInputGroup] = useState('')
  const [inputArtist, setInputArtist] = useState('');
  const [page, setPage] = useState(8)
  const [darkMode, setDarkMode] = useState(() => {
    var saved;
      saved = localStorage.getItem("lightmode");
return saved
  });


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() =>{
    localStorage.setItem("lightmode", darkMode)
  }, [darkMode])

  const toggleDarkMode = () =>{
    if(darkMode){
      setDarkMode(false)
      localStorage.setItem("lightmode", darkMode)
    } else {
      setDarkMode(true)
      localStorage.setItem("lightmode", darkMode)
    }
  }

    
  const getInputValue = (event)=>{
    // show the user input value to console
    const userValue = event.target.value;
    console.log(userValue);
  }
  return (
    <ThemeProvider >
    <div className={darkMode ? "AppDarkMode" : "AppLightMode"}>
    <div>
      <header className="App-header">
        <Navbar className={darkMode ? "HeaderDarkMode" : "HeaderLightMode"} fixed="top">
          <Container>
          <NavbarBrand>
            <img className="logo" src={darkMode ? "https://i.imgur.com/FROyPMz.png" : "https://i.imgur.com/Z7Lg2zj.png"}></img>
          </NavbarBrand>
          <Nav>
            <Nav className="justify-content-end">
            <Button variant="dark" className={darkMode ? "Button ButtonDarkMode" : "Button ButtonLightMode"} onClick={toggleDarkMode}>
            <img className="IconMode" src={darkMode ? SunIcon : MoonIcon}></img>
      </Button>
            <Button variant="dark" className={darkMode ? "Button ButtonDarkMode" : "Button ButtonLightMode"} onClick={handleShow}>
        Filters
      </Button>
            </Nav>
          </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
    <Offcanvas className="Offcanvas" show={show} onHide={handleClose} scroll="true">
        <OffcanvasHeader className={darkMode ? "Offcanvas" : "Offcanvas ButtonDarkMode"}>
          <OffcanvasTitle>Filters</OffcanvasTitle>
          <CloseButton variant={darkMode ? "white" : "dark"} onClick={handleClose}/>
        </OffcanvasHeader >
        <OffcanvasBody className={darkMode ? "Offcanvas" : "Offcanvas ButtonDarkMode"}>
              <Dropdown as={ButtonGroup}>
              <DropdownToggle variant="dark" className={darkMode ? "Button ButtonDarkMode" : "Button ButtonLightMode"}>{"Filter by Rarity: " + (star == 0 ? "All" : "⭐".repeat(star))}</DropdownToggle>
              <DropdownMenu style={{backgroundColor: "#353a40"}}>
                <DropdownItem className="DropdownText" onClick={(() => {setStar(0)
                setPage(8)
                })}>All</DropdownItem>
                <DropdownItem className="DropdownText" onClick={(() => {setStar(1)
                setPage(8)
                })}>⭐</DropdownItem>
                <DropdownItem className="DropdownText" onClick={(() => {setStar(2)
                setPage(8)
                })}>⭐⭐</DropdownItem>
                <DropdownItem className="DropdownText" onClick={(() => {setStar(3)
                setPage(8)
                })}>⭐⭐⭐</DropdownItem>
                <DropdownItem className="DropdownText" onClick={(() => {setStar(4)
                setPage(8)
                })}>⭐⭐⭐⭐</DropdownItem>
                <DropdownItem className="DropdownText" onClick={(() => {setStar(5)
                setPage(8)
                })}>⭐⭐⭐⭐⭐</DropdownItem>
              </DropdownMenu>
              </Dropdown>
        <Dropdown as={ButtonGroup}>
          <DropdownToggle variant="dark" className={darkMode ? "Button ButtonDarkMode" : "Button ButtonLightMode"}>{"Sort by Release: " + (order == 0 ? "Newest" : "Oldest")}</DropdownToggle>
          <DropdownMenu style={{backgroundColor: "#353a40"}}>
                <DropdownItem className="DropdownText" onClick={(() => {setOrder(0)
                setPage(8)
                })}>Newest</DropdownItem>
                <DropdownItem className="DropdownText" onClick={(() => {setOrder(1)
                setPage(8)
                })}>Oldest</DropdownItem>
          </DropdownMenu>
              </Dropdown>
              <FormControl
              className={darkMode ? "Button InputDarkMode" : "Button InputLightMode"}
      placeholder="Group..."
      aria-label="Group..."
      aria-describedby="basic-addon1"
      value={inputGroup} onInput={e => {
        setInputGroup(e.target.value)
        setPage(8)}
      } 
    />
              <FormControl
              className={darkMode ? "Button InputDarkMode" : "Button InputLightMode"}
      placeholder="Artist..."
      aria-label="Artist..."
      aria-describedby="basic-addon1"
      value={inputArtist} onInput={e => {
        setInputArtist(e.target.value)
        setPage(8)
      }
      }
    />
      <Button variant="dark" className={darkMode ? "Button ButtonDarkMode" : "Button ButtonLightMode"} onClick={(()=> {
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
    <Cards cardsPorPagina={page} onCardChange={setPage} raridade={star} ordem={order} pesquisa={inputArtist} grupo={inputGroup} isDark={darkMode}/>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
