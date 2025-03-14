import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Firebase'
import '../css/OrderSearch.css'

const OrderSearch = () => {
    const [orderId, setOrderId] = useState('')
    const [order, setOrder] = useState(null)
    const [error, setError] = useState(null)
    const handlerSearch = async(e) => {
     e.preventDefault() 
        setError(null)
        setOrder(null)
        try {
            const orderDoc = doc(db, 'ordenes', orderId)
            const orderSnap = await getDoc(orderDoc)
            if(orderSnap.exists()){
                setOrder({id:orderSnap.id, ...orderSnap.data()})
            } else {
                setError('No se encontro la orden')
            }

        } catch (error) {
            setError('Error al buscar la orden')
        }
    }
  return (
    <div className='order-search'>
<h2>Buscar orden</h2>
<form onSubmit={handlerSearch}>
    <input type="text"
    placeholder='Ingrese el ID de la orden' 
    value={orderId}
    onChange={(e)=>setOrderId(e.target.value)}
    className='search-input'
    required/>
    <button type='submit' className='search-btn'>
        Buscar
    </button>
</form>
{error && <p className='order-search-error'>{error}</p>}
{order && <div className='order-details'>
    <h3>Orden encontrada</h3>
    <p>Nombre: {order.datos.nombre}</p>
    <p>Email: {order.datos.email}</p>
    <p>Telefono: {order.datos.telefono}</p>
    <p>Fecha: {order.fecha}</p>
    <p>Total: ${order.total}</p>
    <h4>Productos</h4>
    <ul>
        {order.items.map(item=>(
            <li key={item.id}>{item.title} - {item.quantity} x ${item.price}</li>
        ))}
    </ul>
</div>}
    </div>
  )
}

export default OrderSearch