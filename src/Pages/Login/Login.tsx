import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const loginHandler = () => {
    navigate('/')
  }
  return (
    <div className="mt-[45px] lg:border-1 lg:w-[550px] mx-auto lg:rounded-lg lg:border-gray-300 lg:flex lg:flex-col lg:items-center">
      <h1 className="text-[36px] text-center font-bold text-[#FF5C8D] mb-5">Glow Cart</h1>
      <div className="p-4">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">Login | Sign Up</h3>
          <p className="text-gray-500">Welcom !</p>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Please Enter your Phone Number
            </label>
            <input
              type="number"
              id="number"
              className="w-full px-4 py-3 border border-gray-300   rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Enter your Phone number"
            />
          </div>
          <button onClick={loginHandler} className="bg-[#FF5C8D] cursor-pointer text-white p-3 w-full rounded-lg mt-9 shadow-sm transition-transform duration-300 hover:scale-103">Login</button>


          <p className="text-[10px] text-gray-600 text-center lg:text-[15px]">
            By signing in, you agree to our
            <a href="/terms" className="underline hover:no-underline px-1">Terms &amp; Conditions</a>
            and
            <a href="/privacy" className="underline hover:no-underline px-1">Privacy Policy</a>.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login
