import { createFileRoute } from "@tanstack/react-router";
import heroSandwich from "@/assets/chris-sandwich.jpg";
import bestOfTexas from "@/assets/best-of-texas.png";
import muffulettaImg from "@/assets/muffuletta.jpg";
import reubenImg from "@/assets/reuben.jpg";
import gyroImg from "@/assets/gyro.jpg";
import shrimpImg from "@/assets/shrimp.jpg";
import falafelImg from "@/assets/falafel-wrap.jpg";
import greekSaladImg from "@/assets/greek-salad.jpg";
import cateringTrayImg from "@/assets/catering-tray.jpg";
import drinksImg from "@/assets/drinks.jpg";
import chocolateCakeImg from "@/assets/chocolate-cake.png";
import pimentoImg from "@/assets/pimento.jpg";
import ibcGlassImg from "@/assets/ibc-glass.jpg";
import godAndManImg from "@/assets/god-and-man.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anthonie's Deli — An Icon Reborn | Houston, TX" },
      {
        name: "description",
        content:
          "Houston's beloved deli reborn. Hand-sliced meats, house-made chow chow, organic ingredients. Sandwiches, gyros, shawarma & catering on Cypress Creek Pkwy.",
      },
      { property: "og:title", content: "Anthonie's Deli — An Icon Reborn" },
      {
        property: "og:description",
        content:
          "Houston's Best Silver Winner 2025. Classic deli sandwiches, muffuletta, gyros, shawarma & catering trays.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Anthonie's Deli",
          image: "/og-image.jpg",
          telephone: "+1-281-580-2444",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4444 Cypress Creek Pkwy #35",
            addressLocality: "Houston",
            addressRegion: "TX",
            postalCode: "77068",
            addressCountry: "US",
          },
          servesCuisine: ["Deli", "Sandwiches", "Mediterranean"],
          priceRange: "$$",
          openingHours: ["Mo-Sa 10:00-20:00", "Su 10:00-18:00"],
        }),
      },
    ],
  }),
  component: HomePage,
});

type MenuItem = { name: string; price: string; desc: string; tag?: string; img?: string };

