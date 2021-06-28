import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '../hooks/useForm';

export const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState(null)
  const [values, handleInputChange, resetValues] = useForm({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  });
  const { email, password } = values;
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/login`, {
        email: email,
        password: password
      })
      localStorage.setItem('token', data.token);
      history.replace('/');
    } catch (error) {
      resetValues();
      setMsgError('Error de credenciales');
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className="login">
      <div>
        <h1>Iniciar Sesión</h1>
        {
          msgError && (<h4> {msgError}!</h4>)
        }
        <form>
          <input
            type="text"
            name="email"
            placeholder="Correo"
            autoComplete="false"
            required
            onChange={handleInputChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required="required"
            autoComplete="false"
            onChange={handleInputChange}
            value={password}
          />
          <button type="submit" disabled={loading} onClick={login}>Ingresar</button>
        </form>
      </div>
    </div>
  )
};
