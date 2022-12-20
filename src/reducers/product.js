import { REMOVE_PRODUCT, LIST_PRODUCT, LIST_PRODUCT_BY_ID } from '../constant'

const initialState = {
    product: [],
    products: []
}

const removeProductHandler = (productState, payloadData) => {
    // perform remove operation
    return newState;
}

const listProductHandler = (productState, payloadData) => {
    let newState = {
        ...productState,
        products: payloadData
    }
    return newState;
}

const listProductByIdHandler = (productState, payloadData) => {
    let newState = {
        ...productState,
        product: payloadData
    }
    return newState;
}

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case LIST_PRODUCT:
            return listProductHandler(state, action.payload)
        case LIST_PRODUCT_BY_ID:
            return listProductByIdHandler(state, action.payload)
        case REMOVE_PRODUCT:
            return removeProductHandler(state, action.payload)
        default:
            return state
    }
}

export default productReducer