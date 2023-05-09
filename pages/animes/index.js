import React from 'react'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import { BiSearchAlt } from "react-icons/bi";
import Page from '../../components/Page'
import apiAnimes from "../services/connectAPI"


const index = ({ animes }) => {
    return (
        <Page titulo="Anime">


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhes</th>
                        <th>Titulo</th>
                        <th>Duração</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map(item => (
                        <tr>

                            <td><Link href={`animes/detalhes/${item.mal_id}`}><BiSearchAlt /></Link></td>
                            <td>{item.title}</td>
                            <td>{item.duration}</td>
                            <td>{item.year}</td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </Page>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultadoAnimes = await apiAnimes.get('/anime')
    const animes = resultadoAnimes.data.data

    return {
        props: { animes },
    }
}