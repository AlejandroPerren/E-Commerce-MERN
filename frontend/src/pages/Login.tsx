import { ChangeEvent, useState } from 'react'
import LoginIcons from '../assest/signin.gif'
import { FaEye } from 'react-icons/fa6'
import { FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<LoginData>({
    email: "",
    password: ""
  });

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <section id='login'>
      <div className="mx-auto container p-4">

        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className='w-20 h-20 mx-auto'>
            <img src={LoginIcons} alt="login Icono" />
          </div>

          <form className='tp-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Email:</label>
              <div className='bg-slate-100 p-2'>
                <input type='email'
                name='email' 
                value = {data.email}
                onChange={handleonChange}
                placeholder='ingresa Tu Correo' 
                className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>
            <div>
              <label>Contraseña:</label>
              <div className='bg-slate-100 p-2 flex'>
                <input type={showPassword? "text" : "password"} 
                name='password' 
                value = {data.password}
                onChange={handleonChange}
                placeholder='ingresa Tu Contraseña' 
                className='w-full h-full outline-none bg-transparent' />
              <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                <span>
                 {
                  showPassword ? (
                  
                    <FaEyeSlash/>
                  ):
                  (
                    <FaEye/>
                  )
                }
                  </span>
              </div>
              </div>
              <Link to={'/forgot-password'}className='block w-fit ml-auto hover:underline hover:underline hover:text-red-600'>
              Recupera Tu Contraseña</Link>
            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[180px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Ingresa</button>
          </form>
                  <p className='my-5'>No tienes Cuenta? <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'>Registrate</Link> </p>
        </div>
      </div>
    </section>
  )
}

export default Login