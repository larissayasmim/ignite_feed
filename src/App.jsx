import { Header } from './componentes/header';
import { Post }  from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './componentes/Sidebar';


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
            <Post 
              author="Larissa" 
              content="lorem" 
            />

            <Post 
              author="Min" 
              content="hbcdvuefsdbfhheffjtestando"
            />

        </main>
      </div>  
    </div>
  )
}
