import { useMemo, useState, useRef } from "react";

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef() //focus sau khi add

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price, //convert du lieu trong input tu string sang so, cach khac: parseInt(price) || Number(price)
    }])
    setName('')
    setPrice('')

    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price
    }, 0)
    return result
  }, [products])

  return (
    <div style={{ padding: 20 }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>ADD</button>
      <br />
      Total: {total}
      <ul>
        {products.map(product => (
          <li>{product.name} - {product.price}</li>
        ))}
      </ul>


    </div>
  )
}

export default App;
