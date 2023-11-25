import axios from 'axios'

const deleteOne = async (product) => {
  await axios.delete(`http://127.0.0.1:8000/products/${product.id}`)
}

export default deleteOne