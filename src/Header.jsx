export default function Header() {
  return (
    <div className="pt-[30px] flex px-5 items-center justify-between">
      <div className="flex items-center">
        <img className="h-[23px] mr-2" src="Icon.png" alt="Icon" />
        <img className="h-[19px]" src="Positivus.png" alt="Positivus" />
      </div>
      <div className="md:hidden">hamburger</div>

      {/* For desktop, show full navigation */}
      <div className="hidden md:flex gap-10">
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button>Request a quote</button>
      </div>
    </div>
  );
}
