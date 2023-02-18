import unsuccesAuth from '../../images/unsucces-auth.svg';
import succesAuth from '../../images/succes-auth.svg';

function InfoToolTip({name, isOpen, message, onClose, authResult}) {

    const authResultImg = `${authResult ? succesAuth : unsuccesAuth }`;

    return(
        <section className={`popup popup_type_${name} ${ isOpen ? 'popup_opened':''}`}> 
            <div className="popup__container">
                <img src={authResultImg} alt='статус' className="popup__note"/>
                <h2 className="popup__heading popup__heading_confirm">{message}</h2>
                <button className="popup__closed" type="button" onClick={onClose}></button> 
            </div>
        </section>
    )        
}

export default InfoToolTip;