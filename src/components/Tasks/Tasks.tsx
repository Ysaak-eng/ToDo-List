import  styles from './Taks.module.css'
import {ClipboardText} from 'phosphor-react'
export function Tasks(){
    return(
      <div  className={styles.container}>
            <div className={styles.ValeuError}>
        <div className={styles.info}>
            <p className={styles.textValeuOne} >Tarefas criando <span>0</span></p>
            <p  className={styles.textValeuTwor}>Concliadas <span>0</span></p>
        </div>
        <div className={styles.Empty}>
           

      <div className={styles.ClipboartText}>
      <ClipboardText fontSize={130} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      
             
        </div>
        </div>
      </div>
    )
}