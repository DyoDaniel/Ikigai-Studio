import { IkigaiLogo } from "../ikigai-logo";

export function AboutUsComponent() {
  return (
    <div>
      <div>
        <div className="about-container">
          <IkigaiLogo></IkigaiLogo>
          <h1>SOBRE NÓS</h1>
        </div>
      </div>
      <div className="about-content">
        <div className="text-container">
          <span className="side-info-text">ロレム・イプサム</span>
        </div>
        <div>
          <div className="parent">
            <div className="about-text">
              <div className="info-content">
                <span>
                  Acreditamos que a tatuagem é mais do que arte, é uma expressão
                  da sua essência, sua paixão e propósito. No conceito japonês
                  de Ikigai, encontrar aquilo que dá sentido à vida é essencial,
                  e queremos que cada tatuagem feita aqui seja parte dessa
                  jornada, conectando você com sua história e identidade de
                  forma única.
                  <br></br>
                  <br></br>
                  Além disso, valorizamos cada detalhe do processo criativo,
                  garantindo que cada traço represente não apenas a arte, mas
                  também a conexão e a confiança entre o artista e o cliente.
                </span>
              </div>
            </div>
            <div className="img-1">
              <img src="./redDragon.png" width="250px" height="250px"></img>
            </div>
            <div className="text-agreggate-1">
              <span>ロレム・イプサム</span>
            </div>
            <div className="img-2">
              <img
                src="./klopperProfile.png"
                width="250px"
                height="250px"
              ></img>
            </div>
            <div className="text-agreggate-2">
              <span>ロレム・イプサム</span>
            </div>
            <div className="about-text-2">
              <div className="info-content">
                <span>
                  No Ikigai Studio, transformamos sua paixão em arte na pele.
                  Somos especialistas em tatuagens de animes, blackwork e
                  coloridas, criando designs únicos que contam histórias e
                  refletem sua personalidade. Inspirados pela estética japonesa
                  e pelo conceito de Ikigai – a razão de ser – buscamos
                  oferecer uma experiência personalizada, onde cada traço é
                  feito com dedicação e respeito à arte.
                  <br></br>
                  <br></br>
                  Nosso estúdio é um espaço acolhedor, projetado para que você
                  se sinta à vontade enquanto damos vida às suas ideias. Seja
                  uma homenagem ao seu anime favorito, um desenho minimalista em
                  preto ou uma explosão de cores vibrantes, estamos prontos para
                  transformar seus sonhos em realidade.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-container">
          <span className="side-info-text">ロレム・イプサム</span>
        </div>
      </div>
    </div>
  );
}
