import axios from 'axios'

const deleteAll = async () => {
  await axios.delete(`http://127.0.0.1:8000/products/all`)
}

export default deleteAll