import { useState, useEffect } from "react";

const token = `${process.env.REACT_APP_API_TOKEN}`;
//const cors = 'https://cors-anywhere.herokuapp.com'
//console.log(token)
export const useProfileFetch = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        await fetch(`https://api.github.com/users/ibrahimelgibran`, {
          auth: token,
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setUser(data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  return { user, loading };
};
