import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setTrainerGlobal } from "../app/slices/nameTrainer.slice"
import "./styles/Home.css"

function Home() {

  const dispatch = useDispatch() 
  const navigate = useNavigate() //para navegar directamente es un hook

  const handleSubmit = e => {
    e.preventDefault()
    const inputNameTrainer = e.target.trainer.value
    dispatch(setTrainerGlobal(inputNameTrainer))
    e.target.reset()
    navigate("/pokedex")
  }

  return (
    <div className="containerHome">
      <div className="bannerHome">
        <img className="bannerImg" src="/home/banerPokedex.png" alt="" />
      </div>
      <h1 className="titlelHome" > !Hi trainer!</h1>
      <p className="subtitleHome" > Give me your name to star! </p>
      <form className="formHome" onSubmit={handleSubmit}>
        <input className="inputHome" type="text" name="trainer"/>
        <button className="btnHome" > Start </button>
      </form>
      <footer className="footer">
        <div className="bannerRed"></div>
        <div className="circle"></div>
        <div className="bannerBlack"></div>
      </footer>
    </div>
  )
}

export default Home