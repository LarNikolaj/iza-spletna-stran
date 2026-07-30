import Image from 'next/image';

export const metadata = {
  title: "About — Iza",
};

const sections = [
  {
    number: "01",
    title: "Education",
    entries: [
      { year: "2022–24", items: ["MFA in Fine Arts, HDK-Valand — Academy of Art and Design, Gothenburg, SE"] },
      { year: "2021–22", items: ["Bridging Programme in Photography, LUCA School of Arts, Brussels, BE"] },
      { year: "2016–22", items: ["BA in Photography, Faculty of Applied Sciences — VIST, Ljubljana, SI"] },
      { year: "2012–16", items: ["Art Grammar School, Secondary School of Design and Photography, Ljubljana, SI"] },
    ],
  },
  {
    number: "02",
    title: "Additional Education",
    entries: [
      { year: "2024–25", items: ["Art and Politics — On Friendship and the Political Imaginary, HDK-Valand, Gothenburg, SE"] },
      { year: "2024", items: ["Exploring Large-Format Photography and Sustainability, VII Academy, UNESCO, IOM, Sarajevo, BA"] },
      { year: "2020–22", items: ["Akademski oreščki, Fotopub, ULAY Foundation, Ljubljana, SI"] },
      { year: "2021", items: ["Work, Curator, Work, ŠKUC, Ljubljana, SI", "Photon School, Galerija Photon, Ljubljana, SI"] },
      { year: "2019–20", items: ["The Sarajevo Seminar for Narrative and Documentary Practice, VII Academy, Sarajevo, BA"] },
      { year: "2019", items: ["Vision Beyond, VII Academy, Zagreb, HR", "No Man's Land, VII Academy, Sarajevo, BA"] },
    ],
  },
  {
    number: "03",
    title: "Solo Exhibitions",
    entries: [
      { year: "2023", items: ["I Am Looking for Friends, Street Gallery, HDK Valand, Gothenburg, SE"] },
      { year: "2022", items: ["When I Grow Up, I'll Be an Artist, DLUL, Ljubljana, SI", "Looking for Friends, Galerija Siva, Zagreb, HR"] },
    ],
  },
  {
    number: "04",
    title: "Selected Group Exhibitions",
    entries: [
      {
        year: "2025",
        items: [
          "Fields of Intimacy, Transitions and Potentials of the Medium, 6th Triennial of Young Artists — PREMIERE 2025, Gallery of Contemporary Art, Celje, SI",
          "Book Table, Sarajevo Photography Festival, Sarajevo, BA",
          "Festival Nastevřeno, Plzeň, CZ",
        ],
      },
      {
        year: "2024",
        items: [
          "Vabljeni mladi, Galerija Media Nox, Maribor, SI",
          "Speculative Gatherings, HDK Valand, Göteborgs Konsthall, Slakthuset, Gothenburg, SE",
          "Pod površjem, KAOS, Mestna hiša, Kranj, SI",
          "Speculative Gatherings, Katrinahissen, Stockholm, SE",
        ],
      },
      {
        year: "2023",
        items: [
          "Wild Swans, Galerija Photon, Vienna, AT",
          "Wild Swans, Galerija Photon, Ljubljana, SI",
          "My Friends Are Artists & My Artists Are Friends, Rosengarten Kulturpavillon, Berlin, DE",
          "Fotobok Gbg, GIBCA Extended, Formcenter Väst, Gothenburg, SE",
          "Ja visst gör det ont när knoppar brister, GIBCA Extended, Monitor Gallery, Gothenburg, SE",
          "Thin Lines of Uneasiness, Rotor 2 Gallery, HDK Valand, Gothenburg, SE",
          "Prvenci svetlobe, ZDSLU, Ljubljana, SI",
          "19th kLAK Photography Competition, Muzej Laško, Laško, SI",
          "Artist Book, Gothenburg Museum of Art, Gothenburg, SE",
          "Potentialities, Monitor Gallery, HDK Valand, Gothenburg, SE",
          "Vabljeni mladi 2023, Galerija Media Nox, Maribor, SI",
          "A Zine Is a Zine Is a Zine, Take10 Press, Box Gallery, Gothenburg, SE",
        ],
      },
      {
        year: "2022",
        items: [
          "Different Worlds, Galerija Photon, Ljubljana, SI",
          "Made in Slovenia, Cukrarna, Ljubljana, SI",
          "Topljenje, Reciklart, Galerija Alkatraz, Ljubljana, SI",
          "Tip of the Tongue, LUCA School of Arts, Brussels, BE",
        ],
      },
      {
        year: "2021",
        items: [
          "Akademski oreščki #1: Leave Group?, Fotopub, ULAY Foundation, Ljubljana, SI",
          "Fin-de-siècle #IV, Layerjeva hiša, Kranj, SI",
          "Fotonične edicije, Galerija Photon, Ljubljana, SI",
          "Les Balkannes, ParisContempl'Art, Velvet Moon at Paris Anim' les Halles, Paris, FR",
          "Helmut, TAM-TAM Street Gallery, Ljubljana, SI",
        ],
      },
      {
        year: "2020",
        items: [
          "De Festival En Festival, Festival Panoràmic, Cinema Edison, Granollers, ES",
          "16th kLAK Photography Competition, Muzej Laško, Laško, SI",
        ],
      },
      {
        year: "2019",
        items: [
          "Isto, Foto VIST, eMCe plac, Velenje, SI",
          "Festival of the Image, VII Agency, Kino Meeting Point, Sarajevo, BA",
        ],
      },
      { year: "2018", items: ["Seme — vir življenja, Young Village Folk, Atelje Mikado, Ljubljana, SI"] },
    ],
  },
  {
    number: "05",
    title: "Selected Competitions & Awards",
    entries: [
      { year: "2023", items: ["Finalist, Different Worlds, Galerija Photon, Ljubljana, SI", "1st Place, kLAK, Muzej Laško, Laško, SI"] },
      { year: "2021", items: ["1st Place, Les Balkannes, Paris, FR", "Finalist, Helmut Collective, Ljubljana, SI"] },
      { year: "2020", items: ["1st Place, kLAK, Laško, SI", "4th Place, New Talents 2020, Belgrade Photo Month, Belgrade, RS"] },
    ],
  },
  {
    number: "06",
    title: "Film Screenings",
    entries: [
      { year: "2024", items: ["Student Cuts, Ljutomer, SI"] },
      { year: "2023", items: ["Lift-Off Filmmaker Sessions, hosted by Lift-Off Global Network, Pinewood Studios, UK"] },
      { year: "2022", items: ["Drugi val, FeKK, Slovenska kinoteka, Ljubljana, SI"] },
      { year: "2021", items: ["Festival svobodne video produkcije, MC Kotlovnica Kamnik, Dom kulture, Kamnik, SI", "Video na plaži, Kino Otok, Izola, SI"] },
    ],
  },
  {
    number: "07",
    title: "Published Texts",
    entries: [
      { year: "2024", items: ["In Search of Understanding the Tension That Is Driving Me Crazy, HDK-Valand, GUPEA, Gothenburg, SE"] },
      { year: "2020", items: ["Roževina zgodovine, Mesto žensk, ŠKUC, Ljubljana, SI"] },
      { year: "2019", items: ["Magični svet kemije, National Geographic Junior, issue 160, Ljubljana, SI"] },
    ],
  },
  {
    number: "08",
    title: "Residencies",
    entries: [
      { year: "2022", items: ["Looking for Friends, Galerija Siva, Zagreb, HR", "Dobra Vaga Doma, Dobra Vaga, Ljubljana, SI"] },
    ],
  },
  {
    number: "09",
    title: "Artist Talk",
    entries: [{ year: "2020", items: ["Roževina zgodovine, Mesto žensk, ŠKUC, Ljubljana, SI"] }],
  },
  {
    number: "10",
    title: "Awards & Scholarships",
    entries: [
      { year: "2024", items: ["Tobison Foundation Stipend, Gothenburg, SE (work acquisition)"] },
      { year: "2023", items: ["Arnulfska stipendiefonden, Gothenburg, SE", "Stiftelsen Carl Olsons stipendiefond, Gothenburg, SE"] },
      { year: "2022–24", items: ["AD Futura Scholarship for Study Abroad, Public Scholarship, Development, Disability and Maintenance Fund of the Republic of Slovenia, Ljubljana, SI"] },
      { year: "2019–20", items: ["The Sarajevo Seminar for Narrative and Documentary Practice, VII Academy, Sarajevo, BA"] },
      { year: "2019", items: ["Vision Beyond, VII Academy, Zagreb, HR", "No Man's Land, VII Academy, Sarajevo, BA"] },
    ],
  },
  {
    number: "11",
    title: "Selected Media Coverage",
    entries: [
      {
        year: "2023",
        items: [
          "\"Wild Swans: Invisible Strong Women\" exhibition coverage — RTV SLO Culture",
          "Feature by Izabella Rajh — Koridor",
        ],
      },
      {
        year: "2022",
        items: [
          "\"When I Grow Up, I'll Be an Artist\" exhibition coverage — RTV SLO Culture",
          "Feature by Pia Prezelj — Delo",
          "Feature by Neža Vengust — Radio Študent",
          "Feature by Metod Zupan — Radio Študent",
        ],
      },
      {
        year: "2021",
        items: [
          "Feature by Marko Stanojević — Radio Študent",
          "Feature by Maša Žekš — Koridor",
          "Academia Nuts coverage — RTV SLO Culture",
          "Feature by Nadina Štefančič — RTV SLO",
        ],
      },
    ],
  },
  {
    number: "12",
    title: "Work Experience & Selected Clients",
    entries: [
      {
        year: "2025",
        items: [
          "2na32 Art Creation Institute — photographing exhibition installations and events",
          "University of Gothenburg, HDK-Valand Academy of Art and Design — portraiture",
          "Alpod d.o.o. — product photography, studio and on location",
        ],
      },
      {
        year: "2020",
        items: [
          "Marand d.o.o. — corporate portraiture",
          "University of Ljubljana, Academy of Fine Arts and Design & Mesto žensk (ŠIPK project) — artistic work and writing for the publication Roževina zgodovine",
          "Faculty of Applied Sciences (VIST), Cosmetics Dept. (PKP project) — promotional content and aestheticized photography of cosmetic procedures",
          "Rokus Klett Publishing — article for National Geographic Junior",
          "Assistant to Arne Hodalič — shoots for the Jožef Stefan Institute, National Geographic, and others",
          "Diabetes Education Institute — portrait of Sara Isaković for the national diabetes-awareness campaign \"Bodi odličnjak\"",
        ],
      },
      {
        year: "2018–",
        items: [
          "Nutrimertirium / Ajda Strnad s.p. — photographic identity for web and social media",
          "Rojal Invest d.o.o. — real estate photography",
        ],
      },
      {
        year: "2016–",
        items: [
          "Prima IP d.o.o. — product photography, event photography, photo book production",
          "Event photography, studio portraiture, equestrian competition photography, fashion photography",
        ],
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="w-full px-6 md:px-12 pt-12 md:pt-20 pb-24">
      <div className="grid grid-cols-12 gap-6 md:gap-12">
      {/* Left column: scrollable text */}
      <div className="col-span-12 md:col-span-7">
        <header className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-widest text-klein mb-4">
            CV
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
            b. 1997, Slovenia
          </p>
          <p className="font-mono text-xs text-ink/50 mt-1">
            iza.irk@gmail.com — +386 31 233 841
          </p>
        </header>

        <p className="font-mono text-base md:text-lg leading-relaxed text-ink/80 max-w-2xl">
          Iza Štrumbelj Oblak (b. 1997, Slovenia) graduated in photography,
          though her practice has since evolved toward performative and
          participatory work, which she pursued further through a degree in
          fine art. Her work draws on everyday needs and desires — her
          projects serve as tools for connecting with society, pursuing her
          own aspirations, and confronting her fears. By bringing art into
          public space, Iza aims to encourage people to question their way of
          life and expand the boundaries of what feels possible, acceptable,
          and comfortable.
        </p>

        {sections.map((section) => (
          <section key={section.number} className="mt-16">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
              <span className="text-klein">{section.number}</span> —{" "}
              {section.title}
            </p>
            <div className="space-y-3">
              {section.entries.map((entry, i) => (
                <div key={i} className="flex gap-4 font-mono text-sm leading-relaxed text-ink/80">
                  <span className="text-ink/50 shrink-0 w-20">{entry.year}</span>
                  <div className="space-y-1">
                    {entry.items.map((item, j) => (
                      <p key={j}>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Right column: sticky static image */}
      <div className="col-span-12 md:col-span-5">
        <div className="md:sticky md:top-60">
          <div
            className="relative overflow-hidden bg-cream-dark"
            style={{ height: 'calc(100vh - 15rem - 3rem)' }}
          >
           <Image
  src="/images/portrait.png"
  alt="Iza Štrumbelj Oblak"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 40vw"
  priority
  unoptimized
/>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}