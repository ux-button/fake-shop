import { Outlet } from "react-router-dom";
import { useReducer } from "react";
import { Reducer, currentCart, ACTIONS } from "../Reducer";
import { Cart } from "./Cart";

function Navigation () {
    const [ state, dispatch ] = useReducer(Reducer, currentCart);

    function handleRemoveFromCart (itemId) {
        dispatch({
            type: ACTIONS.REMOVE_FROM_CART,
            payload: {
                id: itemId,
            }
        })
    }

    function handleDecrease (itemId, quantity) {
        if (quantity <= 1) {
            handleRemoveFromCart(itemId)
        }
        dispatch({
            type: ACTIONS.DECREASE,
            payload: {
                id: itemId,
            }
        })
    } 

    function handleIncrease (itemId) {
        dispatch({
            type: ACTIONS.INCREASE,
            payload: {
                id: itemId,
            }
        })
    }

    return (
        <>
            <div>Super Shop</div>
            <Outlet context={[state, dispatch]} />
            <Cart
                items={state}
                removeFromCart={handleRemoveFromCart}
                decrease={handleDecrease}
                increase={handleIncrease} />
        </>
    )
}

export { Navigation }