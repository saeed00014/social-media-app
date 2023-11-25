import axios from "axios"

const handleGetAllCard = async () => {
  await axios.get('http://127.0.0.1:8000/products', {
    headers: {"Access-Control-Allow-Origin": "*"}
  })
  .then((res) => { return res })
  .catch((err) => { console.log(err)})
  .finally(() => { return '' })
}

export default handleGetAllCard