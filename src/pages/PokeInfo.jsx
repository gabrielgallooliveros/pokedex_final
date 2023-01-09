import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import "./styles/PokeInfo.css"


function PokeInfo() {
  
  const {id} = useParams()
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <>
    <Header/>
    <main className={`pokeInfo__Container`}>  
      <header className={`pokeInfo__header bg-${pokemon?.types[0].type.name}`} >
        <img className="pokeInfo_img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <section>
        <h1 className={`pokeInfo__id color-${pokemon?.types[0].type.name}`}> #{pokemon?.id}</h1>
        <h1 className={`pokeInfo__nameTitle color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>
      </section>

      <aside className="pokeInfo__containerAside">
        <article className="pokeInfo__containerInner">
          <h3 className={`pokeInfo__subtitle`}> Type </h3>
          <ul className="pokeInfo__list">
          {
            pokemon?.types.map(item => (
              <li className="pokeInfo__item" key={item.slot}> {item.type.name} </li>
            ))
          }
        </ul>
        </article>
        <article className="pokeInfo__containerInner">
          <h3 className="pokeInfo__subtitle"> Habilitis </h3>
          <ul className="pokeInfo__list">
          {
            pokemon?.abilities.map(item => (
              <li className="pokeInfo__item skill" key={item.slot}> {item.ability.name} </li>
            ))
          }
          </ul>
        </article>
      </aside>
    </main>
    </>
  )
}

export default PokeInfo