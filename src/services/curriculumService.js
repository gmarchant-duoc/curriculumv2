const API_URL = process.env.REACT_APP_BACKEND_URL || 'https://curriculumv2-backend-production.up.railway.app/api';

// Obtener todo el currículum
export const obtenerCurriculum = async () => {
  try {
    const response = await fetch(`${API_URL}/curriculum`);
    if (!response.ok) throw new Error('Error al obtener el currículum');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Obtener información personal
export const obtenerInfoPersonal = async () => {
  try {
    const response = await fetch(`${API_URL}/curriculum/info`);
    if (!response.ok) throw new Error('Error al obtener información personal');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Obtener experiencias
export const obtenerExperiencias = async () => {
  try {
    const response = await fetch(`${API_URL}/curriculum/experiencias`);
    if (!response.ok) throw new Error('Error al obtener experiencias');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Crear nueva experiencia
export const crearExperiencia = async (experiencia) => {
  try {
    const response = await fetch(`${API_URL}/curriculum/experiencias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experiencia),
    });
    if (!response.ok) throw new Error('Error al crear experiencia');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Actualizar experiencia
export const actualizarExperiencia = async (id, experiencia) => {
  try {
    const response = await fetch(`${API_URL}/curriculum/experiencias/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experiencia),
    });
    if (!response.ok) throw new Error('Error al actualizar experiencia');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Eliminar experiencia
export const eliminarExperiencia = async (id) => {
  try {
    const response = await fetch(`${API_URL}/curriculum/experiencias/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar experiencia');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Actualizar información personal
export const actualizarInfoPersonal = async (info) => {
  try {
    const response = await fetch(`${API_URL}/curriculum/info`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    if (!response.ok) throw new Error('Error al actualizar información');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
