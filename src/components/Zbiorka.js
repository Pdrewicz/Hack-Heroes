export const Zbiorka = ({ image, title, text }) => {
  return <div id="zbiorka">
    <img src={image} alt="..." />
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </div>
}
