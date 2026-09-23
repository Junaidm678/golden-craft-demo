import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import handiImg from "@/assets/product-handi.jpg";
import kadhaiImg from "@/assets/product-kadhai.jpg";
import potImg from "@/assets/product-pot.jpg";
import cookerImg from "@/assets/product-cooker.jpg";
import thaliImg from "@/assets/product-thali.jpg";
import lotaImg from "@/assets/product-lota.jpg";
import bowlSetImg from "@/assets/product-bowl-set.jpg";
import glassSetImg from "@/assets/product-glass-set.jpg";
import tawaImg from "@/assets/product-tawa.jpg";
import spiceBoxImg from "@/assets/product-spice-box.jpg";
import jugImg from "@/assets/product-jug.jpg";
import plateImg from "@/assets/product-plate.jpg";
import servingSpoonImg from "@/assets/product-serving-spoon.jpg";
import panchapatraImg from "@/assets/product-panchapatra.jpg";
import catCookware from "@/assets/category-cookware.jpg";
import catUtensils from "@/assets/category-utensils.jpg";
import catThali from "@/assets/category-thali-sets.jpg";
import catKitchen from "@/assets/category-kitchen-sets.jpg";
import catServing from "@/assets/category-serving-ware.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Brassware — Timeless Brass Cookware & Utensils" },
      {
        name: "description",
        content:
          "Discover beautifully crafted brass cookware and traditional Indian utensils made to bring timeless elegance to your kitchen.",
      },
      { property: "og:title", content: "Aditya Brassware — Timeless Brass Cookware & Utensils" },
      {
        property: "og:description",
        content:
          "Beautifully crafted brass cookware and traditional Indian utensils for timeless kitchen elegance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_DISPLAY = "+91 98765 43210";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const GENERAL_ENQUIRY = waLink(
  "Hello Aditya Brassware, I would like to enquire about your brass cookware and utensils."
);

type Product = {
  name: string;
  desc: string;
  price: string;
  img: string;
};

const featured: Product[] = [
  { name: "Brass Handi", desc: "Handcrafted brass cooking handi for slow-cooked curries.", price: "₹2,450", img: handiImg },
  { name: "Brass Kadhai", desc: "Traditional kadhai with hammered brass finish.", price: "₹2,180", img: kadhaiImg },
  { name: "Brass Cooking Pot", desc: "Lidded brass pot for everyday traditional cooking.", price: "₹2,890", img: potImg },
  { name: "Brass Cooker", desc: "Sturdy brass cooker pot with heavy secure lid.", price: "Price on Request", img: cookerImg },
  { name: "Brass Thali Set", desc: "Complete thali set with katoris, glass and spoon.", price: "₹3,200", img: thaliImg },
  { name: "Brass Lota", desc: "Classic ritual water vessel in polished brass.", price: "₹1,150", img: lotaImg },
  { name: "Brass Bowl Set", desc: "Set of four graduated brass serving bowls.", price: "₹1,680", img: bowlSetImg },
  { name: "Brass Glass Set", desc: "Set of four slim brass drinking tumblers.", price: "₹1,420", img: glassSetImg },
];

const catalogue: Product[] = [
  ...featured,
  { name: "Brass Tawa", desc: "Flat brass tawa for rotis and crisp dosas.", price: "₹1,980", img: tawaImg },
  { name: "Brass Spice Box", desc: "Lidded masala dabba with brass compartments.", price: "₹1,750", img: spiceBoxImg },
  { name: "Brass Jug", desc: "Elegant brass water jug with curved spout.", price: "₹1,560", img: jugImg },
  { name: "Brass Plate", desc: "Polished brass thali plate for daily dining.", price: "₹980", img: plateImg },
  { name: "Brass Serving Spoon", desc: "Pair of brass serving spoons with long handles.", price: "₹640", img: servingSpoonImg },
  { name: "Brass Panchapatra", desc: "Ritual panchapatra vessel with standalone cup.", price: "Price on Request", img: panchapatraImg },
];

