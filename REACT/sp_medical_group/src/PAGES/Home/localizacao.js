import { Component} from 'react';

import Cabecalho from '../../Components/Header/header'
import Rodapé from '../../Components/Footer/footer'

import '../../assets/Css/localizacao.css'

import predio from '../../assets/img/img.jfif'
import predio2 from '../../assets/img/predio2.jpg'




function localizacao() {
    return (
        <div>
            <Cabecalho/>
            <div className="local1">
            <img src={predio} alt="logo do instagra" />
            <p>Rua: Alameda Barão de Limeira, 539 - Santa Cecilia, São Paulo - SP, 01202-001</p>
                <div className='vertical'></div>
                <div className='caminho'>
                <p>Saindo do Metro Santa Cecilia :</p>
                <p>Distancia : 500 Metros</p>
                <p>Siga na direção nordeste na R. Ana Cintra</p>
                <p>Continue para R. Roberto Piva</p>
                <p>Vire à direita na Rua Helvétia</p>
                <p>Vire à direita depois de Body Barão (à esquerda)</p>
                </div>
            </div>
            <div className="local1">
            <img src={predio2} alt="logo do instagra" className='predio2'/>
            <p>Rua: Alameda Barão de Limeira, 539 - Santa Cecilia, São Paulo - SP, 01202-001</p>
                <div className='vertical'></div>
                <div className='caminho'>
                <p>Saindo do Metro Santa Cecilia :</p>
                <p>Distancia : 500 Metros</p>
                <p>Siga na direção nordeste na R. Ana Cintra</p>
                <p>Continue para R. Roberto Piva</p>
                <p>Vire à direita na Rua Helvétia</p>
                <p>Vire à direita depois de Body Barão (à esquerda)</p>
                </div>
            </div>
            <Rodapé/>
        </div>
    )
}
export default localizacao;