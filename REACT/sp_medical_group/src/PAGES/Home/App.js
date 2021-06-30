import './App.css';
import '../../assets/Css/header.css';
import '../../assets/Css/footer.css';


import img3 from '../../assets/img/image 3.png'
import img4 from '../../assets/img/image 4.png'
import img5 from '../../assets/img/image 5.png'
import img11 from '../../assets/img/image 11.png'
import img12 from '../../assets/img/image 12.png'
import img13 from '../../assets/img/celphone.png'
import logo from "../../assets/img/Logo.png";
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import facebook from '../../assets/img/facebook.png'

function App() {
  return (
      <div>
      <header>
                <div className="container cabecalho">
                    <div>
                    <img src={logo} className="icone__login" alt="logo do SPMG" />
                    </div>
                    <nav>
                    <ul>
                        <li><a href="/" title="voltar para a página inicial">INÍCIO</a></li>
                        <li><a href="/historia" title="Ir até a sessão de história das partidas">HISTÓRIA</a></li>
                        <li><a href="/Localizacao" title="Ir até a sessão de localização das unidades do SP Medical Group">LOCALIZAÇÃO</a></li>
                        <li><a href="#" title="Ir até a sessão de especialidades">ESPECIALIDADES</a></li>
                        <li><a href="#" title="Ir até a sessão de PLANOS">PLANOS</a></li>
                        <li><a href="/login"><i className="fas fa-user-alt"></i> LOGIN</a></li>
                        <div className="login">
                            <li><p><a href="#">CONTATOS</a></p></li>
                        </div>
                </ul>
                    </nav>
                </div>
            </header>   
      <main>
          <div className="banner">
            <a href="#" className="btn"><p>AGENDAR CONSULTA</p></a>
          </div>

          <div className="sobre">
            <div className="container">
                <div>
                    <h1>Sua saúde é nossa prioridade</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna e vitalidade, Que fazem eiusmod ipsumpsum tempor ipsum dolor sit amet consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>

        <div className="q1">
            <div className="exame">
            <img src={img11} alt="logo do instagra" />
              <p>EXAMES</p>
            </div>
          <div className="exame3">
            <img src={img12} alt="logo do instagra" />
              <p>RESULTADOS</p>
          </div>
          <div className="exame2">
            <img src={img13} alt="logo do instagra" />
              <p>FALE CONOSCO</p>
          </div>
        </div>

        <div className="especialidades">
            <h2 className="title">ESPECIALIDADES</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna e vitalidade, Que fazem eiusmod ipsumpsum tempor ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>

        <div className="especial">
            <div className="oftalmo">
                  <img src={img3} alt="logo do instagra" />
                <h3>OFTALMOLOGIA</h3>
                <div className="l1"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>

            <div className="cardio">
                  <img src={img4} alt="logo do instagra" />
                <h3>CARDIOLOGISTA</h3>
                <div className="l1"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>

            <div className="orto">
                  <img src={img5} alt="logo do instagra" />
                <h3>ORTOPEDIA</h3>
                <div className="l1"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
        </div>

        <div className="linha"></div>
            <div className="est">
                <div className="l2"></div>
                <h2 className="title">ESTATISTICAS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna e vitalidade, Que fazem eiusmod ipsumpsum tempor ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>

            <div className="equip">
                <h3>EQUIPAMENTOS MODERNOS E ESPECIALISTAS</h3>
                <p>Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit lobortis molestiae no, maiorum postulant has ex. dicam singulis qualisque ut, delicata qualisque ei eum.” Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit lobortis molestiae no, maiorum postulant has ex. dicam singulis qualisque ut, delicata qualisque ei eum.</p>
            </div>

            <div className="por">
                    <div className="psico">
                        <p>PSICOLOGOS</p>
                        <h3>90%</h3>
                    </div>
          
                    <div className="odonto">
                        <p>DENTISTAS</p>
                        <h3>70%</h3>
                    </div>
          
                    <div className="nutri">
                        <p>NUTRICIONISTAS</p>
                        <h3>85%</h3>
                    </div>
          
                    <div className="derm">
                        <p>DERMATOLOGISTA</p>
                        <h3>65%</h3>
                    </div>
              </div>
              <div className="linha"></div>
                      <h2 className="title">PLANOS</h2>
                    <div className="planos">
                        <div className="col">
                            <div className="card bg-2">
                              <label>Mensal</label>
                              <h3><sup>R$</sup>300</h3>
                              <p>Pra você e sua familia</p>
                                    <ul>
                                        <li> Uma cirurgia</li>
                                        <li> Internações</li>
                                        <li> Consultas ilimitadas</li>
                                        <li> Suporte via Chat e WhatsApp</li>                           
                                    </ul>
                          </div>
                    </div>
                                <div className="col">
                                    <div className="card bg-3">
                                        <label>Trimestral</label>
                                        <h3><sup>R$</sup>650</h3>
                                        <p>Pra você e sua familia</p>
                                        <ul>
                                            <li> Uma cirurgia</li>
                                            <li> Internações</li>
                                            <li> Consultas ilimitadas</li>
                                            <li> Suporte via Chat e WhatsApp</li>                           
                                        </ul>
                                    </div>
                                </div>
    
                                  <div className="col">
                                      <div className="card bg-3">
                                          <label>Anual</label>
                                          <h3><sup>R$</sup>500</h3>
                                          <p>Pra você e sua familia</p>
                                          <ul>
                                              <li> Uma cirurgia</li>
                                              <li> Internações</li>
                                              <li> Consultas ilimitadas</li>
                                              <li> Suporte via Chat e WhatsApp</li>                        
                                          </ul>
                                      </div>
                                  </div>
                                  
                                </div>
                                <div className="linha"></div>
                                <footer>
                                  <div className="icones">
                                  <img src={instagram} alt="logo do instagra" />
                                  <img src={facebook} alt="logo do facebook" />
                                  <img src={twitter}  alt="logo do twitter" />
                                  <img src={youtube} alt="logo do youtube" />
                                  </div>
                                  <div className="center">
                                  <img src={logo} alt="logo do SPMG" />
                                  <p>© Copyright 2021 Guilherme André, Senai de Informatica.</p>
                                  </div>
                                  <div className="news">
                                  <p>RECEBA NOSSOS EMAILS</p>
                                  <input type="email" name="Email" id="news"/>
                                  </div>
                              </footer>
            
            
      </main>
      </div>
  )
}

export default App;
