import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const cheese = props.cheese
  const dairy = cheese.find(p => p._id === id)
  const [editForm, setEditForm] = useState(dairy)
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.updateCheese(editForm, dairy._id)
    props.history.push("/")
  }
  const removeCheese= () => {
    props.deleteCheese(dairy._id)
    props.history.push("/")
  }


  return (
    <div className="dairy">
      <h1>{dairy.name}</h1>
      <h2>{dairy.countyOfOrigin}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
          className="form-input"
        /> <br />
        <input type="submit" value="Change Cheese deets!" />
      </form>
      <img src={dairy.image} alt={dairy.name} /> <br /> 
      <button id="delete" onClick={removeCheese}>
        DELETE
      </button>
    </div>
  )
}

export default Show