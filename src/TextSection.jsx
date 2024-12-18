export default function TextSection({ title, text }) {
  return (
    <div
      className="px-5 md:px-[100px] mt-[60px] md:mt-[140px] space-y-[30px] md:space-y-0 md:space-x-10 flex flex-col md:flex-row 
    justify-center md:justify-start items-center text-center md:text-start"
    >
      <div className="text-h2-mobile font-medium text-Black font-space ">
        {Array.isArray(title) ? (
          title.map((line, index) => (
            <div className="bg-Green rounded-[7px] px-2 inline-block md:hidden" key={index}>
              {line}
            </div>
          ))
        ) : (
          <span className="bg-Green rounded-[7px] px-2 md:hidden">{title}</span>
        )}
        <div className="text-h2 bg-Green rounded-[7px] hidden md:block font-medium text-Black font-space md:text-h2 px-2">
          {Array.isArray(title) ? title.join(" ") : title}
        </div>
      </div>
      <div className="text-p-mobile text-Black font-space md:text-p md:w-[40%]">{text}</div>
    </div>
  );
}
