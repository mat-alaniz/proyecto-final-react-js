import React, { use, useEffect, useState } from 'react'
import { db } from '../Firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const coleccionDeProductos = collection(db, 'items')
        getDocs(coleccionDeProductos).then((snapshot) => {
            let items = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
            
            setItems(items)    
        })
        
    })
  return (
    <div> 
        <h1>Todos los productos</h1>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer