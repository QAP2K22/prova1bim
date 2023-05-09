import React from 'react'
import Page from '../../components/Page'
import apiAnimes from '../services/connectAPI'

const generos = ({ generosAnime }) => {
    return (
        <>
            <Page titulo="Gêneros">

                <ul>
                    {generosAnime.map(item => (
                        <li>{item.name} ({item.count})</li>
                    ))}

                </ul>

            </Page>
        </>
    )
}

export default generos

export async function getServerSideProps(context) {
    const resultadoGenerosAnim = await apiAnimes.get('/genres/anime')
    const generosAnime = resultadoGenerosAnim.data.data

    return {
        props: { generosAnime },
    }
}