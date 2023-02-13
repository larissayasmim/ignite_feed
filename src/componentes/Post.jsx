import styles from './Post.module.css';

export function Post() {
    return (
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src= "https://media.licdn.com/dms/image/C4D03AQERmfk_iV-dgg/profile-displayphoto-shrink_800_800/0/1587567528318?e=1681948800&v=beta&t=_hTJxYXZrY-SawPRhSMuLgYL-3vpgw1-TZBqGevcJtQ"/>
                    <div className={styles.authorInfo}>
                        <strong>Larissa Yasmim</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="13 de Fevereiro ás 15:52h" dateTime="2023-02-13">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz do curso de ReactJS, da plataforma Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
                <p>👉<a href=""> jane.design/doctorcare //link do projeto</a></p>
                <p>
                    <a href=''> &nbsp;#novoprojeto</a>
                    <a href=''> &nbsp;#react</a> 
                    <a href=''> &nbsp;#reactjs</a>
                    <a href=''> &nbsp;#rocketseat </a>
                </p>
           </div>
       </article>
    )
}