import React, {useState,useEffect} from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
export default function Catalogue ({onAddProduct}) {

  const url ='https://api.escuelajs.co/api/v1/products'
  const [productsAll, setproductsAll] = useState()
  const api = async () =>{
    const response = await fetch(url)
    const product = await response.json()
    setproductsAll(product)
  }
  useEffect(() =>{
    api()
  }, [])

  const [view, setView] = useState([]);
  const onProductView = (item) =>{
      setView(item)
  }

  return (
    <>
    <div className="containerCatalogue">
      <div className='containerCards'>
        {
          !productsAll ? 'Cargando ...' :
          productsAll.map((product) => {
            return (
              <div className='cards' key={product.id} onClick = {() => onProductView([{id: product.id,img: product.images[0], title: product.title, desc: product.description, price: product.price}])}>
                <img className='imgCatalogue' src={product.images[0]} alt="" />
                <div className="textContainer">
                  <h3>{product.title}</h3>
                  <b>Categoria:</b> {product.category.name}
                  <b>Descripción:</b> {product.description}
                  <b>Precio:</b> {product.price}
                  <b>Folio:</b> {product.id}
                </div>
                <button className="btnAdd" 
                onClick={() => onAddProduct({id: product.id, img: product.images[0], title: product.title, price: product.price, num:1 , total:0})}>
                  <MdOutlineAddShoppingCart size={30}/>
                </button>
                </div>
            )
          })
        }
        </div>
      
      <div className="containerView">
        {
          
          view.map((v) => {
            return (
              <>
                <h2>{v.title}</h2>
                <img className='imgView' src={v.img} alt="" />
                  <div className="textView">
                    <span>{v.desc}</span> <br/>
                    <span><b>${v.price}</b></span>
                  </div>
             </>
            )
          })
        }
        </div>
      </div>
    </>
  )
}
