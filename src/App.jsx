import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Douglas Módolo" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in totam soluta molestiae! Officia laudantium libero nesciunt ullam ipsa beatae dolorum architecto itaque est? Laboriosam incidunt nostrum inventore ad reprehenderit!"
        />
        <Post 
          author="Gabriel Buzzi" 
          content="Novo post"
        />
        </main>
      </div>      
    </>
  )
}