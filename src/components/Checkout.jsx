
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex'
import { toast } from 'sonner'
import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../Firebase'
import '../css/Checkout.css'

const Checkout = () => {
    const { cart, setCart } = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarEmail, setConfirmarEmail] = useState('')
    const [ordenId, setOrdenId] = useState(null)
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email !== confirmarEmail){
            toast.error('Los emails no coinciden')
            return
        }

        const orden = {
            datos: {
                nombre,
                telefono,
                email
            },
            items: cart.map(item=>({
                id:item.id,
                title:item.title,
                quantity:item.quantity,
                price:item.price
            })),
            fecha: new Date().toString(),
            total: total
        }
        addDoc(collection(db, 'ordenes'), orden)
        .then((docRef)=>{
            setOrdenId(docRef.id)
            setCart([])
            toast.success('Compra realizada con exito')
        })
    }
    if(ordenId){
        return <div className='checkout'>
            <h2>Compra realizada con exito</h2>
            <p>Numero de orden: {ordenId}</p>
        </div>
    }
  return (
    <div className='checkout'>
        <h2>Finalizar compra</h2>
        <div className='checkout-items'>
         {cart.map(item=>(
            <div key={item.id}className='checkout-item'>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                - {item.quantity} x ${item.price}

            </div>

         ))}
         <p className='checkout-total'>Total:{total}</p>
         <form className='checkout-form'onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Nombre'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            required
            className='checkout-input'/>

<input type="text"
            placeholder='telefono'
            value={telefono}
            onChange={(e)=>setTelefono(e.target.value)}
            required
            className='checkout-input'/>

<input type="email"
            placeholder='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className='checkout-input'/>

<input type="email"
            placeholder='Confirmar email'
            value={confirmarEmail}
            onChange={(e)=>setConfirmarEmail(e.target.value)}
            required
            className='checkout-input'/>

            <button type='submit' className='checkout-btn' disabled={cart.length===0}>Finalizar compra</button>
            


         </form>
        </div>

    </div>
  )
}

export default Checkout