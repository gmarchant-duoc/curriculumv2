import React, { useState, useEffect } from 'react';
import { obtenerCurriculum } from '../services/curriculumService';

function Curriculum() {
  const [curriculum, setCurriculum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarCurriculum();
  }, []);

  const cargarCurriculum = async () => {
    try {
      setLoading(true);
      const datos = await obtenerCurriculum();
      setCurriculum(datos);
      setError(null);
    } catch (err) {
      setError('Error al cargar el currículum');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center p-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!curriculum) return null;

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title">{curriculum.nombre}</h1>
          <h3 className="text-muted">{curriculum.titulo}</h3>
          <p className="text-secondary">
            <i className="bi bi-geo-alt"></i> {curriculum.ubicacion}
          </p>
          <p className="mt-3">{curriculum.descripcion}</p>

          <hr />

          <h4 className="mt-4">Experiencia Laboral</h4>
          {curriculum.experiencias.map((exp) => (
            <div key={exp.id} className="card mb-3">
              <div className="card-body">
                <h5>{exp.puesto}</h5>
                <h6 className="text-muted">{exp.empresa}</h6>
                <p className="text-secondary">
                  <i className="bi bi-geo-alt"></i> {exp.ubicacion} | 
                  <i className="bi bi-calendar ms-2"></i> {exp.periodo}
                </p>
                <ul>
                  {exp.responsabilidades.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Curriculum;