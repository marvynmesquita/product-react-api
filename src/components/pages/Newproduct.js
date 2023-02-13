import ProductForm from "../form/ProductForm"
import Container from "../layouts/Container"
import styles from './Newproduct.module.css'
import { useNavigate} from 'react-router-dom'

function Newproduct() {

    const history = useNavigate()


    function createPost(product) {

        

        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            history('/', {message: 'Produto criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.criarProjeto}>
            <Container>
                <div className={styles.formContainer} >
                    <div className={styles.title}>
                        <h1>Criar Projeto</h1>
                        <p>Crie seu projeto para depois adicionar os serviços</p>

                    </div>
                    <ProductForm handleSubmit={createPost} />
                </div>
            </Container>
        </div>

    )
    
}

export default Newproduct