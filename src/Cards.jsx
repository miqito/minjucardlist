import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './Cards.css'

import listaCartas from './listaCartas'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'

import 'bootstrap/dist/css/bootstrap.min.css'


function NewBadge(){
  return <Badge bg="danger" style={{marginRight: '3px', fontSize: '0.6rem'}}>NEW!</Badge>
}

function Cards(props) {

  let filtroRaridade = props.raridade

  const tamanhoFiltro = listaCartas.filter(cartas => (filtroRaridade == 0 ? cartas.raridade > 0 : cartas.raridade == filtroRaridade)).filter(cartas => cartas.grupo.toLowerCase().indexOf(props.grupo.toLowerCase()) > -1).filter(cartas => cartas.artista.toLowerCase().indexOf(props.pesquisa.toLowerCase()) > -1).sort(function(a, b){return props.ordem == 0 ? b.id-a.id : b.id+a.id}).map(
    (cartas) => (null)).length

    return (
      <ThemeProvider>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
</style>
      <div className="Cards">
        <Container fluid="sm">
          
        <Row>
        {listaCartas.filter(cartas => (filtroRaridade == 0 ? cartas.raridade > 0 : cartas.raridade == filtroRaridade)).filter(cartas => cartas.grupo.toLowerCase().indexOf(props.grupo.toLowerCase()) > -1).filter(cartas => cartas.artista.toLowerCase().indexOf(props.pesquisa.toLowerCase()) > -1).sort(function(a, b){return props.ordem == 0 ? b.id-a.id : b.id+a.id}).map(
          (cartas) => (
            <Card className="Card" text='white' style={{ width: '18rem', backgroundColor: props.isDark ? '#36393f' : '#3e1c3c' }}>
            <Card.Img variant="top" src={cartas.link} />
            <Card.Body>
              <Card.Title>{(cartas.new == true ? <NewBadge/> : null)}<strong>{cartas.grupo}</strong> {cartas.artista}</Card.Title>
              <Card.Text><Badge bg="secondary" style={{marginRight: '3px'}}>{cartas.code}</Badge><Badge bg="secondary">V{cartas.versao}</Badge>{"⭐".repeat(cartas.raridade)}</Card.Text>
            </Card.Body>
          </Card>
          )
        ).slice(0, props.cardsPorPagina)}
        {(props.cardsPorPagina < tamanhoFiltro ? <Button onClick={() => props.onCardChange(props.cardsPorPagina + 8)} variant="dark" className={props.isDark ? "Button ButtonDarkMode" : "Button ButtonLightMode"} >Load more... </Button> : null)
        }
        </Row>
        </Container>
      </div>
      <div>
    <p className="Footer buttonCenter" style={{color: props.isDark ?  '#e5c6e0' : '#3c1c3c'}}>it's 11:11</p>
  </div>
      </ThemeProvider>
    )

  
  
}

export default Cards
