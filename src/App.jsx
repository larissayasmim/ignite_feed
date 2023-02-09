import { Header } from './componentes/header';
import { Post }  from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Larissa" 
        content="lorem" 
      />

      <Post 
        author="Min" 
        content="hbcdvuefsdbfhheffj"
      />

      <Post />
      <Post />
    </div>
  )
}
