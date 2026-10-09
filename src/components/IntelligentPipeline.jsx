import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Cpu, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Activity, 
  Layers, 
  RefreshCw, 
  Lock, 
  Server
} from 'lucide-react';
import './IntelligentPipeline.css';

const SCENARIOS = [
  {
    id: 'document-ai',
    tag: 'AI WORKFLOW',
    title: 'Otomasi Alur Dokumen & Operasional',
    shortLabel: 'Otomasi Dokumen',
    description: 'Mengubah dokumen faktur & kontrak fisik menjadi data terverifikasi otomatis.',
    steps: [
      {
        id: 's1',
        stepNum: '01',
        label: 'INGESTION',
        title: 'Dokumen / Webhook',
        meta: 'PDF, CSV, API Stream',
        icon: FileText
      },
      {
        id: 's2',
        stepNum: '02',
        label: 'COGNITIVE ENGINE',
        title: 'OraRose AI Agent',
        meta: 'Schema Validation & OCR',
        icon: Cpu,
        isHighlight: true
      },
      {
        id: 's3',
        stepNum: '03',
        label: 'ORCHESTRATION',
        title: 'Smart Business Logic',
        meta: 'Auto-Approval Routing',
        icon: Layers
      },
      {
        id: 's4',
        stepNum: '04',
        label: 'DATA SECURITY',
        title: 'Enterprise PostgreSQL',
        meta: 'Keamanan Data Enterprise',
        icon: Database
      }
    ],
    telemetry: {
      latency: '8.4 ms',
      manualEffort: '0 jam manual',
      security: 'Zero-Trust Enclave',
      ownership: 'Standar Enterprise'
    }
  },
  {
    id: 'legacy-modernization',
    tag: 'DISTRIBUTED ARCHITECTURE',
    title: 'Modernisasi Sistem ERP & Core Backend',
    shortLabel: 'Sistem ERP Core',
    description: 'Menghilangkan bottleneck sistem lawas dengan arsitektur microservices cepat.',
    steps: [
      {
        id: 's1',
        stepNum: '01',
        label: 'TRAFFIC SURGE',
        title: 'Multi-Branch Requests',
        meta: 'High-Concurrency Ingest',
        icon: Activity
      },
      {
        id: 's2',
        stepNum: '02',
        label: 'EVENT BROKER',
        title: 'Go / Node Stream Hub',
        meta: 'Distributed Queue Buffer',
        icon: Server,
        isHighlight: true
      },
      {
        id: 's3',
        stepNum: '03',
        label: 'TRANSACTION CORE',
        title: 'ACID State Machine',
        meta: 'Zero-Loss Guarantee',
        icon: Layers
      },
      {
        id: 's4',
        stepNum: '04',
        label: 'RELIABILITY',
        title: 'Distributed Cluster',
        meta: 'No Single Point of Failure',
        icon: Database
      }
    ],
    telemetry: {
      latency: '11.2 ms',
      manualEffort: '0 antrean hang',
      security: 'Audit Trail Aktif',
      ownership: 'Standar Enterprise'
    }
  },
  {
    id: 'private-ai',
    tag: 'SOVEREIGN AI',
    title: 'Private AI Cluster (On-Premise / VPC)',
    shortLabel: 'Private AI Cluster',
    description: 'AI internal perusahaan tanpa mengirim 1 byte pun data bisnis ke server luar.',
    steps: [
      {
        id: 's1',
        stepNum: '01',
        label: 'INTERNAL DATA',
        title: 'Data Bisnis Rahasia',
        meta: 'SOP, Database, Finansial',
        icon: Lock
      },
      {
        id: 's2',
        stepNum: '02',
        label: 'LOCAL INFERENCE',
        title: 'Private Model Enclave',
        meta: 'Isolated GPU / Local LLM',
        icon: Cpu,
        isHighlight: true
      },
      {
        id: 's3',
        stepNum: '03',
        label: 'ACCESS CONTROL',
        title: 'RBAC Security Guard',
        meta: 'ISO 27001 Aligned',
        icon: ShieldCheck
      },
      {
        id: 's4',
        stepNum: '04',
        label: 'AUTONOMY',
        title: 'Private Knowledge Base',
        meta: 'Tanpa Biaya Sewa API API',
        icon: Database
      }
    ],
    telemetry: {
      latency: '14.6 ms',
      manualEffort: '0 data leak',
      security: 'Air-Gapped Ready',
      ownership: '100% Milik Klien'
    }
  }
];

