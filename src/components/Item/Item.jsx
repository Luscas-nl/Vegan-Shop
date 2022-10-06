import './Item.css'

function Item(props) {
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
                <button href="" className="itemButton cart">Adicionar no carrinho</button>
                <button href="" className="itemButton buy">Comprar</button>
            </div>
        </div>
    )
}

export default Item