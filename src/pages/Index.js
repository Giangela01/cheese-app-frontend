import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
        name: "",
        countryOfOrigin: "",
        image: "",
    });
  };

  const loaded = () => {
    return props.cheese.map((dairy) => (
      <div key={dairy._id} className="dairy">
        <Link to={`/cheese/${dairy._id}`}><h1>{dairy.name}</h1></Link>
        from
        <h3>{dairy.countryOfOrigin}</h3>
        <img className="pic-index" src={dairy.image} alt={dairy.name} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
          className="form-input"
        />
        <input type="submit" value="Add Your Cheese" classname="button" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
}

export default Index;