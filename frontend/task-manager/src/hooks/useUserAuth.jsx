import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export const useUserAuth = () => {
  const { user, loading, clearUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return;

    if (!user) {
      clearUser();
      navigate("/");
    }
  }, [user, loading, clearUser, navigate]);
};
