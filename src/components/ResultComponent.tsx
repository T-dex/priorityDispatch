
interface Data{
  length: number;
  data:Array<string>
  }
interface ResultComponentProps {
  data: Data[];
  error: string | null;
  loading: boolean;
}

const ResultComponent = <T extends string | undefined,>({ data, error, loading }: ResultComponentProps) => {
  if (loading) return <p className="flex justify-center items-center max-h-full">Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No data available</p>;

  const giphyData = Object.keys(data).map(keys => data[keys])
  return (
    <div className="inline-flex overflow-y-scroll justify-center max-h-full w-full">

    <ul className="inline-flex flex-col wrap items-center gap-6">
      {giphyData[0].map((item: { alt_text:T, url: T; images:string }, index: Key | null | undefined) => (
        <li className="inline-block mr-50" key={index}><video className='w-50 aspect-square rounded-2xl ' src={item.images.looping.mp4}></video></li>
      ))}
    </ul>
  </div>
  );
};

export default ResultComponent;