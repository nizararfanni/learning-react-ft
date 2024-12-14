import React, { useEffect, useState } from "react";
import { getUsername } from "../service/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // tangkap email dr local storage
    const token = localStorage.getItem("token");
    if (token) {
      // ambil username dr token
      setUsername(getUsername(token));
    } else {
      //kalo token gada tetap di login
      window.location.href = "/login";
    }
  }, []);
  return username;
};
