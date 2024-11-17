import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { AuthContext } from '../router/Authcontext';
const Register = () => {

  const {createUser, setUser} = useContext(AuthContext);
  const handleRegister = (e) => {

  

    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password)
    // user register 
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      setUser(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage )
    });

  }

  return (
    <div className='flex justify-around mt-8'>
      <div className='flex justify-center items-center'>
        <img className='w-96' src="https://i.ibb.co/6YkgYhT/easysocio-social-growth.png" alt="" />
      </div>

      <div className='relative'>
        <img className='absolute ml-[330px]' src="https://i.ibb.co/RNFhbqQ/shap-01.png" alt="" />

        <div className='shadow-2xl rounded-lg text-center p-6 w-[430px]'>

          <h1 className='text-black font-bold text-2xl'>Create an account</h1>
          <p className='my-5 text-black opacity-60 text-xl font-semibold'>Setup a new account in a minute.</p>
          <div >

            <form onSubmit={handleRegister} className='space-y-5'>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" name='name' className="grow" placeholder="Username" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <IoMdPhotos />
                <input type="text" name='photo' className="grow" placeholder="Photo URL" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" name='email' className="grow" placeholder="Email" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" name='password' placeholder='Passord' />
              </label>
              <div className="form-control">
                <label className="label justify-start gap-3 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-primary" />
                  <span className="label-text text-lg">Accept Term and condition</span>
                </label>
              </div>
              <div className='w-full'>
                <button className='btn btn-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white text-xl font-bold'>Register</button>
              </div>
              <div className="divider">OR</div>
              <div className='flex justify-center items-center gap-5'>
                <button><img src="https://i.ibb.co/9VP9JBh/icons8-facebook-48.png" alt="" /></button>
                <button ><img src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" /></button>
                <button><img className='w-12' src="https://i.ibb.co/vV2LMGC/icons8-github-30.png" alt="" /></button>
              </div>

            </form>
            <div>
              <p className='text-center text-lg '><span className='text-black opacity-60'>Already have an account?</span> <Link to='/auth/login' className='text-blue-500 hover:underline'>Login here</Link></p>
            </div>

          </div>
        </div>

        <img className='absolute -mt-[130px]' src="https://i.ibb.co/j34p5B8/shap-02.png" alt="" />
      </div>

    </div>
  );
};

export default Register;