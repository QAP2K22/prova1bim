import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Page = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Link className="navbar-brand" href={"/animes"}>Animes</Link>

          <Nav className="me-auto">
            <Link className="nav-link" href={"/animes"}>Animes</Link>
            <Link className="nav-link" href={"/animes/generos"}>Gêneros</Link>
          </Nav>
        </Container>
      </Navbar>


      <header className="bg-secondary text-light text-center py-5 mb-5 w-100">
        <h1>{(props.titulo) ? props.titulo : "Prova 1BIM"}</h1>
      </header>

      <Container>
        {props.children}
      </Container>

      <footer style={{ width: '100%', height: "35px" }} className='bg-secondary text-white text-center bottom-0'>
        <p>Rodapé</p>
      </footer>
    </>
  )
}

export default Page