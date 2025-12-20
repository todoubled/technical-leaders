import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";

const AISOS = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI SOS | Technical Leaders"
        description="AI SOS presentation and resources from Technical Leaders."
        keywords={["AI SOS", "AI training", "technical leadership", "AI strategy"]}
      />

      <Navigation />

      <section className="pt-20 pb-0 h-screen">
        <div className="h-full w-full">
          <object
            data="/AI-SOS.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <p className="text-lg mb-4">
                Unable to display PDF inline.
              </p>
              <a
                href="/AI-SOS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Click here to view the PDF
              </a>
            </div>
          </object>
        </div>
      </section>
    </div>
  );
};

export default AISOS;
