import React, { use, useEffect, useState } from 'react'
import { db } from '../Firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    const {categoryId} = useParams()
  
    useEffect(() => {
   
        const coleccionDeProductos = collection(db, 'items')
        getDocs(coleccionDeProductos).then((snapshot) => {
            let items = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
            if (categoryId){
              items = items.filter(item=>item.category===categoryId)
            }
            setItems(items)    
        })
        
    })


  
  return (
    <div> 
        <h1 className='item-card'>{categoryId ?`categoria ${categoryId}`:"Todos los productos"}</h1>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer