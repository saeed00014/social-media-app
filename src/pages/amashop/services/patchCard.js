import axios from "axios"

const patchCard = async (product) => {
  await axios.patch(`http://127.0.0.1:8000/products/${product.id}`, {
    "quantity": product.value 
  }).then((res) => { console.log(res) })
  .catch((err) => { console.log(err) })
}

export default patchCard