import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/PokeCard.css"

function PokeCard({url}) {
  
  const [pokemon, setPokemon] = useState()
  const navigate = useNavigate()
  
  useEffect(()=> {
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }, [])
  
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  console.log(pokemon)

  return (
    <article className={`pokeCard border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`pokeCard__header bg-${pokemon?.types[0].type.name}`}>
        <img className="pokecard__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <section  className="pokeCard__section"> 
        <h3 className={`pokeCard__nameTitle color-${pokemon?.types[0].type.name}`} >{pokemon?.name}</h3>
        <ul className="pokeCard__listTypes">
          {
            pokemon?.types.map(item => (
              <li className="pokeCard__itemTypes" key={item.slot}> {item.type.name} </li>
            ))
          }
        </ul>
      </section>
      <footer className="pokeCard__footer">
        <ul className="pokeCard__infoCard">
          {
            pokemon?.stats.map( item => (
              <li className="pokeCard__infoPoke" key={item.stat.url}> 
                <span className="pokeCard-skillName">{item.stat.name}</span>
                <span className={`pokeCard-skillNumber color-${pokemon?.types[0].type.name}`}> {item.base_stat} </span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokeCard
