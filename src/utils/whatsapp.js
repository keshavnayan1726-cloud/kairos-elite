export const getWhatsAppLink = (message) => {
  // Keshav Vatsa / Kairos Elite WhatsApp intake
  const defaultPhone = "919999999999"; // Can be updated or customized
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${defaultPhone}?text=${encodedText}`;
};

export const generateScopeQuoteWhatsApp = (scopeData) => {
  const {
    pageCount,
    selectedAddons,
    estimatedInr,
    estimatedUsd,
    timeline,
    businessName,
  } = scopeData;

  const addonsList = selectedAddons.length > 0 
    ? selectedAddons.map(a => `• ${a.name} (${a.priceInr})`).join('\n') 
    : "None (Core Build Only)";

  const message = `Hello Keshav! I just configured a project on the Kairos Elite Scope Estimator.

🏢 Business / Brand: ${businessName || "Confidential Partner"}
📄 Scope: ${pageCount} High-Performance Page(s)
⚡ Selected Modules:
${addonsList}

💰 Estimated Total: ${estimatedInr} (${estimatedUsd})
⏱ Target Sprint Timeline: ${timeline}
📍 Location: DLF Phase 1, Gurugram / Remote

I would like to review the technical blueprint and confirm availability for this build.`;

  return getWhatsAppLink(message);
};

export const generateRoiWhatsApp = (roiData) => {
  const {
    monthlyVisitors,
    currentConversionRate,
    averageDealValue,
    currentRevenue,
    estimatedMonthlyLoss,
    projectedGrowth,
  } = roiData;

  const message = `Hey Keshav! I just audited my business metrics on the Kairos Elite Digital ROI & Leakage Calculator.

📊 Monthly Visitors: ${monthlyVisitors.toLocaleString()}
🎯 Current Conversion Rate: ${currentConversionRate}%
💳 Avg Deal Value: ${averageDealValue}
💸 Estimated Monthly Revenue Leaked: ${estimatedMonthlyLoss}
🚀 Kairos Elite Projected Monthly Gain: +${projectedGrowth}

Let's discuss how your 3D engineering & automated CRO pipeline can plug this leakage.`;

  return getWhatsAppLink(message);
};
