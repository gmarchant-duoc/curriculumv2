import React from 'react';

function Experience()
{
    const misExperiencias=[
        {
            //Primer Trabajo (mas reciente)
            puesto: "Desarrollador Frontend",
            empresa: "Tech Solutions S.A.",
            ubicación: "Tongoy",
            periodo: "Enero 2024 - Presente",
            responsabilidades:[
                                "Responsabilidad 1",
                                "Responsabilidad 2",
                                "Responsabilidad 3",
                                "Responsabilidad 4"
                            ]       
        },
        {
            //Segundo Trabajo 
            puesto: "Desarrollador JR",
            empresa: "Duoc UC",
            ubicación: "Los Vilos",
            periodo: "Junio 2024 - Diciembre 2023",
            responsabilidades:[
                                "Responsabilidad 1",
                                "Responsabilidad 2",
                                "Responsabilidad 3",
                                "Responsabilidad 4"
                            ]       
        },
        {
            //Tercer Trabajo 
            puesto: "Practica Desarrollador",
            empresa: "Duoc UC",
            ubicación: "Los Vilos",
            periodo: "Junio 2024 - Diciembre 2023",
            responsabilidades:[
                                "Responsabilidad 1",
                                "Responsabilidad 2",
                                "Responsabilidad 3",
                                "Responsabilidad 4"
                            ]       
        }
    ];

    return(
        <section className='mb-5'>
            <div className='card shadow-sm'>
                <div className='card-header bg-white'>
                    <h2 className='h4 mb-0 text-primary'>
                        Experiencia Laboral
                    </h2>
                </div>

                <div className='card-body'>
                    {/*Mapeo de las experiencias
                    reccorre misExperiencias y crear bloque html.
                    for each
                    */}

                {
                    misExperiencias.map((trabajo, index)=>(
                     <div key={index} className='mb-4'>
                        <h3 className='h5 fw-bold text-dark md'>{trabajo.puesto}</h3>
                        <h4 className='h6 text-primary mb-1'>{trabajo.empresa} - {trabajo.ubicación}</h4>
                        <p className='text-muted mb-2'>{trabajo.periodo} </p>
                        <ul className='list-unstyled'>
                            {trabajo.responsabilidades.map((responsabilidad, idx)=>(
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