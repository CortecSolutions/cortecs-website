"use client";

import { useState } from "react";
import Link from "next/link";
import { demoComponents } from "./demos";

const solutions = [
  // === ENTERPRISE SOFTWARE & AUTOMATION ===
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
    industry: "Legacy Modernization",
    title: "System Migration & Architecture Upgrades",
    description:
      "Transform outdated legacy systems into modern, scalable architectures. Database migrations, API modernization, and cloud-native refactoring.",
    capabilities: [
      "Legacy code refactoring",
      "Database migration",
      "Cloud-native architecture",
      "API modernization",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    industry: "Data & Analytics",
    title: "Enterprise BI & Predictive Analytics",
    description:
      "Custom business intelligence platforms, data warehousing, ETL pipelines, and machine learning models for predictive insights and decision-making.",
    capabilities: [
      "Custom BI dashboards",
      "Data pipeline engineering",
      "Predictive ML models",
      "Data warehouse design",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    industry: "System Integration",
    title: "API Development & Third-Party Connectors",
    description:
      "Custom API development, enterprise system integrations, middleware solutions, and seamless connections between disparate business applications.",
    capabilities: [
      "Custom REST/GraphQL APIs",
      "ERP/CRM integrations",
      "Middleware development",
      "Webhook orchestration",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
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
    industry: "Document Automation",
    title: "Intelligent Document Processing & OCR",
    description:
      "Automated document extraction, invoice processing, contract analysis, and intelligent form handling using AI-powered OCR and NLP.",
    capabilities: [
      "Invoice/receipt processing",
      "Contract data extraction",
      "Intelligent form capture",
      "Document classification",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
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
    industry: "Conversational AI",
    title: "Custom Chatbots & Virtual Assistants",
    description:
      "AI-powered customer service bots, internal knowledge assistants, lead qualification chatbots, and voice-enabled virtual agents for enterprise.",
    capabilities: [
      "Customer service automation",
      "Knowledge base assistants",
      "Lead qualification bots",
      "Voice AI integration",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
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
  {
    industry: "Logistics & Transportation",
    title: "Fleet Management & Route Optimization",
    description:
      "Real-time fleet tracking, AI-powered route optimization, delivery scheduling systems, and logistics analytics for transportation companies.",
    capabilities: [
      "GPS fleet tracking",
      "Route optimization AI",
      "Delivery scheduling",
      "Logistics dashboards",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    industry: "E-Learning & Training",
    title: "LMS Platforms & Training Automation",
    description:
      "Custom learning management systems, employee training platforms, progress tracking, certification management, and interactive assessment tools.",
    capabilities: [
      "Custom LMS development",
      "Progress tracking systems",
      "Certification automation",
      "Assessment engines",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  // === CREATIVE & VISUAL SERVICES ===
  {
    industry: "Marketing & Advertising",
    title: "AI-Generated Marketing Content",
    description:
      "Automated ad creative generation, personalized visual content at scale, social media assets, and dynamic product imagery for marketing teams and agencies.",
    capabilities: [
      "AI ad creative generation",
      "Social media content",
      "Personalized visuals",
      "Dynamic product imagery",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
  {
    industry: "Fashion & Apparel",
    title: "AI Fashion Models & Virtual Try-On",
    description:
      "AI-generated clothing models, virtual try-on experiences, product photography automation, and lookbook generation for fashion brands and retailers.",
    capabilities: [
      "AI clothing models",
      "Virtual try-on tools",
      "Automated product photos",
      "Lookbook generation",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    industry: "Architecture & Interior Design",
    title: "3D Visualization & Virtual Staging",
    description:
      "Photorealistic 3D renders, virtual property staging, architectural visualizations, and immersive walkthroughs for architects, designers, and real estate developers.",
    capabilities: [
      "3D architectural renders",
      "Virtual staging",
      "Interior visualizations",
      "Immersive walkthroughs",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    industry: "Product & Industrial",
    title: "Product Visualization & Prototyping",
    description:
      "Photorealistic product renders, 360-degree product views, packaging mockups, and visual prototypes for product launches and e-commerce.",
    capabilities: [
      "Product 3D renders",
      "360° product views",
      "Packaging mockups",
      "Visual prototyping",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    industry: "Creative & Media",
    title: "AI Video & Animation Production",
    description:
      "Custom AI-generated videos, motion graphics, animated explainers, promotional content, and visual effects for brands, agencies, and content creators.",
    capabilities: [
      "AI video generation",
      "Motion graphics & animation",
      "Explainer videos",
      "Visual effects (VFX)",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    industry: "Entertainment & Gaming",
    title: "Character Design & Game Assets",
    description:
      "AI-generated character designs, game asset creation, concept art, promotional artwork, and visual content for game studios and entertainment companies.",
    capabilities: [
      "Character design & art",
      "Game asset generation",
      "Concept art creation",
      "Promotional visuals",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
      </svg>
    ),
  },
];

function SolutionCard({
  solution,
  isExpanded,
  onToggle,
}: {
  solution: typeof solutions[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 overflow-hidden ${
        isExpanded ? "md:col-span-2" : ""
      }`}
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

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-lg transition-all text-sm font-medium"
        >
          {isExpanded ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close Demo
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Demo
            </>
          )}
        </button>
      </div>

      {/* Demo Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700">
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">
              Interactive Preview
            </h3>
            {demoComponents[solution.industry]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
              <img src="/logo-icon.svg" alt="Cortec" className="w-10 h-10" />
              <span className="gradient-text">Cortec</span>
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
            We build custom software, automation systems, data platforms, and enterprise integrations
            tailored to your industry—plus AI-generated videos, images, and animations for your creative needs.
          </p>
          <p className="text-sm text-primary mt-4">
            Click &quot;View Demo&quot; on any card to see an interactive preview of our capabilities.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                solution={solution}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
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
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
              <img src="/logo-icon.svg" alt="Cortec" className="w-8 h-8" />
              <span className="gradient-text">Cortec</span>
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
              © {new Date().getFullYear()} Cortec. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
