import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
const imgProductos = require.context("../img", true)

export default function Checkout() {
    // Contexto de Carrito.
    const { cart, deleteItem, getItemQty, getItemPrice, emptyCart } = useContext(CartContext)
    //Nombre de usuario, email, celular en estado.
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cel, setCel] = useState("")

    const [validation, setValidation] = useState({
        name: false,
        email: false,
        cel: false
    })

    //Grabamos el Id del usuario en estado.
    const [idCompra, setIdCompra] = useState("")

    //Base de datos Firestore.
    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    function validarEmail() {
        if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) {
            setValidation({ ...validation, email: true });
        } else {
            setValidation({ ...validation, email: false });
        }
    }

    function validarNombre() {
        if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)) {
            setValidation({ ...validation, name: true });
        } else {
            setValidation({ ...validation, name: false });
        }
    }

    function validarCelular() {
        if (/^[0-9]+$/.test(cel) && cel.length >= 9) {
            setValidation({ ...validation, cel: true });
        } else {
            setValidation({ ...validation, cel: false });
        }
    }


    function handleClick() {
        //controlamos que el usuario haya ingresado datos.
        

        const order = {
            buyer: { name, email, cel },
            items: cart,
            total: getItemPrice()
        }

        if (validation.name && validation.email && validation.cel){

        addDoc(orderCollection, order).then(({ id }) => {
            setIdCompra(id)
        })} else{
            alert("Por favor, ingrese todos los datos requeridos.")
        }

    }


    return (


        <div className='checkoutContainer'>
            {idCompra != "" ?

                <div className='col1 cardUser'>

                    <h4 className='titleT'>Gracias por tu compra</h4>
                    <h5 className='titleT'>Tu orden esta siendo procesada, te notificaremos via email para brindarte mas detalles.</h5>
                    <div className='spaceBet lineCart'>
                        <b className='textCheckout'>Tu codigo de seguimiento es:</b> <b className='textCheckout'>{idCompra}</b>
                    </div>
                    <h5 className='titleT'>Comprador</h5>
                    <div className='impFinal'>
                        <p>Nombre y Apellido: <b>{name}</b></p>


                        <p>Correo electrónico: <b>{email}</b></p>


                        <p>Nº de Whatsapp: <b>{cel}</b></p>
                    </div>

                    <h6 className='titleT'>Nos pondremos en contacto para coordinar la entrega del producto.. Gracias por confiar en Hakunix.</h6>
                </div>
                :
                <>
                    <b className='topGrid'>Por favor ingresa tus datos para realizar la compra</b>
                    <div className='col1 cardUser'>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg></span>
                            <input onKeyUp={validarNombre} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Nombre y Apellido" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        {validation.name ? <p className="validation">Nombre y Apellido válidos</p> : name == "" ? "" : <p className="validationX">Solo se permiten letras</p>}


                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input onKeyUp={validarEmail} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="tucorreo@correo.com" aria-label="correo" aria-describedby="basic-addon1" />
                        </div>


                        {validation.email ? <p className="validation">Correo válido</p> : email == "" ? "" : <p className="validationX">Agregá un correo válido</p>}

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg></span>

                            <input onKeyUp={validarCelular} onChange={(e) => setCel(e.target.value)} type="text" className="form-control" placeholder="Ej: 341 5478745" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        {validation.cel ? <p className="validation">Celular válido</p> : cel == "" ? "" : <p className="validationX">Agregue un celular válido</p>}

                        <button onClick={() => handleClick()} type="button" className="btn btn-success">Confirmar Compra</button>

                    </div>
                </>
            }

            <div className='containerCheckOut col2'>


                <div className='cartContainerCheck'>
                    <p className='cantidadCart textCheckout'>Producto</p>
                    <p className='precioCart textCheckout'>Precio Unitario</p>
                    <p className='subtotalCart textCheckout'>Precio Total</p>
                </div>

                {cart.map(product => (
                    <div key={product.id} className='cartContainerCheck lineCart'>
                        <img className='imgProducto img-fluid' src={product.pictureUrl} alt={"Producto1"} width="35px" />
                        <p className='cantidadCart textCheckout'>{product.cantidad} x {product.title}</p>
                        <p className='precioCart textCheckout'>Precio: ${product.price}</p>
                        <p className='subtotalCart textCheckout'>Subtotal: ${product.cantidad * product.price}</p>
                    </div>


                ))}
                <div className='lineCart'>
                    <div className='spaceBet'>
                        <b>Subtotal</b> <b>${getItemPrice()}</b>
                    </div>
                    <div className='spaceBet'>
                        <b>Costos de Envío</b> <b>Free</b>
                    </div>
                </div>
                <div className='lineCart spaceBet'>
                    <b>Total</b> <b>${getItemPrice()}</b>
                </div>
            </div>
            <div className='centerBtn'>
                {idCompra != "" ?
                    <Link to="/"><button onClick={emptyCart} className='btn btn-primary'>Volver al inicio</button></Link>
                    :
                    <Link to="/"><button className='btn btn-primary'>Volver al inicio</button></Link>
                }
            </div>
        </div>
    )
}
