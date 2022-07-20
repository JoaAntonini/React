
import React from 'react'
import ItemList from './ItemList/ItemList'
import {useEffect } from 'react'
import {useState } from 'react'
import {getFetch} from '../../Helpers/getfetch'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])    
  const [ loading, setLoading ] = useState(true)
  
  useEffect(()=>{
          getFetch()
          .then(respuesta => setProductos(respuesta))    
          .catch( err => console.log(err) )
          .finally(()=> setLoading(false) )
      }, [])
 
  return (
    <>
      <div id="botonDoc">
				<div className="accordion" id="accordionPanelsStayOpenExample">
						<div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" id="titulo" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">Productos
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body ">
                    <ol className='lista'>
                      <li>Bazar</li>
                      <li>Living</li>
                      <li>Habitación</li>
                      <li>Baños</li>
                      <li>Jardin</li>
                    </ol>
                  </div>
                </div>
            </div>
        </div>
      </div>
      { loading ? 
        <h1>Cargando productos</h1> 
                    : 
                    <ItemList productos={productos} />
                }
    </>
  )
}

export default ItemListContainer