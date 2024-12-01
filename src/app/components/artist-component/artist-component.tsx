import { artistModel } from "@/app/models/artist.mode";

export function ArtistComponent(props: artistModel) {
  const inlineStyle = {
    "--cor-texto": props.color,
    "--cor-texto-opacidade": props.color + "36",
  } as React.CSSProperties;

  return (
    <div
      className="frame artist-background"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        ...inlineStyle,
      }}
    >
      <div className="social-text">
        <div className="logo">
          <img src={props.logo} height="50px" width="50px"></img>
        </div>
        <div>
          <h2>Instagram</h2>
          <span>{props.instagramUser}</span>
        </div>
      </div>
      <div className="artist-info">
        <div className="info-flex">
          <div>
            <div>
              <video autoPlay loop muted playsInline className="artist-profile">
                <source src={props.profileVideo} type="video/mp4" />
              </video>
            </div>
            <div className="artist-name">
              <h1>{props.artistName}</h1>
              <span>{props.artistSurname}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <a target="_blank" href={props.instragramUrl}>
          <button className="contact-us">
            <i className="fab fa-instagram"></i>AGENDAR
          </button>
        </a>
      </div>
      <div className="artist-footer">
        <span>{props.artistFooter}</span>
      </div>
    </div>
  );
}
