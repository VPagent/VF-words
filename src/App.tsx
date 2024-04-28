import ClientRoutes from "./ClientRoutes";
import { FC } from "react";
import { ToastContainer } from "react-toastify";

const App: FC = () => {
  return (
    <>
      <ClientRoutes />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
