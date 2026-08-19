import { useEffect, useState } from "react";

/**
 * Fetches a JSON file from the /public/data folder at runtime.
 * Because it's a real fetch (not a bundled import), editing the
 * JSON file under public/data/ updates the site without touching
 * or rebuilding any React code.
 *
 * @param {string} path - path relative to /public, e.g. "/data/projects.json"
 * @returns {{ data: any, loading: boolean, error: string|null }}
 */
export default function useJsonData(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(null);

    fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load ${path} (${res.status})`);
        }
        return res.json();
      })
      .then((json) => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [path]);

  return { data, loading, error };
}
