import React, { useEffect, useState } from "react";
import Infringements from "../components/infringements";
import { useRouter } from "next/router";

const Home = () => {
  const [infringements, setInfringements] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchInfringements = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch("/api/infringements", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInfringements(data);
      } else {
        router.push("/login");
      }
    };

    fetchInfringements();
  }, [router]);

  return (
    <Infringements infringements={infringements} />
  );
};

export default Home;
