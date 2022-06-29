import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //notificación de Toastify
    const notifySucess = (alert) => toast.success(alert, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;

    //notificación de Toastify - Error
    const notifyError = (alert) => toast.error(alert, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    // ItemDetail - Se va a encargar de agregar el producto seleccionado al carrito.
    const addItem = (item, cantidad) => {

        const newItem = { ...item, cantidad }

        if (!isInCart(newItem.id)) {
            setCart([...cart, newItem])
            notifySucess(`${cantidad} x ${newItem.title} agregado al carrito`)
        } else {
            const findProduct = (cart.find(item => item.id === newItem.id))
            const productIndex = cart.indexOf(findProduct)
            const newCart = [...cart]

            if (newItem.cantidad + findProduct.cantidad <= findProduct.stock) {
                newCart[productIndex].cantidad += cantidad
                setCart(newCart)
                notifySucess(`${cantidad} x ${newItem.title} agregado al carrito`)
            } else {
                notifyError("No disponemos del stock suficiente")
            }
        }
    }

    //ItemDetail - Usamos some para saber si el item ya esta en el carrito o no.
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    // Cart - Se va a encargar de limpiar el carrito.
    const emptyCart = () => {
        setCart([])
    }

    // Cart - Se va a encargar de eliminar el producto seleccionado del carrito.
    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }

    // Cart - Reduce - Retorna la totalidad de unidades de nuestro carrito.
    const getItemQty = () => {
        return cart.reduce((acc, item) => acc += item.cantidad, 0)
    }

    // Cart - Reduce - Retona el precio total del carrito.
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.price * item.cantidad, 0)
    }


    return <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemPrice, getItemQty, notifySucess }} >{children}</Provider>
}

export default MyProvider