const categories = [
  { name: "Brass Cookware", img: catCookware },
  { name: "Brass Utensils", img: catUtensils },
  { name: "Brass Thali Sets", img: catThali },
  { name: "Brass Kitchen Sets", img: catKitchen },
  { name: "Brass Serving Ware", img: catServing },
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="card-hover group overflow-hidden rounded-xl border border-border bg-card">
      <div className="img-zoom relative aspect-square overflow-hidden bg-cream">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={912}
          height={912}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl text-ink">{p.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        </div>
        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="font-display text-lg font-semibold text-brass-deep">{p.price}</span>
          <a
            href={waLink(`Hello, I'm interested in the ${p.name}. Could you share more details?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-brass-deep"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="hairline h-px w-10" />
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-brass-deep">{children}</span>
      <span className="hairline h-px w-10" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-brass/40 bg-brass-soft font-display text-lg font-bold text-brass-deep">
            अ
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Aditya <span className="text-brass-deep">Brassware</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-foreground/80 transition-colors hover:text-brass-deep">Home</a>
          <a href="#collection" className="text-sm font-medium text-foreground/80 transition-colors hover:text-brass-deep">Collection</a>
          <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-brass-deep">About</a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-brass-deep">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GENERAL_ENQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brass-deep sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Enquiry
          </a>
          <a
            href="#menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink md:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div id="menu" className="hidden md:hidden">
        <div className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4">
          <a href="#home" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">Home</a>
          <a href="#collection" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">Collection</a>
          <a href="#about" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">About</a>
          <a href="#contact" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">Contact</a>
          <a
            href={GENERAL_ENQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        <div className="order-2 lg:order-1">
          <SectionLabel>Traditional Indian Brassware</SectionLabel>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Timeless Brassware <br className="hidden sm:block" />
            for Your <span className="brass-text">Kitchen</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover beautifully crafted brass cookware and traditional utensils made to
            bring timeless elegance to your kitchen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#collection"
              className="inline-flex items-center justify-center rounded-full border border-brass-deep/40 bg-transparent px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brass-deep hover:bg-accent"
            >
              Explore Collection
            </a>
            <a
              href={GENERAL_ENQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brass-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Enquiry
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-3xl font-semibold text-ink">120+</div>
              <div>Brass Pieces</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-semibold text-ink">Handcrafted</div>
              <div>Traditional Work</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-brass">
            <img
              src={heroImg}
              alt="Collection of traditional Indian brass cookware and utensils"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brass-deep/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="featured" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <SectionLabel>Curated Selection</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">Our Featured Collection</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            A curated selection of our finest brass cookware and utensils, crafted to bring
            warmth and tradition to your kitchen.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <SectionLabel>Browse by Type</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">Shop by Category</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#collection"
              className="img-zoom group relative aspect-[4/5] overflow-hidden rounded-xl shadow-brass"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1008}
                height={704}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-lg font-semibold text-background">{c.name}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-xs text-background/80 transition-colors group-hover:text-background">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalogue() {
  return (
    <section id="collection" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <SectionLabel>The Full Range</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">Product Catalogue</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Browse our complete collection of brass cookware and traditional utensils.
            Enquire on WhatsApp for price and availability.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {catalogue.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    { title: "Premium Brass Quality", desc: "Solid, finely finished brass made to last for generations." },
    { title: "Traditional Craftsmanship", desc: "Each piece shaped by time-honoured artisan techniques." },
    { title: "Elegant Kitchenware", desc: "Refined designs that bring warmth to everyday dining." },
    { title: "Easy WhatsApp Enquiry", desc: "Reach us directly and get a quick personal response." },
  ];
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <SectionLabel>Why Aditya Brassware</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">Why Choose Us</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((pt, i) => (
            <div key={pt.title} className="rounded-xl border border-border bg-card p-7 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-brass/40 bg-brass-soft font-display text-lg font-bold text-brass-deep">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{pt.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-brass">
            <img
              src={heroImg}
              alt="Traditional Indian brassware showroom"
              loading="lazy"
              width={1600}
              height={1104}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl border border-border bg-card p-5 shadow-brass sm:block">
            <div className="font-display text-3xl font-semibold text-brass-deep">अ</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Handcrafted</div>
          </div>
        </div>
        <div>
          <SectionLabel>About the Shop</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
            A Destination for Traditional Brass Kitchenware
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Aditya Brassware is a destination for traditional brass cookware, utensils and
            kitchenware. Each piece is chosen for its finish, feel and timeless appeal —
            cookware and serving ware meant to be used, treasured and passed on.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From everyday cooking pots to complete thali sets and ritual vessels, our
            collection celebrates the warmth, durability and quiet beauty of brass in the
            Indian kitchen.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-deep" /> Handcrafted brass
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-deep" /> Traditional designs
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-deep" /> Made to last
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { no: "01", title: "Explore Collection", desc: "Browse the available brass cookware and utensils." },
    { no: "02", title: "Choose Your Product", desc: "Find the product you are interested in." },
    { no: "03", title: "Enquire on WhatsApp", desc: "Contact the shop directly for price and availability." },
  ];
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <SectionLabel>Simple Process</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">How It Works</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.no} className="relative rounded-xl border border-border bg-card p-8">
              <div className="font-display text-5xl font-semibold text-brass/40">{s.no}</div>
              <h3 className="mt-4 font-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center shadow-brass sm:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--brass) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--brass-deep) 0, transparent 45%)" }} />
          <div className="relative">
            <SectionLabel>Enquire Now</SectionLabel>
            <h2 className="mt-5 font-display text-4xl text-background sm:text-5xl">
              Bring Timeless Brassware <br className="hidden sm:block" /> Into Your Kitchen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-background/70">
              Explore our collection and enquire directly on WhatsApp.
            </p>
            <a
              href={GENERAL_ENQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-brass-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-brass/40 bg-brass-soft font-display text-lg font-bold text-brass-deep">अ</span>
              <span className="font-display text-xl font-semibold text-ink">Aditya <span className="text-brass-deep">Brassware</span></span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Traditional Indian brass cookware and utensils, crafted to bring timeless
              elegance to your kitchen.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#home" className="transition-colors hover:text-brass-deep">Home</a></li>
              <li><a href="#collection" className="transition-colors hover:text-brass-deep">Collection</a></li>
              <li><a href="#about" className="transition-colors hover:text-brass-deep">About</a></li>
              <li><a href="#contact" className="transition-colors hover:text-brass-deep">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Product Categories</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#collection" className="transition-colors hover:text-brass-deep">Brass Cookware</a></li>
              <li><a href="#collection" className="transition-colors hover:text-brass-deep">Brass Utensils</a></li>
              <li><a href="#collection" className="transition-colors hover:text-brass-deep">Brass Thali Sets</a></li>
              <li><a href="#collection" className="transition-colors hover:text-brass-deep">Brass Serving Ware</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={GENERAL_ENQUIRY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-brass-deep">
                  <WhatsAppIcon className="h-4 w-4" /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="text-muted-foreground">Main Bazaar, Your City, India</li>
              <li className="text-muted-foreground">Mon–Sat · 10:00 AM – 8:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Aditya Brassware. All rights reserved.</p>
          <p>Crafted with brass tradition in mind.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_ENQUIRY}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-medium text-primary-foreground shadow-brass transition-all hover:bg-brass-deep hover:pr-5"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Enquire on WhatsApp</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Categories />
        <Catalogue />
        <WhyChooseUs />
        <About />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Index;
