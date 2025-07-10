import Image from 'next/image';
import Link from 'next/link';

const Description = () => {
  return (
    <section className="bg-[#58742c] text-white px-1 sm:px-2 md:px-4 lg:px-10 lg:pl-22 xl:px-14  py-12 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Arabic Logos */}
        <div className="flex flex-col items-center md:items-start  gap-6">

          <Image
            src="/logo2.png" // ⬅️ Replace with your actual image
            alt="Hanfia Logo"
            width={150}
            height={150}
          />
        </div>

        {/* English Content */}
        <div className="w-[90%] text-lg space-y-6">
          <p>
            <strong>Hanfia Alamgir</strong> is a socio-religious organization rooted in the vision of <strong>Ilm Dosti</strong>, <strong>Qalam Dosti</strong>, <strong>Kitab Dosti</strong>, and <strong>Insaan Dosti</strong>. Since its inception in 1956, it has been a recognized <strong>Center of Ahle Sunnat wa Jama'at</strong> serving the community in multiple domains.
          </p>

          <p>
            Under the banner of Hanfia Alamgir, several institutions operate including <em>Alamgir School</em>, <em>Jamia Saleem</em>, <em>Madrasa Hanfia</em>, <em>Rizwia</em>, and the <em>Hanfia Alamgir Masjid</em>. The organization also manages a <strong>Cold Storage Facility for the Deceased</strong>, providing essential community support in times of need.
          </p>

          <p>
            Hanfia Alamgir continues to expand its services and is now actively striving to launch a fully equipped <strong className="text-white">Ambulance Service</strong> to further support the welfare of the people.
          </p>


          <Link href={"/"} className="inline-block mt-2 font-semibold text-white hover:underline">
            Read More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Description