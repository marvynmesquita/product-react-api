import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import Container from '../layouts/Container'

import DeleteBtn from '../update/DeleteBtn'
import UpdateBtn from '../update/UpdateBtn'

function Home() {

    const [product, setProduct]= useState([])
    
    useEffect(() => {
        fetch("http://ec2-18-230-76-165.sa-east-1.compute.amazonaws.com:3000/product", {
            method: "GET", 
            headers:  {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            
            setProduct(data)
            
        })
        .catch((err) => console.log(err))
    }, [0])

    return (
        <section className={styles.homeSection}>
            <Container>
                {
                    product.map((item) =>{
                        
                        return (
                            <ul>
                                <li>Nome: {item.name}</li>
                                <li>Preço: {item.price}</li>
                                <li>Codigo de barras: {item.code}</li>
                                <li>Quantidade no estoque: {item.quantity}</li>
                                <li>Estoque mínimo: {item.minimum_stock}</li>
                                <li>Qualidade: {item.quality}</li>
                                <li>Validade: {item.validate}</li>
                                <UpdateBtn id={item._id}/>
                                <DeleteBtn id={item._id}/>
                            </ul>
                        )
                    })
                }
            </Container>
        </section>
    )
    
}

export default Home