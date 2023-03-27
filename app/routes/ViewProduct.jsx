// rfc
// import { set } from 'react-hook-form';
// import Catalogue from "./Catalogue"
// import { Catalogue } from './Catalogue';
import globalStyles from '~/styles/viewProduct.css'
import { useState} from 'react';
export default function ViewProduct() {

  const [view, setView] = useState();

  const viewProduct = (product) =>{
      setView(product)
      console.log("Muestra");
  }
  // console.log(view);

  return (
    <>
      <div className="containerView">
        <h2>ViewProduct</h2>
        <div>imagen</div>
        <div className="textConteiner">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, eum maiores eligendi sint nisi ullam a rem praesentium mollitia nemo reiciendis sequi nulla quasi eaque necessitatibus est beatae numquam?</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, eum maiores eligendi sint nisi ullam a rem praesentium mollitia nemo reiciendis sequi nulla quasi eaque necessitatibus est beatae numquam?</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, eum maiores eligendi sint nisi ullam a rem praesentium mollitia nemo reiciendis sequi nulla quasi eaque necessitatibus est beatae numquam?</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, eum maiores eligendi sint nisi ullam a rem praesentium mollitia nemo reiciendis sequi nulla quasi eaque necessitatibus est beatae numquam?</span>
        </div>
        <button>carrito</button>
      </div>

      {/* <Catalogue onView = {viewProduct}/> */}

    </>
  )
}
