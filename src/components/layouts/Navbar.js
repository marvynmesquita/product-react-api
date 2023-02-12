import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'



function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container >
          
                <ul className={styles.list}>
                  
                    <li className={styles.item}>
                        <Link to="/">Todos os produtos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/newproduct">Adicinonar Produto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/updateproduct">Atualizar Produto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
    
}

export default Navbar