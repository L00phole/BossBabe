import Image from "next/image";
import profilePic from "../public/Jennie.jpg";
import profileMicho from "../public/Micho.jpeg";
import profileUs from "../public/us.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5  mt-[130px] md:mb-[80px] md:mt-30">
        <div className="grid place-content-start  justify-center">
          <div className="relative h-96 w-75 md:h-96 md:w-96  rounded-lg overflow-hidden md:hover:opacity-75   ">
            <Image src={profileMicho} layout="fill" objectFit="cover" />
          </div>

          <div className="flex max-w-xl mb-20 md:mb-0 ">
            <a>
              <span className="text-3xl font-bold ">Michele </span>
              <span className="text-3xl font-bold text-yellow-400">
                Törnqvist
              </span>
              <br />
              <p className="pt-2 max-w-sm ">
                Jag själv som person är väldigt positiv, framåt och driven.
                Brinner för att lära mig och gillar även att ta mig an
                utmaningar, speciellt om jag aldrig gjort det förr då det också
                är viktigt för mig med personlig utveckling. Jag har alltid
                varit nyfiken på programmering, redan som liten satt jag bredvid
                min äldre kusin och tittade på när han programmerade och tyckte
                att det var så spännande trots att jag inte fattade nånting. Det
                dröjde dock många år innan jag vågade ta steget in i den
                mansdominerade utbildningen.
              </p>
            </a>
          </div>
        </div>
        <div className="grid place-content-start justify-center">
          <div className="relative h-96 w-75 md:h-96 md:w-96 rounded-lg overflow-hidden md:hover:opacity-75  ">
            <Image src={profilePic} layout="fill" objectFit="cover" />
          </div>
          <div className=" max-w-xl mb-20 md:mb-0">
            <a>
              <span className="text-3xl font-bold ">Jennie </span>
              <span className="text-3xl font-bold text-yellow-400">
                Werther
              </span>
              <br />
              <p className="pt-2 max-w-sm">
                Jag är 28 årig smålänning som numera bor i Eslöv. Jag har sedan
                2013 mitt egna företag som bröllopsfotograf som jag bedriver vid
                sidan om och studerar nu till fullstack utvecklare med
                inriktning Java-Script på Teknikhögskolan i Lund. <br />
                Jag brinner för att ständigt utvecklas och har en förkärlek till
                teknik.
                <br />
                Under mina år har jag lärt mig att vara serviceinriktad och
                bemöta kunder på ett trevligt sätt.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="grid place-content-start justify-center mb-[60px] mx-5">
        <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[450px] rounded-lg overflow-hidden md:hover:opacity-75  ">
          <Image src={profileUs} layout="fill" objectFit="cover" />
        </div>
        <div>
          <span className=" text-2xl md:text-3xl font-bold ">Två </span>
          <span className="text-2xl md:text-3xl font-bold text-yellow-400">
            tösabitar..
          </span>
          <p className="grid grid-col-1  max-w-sm">
            som har nära till skratt och njuter av varje minut i livet. <br />
            Vi har byggt denna hemsida som ett projekt på vår LIA-1, som vi har
            på Capace Media Gruop AB i Malmö. Hemsidan är uppbyggt i nextjs och
            tailwind blablabla fortsätt här...
          </p>
        </div>
      </div>
    </>
  );
}
