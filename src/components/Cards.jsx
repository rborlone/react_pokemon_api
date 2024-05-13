import React from 'react'
import { useData } from '../hooks/useData'
import { getPokemon } from '../services/services'

export const Cards = ({name}) => {

  const pokemon = useData(() => getPokemon(name), name)
//   const pkmdescription = useData(() => getPokemonDescription(name), `${name}description`)


  console.log(pokemon.data)



  return (
    <>

    { pokemon.loading ?
    <div className="card" style={{width: "18rem"}} aria-hidden="true">
  <img src="..." class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6"></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div> : 

<div className="card" style={{width: "18rem"}} aria-hidden="true">
<img className="card-img-top" src={pokemon.data?.sprites.front_default} />
<div className="card-body">
    <h5 className="card-title">{pokemon.data?.name}</h5>
    <p className="card-text">{pokemon.data?.order}</p>
    <p className="btn btn-primary">{pokemon.data?.abilities[0].ability.name}</p>
</div>
</div>
}
    </>
  )
}
