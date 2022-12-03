import logo from '../../assets/Logo.jpg'
import './Header.css'
import HeaderUser from './HeaderUser/Index'

function Header(props) {

    return(
        <div className='headerBox'>
            <div className="logoBox">
                <i class="fa fa-leaf logo"></i>
                <p className='logoTxt'>Vegan Shop</p>
            </div>

            <div className='infobox loginCall'>
                <i className='fa fa-whatsapp'></i>
                <p>
                    Fale conosco <br /><span className='loginPlus'>(82) 99999-9999</span>
                </p>
            </div>

            <div className="boxSearch">
                <input className="searchBox" placeholder='O que está procurando?'>
                </input>
                <i className='fa fa-search'></i>
            </div>

            <i className='fa fa-shopping-cart'></i>

            <HeaderUser />
        </div>
    )
}

export default Header