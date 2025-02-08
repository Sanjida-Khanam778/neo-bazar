import { useAuth0 } from "@auth0/auth0-react";
import { CgSpinnerAlt } from "react-icons/cg";

const Login = () => {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading  } = useAuth0();
  console.log(user);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h2 className="text-3xl font-bold text-[#00C982]">Welcome Back</h2>
        <p className="text-gray-400 mt-2">Login to continue</p>

        {isAuthenticated ? ( 
          <button onClick={() => logout()}>{isLoading ? <CgSpinnerAlt className="animate-spin m-auto" />:'LOGOUT'}</button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="mt-6 w-full bg-[#00C982] text-white py-3 rounded-md font-semibold hover:bg-[#00a06e] transition"
          >
            Login with Auth0
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
