import React, { useState, useEffect } from 'react';
import { obtenerCurriculum } from '../services/curriculumService';


function About()
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
        <section className='mb-5'>
            <div className='card shadow-sm'>
                <div className='card-header bg-white'>
                    <h2 className='h4 mb-0 text-primary'>
                        Acerca de Mí
                    </h2>
                </div>
                <div className='card-body'>
                    <p className='card-text lead mb-0'>
                        {curriculum.descripcion}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;