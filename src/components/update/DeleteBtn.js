import {Link} from 'react-router-dom'
import { useState } from 'react'


function DeleteBtn(id) {
   
   
   const productId = Object.values(id)
    

     function deleteProduct(){
         fetch(`http://localhost:5000/product/${productId[0]}`, {
            method: "Delete", 
            headers:  {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            window.location.reload()
            window.alert('Produto deletado')
        })
        .catch(err => console.log(err))

        
    }


    return(
        <button onClick={deleteProduct}>
            Deletar Produto
        </button>
    )
}

export default DeleteBtn