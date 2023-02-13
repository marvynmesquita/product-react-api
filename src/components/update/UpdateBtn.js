import {Link} from 'react-router-dom'
import Updateproduct from '../pages/Updateproduct'

function UpdateBtn(id) {
    return(
        <button >
            <Link to="/updateproduct">Atualizar Produto</Link>
            
        </button>
    )
}

export default UpdateBtn