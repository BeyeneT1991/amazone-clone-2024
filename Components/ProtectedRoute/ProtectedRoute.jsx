// import { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { DataContext } from '../DataProvider/DataProvider';

// const ProtectedRoute = ({children, msg, redirect}) => {
//     const navigate = useNavigate();
//     const [{user}, dispatch] = useContext(DataContext)

//     useEffect(() => {
        
//         if (!user) {
//             navigate("/auth", {state:(msg, redirect)})
//         }
//     },[user])

//     return (
//         <div>ProtectedRoute</div>
//     )
    
// }

// //payment---> /auth

// export default ProtectedRoute;




import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect = "/auth" }) => {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext); // Removed 'dispatch' since it's not used

  useEffect(() => {
    if (!user) {
      navigate(redirect, { state: { msg } }); // Fixed navigate state syntax
    }
  }, [user, navigate, redirect, msg]); // Added all dependencies to the dependency array

  // Render children if the user is authenticated
  return user ? children : null;
};

export default ProtectedRoute;


