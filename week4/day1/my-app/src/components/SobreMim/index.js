import image1 from "../../images/icon1.png";

function SobreMim({ bio }) {
  return (
    <div>
      <h1 class="karen">Sobre mim</h1>
      <p>Eu sou de: {bio.city}</p>
      <p>Eu me chamo: {bio.nome} </p>
      <p>Minha idade é: {bio.idade} </p>
      <img src={image1} alt="osahdaoidhas" />
    </div>
  );
}

export default SobreMim;
