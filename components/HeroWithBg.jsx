export default function HeroWithBg() {
  return (
    <section
      className="w-full min-h-[55vh] flex items-center"
      style={{
        backgroundImage: "url(/1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-8 md:px-0">
        <h1
          className="text-white text-3xl md:text-5xl font-bold leading-snug md:leading-tight drop-shadow-xl"
          style={{ marginTop: "5vw" }}
        >
          True Innovation in Pathway to
          <br /> Carbon Removal
        </h1>
      </div>
    </section>
  );
}







