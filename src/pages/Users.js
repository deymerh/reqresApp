import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Users = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(`/api/users/`);
        setList(data.data)
      } catch (error) {
        throw new Error('Error al cargar los datos')
      }
    };
    fetchList();
  }, [])
  return (
    <table className="tableUsers">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={user.first_name} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
};
