import React, { useState, useEffect } from 'react';
import { obtenerCurriculum } from '../services/curriculumService';

function Experience()
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
                        Experiencia Laboral
                    </h2>
                </div>

                <div className='card-body'>
                {
                    curriculum.experiencias.map((exp) => (
                     <div key={exp.id} className='mb-4'>
                        <h3 className='h5 fw-bold text-dark md'>{exp.puesto}</h3>
                        <h4 className='h6 text-primary mb-1'>{exp.empresa} - {exp.ubicación}</h4>
                        <p className='text-muted mb-2'>{exp.periodo} </p>
                        <ul className='list-unstyled'>
                            {exp.responsabilidades.map((responsabilidad, idx)=>(
                                <li key={idx} className='mb-1'>
                                    {responsabilidad}
                                </li>
                            ))}
                        </ul>
                        <hr className='my-3' />
                     </div>                             
                    )
                    )
                }
                </div>
            </div>
        </section>
    );
}

export default Experience;