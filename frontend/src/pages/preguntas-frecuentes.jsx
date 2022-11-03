import Layer from "src/components/Layer";
import ToggleList from 'src/lib/ToggleList'

export default function index() {

    return (
        <Layer>

            <div className="subtitle mt-16 mb-6">
                <i>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30C12.606 30.0033 10.2462 29.4312 8.11951 28.332L2.38051 29.9325C2.06032 30.0219 1.72214 30.0245 1.4006 29.9401C1.07906 29.8557 0.785736 29.6874 0.550677 29.4523C0.315618 29.2173 0.147277 28.924 0.0629033 28.6024C-0.0214709 28.2809 -0.0188447 27.9427 0.0705125 27.6225L1.67251 21.888C0.570541 19.7594 -0.0031032 17.3969 1.26254e-05 15C1.26254e-05 6.7155 6.71551 0 15 0ZM15 2.25C11.6185 2.25 8.37549 3.5933 5.9844 5.98439C3.59331 8.37548 2.25001 11.6185 2.25001 15C2.25001 17.205 2.80951 19.3245 3.85951 21.2055L4.08451 21.6105L2.41651 27.5865L8.39701 25.9185L8.80201 26.1435C10.5036 27.0895 12.3992 27.6333 14.3435 27.7332C16.2879 27.8331 18.2292 27.4864 20.0188 26.7196C21.8083 25.9529 23.3985 24.7866 24.6674 23.31C25.9363 21.8335 26.8503 20.0859 27.3391 18.2014C27.8279 16.3169 27.8787 14.3455 27.4876 12.4383C27.0964 10.5311 26.2737 8.73883 25.0825 7.1989C23.8913 5.65897 22.3632 4.41228 20.6155 3.55444C18.8678 2.69659 16.9469 2.25037 15 2.25ZM15 20.25C15.3978 20.25 15.7794 20.408 16.0607 20.6893C16.342 20.9706 16.5 21.3522 16.5 21.75C16.5 22.1478 16.342 22.5294 16.0607 22.8107C15.7794 23.092 15.3978 23.25 15 23.25C14.6022 23.25 14.2207 23.092 13.9394 22.8107C13.658 22.5294 13.5 22.1478 13.5 21.75C13.5 21.3522 13.658 20.9706 13.9394 20.6893C14.2207 20.408 14.6022 20.25 15 20.25ZM15 7.125C16.094 7.125 17.1432 7.5596 17.9168 8.33318C18.6904 9.10677 19.125 10.156 19.125 11.25C19.125 12.765 18.6795 13.611 17.5485 14.7885L17.295 15.045C16.362 15.978 16.125 16.374 16.125 17.25C16.125 17.5484 16.0065 17.8345 15.7955 18.0455C15.5845 18.2565 15.2984 18.375 15 18.375C14.7016 18.375 14.4155 18.2565 14.2045 18.0455C13.9935 17.8345 13.875 17.5484 13.875 17.25C13.875 15.735 14.3205 14.889 15.4515 13.7115L15.705 13.455C16.638 12.522 16.875 12.126 16.875 11.25C16.8735 10.7704 16.6882 10.3097 16.3573 9.96248C16.0265 9.61531 15.5751 9.40812 15.0962 9.38353C14.6172 9.35894 14.147 9.51881 13.7823 9.83027C13.4177 10.1417 13.1862 10.5811 13.1355 11.058L13.125 11.25C13.125 11.5484 13.0065 11.8345 12.7955 12.0455C12.5845 12.2565 12.2984 12.375 12 12.375C11.7016 12.375 11.4155 12.2565 11.2045 12.0455C10.9935 11.8345 10.875 11.5484 10.875 11.25C10.875 10.156 11.3096 9.10677 12.0832 8.33318C12.8568 7.5596 13.906 7.125 15 7.125Z" fill="#0054A4" />
                    </svg>
                </i>
                <h1>Preguntas Frecuentes</h1>
            </div>


            <section className='mt-6 space-y-6 text-[16px] custom-list'>


                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Qué es el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Dónde está ubicado el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Cuándo inició su funcionamiento el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                
                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Pertenece el TAT al Ministerio de Economía y Finanzas, la DGI y/o al Órgano Judicial?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Cómo está conformado el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿El TAT tiene jurisdicción a nivel nacional?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                
                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿El TAT tiene oficinas en el interior del país?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Necesito un abogado para presentar recursos en el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Puede cualquier persona solicitar información o revisar un expediente en proceso en el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>
                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Puedo ser detenido o penado con cárcel por algún proceso que lleve el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Los recursos solo pueden presentarse en la sede regional que corresponda a la provincia del contribuyente?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Qué recursos pueden presentarse en esta entidad?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Que decisiones puede tomar el tribunal?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                
                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Cuales son los requisitos para la presentación del escrito del recurso de apelación?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>
                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Quienes pueden presentar recursos de apelación ante el tribunal?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Cual es el plazo para presentar recursos de apelación ante el TAT?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Quiénes pueden promover incidentes, excepciones o tercerías dentro de los procesos de cobro coactivo seguido por la DGI y cuál el es procedimiento aplicable?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿El tribunal puede solicitar información a la Dirección General de Ingresos sobre los antecedentes de la controversia que ante este se presente?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                
                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Cuales son las fases de tramitación de los recursos de apelación?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>

                <div className='p-9 border1 rounded-xl'>
                    <ToggleList title={"¿Cómo el contribuyente o apoderado puede dar seguimiento a sus casos?"}>
                        <div className="pt-4">

                        <p>La Autoridad Nacional para la Innovación Gubernamental, en cumplimiento con la Ley 83 de 9 de noviembre de 2012, modificada a través de la Ley 144 de 15 de abril de 2020, Decreto Ejecutivo 275 del 11 de mayo de 2018, incorpora el portal único del ciudadano, a fin de proveer trámites en línea y facilitar la gestión de trámites con el Estado para con todos los usuarios que lo requieran.</p>
                        </div>
                    </ToggleList>
                </div>


            </section>

        </Layer>
    )
}
