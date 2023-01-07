import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/googleAuth'
import Login from '../../pages/Login/Login';
import './Item.css'

function Item(props) {

    const { signed } = useContext(AuthGoogleContext)
    function VerifyLogin(){
        if(signed)
        {
            console.log("Esta Logado");
        } else {
            return <Navigate to={Login} />
        }
    }

    return(
        <div className="itemBox">
            <div className="imgBox">
                <img src={props.image ?? "https://i.ibb.co/kMKPQ6X/Maquiagem.jpg"} alt="Imagem do Produto" />
            </div>
            <div className="itemInfo">
                <p className='itemName'>{props.name ?? "Maquiagem Vegana"}</p>
                <p className="itemDesc">{props.desc ?? "Óleo de rosa mosqueta pura | Amido de milho de cacau em pó orgânico"}</p>
                <p className="itemValue">{"R$ " + props.value ?? "R$ 45,00"}</p>
            </div>

            <div className="itemButtons">
                <button onClick={VerifyLogin} className="itemButton cart">Adicionar no carrinho</button>
                <button onClick={VerifyLogin} className="itemButton buy">Comprar</button>
            </div>
        </div>
    )
}

export default Item