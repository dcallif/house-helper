function HowItWorks() {
      return (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-blue-100 text-blue-600 p-4 inline-flex items-center justify-center mb-4">
                  {/* Replace with relevant Lucide icon */}
                  <span>1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Tell us what you need</h3>
                <p className="text-gray-700">
                  Answer a few questions about your project to get matched with the right pros.
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-blue-100 text-blue-600 p-4 inline-flex items-center justify-center mb-4">
                  {/* Replace with relevant Lucide icon */}
                  <span>2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Get matched with pros</h3>
                <p className="text-gray-700">
                  We'll show you a list of available pros who can help with your project.
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-blue-100 text-blue-600 p-4 inline-flex items-center justify-center mb-4">
                  {/* Replace with relevant Lucide icon */}
                  <span>3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Hire the right pro</h3>
                <p className="text-gray-700">
                  Compare profiles, read reviews, and hire the pro that's right for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default HowItWorks;
