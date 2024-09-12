
export const ItemComponent = ({ data }) => {

  
  return (
    <div className="inline-flex overflow-y-scroll justify-center max-h-full w-full">

    <ul className="inline-flex flex-col wrap items-center gap-6">
      {data.map((item: { alt_text:T, url: T; images:string }, index: Key | null | undefined) => (
        <li className="inline-block mr-50" key={index}><video autoPlay className='w-50 aspect-square rounded-2xl ' src={item.images.looping.mp4}></video></li>
      ))}
    </ul>
  </div>
  );
};

export default ItemComponent;