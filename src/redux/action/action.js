// add item in bag
export const addItem = (item) =>{
    return {
        type : 'ADDITEM',
        payload: item
    }
}

// remove item in bag
export const removeItem = (item) =>{
    return {
        type : 'REMOVEITEM',
        payload: item
    }
}

// remove all item 

export const removeAllItem = (item) =>{
    return {
        type : 'REMOVEPRODUCT',
        payload: item
    }
}

//add item modal

export const addItemModal = (item) =>{
    return {
        type : 'ADDITEMODAL',
        payload: item
    }
}

//remove item modal

export const removeItemModal = (item) =>{
    return {
        type : 'REMOVEITEMODAL',
        payload: item
    }
}

//Hidden bag

export const hiddenBag = (item) =>{
    return {
        type : 'HIDDENBAG',
        payload: item
    }
}

export const handelHiddent = (item) =>{
    return {
        type : 'HIDDENTMODAL',
        payload: item
    }
}

export const handelModalSuccess = (item) =>{
    return {
        type : 'HIDDENTMODALSUCCESS',
        payload: item
    }
}