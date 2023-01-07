import './Style.css'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import Info from '../../components/Info/Info'
import Item from '../../components/Item/Item'
import { itens } from "../../json/itens.json"
import Carousel from "react-elastic-carousel"

function Home() {

    return (
        <div className="Home">
        <Header />
        <Nav />

        <div className="infoDesc">
            <Info fisrtText="Entrega em até 48hrs" secondText="Confira as regras" icon="clock-o" />
            <Info fisrtText="Retirada na loja" secondText="Confira as regras" icon="map-marker" />
            <Info fisrtText="Parcelamente" secondText="Em até 3x" icon="credit-card" />
            <Info fisrtText="100% Seguro" secondText="Compra com segurança" icon="shield" />
            <Info fisrtText="Produtos" secondText="100% veganos" icon="leaf" />
        </div>

        <div className="section">
            <div className="sectionText">
            <p className="sectionDesc">Produtos em</p>
            <h2 className="sectionTitle">Gerais</h2>

            <Carousel itemsToShow={4}>
                {itens.map((item) => {
                return <Item image={item.imagem} name={item.nome} desc={item.desc} value={item.preco} />
                })}
            </Carousel>

            </div>
        </div>
        </div>
    )
}

export default Home
