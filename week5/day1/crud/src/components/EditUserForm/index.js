import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditUserForm({
  form,
  studentID,
  setShowForm,
  setForm,
  reload,
  setReload,
}) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete form._id;

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        form
      );

      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="name" value={form.name} onChange={handleChange} />

        <label>Idade</label>
        <input name="age" value={form.age} onChange={handleChange} />

        <label>Signo</label>
        <input name="sign" value={form.sign} onChange={handleChange} />

        <label>Tipo</label>
        <select name="type" onChange={handleChange} defaultValue={form.type}>
          <option value="professor">Professor</option>
          <option value="aluno">Aluno</option>
          <option value="ta">Ta</option>
        </select>

        <button type="submit">Salvar</button>
      </form>
      <button onClick={handleDelete}>Delete esse perfil</button>
    </>
  );
}

export default EditUserForm;
