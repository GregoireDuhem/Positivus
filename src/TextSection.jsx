export default function TextSection({ title, text }) {
  return (
    <div
      className="px-5 md:px-[100px] mt-[60px] md:mt-[140px] space-y-[30px] md:space-y-0 md:space-x-10 flex flex-col md:flex-row 
    justify-center md:justify-start items-center text-center md:text-start"
    >
      <div className="text-h2-mobile font-medium text-Black font-space">
        {Array.isArray(title) ? (
          title.map((line, index) => (
            <div className="bg-Green rounded-[7px] px-2 inline-block" key={index}>
              {line}
            </div>
          ))
        ) : (
          <span className="bg-Green rounded-[7px] px-2 md:text-h2">{title}</span>
        )}
      </div>
      <div className="text-p-mobile text-Black font-space md:text-p md:w-1/2">{text}</div>
    </div>
  );
}
