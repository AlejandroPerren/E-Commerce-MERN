import { ChangeEvent, useState } from 'react'
import LoginIcons from '../assest/signin.gif'
import { FaEye } from 'react-icons/fa6'
import { FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import imageTobase64 from '../helpers/imageTobase64'
const Signup = () => {

  interface SignupData {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    profilePic : any;
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState<SignupData>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    profilePic: "",
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

  const handleUploadPic = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = e.target.files?.[0];  
    
    if (file) {
      const imagePic = await imageTobase64(file);
      
      setData((prev) => {
        return {
          ...prev,
          profilePic: imagePic
        };
      });
    }
  };
  

  return (
    <section id='signup'>
    <div className='mx-auto container p-4'>

<div className='bg-white p-5 w-full max-w-sm mx-auto'>

        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
                <img src={data.profilePic || LoginIcons} alt='login icons'/>
            </div>
            <form>
              <label>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Sube tu Foto
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic}/>
              </label>
            </form>
        </div>

          <form className='tp-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Name:</label>
              <div className='bg-slate-100 p-2'>
                <input type='text'
                  name='name'
                  value={data.name}
                  onChange={handleonChange}
                  placeholder='Ingresa Tu Nombre'
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>


            <div className='grid'>
              <label>Email:</label>
              <div className='bg-slate-100 p-2'>
                <input type='email'
                  name='email'
                  value={data.email}
                  onChange={handleonChange}
                  placeholder='Ingresa Tu Correo'
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div>
                <label>Contraseña:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showPassword ? "text" : "password"}
                    name='password'
                    value={data.password}
                    onChange={handleonChange}
                    placeholder='Ingresa Tu Contraseña'
                    className='w-full h-full outline-none bg-transparent' />
                  <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                    <span>
                      {
                        showPassword ? (

                          <FaEyeSlash />
                        ) :
                          (
                            <FaEye />
                          )
                      }
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label>Confirma tu Contraseña:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    value={data.confirmPassword}
                    onChange={handleonChange}
                    placeholder='Ingresa tu Contraseña de nuevo'
                    className='w-full h-full outline-none bg-transparent' />
                  <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                    <span>
                      {
                        showConfirmPassword ? (

                          <FaEyeSlash />
                        ) :
                          (
                            <FaEye />
                          )
                      }
                    </span>
                  </div>
                </div>
              </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[180px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Ingresa</button>
          </form>
          <p className='my-5'>Ya tienes una cuenta? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Inicia Sesion</Link> </p>
        </div>
      </div>
    </section>
  )
}


export default Signup
