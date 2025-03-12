import { doc, getDoc } from 'firebase/firestore'
import React, { use, useEffect, useState } from 'react'
import ItemDetails from './ItemDetails'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'

const ItemDetailsContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState([])
useEffect(() => {
    const idItem = doc(db, 'items', id)
    getDoc(idItem).then((snapshot) => {
        if(snapshot.exists()){
            setItem({id: snapshot.id, ...snapshot.data()})
        }else{
            setItem({error : 'No existe el item'})
        }
    })
}, [id])


  return (
    <div>
        <ItemDetails item={item}/>
    </div>
  )
}

export default ItemDetailsContainer