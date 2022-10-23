export const Zbiorka = ({ image, title, text, link }) => {
  return <div id="zbiorka">
    <a href={link}><img src={image} alt="..." /></a>
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </div>
}
