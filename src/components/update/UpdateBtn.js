import {Link} from 'react-router-dom'
import Updateproduct from '../pages/Updateproduct'

function UpdateBtn(id, onChange) {
    return(
        <button onClick={onChange} >
            Atualizar Produto
            
        </button>
    )
}

export default UpdateBtn