import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PokeCard from "../components/Pokedex/PokeCard"
import Pagination from "../components/Pokedex/Pagination"
import Header from "../components/Header"
import "../pages/styles/Pokedex.css"

function Pokedex() {
  const trinner = useSelector(state => state.trainer)
  const [listPokemons, setListPokemons] = useState()
  const [types, setTypes] = useState()
  const [listTypes, setListTypes] = useState("all pokemons")
  const navigate = useNavigate()

  useEffect(() => {
    if(listTypes !== "all pokemons") {
      //peticion por tipo de los pokemons
      axios.get(listTypes)
      .then(res => setListPokemons(res.data.pokemon.map(item => item.pokemon)))
      .catch(err => console.log(err))
    }
    else {
      //renderizado de  todos los pokemons
      const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20000`
      axios.get(url)
      .then(res => setListPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  }, [listTypes])

  useEffect(() =>{
    const url = `https://pokeapi.co/api/v2/type`
    axios.get(url)
    .then(res => setTypes(res.data.results))
    .catch(err => console.log(err))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const searchPokemon = e.target.pokemon.value.trim().toLowerCase()
    console.log(searchPokemon)
    navigate(`/pokedex/${searchPokemon}`)
  }

  const handleChange = e => {
    setListTypes(e.target.value)
    setCurrentPage(1)
  }

  //logica de la paginacion 
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(16)
  const initialPoke = pokemonsPerPage * (currentPage - 1)
  const finalPoke = pokemonsPerPage * currentPage
  const maxNumberPages = listPokemons && Math.ceil(listPokemons.length/ pokemonsPerPage)

  return(
    <div>
      <Header/>
      <div className="containerTitle">
        <h2 className="trainerTitle"> Welcome {trinner} </h2>
        <h2 className="title"> here you find your favorite pokemon !</h2>
      </div>

      <div className="container__filters">
        <form className="form__pokedex" onSubmit={handleSubmit}>
          <input className="input__pokedex" type="text" name="pokemon"/>
          <button className="btn__pokedex" > Search </button>
        </form>
        <select className="selection__type" onChange={handleChange}>
          <option value="all pokemons">All pokemon</option>
          {
            types?.map(item => (
              <option  key={item.url} value={item.url}> {item.name} </option>
            ))
          }
        </select>
      </div>
      <div className="container__List--pokemons">
        {
          listPokemons?.slice(initialPoke,finalPoke).map((card) => (
            <PokeCard key={card.url} url={card.url} /> 
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage} 
        maxNumberPages={maxNumberPages} 
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Pokedex