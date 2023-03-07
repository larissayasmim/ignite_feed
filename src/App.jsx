import { Header } from './componentes/header';
import { Post }  from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';



const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://media.licdn.com/dms/image/C4D03AQERmfk_iV-dgg/profile-displayphoto-shrink_800_800/0/1587567528318?e=1681948800&v=beta&t=_hTJxYXZrY-SawPRhSMuLgYL-3vpgw1-TZBqGevcJtQ',
      name:'Larissa Yasmim',
      role:'Web Design'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz do curso de ReactJS, da plataforma Rocketseat. O nome do projeto é Ignite Feed 🚀',},
      {type: 'link', content: 'jane.design/doctorcare //link do projeto'},
    ],
    publishedAt: new Date('2023-02-17 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://media.licdn.com/dms/image/C5603AQENRsJI0Q-Luw/profile-displayphoto-shrink_400_400/0/1611344151842?e=1683763200&v=beta&t=-ikl5rXRiWBLRTeO2OeadcMGO_CahJy7J7Jc0td7uB8',
      name:'Danyelle L.',
      role:'Designer'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz do curso de ReactJS, da plataforma Rocketseat. O nome do projeto é Ignite Feed 🚀',},
      {type: 'link', content: 'jane.design/doctorcare //link do projeto'},
    ],
    publishedAt: new Date('2023-02-17 23:00:00'),
  },
];



export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                
                <Post
                    key={post.id} 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />
              )
            }) }
        </main>
      </div>  
    </div>
  )
}
