import React, { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, CircleHelp, Layers3, LineChart, ScanSearch, Sparkles, Target, Workflow } from 'lucide-react';

const proofCards = [
  { n: '01', title: 'Get discovered', text: 'Search visibility, local presence, social content and a clear brand story help the right people find you.', tags: ['SEO', 'Local search', 'Social'] },
  { n: '02', title: 'Turn attention into action', text: 'A focused landing page, persuasive offer and friction-aware enquiry journey make the next step obvious.', tags: ['Landing pages', 'CRO', 'Creative'] },
  { n: '03', title: 'Follow up consistently', text: 'Connected forms, CRM stages and messaging workflows help your team respond without losing context.', tags: ['CRM', 'WhatsApp workflows', 'Automation'] },
];

const checklist = [
  ['Positioning', 'Your offer is clear in one sentence'], ['Positioning', 'Your ideal customer is defined'], ['Positioning', 'Your differentiator is easy to understand'],
  ['Brand', 'Your visual identity is consistent'], ['Brand', 'Your messaging sounds consistent across channels'], ['Brand', 'Your proof and trust signals are visible'],
  ['Website', 'Your website works well on mobile'], ['Website', 'Your main call to action is obvious'], ['Website', 'Your key pages load quickly'], ['Website', 'Your forms ask only for essential details'],
  ['Discovery', 'Your Google Business Profile is maintained'], ['Discovery', 'Your important pages have SEO titles and descriptions'], ['Discovery', 'Your site has useful, relevant content'], ['Discovery', 'Your social profiles link to one clear destination'],
  ['Acquisition', 'Campaign goals and conversion events are defined'], ['Acquisition', 'Ad creative matches the landing page'], ['Acquisition', 'Lead sources can be identified'],
  ['Operations', 'New enquiries have an owner'], ['Operations', 'Follow-up steps are documented'], ['Operations', 'Leads are tracked in one place'], ['Operations', 'You review performance and next actions regularly'],
];

const faqs = [
  ['What types of businesses do you work with?', 'Kairos Elite is structured to support service businesses, local brands, growing companies and online-first businesses. The right scope depends on your goals, resources and timeline.'],
  ['Can I hire you for just one service?', 'Yes. You can start with a focused project such as a website, campaign, brand identity, SEO foundation or automation workflow. We can also coordinate multiple services when they need to work together.'],
  ['Do you guarantee leads or sales?', 'No responsible agency can guarantee a specific business outcome. We agree on the work, tracking and success measures, then use real performance data to improve the system.'],
  ['How do projects begin?', 'We start with a discovery conversation, clarify the business objective, recommend a practical scope and share the next steps before work begins.'],
  ['Can you improve an existing website or marketing setup?', 'Absolutely. We can review what is already working, identify friction and recommend improvements without automatically rebuilding everything.'],
];

export default function AgencyExperience() {
  const [checked, setChecked] = useState({});
  const [expanded, setExpanded] = useState(0);
  const done = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const score = Math.round((done / checklist.length) * 100);
  const toggle = (i) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const grouped = ['Positioning', 'Brand', 'Website', 'Discovery', 'Acquisition', 'Operations'];

  return <>
    <section className="ke-proof section" id="work">
      <div className="section-head"><div><span className="eyebrow">A CONNECTED GROWTH SYSTEM</span><h2>Not disconnected tasks.<br/><em>A better customer journey.</em></h2></div><p>We plan the full path from first impression to enquiry and follow-up—then build the digital pieces that support it.</p></div>
      <div className="ke-proof-grid">{proofCards.map((card, i) => <article className="ke-proof-card" key={card.n}><div className="ke-proof-top"><span>{card.n} / THE JOURNEY</span><span className="ke-proof-icon">{i === 0 ? <ScanSearch/> : i === 1 ? <Target/> : <Workflow/>}</span></div><h3>{card.title}</h3><p>{card.text}</p><div className="ke-tags">{card.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      <div className="ke-note"><Sparkles size={17}/><span>One coordinated plan. Clear priorities. Progress you can actually review.</span></div>
    </section>

    <section className="ke-blueprint section" id="blueprint">
      <div className="section-head"><div><span className="eyebrow">THE 21-POINT GROWTH BLUEPRINT</span><h2>See what your<br/><em>digital foundation needs.</em></h2></div><p>Use this practical self-review to check the building blocks of your online presence. Select the items already in place and see your progress update.</p></div>
      <div className="ke-blueprint-layout">
        <div className="ke-checklist">{grouped.map(group => <div className="ke-check-group" key={group}><div className="ke-check-heading"><span>{group}</span><small>{checklist.filter(x => x[0] === group && checked[checklist.indexOf(x)]).length}/{checklist.filter(x => x[0] === group).length} complete</small></div>{checklist.map(([g, label], i) => g === group && <label className="ke-check-item" key={label}><input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)}/><span>{label}</span><CheckCircle2 size={17}/></label>)}</div>)}</div>
        <aside className="ke-score-card"><div className="ke-score-orbit" style={{ '--ke-score': `${score}%` }}><div><strong>{score}</strong><small>/ 100</small></div></div><span className="eyebrow">YOUR SELF-REVIEW</span><h3>{score >= 80 ? 'A strong starting point.' : score >= 45 ? 'Good progress. Find the gaps.' : 'Start with the foundations.'}</h3><p>{done} of {checklist.length} items marked as in place. Use the unchecked items to shape your next priorities.</p><div className="ke-score-stats"><span><b>{checklist.length - done}</b><small>Items to review</small></span><span><b>{done}</b><small>In place</small></span></div><a className="btn-primary" href="#contact">Discuss my growth plan <ArrowUpRight size={16}/></a><small className="ke-disclaimer">This is a self-assessment, not an independent technical audit or performance guarantee.</small></aside>
      </div>
    </section>

    <section className="ke-method section">
      <div className="ke-method-heading"><span className="eyebrow">BUILT AROUND YOUR BUSINESS</span><h2>Clarity before complexity.</h2><p>We don't recommend every service to every business. We identify the constraint, choose the right tools and build in a sensible order.</p></div>
      <div className="ke-method-grid"><div><Layers3/><b>One coordinated team</b><span>Strategy, design, marketing and technology considered together.</span></div><div><LineChart/><b>Measurement from day one</b><span>Define useful signals before investing in campaigns or tools.</span></div><div><CircleHelp/><b>Advice without the jargon</b><span>Understand what is being built, why it matters and what comes next.</span></div></div>
    </section>

    <section className="ke-faq section" id="faq">
      <div className="section-head"><div><span className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</span><h2>Before we<br/><em>get to work.</em></h2></div><p>A few useful details about working with Kairos Elite. If your question isn't covered, send it through the enquiry form.</p></div>
      <div className="ke-faq-list">{faqs.map(([question, answer], i) => <div className={`ke-faq-item ${expanded === i ? 'is-open' : ''}`} key={question}><button onClick={() => setExpanded(expanded === i ? -1 : i)} aria-expanded={expanded === i}><span>{question}</span><ChevronDown size={19}/></button>{expanded === i && <p>{answer}</p>}</div>)}</div>
      <a className="text-link" href="#contact">Have another question? Talk to us <ArrowRight size={16}/></a>
    </section>
  </>;
}
