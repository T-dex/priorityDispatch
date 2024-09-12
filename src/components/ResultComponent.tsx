import { Key } from "react";
import ItemComponent from "./ItemComponent";

interface Data{
  length: string[] ;
  data: Array<object>;
  
}
  
interface ResultComponentProps {
  data: Array<Data> | null;
  error: string | null | undefined;
  loading: boolean;
}

const ResultComponent = ({ data, error, loading }: ResultComponentProps) => {
  console.log(data)

  if (loading) return <p className="flex justify-center items-center h-screen">Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data?.data.length === 0) return <p className="flex justify-center items-center h-screen">No data available</p>;

  const giphyData:Array<Data> | number = (Object.keys(data)as Array<keyof typeof data>).map(keys => data[keys])
  return (
    <ItemComponent data={giphyData[0]}/>
  );
};

export default ResultComponent;