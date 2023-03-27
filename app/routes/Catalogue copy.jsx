import React, {useState,useEffect} from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
// import Trolley from './Trolley'
import ViewProduct from './ViewProduct'
// impot Trolley
// import '../styles/catalogue.css'
// import '../styles/catalogue.css';
// import '../styles/catalogue.css'
// import './catalogue.css'
// import styles from '~/catalogue.module.css'
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

  return (
    <>
    <div className="containerCatalogue">
      <div className='containerCards'>
        {
          !productsAll ? 'Cargando ...' :
          productsAll.map((product) => {
            return (
              <div className='cards' key={product.id}>
                <img src={product.images[0]} alt="" />
                <div className="textContainer">
                  <h3>{product.title}</h3>
                  <b>Categoria:</b> {product.category.name}
                  <b>Descripción:</b> {product.description}
                  <b>Precio:</b> {product.price}
                  <b>Folio:</b> {product.id}
                </div>
                <button className="btnAdd" 
                onClick={() => onAddProduct([{id: product.id, img: product.images, title: product.title, price: product.price}])} >
                  <MdOutlineAddShoppingCart size={30}/>
                </button>
                </div>
            )
          })
        }
        </div>
        <ViewProduct />
    </div>
        
        {/* <Trolley/> */}
    </>
  )
}
