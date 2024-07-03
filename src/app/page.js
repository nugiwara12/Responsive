import Image from "next/image";

export default function Home() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left px-4 my-4">
      <div>
        <Image
          src="/home.png"
          width={500}
          height={500}
          alt="sisig"
          className="w-full rounded-lg"
        />
      </div>
      <div className="">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Monkey D. Luffy
        </h1>
        <p className="flex justify-center items-center text-sm px-4">
          LooremLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus interdum erat libero, nec vehicula sapien volutpat et.
          Curabitur id venenatis orci. In hac habitasse platea dictumst. Donec
          at ex non erat aliquet finibus nec non sapien. Nulla facilisi. Integer
          volutpat vehicula augue, non feugiat lorem vehicula et. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Sed sit amet arcu vitae erat faucibus suscipit in in
          dui. Mauris ultricies metus non magna cursus, ut malesuada ligula
          aliquet. Aenean vitae felis purus. Praesent euismod ligula sit amet
          nunc luctus venenatis. Quisque ultricies massa sed lacus sodales, nec
          fermentum lectus sodales. Integer tristique bibendum libero, vel
          vehicula turpis fermentum eu. Aliquam erat volutpat. Praesent ac dolor
          eget est lacinia ultricies at non ligula. Nam ut leo nec ipsum gravida
          vulputate.
        </p>
      </div>
    </section>
  );
}
