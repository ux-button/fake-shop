const currentCart = []

const ACTIONS = {
    ADD_TO_CART: 'add-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart',
    DECREASE: 'decrease',
    INCREASE: 'increase',
}

function Reducer (state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            const exist = state.filter(item => item.id === action.payload.id);
            if (exist.length) {
                return state.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            id: item.id,
                            quantity: item.quantity++,
                        }
                    } else {
                        return item
                    }
                })
            }
            return [
                ...state,
                {
                    id: action.payload.id,
                    quantity: 1,
                    item: {
                        title: action.payload.title,
                        price: action.payload.price,
                    }
                }
            ]
        case ACTIONS.REMOVE_FROM_CART:
            return (
                state.filter(item => item.id !== action.payload.id)
            )
        case ACTIONS.DECREASE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity--
                    }
                } else {
                    return item
                }
            })
        case ACTIONS.INCREASE: 
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity++
                    }
                } else {
                    return item
                }
            })
    }
}

export { Reducer, currentCart, ACTIONS }