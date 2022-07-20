


let productos =[
    {id:'1',categoria:'sillones', nombre: 'lupe' ,descripcion:'sillon en L', stock:35, precio:50000},
    {id:'2',categoria:'sillones', nombre: 'twins' ,descripcion:'sillon 2 cuerpos', stock:50, precio:42000},
    {id:'3',categoria:'sillones', nombre: 'betty' ,descripcion:'sillon cama', stock:20, precio:45200},
    {id:'4',categoria:'mesas ratonas', nombre: 'newt' ,descripcion:'mesa nordica', stock:80, precio:20000},
    {id:'5',categoria:'mesas ratonas', nombre: 'wind' ,descripcion:'mesa redonda vidrio', stock:65, precio:18000},
    {id:'6',categoria:'lamparas', nombre: 'alma' ,descripcion:'lampara 3 patas nordica', stock:150, precio:8000},
    {id:'7',categoria:'lamparas', nombre: 'rock' ,descripcion:'lampara metal new age', stock:120, precio:11000}
  ]
  
  export const getFetch = () => {
    return new Promise (( resolve, reject) =>{
      setTimeout(()=>{
        resolve(productos)
      }, 3000)
    })
  }
  
