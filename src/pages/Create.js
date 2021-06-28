import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '../hooks/useForm';

export const Create = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [created, setCreated] = useState(false);
  const [values, handleInputChange, resetValues] = useForm({
    name: 'Deymer',
    job: 'Programmer'
  });
  const { name, job } = values;
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`/api/users`, {
        name: name,
        job: job
      });
      if (res.status === 201) {
        setCreated(true);
      }
    } catch (error) {
      console.log(error);
      setError(true)
      resetValues();
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className="create">
      <h3>Crear Usuario</h3>
      <form onSubmit={createUser}>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="false"
          required
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="job">Ocupación</label>
        <input
          id="job"
          type="text"
          name="job"
          placeholder="Ocupación"
          required="required"
          autoComplete="false"
          onChange={handleInputChange}
          value={job}
        />
        <button>{loading ? 'Creando Usuario...' : 'Crear Usuario'}</button>
        {
          created && (<h4>Usuario {name} creado correctamente!</h4>)
        }
        {
          error && (<h4 className="error">Ocurrion un error al crear el Usuario {name}</h4>)
        }
      </form>
    </div>
  )
}
