import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  totalprice: 0,
  totalitems: 0
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getAllCards(state, action) {
      state.cards = action.payload

      state.cards.map((card) => { 
        state.totalitems = state.totalitems + card.quantity / 2, state.totalprice = state.totalprice + card.quantity / 2 * card.price - card.quantity / 2 * card.price * card.discountPrecent / 100
      })
    },
    addcard(state, action) {
      const itemtoPush = action.payload
      const itemtoPushPrice = itemtoPush.price - itemtoPush.price * itemtoPush.discountPrecent / 100 

      const foundedProductIndex = state.cards.findIndex((product) => product.id == itemtoPush.id)
      const foundedProduct = state.cards[foundedProductIndex]
      const foundedProductPrice = foundedProduct && foundedProduct.price - foundedProduct.price * foundedProduct.discountPrecent / 100 
      const foundedProductQuantity = foundedProduct &&  foundedProduct.quantity

      foundedProductIndex >= 0 
        ? foundedProductQuantity < 9 
          ? (state.cards[foundedProductIndex] =
              {...foundedProduct, quantity: foundedProductQuantity + 1},
              state.totalitems = 
                itemtoPush.isAvailable 
                    ? state.totalitems + 1 
                    : state.totalitems, 
              state.totalprice = 
                itemtoPush.isAvailable 
                  ? state.totalprice + foundedProductPrice
                  : state.totalprice 
          ) : ''
        : (state.cards.push({...itemtoPush, quantity: 1}),
          state.totalitems = 
            itemtoPush.isAvailable 
              ? state.totalitems + 1 
              : state.totalitems,
          state.totalprice = 
            itemtoPush.isAvailable 
              ? state.totalprice + itemtoPushPrice
              : state.totalprice
        )
    },
    deletecard(state, action) {
      const itemtoDelete = action.payload
      const itemtoDeletePrice = itemtoDelete.price - itemtoDelete.price * itemtoDelete.discountPrecent / 100 
      const itemtoDeleteQuantity = foundedProduct.quantity  

      const foundedProduct = state.cards.find((product) => product.id == itemtoDelete.id)

      state.totalitems = 
        itemtoDelete.isAvailable 
          ? state.totalitems - itemtoDeleteQuantity
          : state.totalitems
      
      state.totalprice = 
        itemtoDelete.isAvailable 
          ? state.totalprice - itemtoDeletePrice 
          : state.totalprice

      state.cards = 
        state.cards.filter((product) => product.id !== itemtoDelete.id)
    },
    selectquantitycard(state, action) {
      const patchedItem = action.payload

      const foundedProduct = state.cards.find((product) => product.id == patchedItem.id)
      const foundedProductIndex = state.cards.findIndex((product) => product.id == patchedItem.id)

      const foundedProductPrice = (foundedProduct.price - foundedProduct.price * foundedProduct.discountPrecent / 100) * foundedProduct.quantity
      const patchedItemPrice = (patchedItem.price - patchedItem.price * patchedItem.discountPrecent / 100) * patchedItem.quantity
      
      const foundedProductQuantity = foundedProduct.quantity
      const patchedItemQuantity = patchedItem.quantity

      state.cards[foundedProductIndex] = patchedItem
      
      state.totalprice = 
        state.totalprice - foundedProductPrice + patchedItemPrice
      
      state.totalitems = 
        state.totalitems - foundedProductQuantity + patchedItemQuantity
    },
    clearall(state, action) {
      state.cards = []
      state.totalitems = 0
      state.totalprice = 0
    }
  }
})

export const { getAllCards, addcard, deletecard, selectquantitycard, clearall } = dataSlice.actions;

export default dataSlice