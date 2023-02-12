import ProductForm from "../form/ProductForm"
import Container from "../layouts/Container"

function Newproduct() {

    function createPost(product) {

        

        fetch("http://ec2-18-230-76-165.sa-east-1.compute.amazonaws.com:3000/product", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)

        })
        .catch(err => console.log(err))
    }

    return(
        <Container>
            <div >
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProductForm handleSubmit={createPost} />
            </div>
        </Container>

    )
    
}

export default Newproduct