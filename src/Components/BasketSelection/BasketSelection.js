import React from 'react'
import axios from 'axios'
import './BasketSelection.css'

function BasketSelection({basketName, baskets, insertedId}) {

  const basketSelection = async () =>{
    try{
      const resp = await axios.post(
        'http://100061.pythonanywhere.com/basket/', {

          'selectedBasket': basketName,
          'baskets': baskets,
          'insertedId': insertedId
  })

  console.log(resp.data)
  }catch(err){
    console.log(err.response)
  }
  }
  
  return (
    <div className='basketSelection' onClick={basketSelection}>
      {basketName}
    </div>
  )
}

export default BasketSelection
