import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderSpotlight from './components/FounderSpotlight';
import Services from './components/Services';
import ScopeEstimator from './components/ScopeEstimator';
import RoiCalculator from './components/RoiCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import ContactFooter from './components/ContactFooter';
import DeploymentModal from './components/DeploymentModal';

function App() {
  const [deploymentModalOpen, setDeploymentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#121316] flex flex-col selection:bg-[#EBDCB9] selection:text-[#121316]">
      {/* Executive Frosted Navigation */}
      <Navbar onOpenDeploymentModal={() => setDeploymentModalOpen(true)} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Three.js 3D Engine */}
        <Hero />

        {/* 2. Founder & Track Record Spotlight (Keshav Vatsa, DLF Phase 1, Gurugram) */}
        <FounderSpotlight />

        {/* 3. Core Digital Services (Deep Dives, 4-step pipelines, transparent pricing) */}
        <Services />

        {/* 4. Interactive Client Scope & Cost Estimator (Lead Magnet #1) */}
        <ScopeEstimator />

        {/* 5. Digital ROI & Revenue Leakage Calculator (Lead Magnet #2) */}
        <RoiCalculator />

        {/* 6. Why High-Growth Brands Choose Kairos Elite */}
        <WhyChooseUs />
      </main>

      {/* 7. Conversion-Optimized Footer & Intake Desk */}
      <ContactFooter onOpenDeploymentModal={() => setDeploymentModalOpen(true)} />

      {/* Zero-Budget CI/CD Deployment Modal */}
      <DeploymentModal
        isOpen={deploymentModalOpen}
        onClose={() => setDeploymentModalOpen(false)}
      />
    </div>
  );
}

export default App;
