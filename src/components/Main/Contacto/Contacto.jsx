
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './Contacto.css'
import FormularioContacto from "./FormularioContacto";


const Contacto = () => {   

    return (
        <div className='main_formulario'>
        <h1 className='tile__contacto'>CONTACTO</h1>
        <div className='formulario_container'>
          <section className='formulario1'>
            <h3>ENVÍANOS UN MENSAJE</h3>
           <FormularioContacto/>
          </section>
          <section className='formulario2'>
            <h3>
              ¿CÓMO LLEGAR?
            </h3>
            <iframe
            className='mapa'
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.41749975375993!2d-78.51193165096224!3d-7.1629438391372515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25afd76630dbf%3A0xe432d3796c691544!2sAv.%20H%C3%A9roes%20de%20San%20Ram%C3%B3n%20434%2C%20Cajamarca%2006002!5e0!3m2!1ses!2spe!4v1709836557660!5m2!1ses!2spe" 
            ></iframe>
          </section>
        </div>
      </div>
    )
}

export default Contacto

































































// const FormContacto = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {

//     const { register, handleSubmit, reset } = useForm();

//     const URL = 'https://64ae40a1c85640541d4cae10.mockapi.io/Empleado';


//     const [btncloseContact, setBtncloseContact] = useState('')

//     const closeBtn = () => {
//         setBtncloseContact('none')
//     }

//     const submit = data => {
//         console.log(obtenerData);
//         console.log(image);
//         if (obtenerData) {

//             updateData(data, obtenerData?.id_empleado)
//             setIsOpenModal(false)
//             getData()
//             setObtenerData(false)
//         } else {
//             setCliente(data)

//             createData(data)
//             console.log(uploadData);

//             console.log(data);
//             setIsOpenModal(false)
//             getData()
//         }
//     }

//     useEffect(() => {
//         if (obtenerData) {
//             reset(obtenerData)
//         }
//     }, [obtenerData])

   

//     return (
//     <form onSubmit={handleSubmit(submit)} className={`form__container`} style={{display:`${btncloseContact=== 'none' ? 'none': ''}`}}>
//             <div className='form'>
//                 <div className='form__tile'>
//                     <div className='form__title-title'><h3>{obtenerData ? 'Modificar' : 'Agregar'}  el contacto de su información </h3></div>
                

//                     <div className="form__title-x">
//                         <h1 onClick={closeBtn} style={{ fontFamily: "arial" }}> x </h1>
//                     </div>
//                 </div>
//                 <div className='form__datos'>

//                     <div className='form__datos-datos'>

//                         <div className='container__datos-datos'>
//                             <li className='form__item'>
//                                 <label htmlFor="name">Ingrese su nombre:</label>
//                                 <input {...register('name')} type="text" id='name' placeholder=' Ingresar nombre' required />
//                             </li>
//                             <li className='form__item'>
//                                 <label htmlFor="email">Ingrese su correo:</label>
//                                 <input {...register('email')} type="email" id='email' placeholder=' Ingresar correo' required />
//                             </li>
//                             <li className='form__item'>
//                                 <label htmlFor="dni">Ingrese DNI:</label>
//                                 <input
//                                     {...register('dni')}
//                                     type="number"
//                                     name="dni"
//                                     id='dni'
//                                     placeholder=' Ingresar numero de DNI'
//                                     minLength={8}
//                                     required

//                                 />

//                             </li>
//                             <li className='form__item'>
//                                 <label htmlFor="phone">Ingrese Telefono:</label>
//                                 <input {...register('phone')} type="number" id='phone' placeholder=' Ingresar número de telefono' required />
//                             </li>

//                             <li className='form__item'>
//                                 <label htmlFor="address">Dirección:</label>
//                                 <input {...register('address')} type="text" id='address' placeholder=' Ingresar direción' required />
//                             </li>

//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default FormContacto