import "../components/Header.css"

function Header() {

  return (
    <div className="containerHeader">
      <div className="banRed"></div>
      <div className="containerImg__pokedex">
        <img src="/home/banerPokedex.png" alt="" />
      </div>
      <div className="banBlack"></div>
    </div>
  )
}

export default Header