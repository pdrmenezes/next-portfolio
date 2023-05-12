export default function ContactPage() {
  return (
    <div className="flex flex-col gap-2 h-full justify-center">
      <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">contact</h1>
      <div className="grid sm:grid-cols-1 sm:grid-rows-4  md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-10 gap-5">
        <div className="">
          <h2>EMAIL</h2>
          <p>pdrmenezes1@gmail.com</p>
        </div>
        <div className="col-span-2">
          <h2>GITHUB</h2>
          <p>/pdrmenezes</p>
        </div>
        <div className="">
          <h2>INSTAGRAM</h2>
          <p>@pdrmenezes</p>
        </div>
        <div className="col-span-2">
          <h2>_</h2>
          <p>your turn (:</p>
        </div>
      </div>
    </div>
  );
}
