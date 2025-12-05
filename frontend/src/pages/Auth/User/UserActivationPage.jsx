import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const UserActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      setError(false);
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${BACKEND_BASE_URL}/users/activate`, {
            activation_token,
          });

          toast.success(res.data.message);
        } catch (error) {
          setError(true);
          toast.error(error.response?.data.message);
        }
      };

      activationEmail();
    }
  }, [activation_token]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {error ? (
        <p>Your Token Is Expired</p>
      ) : (
        <p>Your Account is Activated SuccessFully!</p>
      )}
    </div>
  );
};

export default UserActivationPage;
