import React, { useState, useEffect } from 'react';
import { obtenerCurriculum } from '../services/curriculumService';

function Header()
{
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

    return(
        <header className="bg-primary text-white py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/*Foto Perfil*/}
                    <div className="col-md-3 text-center-3 mb-md-0">
                        <img 
                        src={curriculum.foto}
                        alt={`Foto de ${curriculum.nombre}`}
                        className="rounded-circle img-fluid border border-white border-3"
                        style={{maxWidth:'150px'}}
                        />    
                    </div>
                    <div className="col-md-9">
                        <h1 className="display-4 fw-bold mb-2">
                            {curriculum.nombre}
                        </h1>

                        <h2 className="h3 mb-3">
                            {curriculum.titulo}
                        </h2>
                        <p className="mb-0">
                            {curriculum.ubicacion}
                        </p>
                    </div>
                </div>
            </div>    
        </header>
    )
}

export default Header;