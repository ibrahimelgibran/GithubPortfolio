import { useState, useEffect } from "react";

export const useRepoFetch = (repoId, keyword) => {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);

  const token = `${process.env.REACT_APP_API_TOKEN}`;
  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setLoading(true);
        await fetch(`https://api.github.com/repos/ibrahimelgibran/${repoId}`, {
          auth: token,
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setRepo(data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchRepo();
  }, [repoId, token]);

  return { repo, loading };
};
