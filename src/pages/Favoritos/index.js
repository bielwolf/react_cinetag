import Banner from 'componentes/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'componentes/Titulo';
import videos from 'json/db.json';
import Card from 'componentes/Card';


function Favoritos () {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                   return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;