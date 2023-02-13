import {useEffect, useState} from 'react'

import Input from "./Input"
import SubmitButton from "./SubmitButton"

function ProductForm({handleSubmit }) {

    const [product, setProduct] = useState([])

    const submit = (e) => {
        e.preventDefault()
        console.log(product)
        handleSubmit(product)
        
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name] : e.target.value })

        console.log(product)
    }

    return(
        <form onSubmit={submit}>
            <Input type='text' text='Nome do produto' name='name' placeholder='Insira o nome do produto' handleOnChange={handleChange} value={product.name ? product.name : ''}/>
            <Input type='number' text='Preço do produto' name='price' placeholder='Insira o Preço do produto'handleOnChange={handleChange} value={product.price ? product.price : ''}/>
            <Input type='number' text='Código do produto' name='code' placeholder='Insira o Código do produto' handleOnChange={handleChange} value={product.code ? product.code : ''}/>
            <Input type='number' text='Estoque do produto' name='quantity' placeholder='Insira a quantidade do produto' handleOnChange={handleChange} value={product.quantity ? product.quantity : ''}/>
            <Input type='number' text='Estoque mínimo do produto' name='minimum_stock' placeholder='Insira o Estoque mínimo do produto' handleOnChange={handleChange} value={product.minimum_stock ? product.minimum_stock : ''}/>
            <Input type='text' text='Qualidade do produto' name='quality' placeholder='Insira a qualidade do produto'handleOnChange={handleChange} value={product.quality ? product.quality : ''}/>
            <Input type='date' text='Validade do produto' name='validate' placeholder='Insira a validade do produto' handleOnChange={handleChange} value={product.validate ? product.validate : ''}/>
            <SubmitButton text='Enviar Produto'/>
        </form>
    )
}

export default ProductForm