import React from 'react'
import Link from 'next/link'
import { Card, Col, Row } from 'react-bootstrap'
import { BiArrowBack, BiRightTopArrowCircle } from "react-icons/bi";
import Page from '../../../components/Page'
import apiAnimes from '../../services/connectAPI'

const detalhes = ({ anime }) => {
    return (
        <>
            <Page titulo={anime.title}>

                <div className="d-flex">
                    <div className="mt-3">
                        <Card
                            border="danger"
                            key="danger"
                            text="light"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header className="bg-danger">Foto</Card.Header>
                            <Card.Body>
                                <Card.Img src={anime["images"]["jpg"].image_url}></Card.Img>

                                <a href={anime["images"]["jpg"].image_url} className="btn btn-primary mt-2" target="_blank">Ampliar <BiRightTopArrowCircle /></a>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="flex-column mt-3 px-5">
                        <Card
                            border="danger"
                            key="danger"
                            text="light"
                            style={{ marginLeft: "20px" }}
                        >
                            <Card.Header className="bg-danger">{anime.title}</Card.Header>
                            <Card.Body className="text-dark">
                                <p><strong>Episódios:</strong> {anime.episodes}</p>
                                <p><strong>Status:</strong> {anime.status}</p>
                                {anime.year && <p><strong>Ano:</strong> {anime.year}</p>}
                                <p><strong>Duração:</strong> {anime.duration}</p>
                                <p><strong>Score:</strong> {anime.score}</p>
                                <p>{anime.synopsis}</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <Link href="/animes" className="btn btn-success mb-2"><BiArrowBack />Voltar</Link>
            </Page>
        </>
    )
}

export default detalhes


export async function getServerSideProps(context) {
    const id = context.params.id

    const resultadoAnime = await apiAnimes.get(`/anime/${id}`)
    const anime = resultadoAnime.data.data

    return {
        props: { anime },
    }
}