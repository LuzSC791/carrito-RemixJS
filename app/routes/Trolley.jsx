import Catalogue from "./Catalogue"
import {HiMinusCircle} from 'react-icons/hi'
import {MdAddCircle} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import React, {useState} from 'react'
export default function Trolley({onNumProducts, deploy}) {
  const [productAdd, setProductAdd] = useState([])
  const [counter, setCounter] = useState([])
  const [totalPro, setTotalPro] = useState([])
  const addProduct = (addItem) => {
    productAdd.map(p =>{
      if(p.id === addItem.id) return;
    })

    const aux = addItem.num * addItem.price
    setProductAdd([addItem, ...productAdd])
    setTotalPro([aux, ...totalPro])
    setCounter([addItem.num, ...counter])
  }
  const counterAdd = (id) => setProductAdd(productAdd.map((p) => id === p.id ? {...p,num:p.num+1} : p))

  const counterMinus =(id, total) =>{
    total === 1 ? deleteProduct(id) : setProductAdd(productAdd.map((p) => id === p.id ? {...p,num:p.num-1} : p))
  }

  onNumProducts(productAdd.length);

  const deleteProduct = (productId) =>{
      const newProduct = productAdd.filter(product => product.id != productId)
      setProductAdd(newProduct)
  }
  let arrAux = [...productAdd];
  let count = 0;
  arrAux.forEach(p => {
    count += p.total;     
   })

  return (
    <>
      <div className="display">
        {
          !deploy && 
            <div className="containerTrolley">
            {productAdd.map((product) =>{
              return (
                <>
                    <div className="textTrolley" key={product.id}>
                    <img className="imgTrolley" src={product.img} alt="" />
                      <div className="dataTrolley">
                        <span><b>{product.title}</b></span> 
                        <span><b>${product.price}</b> - {product.num}</span>
                        <span><b>Total x producto - ${product.total = product.num * product.price}</b> </span>
                        <div className="btnAddTrolley">
                          <button className="add" onClick={() => counterAdd(product.id)}>
                            <MdAddCircle size={25}/>
                          </button>
                          <button className="minus"  onClick={() => counterMinus(product.id,product.num)}>
                            <HiMinusCircle size={25}/>
                          </button>
                          <button className="delete" onClick={() => deleteProduct(product.id)}><AiFillDelete size={25}/></button>
                        </div>
                      </div>
                    </div>
                </>
              )
            })}
          <div className="total"><span><b>TOTAL ${count}</b></span></div>
          </div>
        }
        <Catalogue onAddProduct = {addProduct}/>
      </div>
    </>
  )
}
