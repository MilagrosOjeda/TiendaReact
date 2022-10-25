import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "./cartwidget.css"

import React from 'react'

function CartWidget() {
  return (
    <div className='cartIcon'>
        <FontAwesomeIcon icon={faCartShopping} color="whitesmoke"/>
    </div>
  );
}

export default CartWidget
