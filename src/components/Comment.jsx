import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css'
import { useState } from 'react';

export function Comment({ content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    // function handleLikeComment() {        
    //     setLikeCount(likeCount + 1);
    // }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/douglasmodolo.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Douglas Módolo</strong>
                            <time title='01 de Fevereiro às 20:57h' dateTime="2025-02-01 20:57:13">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}