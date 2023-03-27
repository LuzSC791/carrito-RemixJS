import React from 'react'
import {HiMinusCircle} from 'react-icons/hi'
// import {MdOutlineAddShoppingCart} from 'react-icons/md'

// import AiFillMinusCircle from 'react-icons/ai'
// import IoAddCircleSharp from 'react-icons/io'

export default function Pruba({productAdd}) {
  return (
    <>
        <h2>prueba</h2>
        <div className="btnAddTrolley">
          {/* <button><IoAddCircleSharp size={20}/>mas</button> */}
          <button>menos</button>

          <button>
            <HiMinusCircle size={30}/>
          </button>
        </div>
    </>
  )
}
