"use client";

import { useState, useEffect } from "react";

// ============================================
// HEALTHCARE - Patient Portal Dashboard Demo
// ============================================
export function HealthcareDemo() {
  const [activeTab, setActiveTab] = useState("overview");
  const appointments = [
    { time: "9:00 AM", patient: "Sarah Johnson", type: "Check-up", status: "confirmed" },
    { time: "10:30 AM", patient: "Michael Chen", type: "Follow-up", status: "confirmed" },
    { time: "2:00 PM", patient: "Emily Davis", type: "Consultation", status: "pending" },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-400 text-xs">Patient Portal v2.4</span>
      </div>

      <div className="flex gap-1 mb-4">
        {["overview", "appointments", "messages"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded text-xs capitalize transition-colors ${
              activeTab === tab ? "bg-cyan-600" : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-800 rounded p-3 text-center">
              <div className="text-2xl font-bold text-cyan-400">24</div>
              <div className="text-xs text-slate-400">Today&apos;s Patients</div>
            </div>
            <div className="bg-slate-800 rounded p-3 text-center">
              <div className="text-2xl font-bold text-green-400">18</div>
              <div className="text-xs text-slate-400">Confirmed</div>
            </div>
            <div className="bg-slate-800 rounded p-3 text-center">
              <div className="text-2xl font-bold text-yellow-400">6</div>
              <div className="text-xs text-slate-400">Pending</div>
            </div>
          </div>
          <div className="bg-slate-800 rounded p-3">
            <div className="text-xs text-slate-400 mb-2">Next Appointment</div>
            <div className="flex justify-between items-center">
              <span>Sarah Johnson - Check-up</span>
              <span className="text-cyan-400">9:00 AM</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "appointments" && (
        <div className="space-y-2">
          {appointments.map((apt, i) => (
            <div key={i} className="bg-slate-800 rounded p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{apt.patient}</div>
                <div className="text-xs text-slate-400">{apt.type}</div>
              </div>
              <div className="text-right">
                <div className="text-cyan-400">{apt.time}</div>
                <div className={`text-xs ${apt.status === "confirmed" ? "text-green-400" : "text-yellow-400"}`}>
                  {apt.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "messages" && (
        <div className="space-y-2">
          <div className="bg-slate-800 rounded p-3">
            <div className="flex justify-between mb-1">
              <span className="text-cyan-400">Dr. Williams</span>
              <span className="text-xs text-slate-400">2h ago</span>
            </div>
            <div className="text-xs text-slate-300">Lab results are ready for review...</div>
          </div>
          <div className="bg-slate-800 rounded p-3">
            <div className="flex justify-between mb-1">
              <span className="text-cyan-400">System</span>
              <span className="text-xs text-slate-400">5h ago</span>
            </div>
            <div className="text-xs text-slate-300">Appointment reminder sent to patients...</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// FINANCE - Analytics Dashboard Demo
// ============================================
export function FinanceDemo() {
  const [animatedValues, setAnimatedValues] = useState({ revenue: 0, transactions: 0, compliance: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({ revenue: 2.4, transactions: 15847, compliance: 98.5 });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Financial Dashboard</span>
        <span className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-800 rounded p-3">
          <div className="text-xs text-slate-400">Revenue (M)</div>
          <div className="text-xl font-bold text-green-400">${animatedValues.revenue.toFixed(1)}</div>
          <div className="text-xs text-green-400">↑ 12.5%</div>
        </div>
        <div className="bg-slate-800 rounded p-3">
          <div className="text-xs text-slate-400">Transactions</div>
          <div className="text-xl font-bold text-cyan-400">{animatedValues.transactions.toLocaleString()}</div>
          <div className="text-xs text-cyan-400">Today</div>
        </div>
        <div className="bg-slate-800 rounded p-3">
          <div className="text-xs text-slate-400">Compliance</div>
          <div className="text-xl font-bold text-purple-400">{animatedValues.compliance}%</div>
          <div className="text-xs text-green-400">✓ Passing</div>
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Transaction Volume (24h)</div>
        <div className="flex items-end gap-1 h-16">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-cyan-500/60 rounded-t transition-all duration-500"
              style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3">
        <div className="text-xs text-slate-400 mb-2">Risk Alerts</div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-yellow-400">⚠ 2 Suspicious patterns detected</span>
          <button className="text-cyan-400 hover:underline">Review</button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// LEGACY MODERNIZATION - Before/After Demo
// ============================================
export function LegacyDemo() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">System Architecture</span>
        <button
          onClick={() => setShowAfter(!showAfter)}
          className={`px-3 py-1 rounded text-xs transition-colors ${
            showAfter ? "bg-green-600" : "bg-slate-700"
          }`}
        >
          {showAfter ? "After Migration" : "Before Migration"}
        </button>
      </div>

      <div className="relative">
        {!showAfter ? (
          <div className="space-y-3">
            <div className="bg-red-900/30 border border-red-500/50 rounded p-3">
              <div className="text-red-400 text-xs mb-1">⚠ Legacy Monolith</div>
              <div className="text-xs text-slate-400">COBOL • On-premise • Single DB</div>
            </div>
            <div className="flex justify-center">
              <div className="w-px h-6 bg-slate-600" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded p-2 text-center">
                <div className="text-yellow-400 text-xs">Slow Queries</div>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded p-2 text-center">
                <div className="text-yellow-400 text-xs">No Scaling</div>
              </div>
            </div>
            <div className="text-center text-xs text-red-400 mt-2">
              Avg Response: 4.2s | Uptime: 94%
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-900/30 border border-green-500/50 rounded p-2 text-center">
                <div className="text-green-400 text-xs">API Gateway</div>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded p-2 text-center">
                <div className="text-green-400 text-xs">Auth Service</div>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded p-2 text-center">
                <div className="text-green-400 text-xs">Cache Layer</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-px bg-cyan-500" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-cyan-900/30 border border-cyan-500/50 rounded p-2 text-center">
                <div className="text-cyan-400 text-xs">Microservices</div>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/50 rounded p-2 text-center">
                <div className="text-cyan-400 text-xs">Cloud DB</div>
              </div>
            </div>
            <div className="text-center text-xs text-green-400 mt-2">
              Avg Response: 120ms | Uptime: 99.9%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// DATA & ANALYTICS - BI Dashboard Demo
// ============================================
export function DataAnalyticsDemo() {
  const [selectedMetric, setSelectedMetric] = useState("sales");

  const metrics = {
    sales: { value: "$1.2M", change: "+18%", color: "cyan" },
    users: { value: "45.2K", change: "+24%", color: "green" },
    conversion: { value: "3.8%", change: "+0.5%", color: "purple" },
  };

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Analytics Platform</span>
        <select
          className="bg-slate-700 rounded px-2 py-1 text-xs"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="sales">Sales</option>
          <option value="users">Users</option>
          <option value="conversion">Conversion</option>
        </select>
      </div>

      <div className="bg-slate-800 rounded p-4 mb-3">
        <div className="text-xs text-slate-400 mb-1">
          {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}
        </div>
        <div className={`text-3xl font-bold text-${metrics[selectedMetric as keyof typeof metrics].color}-400`}>
          {metrics[selectedMetric as keyof typeof metrics].value}
        </div>
        <div className="text-xs text-green-400">
          {metrics[selectedMetric as keyof typeof metrics].change} vs last month
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Trend Analysis</div>
        <svg viewBox="0 0 200 60" className="w-full h-16">
          <path
            d="M0,50 Q30,45 50,35 T100,25 T150,20 T200,10"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
          />
          <path
            d="M0,50 Q30,45 50,35 T100,25 T150,20 T200,10 L200,60 L0,60 Z"
            fill="url(#gradient)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-800 rounded p-2">
          <div className="text-xs text-slate-400">Prediction</div>
          <div className="text-sm text-purple-400">↑ 22% next Q</div>
        </div>
        <div className="bg-slate-800 rounded p-2">
          <div className="text-xs text-slate-400">Confidence</div>
          <div className="text-sm text-green-400">94.2%</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SYSTEM INTEGRATION - API Flow Demo
// ============================================
export function SystemIntegrationDemo() {
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const systems = ["CRM", "API Gateway", "ERP", "Database"];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">API Integration Hub</span>
        <span className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Syncing
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        {systems.map((system, i) => (
          <div key={system} className="flex items-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center text-xs text-center transition-all ${
                activeFlow === i
                  ? "bg-cyan-600 scale-110"
                  : "bg-slate-700"
              }`}
            >
              {system}
            </div>
            {i < systems.length - 1 && (
              <div className={`w-4 h-0.5 transition-colors ${
                activeFlow > i ? "bg-cyan-500" : "bg-slate-600"
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Recent API Calls</div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-green-400">POST /api/orders</span>
            <span className="text-slate-400">23ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-400">GET /api/inventory</span>
            <span className="text-slate-400">45ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-400">PUT /api/customers</span>
            <span className="text-slate-400">31ms</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-slate-800 rounded p-2">
          <div className="text-lg font-bold text-cyan-400">99.9%</div>
          <div className="text-xs text-slate-400">Uptime</div>
        </div>
        <div className="bg-slate-800 rounded p-2">
          <div className="text-lg font-bold text-green-400">28ms</div>
          <div className="text-xs text-slate-400">Avg Latency</div>
        </div>
        <div className="bg-slate-800 rounded p-2">
          <div className="text-lg font-bold text-purple-400">1.2M</div>
          <div className="text-xs text-slate-400">Calls/Day</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MANUFACTURING - IoT Dashboard Demo
// ============================================
export function ManufacturingDemo() {
  const [sensorData, setSensorData] = useState({ temp: 72, pressure: 45, efficiency: 94 });

  useEffect(() => {
    const timer = setInterval(() => {
      setSensorData({
        temp: 70 + Math.random() * 5,
        pressure: 43 + Math.random() * 4,
        efficiency: 92 + Math.random() * 6,
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Production Monitor</span>
        <span className="text-xs text-green-400">● All Systems Normal</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xs text-slate-400 mb-1">Temperature</div>
          <div className="text-xl font-bold text-orange-400">{sensorData.temp.toFixed(1)}°F</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xs text-slate-400 mb-1">Pressure</div>
          <div className="text-xl font-bold text-cyan-400">{sensorData.pressure.toFixed(1)} PSI</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xs text-slate-400 mb-1">Efficiency</div>
          <div className="text-xl font-bold text-green-400">{sensorData.efficiency.toFixed(1)}%</div>
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Production Lines</div>
        <div className="space-y-2">
          {["Line A", "Line B", "Line C"].map((line, i) => (
            <div key={line} className="flex items-center gap-2">
              <span className="text-xs w-12">{line}</span>
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${85 + i * 5}%` }}
                />
              </div>
              <span className="text-xs text-green-400">{85 + i * 5}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-900/30 border border-yellow-500/50 rounded p-2 text-xs">
        <span className="text-yellow-400">⚠ Predictive Alert:</span>
        <span className="text-slate-300 ml-1">Motor B3 maintenance due in 48h</span>
      </div>
    </div>
  );
}

// ============================================
// DOCUMENT AUTOMATION - OCR Demo
// ============================================
export function DocumentDemo() {
  const [processing, setProcessing] = useState(false);
  const [extracted, setExtracted] = useState(false);

  const handleProcess = () => {
    setProcessing(true);
    setExtracted(false);
    setTimeout(() => {
      setProcessing(false);
      setExtracted(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Document Processor</span>
        <button
          onClick={handleProcess}
          disabled={processing}
          className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 rounded text-xs transition-colors"
        >
          {processing ? "Processing..." : "Process Invoice"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-800 rounded p-3">
          <div className="text-xs text-slate-400 mb-2">Input Document</div>
          <div className="bg-white rounded p-2 text-slate-900 text-xs space-y-1">
            <div className="font-bold">INVOICE #4521</div>
            <div className="text-slate-500">Date: Dec 15, 2024</div>
            <div className="border-t pt-1 mt-1">
              <div>Widget Pro x5 ... $250</div>
              <div>Service Fee ... $50</div>
              <div className="font-bold border-t mt-1 pt-1">Total: $300</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded p-3">
          <div className="text-xs text-slate-400 mb-2">Extracted Data</div>
          {processing ? (
            <div className="flex items-center justify-center h-24">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : extracted ? (
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Invoice #:</span>
                <span className="text-green-400">4521</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date:</span>
                <span className="text-green-400">2024-12-15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Vendor:</span>
                <span className="text-green-400">Auto-detected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total:</span>
                <span className="text-green-400">$300.00</span>
              </div>
              <div className="text-xs text-green-400 mt-2">✓ Ready for ERP sync</div>
            </div>
          ) : (
            <div className="text-xs text-slate-500 text-center py-6">
              Click &quot;Process Invoice&quot; to extract data
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// PROFESSIONAL SERVICES - CRM Demo
// ============================================
export function ProfessionalServicesDemo() {
  const [view, setView] = useState("pipeline");

  const deals = [
    { name: "Enterprise License", value: "$45K", stage: "proposal", probability: 75 },
    { name: "Consulting Project", value: "$28K", stage: "negotiation", probability: 60 },
    { name: "Support Contract", value: "$12K", stage: "closing", probability: 90 },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">CRM Dashboard</span>
        <div className="flex gap-1">
          {["pipeline", "clients"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-2 py-1 rounded text-xs capitalize ${
                view === v ? "bg-cyan-600" : "bg-slate-700"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === "pipeline" && (
        <>
          <div className="grid grid-cols-4 gap-1 mb-3 text-xs text-center">
            {["Lead", "Proposal", "Negotiation", "Closing"].map((stage, i) => (
              <div key={stage} className="bg-slate-800 rounded p-2">
                <div className="text-slate-400">{stage}</div>
                <div className="text-cyan-400 font-bold">{[8, 5, 3, 2][i]}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {deals.map((deal, i) => (
              <div key={i} className="bg-slate-800 rounded p-2 flex justify-between items-center">
                <div>
                  <div className="text-sm">{deal.name}</div>
                  <div className="text-xs text-slate-400">{deal.stage}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400">{deal.value}</div>
                  <div className="text-xs text-slate-400">{deal.probability}%</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {view === "clients" && (
        <div className="space-y-2">
          {["Acme Corp", "TechStart Inc", "Global Services"].map((client, i) => (
            <div key={i} className="bg-slate-800 rounded p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{client}</div>
                <div className="text-xs text-slate-400">Active since 202{1 + i}</div>
              </div>
              <div className="text-xs text-green-400">● Active</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// CONVERSATIONAL AI - Chatbot Demo
// ============================================
export function ConversationalAIDemo() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const responses: Record<string, string> = {
    pricing: "Our plans start at $99/month for small teams. Enterprise pricing is custom. Would you like me to connect you with sales?",
    demo: "I'd be happy to schedule a demo! What day works best for you this week?",
    support: "I can help with most issues right here. What seems to be the problem?",
    default: "I understand. Let me connect you with a team member who can help with that specific request.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      let response = responses.default;
      if (userMessage.includes("price") || userMessage.includes("cost")) response = responses.pricing;
      else if (userMessage.includes("demo")) response = responses.demo;
      else if (userMessage.includes("help") || userMessage.includes("support")) response = responses.support;

      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 1000);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-cyan-400 font-bold">AI Assistant</span>
        <span className="text-xs text-green-400">● Online</span>
      </div>

      <div className="bg-slate-800 rounded p-3 h-40 overflow-y-auto mb-3 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-xs ${
                msg.role === "user"
                  ? "bg-cyan-600"
                  : "bg-slate-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Try: pricing, demo, support..."
          className="flex-1 bg-slate-800 rounded px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-cyan-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-xs transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

// ============================================
// RETAIL - Inventory Dashboard Demo
// ============================================
export function RetailDemo() {
  const products = [
    { name: "Wireless Headphones", stock: 245, status: "healthy", trend: "+12%" },
    { name: "Smart Watch Pro", stock: 23, status: "low", trend: "+45%" },
    { name: "USB-C Hub", stock: 189, status: "healthy", trend: "+8%" },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Inventory Manager</span>
        <span className="text-xs bg-slate-700 px-2 py-1 rounded">Last sync: 2m ago</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-2xl font-bold text-cyan-400">1,247</div>
          <div className="text-xs text-slate-400">Total SKUs</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-2xl font-bold text-yellow-400">12</div>
          <div className="text-xs text-slate-400">Low Stock</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-2xl font-bold text-green-400">98%</div>
          <div className="text-xs text-slate-400">Fill Rate</div>
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3">
        <div className="text-xs text-slate-400 mb-2">Top Products</div>
        <div className="space-y-2">
          {products.map((product, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-sm">{product.name}</div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={product.status === "low" ? "text-yellow-400" : "text-slate-400"}>
                    {product.stock} units
                  </span>
                  <span className="text-green-400">{product.trend}</span>
                </div>
              </div>
              {product.status === "low" && (
                <button className="text-xs bg-yellow-600 px-2 py-1 rounded">Reorder</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// REAL ESTATE - Property Dashboard Demo
// ============================================
export function RealEstateDemo() {
  const properties = [
    { address: "123 Oak Street", price: "$450K", status: "active", leads: 12 },
    { address: "456 Maple Ave", price: "$325K", status: "pending", leads: 8 },
    { address: "789 Pine Blvd", price: "$520K", status: "active", leads: 5 },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Property Manager</span>
        <span className="text-xs text-green-400">24 Active Listings</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xl font-bold text-cyan-400">$8.2M</div>
          <div className="text-xs text-slate-400">Total Value</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xl font-bold text-green-400">47</div>
          <div className="text-xs text-slate-400">New Leads</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xl font-bold text-purple-400">8</div>
          <div className="text-xs text-slate-400">Tours Scheduled</div>
        </div>
      </div>

      <div className="space-y-2">
        {properties.map((prop, i) => (
          <div key={i} className="bg-slate-800 rounded p-3 flex justify-between items-center">
            <div>
              <div className="font-medium">{prop.address}</div>
              <div className="text-sm text-cyan-400">{prop.price}</div>
            </div>
            <div className="text-right">
              <div className={`text-xs px-2 py-1 rounded ${
                prop.status === "active" ? "bg-green-600" : "bg-yellow-600"
              }`}>
                {prop.status}
              </div>
              <div className="text-xs text-slate-400 mt-1">{prop.leads} leads</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// LOGISTICS - Fleet Tracking Demo
// ============================================
export function LogisticsDemo() {
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  const vehicles = [
    { id: "TRK-001", driver: "John D.", status: "en-route", eta: "2:45 PM", progress: 65 },
    { id: "TRK-002", driver: "Sarah M.", status: "loading", eta: "4:30 PM", progress: 15 },
    { id: "TRK-003", driver: "Mike R.", status: "delivered", eta: "Complete", progress: 100 },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Fleet Tracker</span>
        <span className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live GPS
        </span>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3 h-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path d="M10,50 Q50,20 100,50 T190,50" stroke="#22d3ee" strokeWidth="2" fill="none" />
            <circle cx={10 + vehicles[selectedVehicle].progress * 1.8} cy="50" r="6" fill="#22d3ee" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="text-xs text-slate-400">Route Progress</div>
          <div className="text-lg font-bold text-cyan-400">{vehicles[selectedVehicle].progress}%</div>
          <div className="text-xs text-slate-400">ETA: {vehicles[selectedVehicle].eta}</div>
        </div>
      </div>

      <div className="space-y-2">
        {vehicles.map((v, i) => (
          <div
            key={i}
            onClick={() => setSelectedVehicle(i)}
            className={`bg-slate-800 rounded p-2 flex justify-between items-center cursor-pointer transition-colors ${
              selectedVehicle === i ? "ring-1 ring-cyan-500" : ""
            }`}
          >
            <div>
              <div className="font-medium">{v.id}</div>
              <div className="text-xs text-slate-400">{v.driver}</div>
            </div>
            <div className="text-right">
              <div className={`text-xs px-2 py-1 rounded ${
                v.status === "en-route" ? "bg-cyan-600" :
                v.status === "loading" ? "bg-yellow-600" : "bg-green-600"
              }`}>
                {v.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// E-LEARNING - LMS Demo
// ============================================
export function ELearningDemo() {
  const courses = [
    { name: "Security Fundamentals", progress: 85, enrolled: 234 },
    { name: "Leadership Training", progress: 62, enrolled: 156 },
    { name: "Compliance 2024", progress: 100, enrolled: 445 },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Learning Platform</span>
        <span className="text-xs bg-green-600 px-2 py-1 rounded">Pro Plan</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xl font-bold text-cyan-400">24</div>
          <div className="text-xs text-slate-400">Courses</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xl font-bold text-green-400">892</div>
          <div className="text-xs text-slate-400">Learners</div>
        </div>
        <div className="bg-slate-800 rounded p-3 text-center">
          <div className="text-xl font-bold text-purple-400">76%</div>
          <div className="text-xs text-slate-400">Completion</div>
        </div>
      </div>

      <div className="space-y-3">
        {courses.map((course, i) => (
          <div key={i} className="bg-slate-800 rounded p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">{course.name}</div>
                <div className="text-xs text-slate-400">{course.enrolled} enrolled</div>
              </div>
              {course.progress === 100 && (
                <span className="text-xs bg-green-600 px-2 py-1 rounded">Complete</span>
              )}
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  course.progress === 100 ? "bg-green-500" : "bg-cyan-500"
                }`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// FASHION - Virtual Try-On Demo
// ============================================
export function FashionDemo() {
  const [selectedColor, setSelectedColor] = useState("navy");
  const [selectedStyle, setSelectedStyle] = useState("blazer");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const colors = [
    { name: "navy", hex: "#1e3a5f" },
    { name: "black", hex: "#1a1a1a" },
    { name: "burgundy", hex: "#722f37" },
    { name: "cream", hex: "#f5f5dc" },
  ];

  const styles = ["blazer", "dress", "jacket", "sweater"];

  const handleGenerate = () => {
    setIsGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">AI Fashion Studio</span>
        <span className="text-xs bg-purple-600 px-2 py-1 rounded">Pro</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Model Preview */}
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px]">
          {isGenerating ? (
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <div className="text-xs text-slate-400">Generating AI model...</div>
            </div>
          ) : generated ? (
            <div className="text-center">
              <div
                className="w-20 h-32 rounded-lg mb-3 mx-auto relative overflow-hidden"
                style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.hex }}
              >
                {/* Simplified garment shape */}
                <div className="absolute inset-x-2 top-2 bottom-8 rounded-t-lg bg-white/10" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-200 border-2 border-amber-300" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-white/60 mt-1">
                  {selectedStyle}
                </div>
              </div>
              <div className="text-xs text-green-400">✓ Generated</div>
              <div className="text-xs text-slate-400 capitalize mt-1">
                {selectedColor} {selectedStyle}
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400">
              <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              <div className="text-xs">Select options & generate</div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div>
            <div className="text-xs text-slate-400 mb-2">Color</div>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => { setSelectedColor(color.name); setGenerated(false); }}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color.name ? "border-cyan-400 scale-110" : "border-slate-600"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-2">Style</div>
            <div className="grid grid-cols-2 gap-1">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => { setSelectedStyle(style); setGenerated(false); }}
                  className={`px-2 py-1 rounded text-xs capitalize transition-colors ${
                    selectedStyle === style ? "bg-cyan-600" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 rounded text-xs font-medium transition-all"
          >
            {isGenerating ? "Generating..." : "Generate AI Model"}
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-slate-800 rounded p-2">
          <div className="text-cyan-400 font-bold">2.3s</div>
          <div className="text-slate-400">Avg Gen Time</div>
        </div>
        <div className="bg-slate-800 rounded p-2">
          <div className="text-green-400 font-bold">4K</div>
          <div className="text-slate-400">Resolution</div>
        </div>
        <div className="bg-slate-800 rounded p-2">
          <div className="text-purple-400 font-bold">50+</div>
          <div className="text-slate-400">Poses</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MARKETING PLATFORM DEMO
// ============================================
export function MarketingPlatformDemo() {
  const [selectedTemplate, setSelectedTemplate] = useState("social");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Marketing Asset Platform</span>
        <span className="text-xs bg-green-600 px-2 py-1 rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          API Connected
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1 mb-4">
        {["social", "banner", "email", "product"].map((t) => (
          <button
            key={t}
            onClick={() => { setSelectedTemplate(t); setGenerated(false); }}
            className={`px-2 py-1.5 rounded text-xs capitalize ${
              selectedTemplate === t ? "bg-cyan-600" : "bg-slate-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Brand Prompt Template</div>
        <div className="text-xs text-slate-300 bg-slate-700 rounded p-2">
          Modern {selectedTemplate} ad for tech startup, minimalist style, brand colors: cyan/blue gradient, professional...
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-slate-800 rounded flex items-center justify-center">
            {isGenerating ? (
              <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            ) : generated ? (
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded flex items-center justify-center">
                <span className="text-xs text-green-400">✓ v{i}</span>
              </div>
            ) : (
              <span className="text-slate-600 text-xs">Slot {i}</span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 rounded text-xs font-medium"
      >
        {isGenerating ? "Generating 3 variations..." : "Generate Assets"}
      </button>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-center">
        <div className="bg-slate-800 rounded p-2">
          <div className="text-cyan-400 font-bold">DALL-E 3</div>
          <div className="text-slate-400">Image API</div>
        </div>
        <div className="bg-slate-800 rounded p-2">
          <div className="text-purple-400 font-bold">Stable Diffusion</div>
          <div className="text-slate-400">Fallback API</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ARCHITECTURE PLATFORM DEMO
// ============================================
export function ArchitecturePlatformDemo() {
  const [roomType, setRoomType] = useState("living");
  const [style, setStyle] = useState("modern");
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Virtual Staging Platform</span>
        <span className="text-xs bg-slate-700 px-2 py-1 rounded">v2.1</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <div className="text-xs text-slate-400 mb-2">Room Type</div>
          <div className="grid grid-cols-2 gap-1">
            {["living", "bedroom", "kitchen", "office"].map((r) => (
              <button
                key={r}
                onClick={() => setRoomType(r)}
                className={`px-2 py-1 rounded text-xs capitalize ${
                  roomType === r ? "bg-cyan-600" : "bg-slate-700"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-2">Style</div>
          <div className="grid grid-cols-2 gap-1">
            {["modern", "classic", "minimal", "luxury"].map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`px-2 py-1 rounded text-xs capitalize ${
                  style === s ? "bg-purple-600" : "bg-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-400">Upload Empty Room</span>
          <span className="text-xs text-green-400">✓ room_photo.jpg</span>
        </div>
        <div className="h-20 bg-slate-700 rounded flex items-center justify-center border-2 border-dashed border-slate-600">
          <span className="text-xs text-slate-400">Preview: {style} {roomType}</span>
        </div>
      </div>

      <button
        onClick={() => setIsGenerating(!isGenerating)}
        className="w-full py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded text-xs font-medium"
      >
        {isGenerating ? "Processing..." : "Generate Staged Room"}
      </button>

      <div className="mt-3 text-xs text-slate-400 text-center">
        Integrates with Stability AI for room transformation
      </div>
    </div>
  );
}

// ============================================
// PRODUCT VISUALIZATION PLATFORM DEMO
// ============================================
export function ProductPlatformDemo() {
  const [background, setBackground] = useState("studio");
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Product Photo Platform</span>
        <span className="text-xs bg-orange-600 px-2 py-1 rounded">E-commerce</span>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Product Image</div>
        <div
          onClick={() => setUploaded(true)}
          className="h-24 bg-slate-700 rounded flex items-center justify-center border-2 border-dashed border-slate-600 cursor-pointer hover:border-cyan-500"
        >
          {uploaded ? (
            <div className="text-center">
              <div className="text-2xl mb-1">📦</div>
              <span className="text-xs text-green-400">product.png uploaded</span>
            </div>
          ) : (
            <span className="text-xs text-slate-400">Click to upload product image</span>
          )}
        </div>
      </div>

      <div className="mb-3">
        <div className="text-xs text-slate-400 mb-2">Background Style</div>
        <div className="grid grid-cols-4 gap-1">
          {["studio", "lifestyle", "outdoor", "gradient"].map((bg) => (
            <button
              key={bg}
              onClick={() => setBackground(bg)}
              className={`px-2 py-1.5 rounded text-xs capitalize ${
                background === bg ? "bg-cyan-600" : "bg-slate-700"
              }`}
            >
              {bg}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-slate-800 rounded p-2 text-center">
          <div className="text-xs text-slate-400">Output</div>
          <div className="text-sm text-cyan-400">4K PNG</div>
        </div>
        <div className="bg-slate-800 rounded p-2 text-center">
          <div className="text-xs text-slate-400">Variations</div>
          <div className="text-sm text-purple-400">4 angles</div>
        </div>
      </div>

      <button
        disabled={!uploaded}
        className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed rounded text-xs font-medium"
      >
        {uploaded ? "Remove Background & Generate" : "Upload Product First"}
      </button>
    </div>
  );
}

// ============================================
// VIDEO PLATFORM DEMO
// ============================================
export function VideoPlatformDemo() {
  const [videoType, setVideoType] = useState("explainer");
  const [duration, setDuration] = useState("30s");
  const [inQueue, setInQueue] = useState(false);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Video Generation Platform</span>
        <span className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          Runway Connected
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <div className="text-xs text-slate-400 mb-2">Video Type</div>
          <select
            value={videoType}
            onChange={(e) => setVideoType(e.target.value)}
            className="w-full bg-slate-700 rounded px-2 py-1.5 text-xs"
          >
            <option value="explainer">Explainer</option>
            <option value="promo">Promotional</option>
            <option value="social">Social Clip</option>
            <option value="product">Product Demo</option>
          </select>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-2">Duration</div>
          <div className="flex gap-1">
            {["15s", "30s", "60s"].map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`flex-1 py-1.5 rounded text-xs ${
                  duration === d ? "bg-purple-600" : "bg-slate-700"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="text-xs text-slate-400 mb-2">Script/Prompt</div>
        <textarea
          className="w-full bg-slate-700 rounded p-2 text-xs h-16 resize-none"
          placeholder="Describe your video concept..."
          defaultValue="Modern tech product showcase with smooth transitions..."
        />
      </div>

      {inQueue && (
        <div className="bg-purple-900/30 border border-purple-500/50 rounded p-2 mb-3">
          <div className="flex justify-between text-xs">
            <span className="text-purple-400">Rendering...</span>
            <span className="text-slate-400">Est. 2-3 min</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
            <div className="bg-purple-500 h-1.5 rounded-full w-1/3 animate-pulse" />
          </div>
        </div>
      )}

      <button
        onClick={() => setInQueue(!inQueue)}
        className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded text-xs font-medium"
      >
        {inQueue ? "View Queue (1 job)" : "Add to Render Queue"}
      </button>
    </div>
  );
}

// ============================================
// GAMING PLATFORM DEMO
// ============================================
export function GamingPlatformDemo() {
  const [assetType, setAssetType] = useState("character");
  const [styleGuide, setStyleGuide] = useState(true);

  return (
    <div className="bg-slate-900 rounded-xl p-4 text-white font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-cyan-400 font-bold">Game Asset Pipeline</span>
        <span className="text-xs bg-purple-600 px-2 py-1 rounded">Studio Pro</span>
      </div>

      <div className="mb-3">
        <div className="text-xs text-slate-400 mb-2">Asset Type</div>
        <div className="grid grid-cols-4 gap-1">
          {["character", "environment", "prop", "UI"].map((type) => (
            <button
              key={type}
              onClick={() => setAssetType(type)}
              className={`px-2 py-1.5 rounded text-xs capitalize ${
                assetType === type ? "bg-cyan-600" : "bg-slate-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-800 rounded p-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400">Style Guide</span>
          <button
            onClick={() => setStyleGuide(!styleGuide)}
            className={`w-8 h-4 rounded-full transition-colors ${
              styleGuide ? "bg-green-500" : "bg-slate-600"
            }`}
          >
            <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
              styleGuide ? "translate-x-4" : "translate-x-0.5"
            }`} />
          </button>
        </div>
        {styleGuide && (
          <div className="text-xs text-green-400">
            ✓ Fantasy RPG style guide loaded (127 reference images)
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-slate-800 rounded p-2 text-center">
          <div className="text-lg">🎮</div>
          <div className="text-xs text-slate-400">In Queue</div>
          <div className="text-sm text-cyan-400">12</div>
        </div>
        <div className="bg-slate-800 rounded p-2 text-center">
          <div className="text-lg">✓</div>
          <div className="text-xs text-slate-400">Generated</div>
          <div className="text-sm text-green-400">847</div>
        </div>
        <div className="bg-slate-800 rounded p-2 text-center">
          <div className="text-lg">⭐</div>
          <div className="text-xs text-slate-400">Approved</div>
          <div className="text-sm text-purple-400">612</div>
        </div>
      </div>

      <button className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-xs font-medium">
        Generate {assetType} Concept (4 variations)
      </button>
    </div>
  );
}

// Export demo mapping
export const demoComponents: Record<string, React.ReactNode> = {
  "Healthcare": <HealthcareDemo />,
  "Finance & Banking": <FinanceDemo />,
  "Legacy Modernization": <LegacyDemo />,
  "Data & Analytics": <DataAnalyticsDemo />,
  "System Integration": <SystemIntegrationDemo />,
  "Manufacturing": <ManufacturingDemo />,
  "Document Automation": <DocumentDemo />,
  "Professional Services": <ProfessionalServicesDemo />,
  "Conversational AI": <ConversationalAIDemo />,
  "Retail & E-Commerce": <RetailDemo />,
  "Real Estate": <RealEstateDemo />,
  "Logistics & Transportation": <LogisticsDemo />,
  "E-Learning & Training": <ELearningDemo />,
  "Marketing & Advertising": <MarketingPlatformDemo />,
  "Fashion & Apparel": <FashionDemo />,
  "Architecture & Interior Design": <ArchitecturePlatformDemo />,
  "Product & Industrial": <ProductPlatformDemo />,
  "Creative & Media": <VideoPlatformDemo />,
  "Entertainment & Gaming": <GamingPlatformDemo />,
};
