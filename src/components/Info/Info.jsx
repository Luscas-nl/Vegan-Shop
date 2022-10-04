import './Info.css'

function Info(props) {
    return(
        <div className="infoDescBox">
            <i className={"fa fa-" + props.icon}></i>
            <p><span className='infoDescPlus'>{props.fisrtText}</span><br/>{props.secondText}</p>
        </div>
    )
}

export default Info