import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='src\assets\avatar1.svg' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fulano de Tal</strong>
                            <time title="13 de Fevereiro ás 15:52h" dateTime="2023-02-13">Cerca de 1h atrás</time>
                        </div>
                    
                        <button title='Deletar Comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Lari, parabéns!!👏👏</p>

                </div>

                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}