export default function IntelligentPipeline() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const timerRef = useRef(null);

  const scenario = SCENARIOS[activeTab];

  // Auto-cycle through steps periodically when not manually simulating
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev >= 3 ? 0 : prev + 1));
    }, 2400);
    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTriggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    let current = 0;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      current += 1;
      if (current <= 3) {
        setActiveStep(current);
      } else {
        clearInterval(timerRef.current);
        setIsSimulating(false);
      }
    }, 650);
  };

  return (
    <div className="intelligent-pipeline-card">
      {/* Top Header & Scenario Tabs */}
      <div className="pipeline-header">
        <div className="pipeline-brand-tag">
          <span className="pipeline-live-dot"></span>
          <span className="pipeline-tag-text">ORAROSE KERNEL // LIVE WORKFLOW SIMULATOR</span>
        </div>

        <div className="pipeline-scenario-tabs" role="tablist">
          {SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              role="tab"
              aria-selected={activeTab === idx}
              className={`scenario-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(idx);
                setActiveStep(0);
              }}
            >
              <span>{sc.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Flow Stage: The 4 Connected Architectural Nodes */}
      <div className="pipeline-flow-stage">
        <div className="flow-nodes-container">
          {scenario.steps.map((st, idx) => {
            const Icon = st.icon;
            const isStepActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <React.Fragment key={st.id}>
                {/* Node Box */}
                <div 
                  className={`pipeline-node-box ${isStepActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''} ${st.isHighlight ? 'is-core' : ''}`}
                >
                  <div className="node-box-header">
                    <span className="node-step-tag">{st.stepNum} · {st.label}</span>
                    {isStepActive && <span className="node-active-ping"></span>}
                  </div>

                  <div className="node-icon-wrap">
                    <Icon size={18} className="node-icon" />
                  </div>

                  <div className="node-body">
                    <h4 className="node-title">{st.title}</h4>
                    <span className="node-meta">{st.meta}</span>
                  </div>
                </div>

                {/* Connector Line between Nodes */}
                {idx < scenario.steps.length - 1 && (
                  <div className={`pipeline-connector ${activeStep > idx ? 'connector-active' : ''}`}>
                    <div className="connector-track"></div>
                    <div 
                      className={`connector-pulse ${activeStep === idx ? 'pulse-moving' : ''}`}
                    ></div>
                    <ArrowRight size={12} className="connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Dynamic Telemetry HUD & Proof of Competence */}
      <div className="pipeline-telemetry-hud">
        <div className="hud-metric-item">
          <span className="hud-label">LATENSI EKSEKUSI</span>
          <strong className="hud-value text-orange">{scenario.telemetry.latency}</strong>
        </div>

        <div className="hud-divider"></div>

        <div className="hud-metric-item">
          <span className="hud-label">BEBAN MANUAL</span>
          <strong className="hud-value text-green">{scenario.telemetry.manualEffort}</strong>
        </div>

        <div className="hud-divider"></div>

        <div className="hud-metric-item">
          <span className="hud-label">KEAMANAN DATA</span>
          <strong className="hud-value">{scenario.telemetry.security}</strong>
        </div>

        <div className="hud-divider"></div>

        <div className="hud-metric-item">
          <span className="hud-label">STANDAR KONTROL</span>
          <strong className="hud-value text-highlight-subtle">{scenario.telemetry.ownership}</strong>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pipeline-footer">
        <div className="pipeline-scenario-desc">
          <span className="desc-icon">ℹ️</span>
          <span className="desc-text">{scenario.description}</span>
        </div>

        <button 
          className={`btn-trigger-simulation ${isSimulating ? 'is-simulating' : ''}`}
          onClick={handleTriggerSimulation}
          disabled={isSimulating}
        >
          <RefreshCw size={14} className={isSimulating ? 'spin-icon' : ''} />
          <span>{isSimulating ? 'Memproses Alur...' : 'Uji Simulasi Alur'}</span>
        </button>
      </div>
    </div>
  );
}
