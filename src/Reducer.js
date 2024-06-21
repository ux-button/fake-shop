const currentCart = [{
    id: 1,
    quantity: 1,
    item: {
        id: 13244,
        title: 'Bodysuite V-neck',
        price: 100,
    }}]

const ACTIONS = {
    ADD_TO_CART: 'add-to-cart',
}

function Reducer (currentCart, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return ([...currentCart,
                {
                    id: currentCart.id + 1,
                    quantity: 1,
                    item: {
                        id: action.payload.id,
                        title: action.payload.title,
                        price: action.payload.price,
                    }
                }
            ])
    }
}

export { Reducer, currentCart, ACTIONS }