const sandwiches: MenuItem[] = [
  { name: "Regular", price: "$7.99", desc: "Ham, Salami, Provolone, Mayo, Chow Chow, Dill Pickles" },
  { name: "Super", price: "$8.99", desc: "Extra Meat: Ham, Salami, Provolone, Mayo, Chow Chow, Dill Pickles" },
  { name: "Philly Cheese", price: "$10.99", desc: "Organic Roast Beef, Provolone, Mushrooms, Bell Pepper, Onions, Mayo" },
  { name: "Meatball", price: "$10.99", desc: "Organic Grassfed Beef Meatballs, Provolone, Parmesan, Garlic Butter, Marinara" },
  { name: "The Club", price: "$10.99", desc: "Ham, Turkey, Bacon, Swiss, Home Made Mayo, Spicy Mustard, Dill Pickles" },
  { name: "Greek Gyros", price: "$10.99", desc: "Beef or Chicken, Organic Tomatoes, Onions, Tzatziki on Pita", img: gyroImg },
  { name: "Roast Beef", price: "$9.99", desc: "Provolone, Mayo, Chow Chow, Dill Pickles" },
  { name: "Pastrami", price: "$9.99", desc: "Provolone, Mayo, Chow Chow, Pickles" },
  { name: "Reuben", price: "$10.99", desc: "Corned Beef or Pastrami, Swiss, Organic Sauerkraut, Thousand Island or Mustard", img: reubenImg },
  { name: "Corned Beef", price: "$9.99", desc: "Swiss, Mayo, Chow Chow, Dill Pickles" },
  { name: "Prosciutto", price: "$10.99", desc: "Aged Italian Ham, Provolone, Mayo, Chow Chow, Dill Pickles" },
  { name: "Chicken Salad", price: "$8.99", desc: "House Made (Antibiotic/Hormone Free), Provolone, Mayo, Dill Pickles" },
  { name: "Turkey", price: "$8.99", desc: "Antibiotic/Hormone Free Oven Roasted, Smoked Gouda, Home Made Mayo, Sweet Pickles" },
  { name: "Tuna", price: "$8.99", desc: "House Made Tuna Salad, Provolone, Mayo, Pickles" },
  { name: "Smoked Turkey", price: "$8.99", desc: "Antibiotic/Hormone Free, Smoked Gouda, Home Made Mayo, Sweet Pickles" },
  { name: "New Orleans Muffuletta", price: "½ $10.99 / Whole $17.99", desc: "Ham, Salami, Mortadella, Provolone, House Olive Oil Salad", tag: "Classic", img: muffulettaImg },
  { name: "BBQ Brisket Sandwich", price: "Market", desc: "Slow-smoked Black Angus Beef", tag: "New" },
  { name: "Mortadella", price: "$8.99", desc: "Bologna, Provolone, Mayo, Chow Chow, Pickles" },
  { name: "Piggy", price: "$8.99", desc: "House Made Ham Salad, Cheese, Mayo, Arabic Pickles, Pepper" },
  { name: "Chicken Shawarma", price: "$10.99", desc: "Organic Antibiotic/Hormone Free Chicken, Garlic Sauce, Arabic Pickles & Tomato" },
  { name: "Fried Fish", price: "$10.99", desc: "Catfish Beer Batter, Mayo, Garlic Sauce, Pickles, Lettuce & Tomato" },
  { name: "Fried Shrimp", price: "$10.99", desc: "Mayo, House Garlic Sauce, Dill Pickles, Lettuce & Tomato", img: shrimpImg },
  { name: "Falafel Wrap", price: "$9.99", desc: "House Made Falafel, Tahini Sauce, Onions, Tomato, Arabic Pickles", img: falafelImg },
  { name: "Nature (Vegetarian)", price: "$9.99", desc: "Tabouli Salad, Feta Cheese, Lettuce, Red Onion, Olive Oil" },
];

const salads: MenuItem[] = [
  { name: "Chef Salad", price: "$11.99", desc: "Add Chicken or Beef Gyro +$3.99" },
  { name: "Tuna Salad", price: "$11.99", desc: "Add Chicken or Beef Gyro +$3.99" },
  { name: "Chicken Salad", price: "$11.99", desc: "Add Chicken or Beef Gyro +$3.99" },
  { name: "Greek Salad", price: "$11.99", desc: "Add Chicken or Beef Gyro +$3.99" },
];

const sides = [
  ["Potato Salad", "$2.25"],
  ["Tabouli Salad", "$2.25"],
  ["Pasta Salad", "$2.25"],
  ["Green/Black Olives", "$1.50"],
  ["Stuffed Grape Leaves", "$1.99"],
  ["Jalapeños", "$1.50"],
  ["Pepperoncini", "$1.50"],
  ["Pimento Cheese Jalapeño", "$2.50"],
  ["Whole Hot Dill Pickle", "$2.00"],
  ["Whole Dill Pickle", "$2.00"],
];


const poBoyTrays = [
  ["Small", "40 pcs / ~10 people", "$90.00"],
  ["Medium", "60 pcs / ~15 people", "$129.99"],
  ["Large", "80 pcs / ~20 people", "$169.99"],
  ["Extra Large", "100 pcs / ~30 people", "$215.99"],
];

const cateringTrays = [
  ["Walnut Baklava Tray (24 pieces)", "$55.00"],
  ["Pistachio Baklava Tray (24 pieces)", "$65.00"],
  ["Veggie Tray", "$55.00"],
  ["Fruit Tray", "$75.00"],
  ["Pasta Salad Tray 16\"", "$85.00"],
  ["Greek Salad Tray 16\"", "$65.00"],
];

