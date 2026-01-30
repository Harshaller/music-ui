import release1Img from "../assets/images/release1.png"; // placeholder image
import release2Img from "../assets/images/release2.png"; // placeholder image
import release3Img from "../assets/images/release3.png"; // placeholder image
import release4Img from "../assets/images/release4.png"; // placeholder image

const releases = [
  { title: "Handmade Life", year: "2024", type: "Album", image: release1Img },
  { title: "Land Of Difference", year: "2020", type: "Single", image: release2Img },
  { title: "Echoes of Tomorrow", year: "2022", type: "EP", image: release3Img },
  { title: "Silent Skies", year: "2021", type: "Album", image: release4Img },
];

export default function PopularReleases() {
  return (
    <section>
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
        Popular Releases
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {releases.map((release, idx) => (
          <div
            key={idx}
            className="bg-[#181818] p-4 rounded-md hover:bg-[#202020] transition"
          >
            {/* Image */}
            <img
              src={release.image}
              alt={release.title}
              className="w-full h-40 md:h-32 object-cover rounded-md mb-3"
            />
            {/* Title */}
            <p className="font-bold text-sm md:text-base text-center md:text-left">
              {release.title}
            </p>
            {/* Meta */}
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              {release.year} • {release.type}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
