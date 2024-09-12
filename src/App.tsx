import { useState } from 'react'
import SearchComponent from './components/SearchComponent';
import ResultComponent from './components/ResultComponent';
import useAPIHook from './components/useAPIHook';


interface Item {
  id: number;
  name: string;
  url: string;
  alt_text: string;
}
function App() {
  const [url, setUrl] = useState<string>('');
  const { data, error, loading } = useAPIHook<Record<string, any>>(url);
 

  return (
    <div className="w-screen inset-0 -z-10 h-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] items-center">
    <SearchComponent className="self-start" onSubmit={setUrl} /> 
    <ResultComponent data={data} error={error} loading={loading}  />
  </div>
  )
}

export default App
