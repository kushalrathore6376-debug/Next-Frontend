export default function ModularScalableSystem() {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 md:gap-16">
          {/* LEFT COLUMN */}
          <div className="md:w-1/2 flex flex-col gap-24 justify-between pt-3">
            <div>
              <h2 className="text-white text-3xl md:text-3xl font-light tracking-wide mb-8">
                Modular scalable system
              </h2>
            </div>
            <div>
              <h2 className="text-white text-3xl md:text-3xl font-light tracking-wide mb-8">
                Converting Pollutants
                <br />
                to Products
              </h2>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="md:w-1/2 flex flex-col gap-16">
            <div className="mb-10">
              <p className="text-white text-lg font-light mb-2">
                Each Trace Xero unit is containerized, allowing for:
              </p>
              <ul className="text-white text-lg font-light list-disc list-inside ml-2 mb-2">
                <li>Fast setup and relocation</li>
                <li>Urban, rural, or remote deployment</li>
                <li>Integration with factories or renewable plants</li>
              </ul>
            </div>
            <div>
              <p className="text-white text-lg font-light">
                Unlike conventional carbon capture methods that rely on heat,
                pressure, or geological storage, Trace Xero&apos;s technology
                operates under ambient conditions to decompose CO2 into solid
                graphitic carbon. Our approach eliminates the need for CO2
                storage.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}