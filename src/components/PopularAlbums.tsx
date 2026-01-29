import album1Img from "../assets/images/album1.png"; // placeholder
import album2Img from "../assets/images/album2.png"; // placeholder
import album3Img from "../assets/images/album3.png"; // placeholder
import album4Img from "../assets/images/album4.png"; // placeholder

const releases = [
  { title: "Handmade Life", year: "2024", type: "Album", image: album1Img },
  { title: "Land Of Difference", year: "2020", type: "Single", image: album2Img },
  { title: "Echoes of Tomorrow", year: "2022", type: "EP", image: album3Img },
  { title: "Silent Skies", year: "2021", type: "Album", image: album4Img },
];

export default function PopularAlbums() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Popular Albums</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {releases.map((release, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-[#181818] p-3 rounded-md hover:bg-[#202020] transition"
          >
            {/* Small album image on left */}
            <img
              src={release.image}
              alt={release.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            {/* Text on right */}
            <div>
              <p className="font-bold text-sm">{release.title}</p>
              <p className="text-xs text-gray-400">
                {release.year} • {release.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
