import Catalogue from "./Catalogue"
import {HiMinusCircle} from 'react-icons/hi'
import {MdAddCircle} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import Pruba from "./pruba"
import React, {useState,useEffect} from 'react'
// rfc
export default function Trolley({onNumProducts}) {
  const [productAdd, setProductAdd] = useState([])
  const [counter, setCounter] = useState(1)
  const [id, setId] = useState()
  console.log(productAdd);
  const addProduct = (addItem) => {
    setProductAdd([addItem, ...productAdd])

  }
  const counterAdd = () =>{
    setCounter(counter + 1)
    console.log(counter);
  }
  const counterMinus = () =>{
    setCounter(counter - 1)
    console.log(counter);
  }

  onNumProducts(productAdd.length);


  const deleteProduct = (productId) =>{
    const newProduct = productAdd.filter(product => product.id != productId)
    setProductAdd(newProduct)
  }
  return (
    <>
      <div className="containerTrolley">
        {/* {console.log(counter)} */}
        {productAdd.map((product, i) =>{
          return (
            <>
                <div className="textTrolley" key={product.id}>
                <img className="imgTrolley" src={product.img} alt="" />
                  <div className="dataTrolley">
                    <span><b>{product.title}</b></span> 
                    <span><b>${product.price}</b> - {counter}</span>
                    <div className="btnAddTrolley">
                      <button className="add" onClick={counterAdd}>
                        <MdAddCircle size={25}/>
                      </button>
                      <button className="minus"  onClick={counterMinus}>
                        <HiMinusCircle size={25}/>
                      </button>

                      <button className="delete" onClick={() => deleteProduct(product.id)}><AiFillDelete size={25}/></button>

                    </div>
                  </div>
                </div>
            </>
          )
        })}
      </div>
      <Catalogue onAddProduct = {addProduct}/>
    </>
  )

}
