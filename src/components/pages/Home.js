import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import Container from '../layouts/Container'

import DeleteBtn from '../update/DeleteBtn'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function Home() {

    const toForm = document.querySelector('form')
    

    const [product, setProduct]= useState([])  

    const [productUpdated, setProductUpdated]= useState([])  
    

    let productId = ''
    
   

    useEffect(() => {
        fetch("http://localhost:5000/product", {
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

/*
    function productUpdate(e) {
        console.log(e.target.value)
        const productId = e.target.value
        fetch(`http://ec2-18-230-76-165.sa-east-1.compute.amazonaws.com:3000/product/${productId}`, {
            method: "GET", 
            headers:  {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            
            
            productAtributes = data
            console.log(productAtributes)
        })
        .catch((err) => console.log(err))

        
    }
*/


    function handleChange(e) {
        setProductUpdated({ ...productUpdated, [e.target.name] : e.target.value })
     
        console.log(productUpdated)
    }

    function getId(e) {
       
    
        productId = e.target.value
        console.log(productId)
        window.scrollTo({
            top: toForm.offsetTop,
            behavior: 'smooth'
        })
    }

    
    const submit = (e) => {
        e.preventDefault()
        
        atualizarProduto(productUpdated, productId)
    }

    function atualizarProduto(produtoAtt, Id){
        fetch(`http://localhost:5000/product/${Id}`, {
            method: "PATCH", 
            headers:  {
                'Content-Type': 'application/json'
            },body: JSON.stringify(produtoAtt),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            
            
            
        })
    }

    return (
        <section className={styles.homeSection}>
            <Container>
                {
                    product.map((item) =>{
                        
                        

                        return (
                            <ul>
                                <li>Nome: {item.name}</li>
                                <li>Preço: R${item.price}</li>
                                <li>Codigo de barras: {item.code}</li>
                                <li>Quantidade no estoque: {item.quantity}</li>
                                <li>Estoque mínimo: {item.minimum_stock}</li>
                                <li>Qualidade: {item.quality}</li>
                                <li>Validade: {item.validate}</li>
                                <button onClick={getId} value={item._id}>Atualizar Produto</button>
                                <DeleteBtn id={item._id}/>
                            </ul>
                        )
                    })
                }
                <form onSubmit={submit}>
                    <Input type='text' text='Nome do produto' name='name' placeholder='Insira o nome do produto' handleOnChange={handleChange}  />
                    <Input type='number' text='Preço do produto' name='price' placeholder='Insira o Preço do produto'handleOnChange={handleChange}  />
                    <Input type='number' text='Código do produto' name='code' placeholder='Insira o Código do produto' handleOnChange={handleChange}  />
                    <Input type='number' text='Estoque do produto' name='quantity' placeholder='Insira a quantidade do produto' handleOnChange={handleChange}  />
                    <Input type='number' text='Estoque mínimo do produto' name='minimum_stock' placeholder='Insira o Estoque mínimo do produto' handleOnChange={handleChange}  />
                    <Input type='text' text='Qualidade do produto' name='quality' placeholder='Insira a qualidade do produto' handleOnChange={handleChange} />
                    <Input type='date' text='Validade do produto' name='validate' placeholder='Insira a validade do produto' handleOnChange={handleChange}  />
                    <SubmitButton text='Atualizar Produto'/>
                    
                </form>
            </Container>
        </section>
    )
    
}

export default Home