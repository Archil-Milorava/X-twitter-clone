function PoseterInfo() {
  return (
    <div className="w-full flex gap-2 mb-2 cursor-pointer text-opacity-75">
      <div>
        <img
          src="https://avatar.iran.liara.run/public/boy"
          alt="boy"
          className="h-10"
        />
      </div>
      <section>
        <div className="flex gap-1 items-center">
          <a className="text-[#E7E9EA] font-bold tracking-wide">
          Mercedes-AMG PETRONAS F1
          </a>
          <p className="text-[#71767B] text-sm">@achimilorava</p>
        </div>
        <div className="text-sm max-w-[32rem] text-white">
        A tough evening under the lights here in Singapore
        </div>
      </section>
    </div>
  );
}

export default PoseterInfo;
