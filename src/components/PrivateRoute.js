const PrivateRoute = ({ children }) => {
    // Corrigir o acesso ao estado no Redux
    const isAuthenticated = useSelector((state) => state.usuario.isAuthenticated) || !!localStorage.getItem('token');
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
  