const counterGallery = [
  { src: muffulettaImg, alt: "New Orleans muffuletta stacked high", caption: "The Muffuletta" },
  { src: reubenImg, alt: "Classic reuben on rye", caption: "Reuben On Rye" },
  { src: gyroImg, alt: "Beef gyro basket with fries", caption: "Gyro Basket" },
  { src: shrimpImg, alt: "Fried shrimp po-boy", caption: "Fried Shrimp" },
  { src: falafelImg, alt: "House made falafel wrap", caption: "Falafel Wrap" },
  { src: ibcGlassImg, alt: "IBC root beer in a frosty glass", caption: "Frosty IBC" },
  { src: chocolateCakeImg, alt: "Slice of chocolate cake", caption: "House Cake" },
  { src: pimentoImg, alt: "Pimento cheese stuffed peppers", caption: "Pimento Peppers" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body selection:bg-accent/20">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-deli-border px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-display text-3xl tracking-tight">
          Anthonie's <span className="text-accent">Deli</span>
        </a>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#menu" className="hover:text-accent transition-colors">The Menu</a>
          <a href="#gallery" className="hover:text-accent transition-colors">The Counter</a>
          <a href="#catering" className="hover:text-accent transition-colors">Catering</a>
          <a href="#contact" className="hover:text-accent transition-colors">Location</a>
        </div>
        <a
          href="tel:2815802444"
          className="bg-ink text-paper px-5 py-2 text-sm font-mono hover:bg-accent transition-colors uppercase"
        >
          Order Now
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className="relative px-6 py-20 md:py-28 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide">
            <div className="inline-block px-3 py-1 border border-pickle text-pickle font-mono text-[10px] uppercase tracking-widest mb-6">
              Cypress Creek Pkwy — Houston, TX
            </div>
            <h1 className="font-display text-7xl md:text-9xl leading-[0.85] uppercase mb-8">
              An Icon <br />
              <span className="text-accent">Reborn.</span>
            </h1>
            <p className="max-w-md text-lg text-ink/80 leading-relaxed mb-8 text-pretty">
              The neighborhood legend returns. Hand-sliced meats, house-made chow chow, and the same
              honest recipes that defined Houston deli culture for decades.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#menu"
                className="bg-accent text-white px-8 py-4 font-display text-2xl tracking-wide hover:shadow-xl transition-all active:scale-95"
              >
                See the Menu
              </a>
              <a
                href="tel:2815802444"
                className="font-serif italic text-2xl flex items-center gap-3 hover:text-accent transition-colors"
              >
                (281) 580-2444
                <span className="block w-12 h-px bg-ink/20" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide [animation-delay:200ms]">
            <img
              src={heroSandwich}
              alt="Anthonie's signature stacked deli sandwich"
              className="w-full aspect-square object-cover rounded-sm shadow-2xl rotate-2 ring-1 ring-black/5"
            />
            {/* Secondary stacked photo */}
            <img
              src={muffulettaImg}
              alt="New Orleans Muffuletta"
              className="hidden md:block absolute -bottom-10 -left-12 w-44 h-44 object-cover rounded-sm shadow-xl -rotate-6 ring-1 ring-black/5 border-4 border-paper"
            />
            {/* Best of Texas badge */}
            <img
              src={bestOfTexas}
              alt="Best of Texas Award"
              className="animate-stamp [animation-delay:800ms] absolute -top-6 -right-4 md:-right-10 w-32 md:w-44 drop-shadow-xl rotate-6"
            />
          </div>
        </div>
      </header>

      {/* Photo strip */}
      <section className="bg-ink py-3 overflow-hidden border-y-4 border-accent">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[gyroImg, reubenImg, shrimpImg, falafelImg, drinksImg, chocolateCakeImg, muffulettaImg, greekSaladImg, gyroImg, reubenImg, shrimpImg, falafelImg].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              className="h-28 md:h-36 w-auto object-cover rounded-sm shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-white border-b border-deli-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-6xl uppercase">
                The Sandwich <span className="text-accent">Board</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/60 mt-2">
                All sandwiches include French Fries or Chips & Can Drink
              </p>
            </div>
            <div className="text-right hidden md:block">
              <p className="font-mono text-xs uppercase text-ink/40 leading-relaxed">
                4444 Cypress Creek Pkwy #35
                <br />
                Houston, TX 77068
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {sandwiches.map((item) => (
              <div key={item.name} className="group relative flex gap-4">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-sm shrink-0 ring-1 ring-black/5 shadow-md group-hover:scale-105 transition-transform"
                  />
                )}
                <div className="flex-1 min-w-0">
                  {item.tag && (
                    <span className="inline-block mb-1 bg-accent text-white text-[9px] px-2 py-0.5 font-mono uppercase tracking-widest">
                      {item.tag}
                    </span>
                  )}
                  <div className="flex justify-between items-end gap-4 mb-1 border-b border-dotted border-ink/20 pb-1">
                    <h3 className="font-display text-2xl uppercase tracking-wide group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono font-medium whitespace-nowrap text-sm">{item.price}</span>
                  </div>
                  <p className="text-sm text-ink/60 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Salads + Sides */}
          <div className="grid md:grid-cols-2 gap-16 mt-24">
            <div>
              <h3 className="font-display text-4xl uppercase mb-6">
                Fresh <span className="text-accent">Salads</span>
              </h3>
              <img
                src={greekSaladImg}
                alt="Greek salad with feta, olives and tomato"
                className="w-full h-56 object-cover rounded-sm shadow-md mb-6 ring-1 ring-black/5"
              />
              <div className="space-y-5">
                {salads.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between items-end gap-4 border-b border-dotted border-ink/20 pb-1">
                      <h4 className="font-display text-xl uppercase tracking-wide">{s.name}</h4>
                      <span className="font-mono font-medium text-sm">{s.price}</span>
                    </div>
                    <p className="text-xs text-ink/55 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-4xl uppercase mb-6">
                The <span className="text-accent">Sides</span>
              </h3>
              <img
                src={pimentoImg}
                alt="Pimento cheese stuffed peppers"
                className="w-full h-56 object-cover rounded-sm shadow-md mb-6 ring-1 ring-black/5"
              />
              <div className="grid grid-cols-1 gap-2 font-mono text-sm">
                {sides.map(([name, price]) => (
                  <div key={name} className="flex justify-between border-b border-dotted border-ink/15 py-1.5">
                    <span>{name}</span>
                    <span className="text-ink/70">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Gallery */}
      <section id="gallery" className="bg-paper border-b border-deli-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-pickle mb-2">From The Counter</div>
            <h2 className="font-display text-6xl uppercase">
              A Slice <span className="text-accent">Of Life.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {counterGallery.map((g, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-sm shadow-lg ring-1 ring-black/5 group ${i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? "aspect-square" : "aspect-square"}`}
                />
                <figcaption className="absolute bottom-3 left-3 bg-ink/85 text-paper font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section id="catering" className="bg-white border-b border-deli-border px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="font-display text-5xl uppercase leading-tight mb-6">
                Catering
                <br />
                <span className="text-accent">For The Office</span>
              </h2>
              <img
                src={cateringTrayImg}
                alt="Anthonie's catering tray loaded with po-boy halves"
                className="w-full aspect-[4/3] object-cover rounded-sm shadow-xl mb-6 ring-1 ring-black/5 -rotate-1"
              />
              <p className="text-ink/60 mb-8">
                Our Po-Boy party trays are the standard for Houston lunch meetings, parties, and
                corporate events. Fresh, reliable, generously stacked.
              </p>
              <a
                href="tel:2815802444"
                className="inline-block w-full text-center py-4 border-2 border-ink font-mono uppercase text-xs tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
              >
                Call to Order — (281) 580-2444
              </a>
            </div>

            <div className="md:col-span-2 space-y-12">
              <div>
                <h3 className="font-display text-3xl uppercase mb-4 text-pickle">Po-Boy Party Trays</h3>
                <table className="w-full font-mono text-sm">
                  <thead className="border-b border-ink">
                    <tr className="text-left">
                      <th className="pb-3 font-medium uppercase text-[10px] tracking-widest">Size</th>
                      <th className="pb-3 font-medium uppercase text-[10px] tracking-widest">Serves</th>
                      <th className="pb-3 font-medium text-right uppercase text-[10px] tracking-widest">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deli-border">
                    {poBoyTrays.map(([size, serves, price]) => (
                      <tr key={size}>
                        <td className="py-4">{size}</td>
                        <td className="py-4 text-ink/60">{serves}</td>
                        <td className="py-4 text-right">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-display text-3xl uppercase mb-4 text-pickle">Specialty Trays</h3>
                <table className="w-full font-mono text-sm">
                  <tbody className="divide-y divide-deli-border">
                    {cateringTrays.map(([name, price]) => (
                      <tr key={name}>
                        <td className="py-4">{name}</td>
                        <td className="py-4 text-right">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="contact" className="bg-paper border-b border-deli-border py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-pickle mb-2">Find Us</div>
              <h2 className="font-display text-6xl md:text-7xl uppercase leading-[0.9]">
                Come Say <span className="text-accent">Hello.</span>
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=4444+Cypress+Creek+Pkwy+%2335,+Houston,+TX+77068"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Get Directions →
            </a>
          </div>

          <div className="grid md:grid-cols-5 gap-6 items-stretch">
            {/* Map */}
            <div className="md:col-span-3 relative group rounded-sm overflow-hidden shadow-2xl ring-1 ring-black/10">
              <iframe
                title="Anthonie's Deli Location"
                src="https://maps.google.com/maps?q=4444+Cypress+Creek+Pkwy+%2335,+Houston,+TX+77068&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[520px] grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info card */}
            <div className="md:col-span-2 bg-ink text-paper p-10 flex flex-col justify-between rounded-sm shadow-2xl">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-3">The Address</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4444+Cypress+Creek+Pkwy+%2335,+Houston,+TX+77068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-3xl uppercase leading-tight hover:text-accent transition-colors block mb-8"
                >
                  4444 Cypress<br />Creek Pkwy #35<br />
                  <span className="text-accent">Houston, TX 77068</span>
                </a>

                <div className="h-px bg-white/15 my-6" />

                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-3">Hours</div>
                <div className="space-y-1.5 font-mono text-sm mb-8">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>Mon – Sat</span>
                    <span className="opacity-80">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>Sunday</span>
                    <span className="opacity-80">10:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-2">Call Ahead</div>
                <a
                  href="tel:2815802444"
                  className="block font-display text-4xl tracking-wide hover:text-accent transition-colors mb-4"
                >
                  (281) 580-2444
                </a>
                <a
                  href="tel:2815802444"
                  className="inline-block w-full text-center py-4 bg-accent text-white font-mono uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-ink transition-colors"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16 items-start">
            <div className="md:col-span-2">
              <div className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
                See you at
                <br />
                <span className="text-accent">The Counter.</span>
              </div>
              <p className="font-serif italic text-lg opacity-70 max-w-md">
                A Houston original — hand-sliced, house-made, and served with a smile since day one.
              </p>
            </div>
            <div className="w-full">
              <img
                src={godAndManImg}
                alt="Inside Anthonie's Deli"
                className="w-full h-auto object-contain rounded-sm ring-1 ring-white/10"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest opacity-50 gap-2">
            <div>© 2025 Anthonie's Deli. Menu prices subject to change.</div>
            <div>Antibiotic / Hormone Free Options Available</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
