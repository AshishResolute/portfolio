export const Hero = ({ userName }) => {
  return (
    // use flex-1 so that this div take the remaining space after nav as min-h-screen added a scroll bar
    <div className=" flex flex-col flex-1  md:flex-row   text-[#6b6b68] p-4 overflow-y-auto">
      <div className="space-y-3">
        <h2>Hey,I'm {userName}</h2>
        <h1 className="text-[#d85a30] text-xl">
          <span className="text-xl text-[#185fa5]">Backend </span>Developer
        </h1>
        <p>
          I build reliable APIs and backend systems — from auth flows to rate
          limiting — for products people actually use.
        </p>
        <button className="rounded border px-3 py-2 mr-1  text-black hover:bg-black hover:text-white transition-colors duration-300">Touch me</button>
        <button className="rounded border px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition-colors duration-300">View Projects</button>
      </div>
      <div>Code Pallet</div>
    </div>
  );
};
