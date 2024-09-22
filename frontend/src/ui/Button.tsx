export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-[#1D9BF0] hover:bg-opacity-90 transition-all h-full w-full rounded-full text-white tracking-wide font-semibold ">
      {children}
    </button>
  );
}
