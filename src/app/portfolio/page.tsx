import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions Portfolio",
  description:
    "Explore custom software solutions, AI integrations, and automation systems we build for businesses across healthcare, finance, retail, manufacturing, and more.",
};

const solutions = [
  {
    industry: "Healthcare",
    title: "Patient Management & Clinical Workflows",
    description:
      "Streamlined patient intake systems, appointment scheduling, electronic health record integrations, and HIPAA-compliant data management solutions.",
    capabilities: [
      "Patient portal development",
      "EHR/EMR integrations",
      "Appointment automation",
      "Secure messaging systems",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    industry: "Finance & Banking",
    title: "Automated Reporting & Compliance Tools",
    description:
      "Custom dashboards, automated financial reporting, fraud detection systems, and regulatory compliance tracking for financial institutions.",
    capabilities: [
      "Real-time analytics dashboards",
      "Automated compliance reporting",
      "Transaction monitoring",
      "Risk assessment tools",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    industry: "Retail & E-Commerce",
    title: "Inventory & Customer Experience Platforms",
    description:
      "AI-powered inventory management, personalized recommendation engines, order fulfillment automation, and omnichannel customer experiences.",
    capabilities: [
      "Inventory optimization AI",
      "Customer recommendation engines",
      "Order management systems",
      "POS integrations",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    industry: "Manufacturing",
    title: "Production Monitoring & Supply Chain",
    description:
      "IoT sensor integrations, predictive maintenance systems, supply chain visibility platforms, and quality control automation.",
    capabilities: [
      "IoT data collection & analysis",
      "Predictive maintenance AI",
      "Supply chain tracking",
      "Quality control automation",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    industry: "Professional Services",
    title: "Client Management & Workflow Automation",
    description:
      "Custom CRM solutions, project management platforms, automated billing systems, and client communication portals for service-based businesses.",
    capabilities: [
      "Custom CRM development",
      "Project tracking systems",
      "Automated invoicing",
      "Client portals",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    industry: "Real Estate",
    title: "Property Management & Lead Automation",
    description:
      "Property listing platforms, tenant management systems, automated lead nurturing, virtual tour integrations, and transaction management tools.",
    capabilities: [
      "Property management platforms",
      "Lead capture & nurturing",
      "Virtual tour integration",
      "Document automation",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">Cortec</span>
              <span className="text-foreground"> Solutions</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-foreground font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl">
            We build custom software, AI integrations, and automation systems tailored to
            your industry. Explore the types of solutions we create for businesses like yours.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                      {solution.industry}
                    </span>
                    <div className="text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                      {solution.icon}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h2>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-3">
                      Capabilities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="text-sm text-secondary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-secondary text-lg mb-8">
            We build custom solutions for businesses of all types. Tell us about your
            challenges and we&apos;ll design a solution tailored to your needs.
          </p>
          <Link
            href="/#contact"
            className="inline-block gradient-bg text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">Cortec</span>
              <span className="text-foreground"> Solutions</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/#services"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="text-secondary text-sm">
              © {new Date().getFullYear()} Cortec Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
