import styles from './Header.module.css'
import RockLogo  from '../../assets/rocket.png'
export function Header(){
        return(
                <div className={styles.container}>
                      <div className={styles.logo}>
                        <img src={RockLogo} alt="" />
                        <h1>
                            <span className={styles.spanUm}>to</span>
                            <span className={styles.spanDois} >do</span>

                        </h1>
                      </div>
                     
                     <div className={styles.Navbar}>
                     <input placeholder='Adicione uma nova tarefa'  type="text"/>
                        <button>Criar</button>
                     </div>
                      
                </div>
        )
}