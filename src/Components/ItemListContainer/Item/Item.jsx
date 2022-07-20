

import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import producto1 from '../../img/sillon.jpg'
import './Item.css'

const Item = ({product}) => {

  const onAdd =(cant)=> {
    console.log(`Vas a comprar: ${cant}` )
  }

  return (
    (
      <div id="box">
        <div className="card" id="card" >
                <img className="card-img-top" src={producto1} alt="Card image cap"/>
                    <div className="card-body texto">
                    <p className="card-text texto">{product.categoria}</p>
                        <p className="card-text texto">{product.nombre}</p>
                   </div>
                    < button className="btn btn-primary texto">Detalle</button>
                    <ItemCount initial={1} stock={20} onAdd={onAdd}/>
                </div>
      </div>
  )
)
}
export default Item

