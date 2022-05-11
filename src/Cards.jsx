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
  const [count, setCount] = useState(0)
  const [noCards, setNoCards] = useState(false)

  let filtroRaridade = props.raridade

  const filtrarRaridade = (cartas) => {
    return (cartas => cartas.artista.toLowerCase().indexOf(props.pesquisa.toLowerCase()) > -1)
  }

    return (
      <ThemeProvider>
      <div className="Cards">
        <Container fluid="sm">
          
        <Row>
        {listaCartas.filter(cartas => (filtroRaridade == 0 ? cartas.raridade > 0 : cartas.raridade == filtroRaridade)).filter(cartas => cartas.grupo.toLowerCase().indexOf(props.grupo.toLowerCase()) > -1).filter(cartas => cartas.artista.toLowerCase().indexOf(props.pesquisa.toLowerCase()) > -1).sort(function(a, b){return props.ordem == 0 ? b.id-a.id : b.id+a.id}).map(
          (cartas) => (
            <Card className="Card" text='white' style={{ width: '18rem', backgroundColor: '#36393f' }}>
            <Card.Img variant="top" src={cartas.link} />
            <Card.Body>
              <Card.Title>{(cartas.new == true ? <NewBadge/> : null)}<strong>{cartas.grupo}</strong> {cartas.artista}</Card.Title>
              <Card.Text><Badge bg="secondary" style={{marginRight: '3px'}}>{cartas.code}</Badge><Badge bg="secondary">V{cartas.versao}</Badge>{"⭐".repeat(cartas.raridade)}</Card.Text>
            </Card.Body>
          </Card>
          )
        )}
        </Row>
        </Container>
      </div>
      </ThemeProvider>
    )

  
  
}

export default Cards