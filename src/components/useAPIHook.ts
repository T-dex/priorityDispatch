
// src/useFetch.ts
import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T[] | null;
  error?: string | null;
  loading: boolean;
}

const useAPIHook = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: T = await response.json();
        setData(result);
      } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, setData, error, loading };
};

export default useAPIHook;
