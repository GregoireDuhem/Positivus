export default function TextSection({ title, text }) {
  return (
    <div className="px-5 mt-[60px] space-y-[30px] flex flex-col justify-center items-center text-center">
      <div className="text-h2-mobile font-medium text-Black font-space">
        {Array.isArray(title) ? (
          title.map((line, index) => (
            <div className="bg-Green rounded-[7px] px-2 inline-block" key={index}>
              {line}
            </div>
          ))
        ) : (
          <span className="bg-Green rounded-[7px] px-2">{title}</span>
        )}
      </div>
      <div className="text-p-mobile text-Black font-space">{text}</div>
    </div>
  );
}
