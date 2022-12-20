import { REMOVE_PRODUCT, LIST_PRODUCT, LIST_PRODUCT_BY_ID } from './../constant'

export const onFetchProductData = (result) => {
    return {
        type: LIST_PRODUCT,
        payload: result
    }
}

export const onFetchProductDataByID = (result) => {
    return {
        type: LIST_PRODUCT_BY_ID,
        payload: result
    }
}

export const onOrderProductByID = (result) => {
    return {
        type: LIST_PRODUCT_BY_ID,
        payload: result
    }
}


export const onRemoveProductDataByID = (result) => (
    {
        type: REMOVE_PRODUCT,
        payload: result
    }
)