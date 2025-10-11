import About from "../components/About";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Componente About - Pruebas Front', ()=>{

        //Prueba 1: Renderizado sin errores
        test('Test 1: Componente renderiza sin errores',()=>{
            render(<About />);
        });

        //Prueba 2: Muestra Titulo OK
        test('Test 2: Muestra titulo "Acerca de Mí"',()=>{
            render(<About />);

            const titulo = screen.getByText(/Acerca de Mí/i);
            expect(titulo).toBeInTheDocument();
        });

        //Prueba 3: Estructura Card Correcta
        test('Test 3: Tiene estructura de Card de Bootstrap',()=>{
            const {container} = render(<About />);
            const card = container.querySelector('.card');    

            expect(card).toBeInTheDocument();
            expect(card).toHaveClass('shadow-sm');

        })


});