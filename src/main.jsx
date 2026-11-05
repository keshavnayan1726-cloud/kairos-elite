import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { ArrowUpRight, ArrowRight, Menu, X, Sparkles, Globe2, Megaphone, Palette, Code2, Search, BarChart3, Bot, ShieldCheck, Zap, Mail, Check, Calculator, Target, TrendingUp, MessageCircle, ChevronDown, Send, User } from 'lucide-react';
import './style.css';

const services = [
  {icon:Globe2,n:'Websites & Digital Experiences',d:'High-converting websites, landing pages, e-commerce, UI/UX and ongoing optimization.',tags:['Web design','Development','E-commerce']},
  {icon:Megaphone,n:'Performance Marketing',d:'Paid campaigns built around qualified leads, measurable acquisition and profitable growth.',tags:['Meta Ads','Google Ads','Campaign strategy']},
  {icon:Palette,n:'Branding & Creative',d:'Distinctive identities and content systems that make your business memorable.',tags:['Brand identity','Graphic design','Video editing']},
  {icon:Search,n:'SEO & Online Presence',d:'Improve discoverability with technical SEO, local search and useful content.',tags:['Technical SEO','Local SEO','Content']},
  {icon:MessageCircle,n:'Social Media & Automation',d:'Consistent social presence, lead workflows and customer communication systems.',tags:['Social media','WhatsApp flows','CRM']},
  {icon:Code2,n:'AI & Business Technology',d:'Practical AI assistants, workflow automation, integrations and custom digital tools.',tags:['AI workflows','Automation','Integrations']},
];

function RobotScene(){
 const mount=useRef(null);
 useEffect(()=>{
  const el=mount.current; if(!el) return;
  let renderer, frame, observer; const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(36,1,.1,100); camera.position.set(0,0,7.4);
  try { renderer=new THREE.WebGLRenderer({alpha:true,antialias:true}); } catch(e){ return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)); renderer.setSize(el.clientWidth,el.clientHeight); renderer.outputColorSpace=THREE.SRGBColorSpace; el.appendChild(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0xc4d4d0,2)); const key=new THREE.DirectionalLight(0xffffff,3); key.position.set(4,5,6); scene.add(key); const rim=new THREE.PointLight(0x6bc6b0,18,12); rim.position.set(-3,1,3); scene.add(rim);
  const bot=new THREE.Group(); scene.add(bot);
  const shell=new THREE.MeshPhysicalMaterial({color:0xe9f0ec,metalness:.42,roughness:.24,clearcoat:1,clearcoatRoughness:.12});
  const dark=new THREE.MeshStandardMaterial({color:0x182d2a,metalness:.6,roughness:.22});
  const glow=new THREE.MeshStandardMaterial({color:0x68d6b4,emissive:0x2bbd93,emissiveIntensity:1.4,metalness:.2,roughness:.25});
  const add=(geo,mat,pos,parent=bot)=>{const m=new THREE.Mesh(geo,mat);m.position.set(...pos);parent.add(m);return m;};
  add(new THREE.SphereGeometry(1.04,48,32),shell,[0,0,0]).scale.set(1,.95,.72);
  add(new THREE.BoxGeometry(1.65,.17,.16),dark,[0,-.05,.68]);
  for(const x of [-.39,.39]){add(new THREE.SphereGeometry(.115,24,16),glow,[x,.02,.77]);}
  add(new THREE.BoxGeometry(.38,.055,.08),dark,[0,-.38,.68]);
  const earGeo=new THREE.CylinderGeometry(.16,.16,.16,32); for(const x of [-1.05,1.05]){const ear=add(earGeo,dark,[x,0,0]);ear.rotation.z=Math.PI/2;add(new THREE.SphereGeometry(.075,20,12),glow,[x*1.08,0,0]);}
  const neck=add(new THREE.CylinderGeometry(.23,.3,.36,32),dark,[0,-1.05,0]);
  const body=add(new THREE.SphereGeometry(.75,40,28),shell,[0,-1.75,0]);body.scale.set(1.12,.76,.68);
  add(new THREE.TorusGeometry(.5,.035,12,60),glow,[0,-1.7,.48]);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.75,.012,8,120),new THREE.MeshBasicMaterial({color:0x8fcfbd,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2.5;ring.position.y=-.6;scene.add(ring);
  const resize=()=>{if(!renderer)return;const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}; observer=new ResizeObserver(resize);observer.observe(el);
  let pointerX=0; const move=e=>{const r=el.getBoundingClientRect();pointerX=((e.clientX-r.left)/r.width-.5)*.45;};el.addEventListener('pointermove',move);
  const clock=new THREE.Clock(); const animate=()=>{frame=requestAnimationFrame(animate);const t=clock.getElapsedTime();bot.rotation.y+=(pointerX+Math.sin(t*.45)*.08-bot.rotation.y)*.035;bot.position.y=Math.sin(t*1.3)*.07;ring.rotation.z=t*.13;renderer.render(scene,camera);};animate();
  return ()=>{cancelAnimationFrame(frame);observer?.disconnect();el.removeEventListener('pointermove',move);renderer.dispose();renderer.domElement.remove();};
 },[]);
 return <div className="robot-scene" ref={mount} aria-label="Animated 3D AI assistant robot"/>;
}

function Assistant(){
 const [open,setOpen]=useState(false);
 const [q,setQ]=useState('');
 const [isTyping,setIsTyping]=useState(false);
 const [messages,setMessages]=useState([
  {
   role:'assistant',
   text:'Hello! I am Kai, your live AI growth advisor at Kairos Elite. How can I assist with your brand, website, or revenue workflows today?'
  }
 ]);
 const chatBodyRef=useRef(null);

 const prompts=[
  'Who is Keshav Vatsa?',
  'How do I contact you?',
  'Which service should I start with?',
  'What is the investment / pricing?',
  'Can you help with local SEO in Gurugram?'
 ];

 const generateAnswer=(input)=>{
  const v=input.toLowerCase();
  
  if(v.includes('keshav') || v.includes('founder') || v.includes('who are you') || v.includes('who owns')){
   return 'Kairos Elite is founded and spearheaded by Keshav Vatsa — a young entrepreneur & systems architect based in DLF Phase 1, Gurugram. Keshav directly leads technical architecture, campaign management (₹13.64L+ budgets handled), and zero-bloat execution with 100% client retention.';
  }
  
  if(v.includes('email') || v.includes('contact') || v.includes('reach') || v.includes('phone') || v.includes('whatsapp') || v.includes('talk')){
   return 'You can reach Keshav Vatsa directly at keshavvatsa61@gmail.com. You can also fill out the project enquiry form below or connect for an on-site strategic meeting in DLF Phase 1, Gurugram.';
  }

  if(v.includes('price') || v.includes('cost') || v.includes('investment') || v.includes('pricing') || v.includes('rate')){
   return 'Our investments are transparent with zero hidden fees:\n• Websites & 3D Experiences: From ₹24,999 (~$300)\n• Local SEO & Map Pack: From ₹12,999/month\n• Custom Automation & Python Scrapers: From ₹18,000 setup\n• Performance Ads & CRO: From ₹15,000/month. Custom milestone retainers are also available.';
  }

  if(v.includes('gurugram') || v.includes('location') || v.includes('office') || v.includes('where')){
   return 'We are headquartered in DLF Phase 1, Gurugram (NCR), India. Keshav Vatsa is available for in-person strategic alignment across Cyber City, Golf Course Road, and DLF Phase 1–5, as well as serving remote partners globally.';
  }

  if(v.includes('lead') || v.includes('marketing') || v.includes('campaign') || v.includes('ad')){
   return 'To multiply qualified leads, we combine high-converting micro-funnels with targeted Meta and Google Search campaigns. Check out the "Campaign Planner" tool below on this page to model your exact ad budget, CPL, and potential customer acquisition!';
  }

  if(v.includes('service') || v.includes('start') || v.includes('what do you do') || v.includes('offer')){
   return 'We provide 6 high-impact capabilities:\n1. High-converting Websites & WebGL Experiences\n2. Performance Marketing & Meta/Google Ads\n3. Distinctive Branding & Identity Systems\n4. Local SEO & Google Business Profile Ranking\n5. Social Media & Automated Lead Workflows\n6. Custom AI Solutions & Python/n8n Scrapers.';
  }

  if(v.includes('seo') || v.includes('google') || v.includes('rank') || v.includes('map')){
   return 'Our Local SEO system focuses on Google 3-Pack Map dominance in Gurugram & Delhi-NCR through deep citation cleanup, geo-targeted category optimization, and automated review collection pipelines.';
  }

  if(v.includes('automation') || v.includes('scraper') || v.includes('n8n') || v.includes('python')){
   return 'We architect hands-off workflows using n8n and Python scrapers to automate CRM lead capture, trigger instant WhatsApp/email notifications, and sync data without expensive SaaS subscriptions.';
  }

  return 'At Kairos Elite, we build automated revenue engines, modern websites, and measurable growth systems. Share your primary business goal or write to keshavvatsa61@gmail.com, and we will tailor a sprint plan for you!';
 };

 const handleSend=(textToSend)=>{
  const text=textToSend || q;
  if(!text.trim() || isTyping) return;

  const userMsg={role:'user',text:text.trim()};
  setMessages(prev=>[...prev,userMsg]);
  setQ('');
  setIsTyping(true);

  setTimeout(()=>{
   const botReplyText=generateAnswer(text);
   setMessages(prev=>[...prev,{role:'assistant',text:botReplyText}]);
   setIsTyping(false);
  },650);
 };

 useEffect(()=>{
  if(chatBodyRef.current){
   chatBodyRef.current.scrollTop=chatBodyRef.current.scrollHeight;
  }
 },[messages,isTyping]);

 return (
  <>
   <button className="assistant-fab" onClick={()=>setOpen(!open)} aria-label="Open AI assistant">
    <Bot size={21}/>
    <span>Ask Kai (Live AI)</span>
    <span className="online-dot"/>
   </button>

   {open && (
    <div className="chat-panel" role="dialog" aria-label="Kai AI Assistant">
     <div className="chat-head">
      <div className="mini-bot"><Bot size={18}/></div>
      <div>
       <b>Kai · Kairos Live AI</b>
       <small>Direct Growth Advisor • DLF Phase 1</small>
      </div>
      <button className="icon-btn" onClick={()=>setOpen(false)} aria-label="Close Chat">
       <X size={17}/>
      </button>
     </div>

     <div className="chat-body" ref={chatBodyRef}>
      {messages.map((m,idx)=>(
       <div key={idx} className={m.role==='user'?'bubble user-bubble':'bubble'} style={{whiteSpace:'pre-line'}}>
        {m.text}
       </div>
      ))}

      {isTyping && (
       <div className="bubble" style={{display:'flex',alignItems:'center',gap:'6px',color:'#176b58'}}>
        <Sparkles size={13} className="animate-spin"/>
        <span>Kai is thinking...</span>
       </div>
      )}

      <div className="suggestions">
       <div style={{fontSize:'8px',fontWeight:700,letterSpacing:'.1em',color:'#82928b',marginBottom:'4px',textTransform:'uppercase'}}>
        Suggested Inquiries:
       </div>
       {prompts.map(p=>(
        <button key={p} onClick={()=>handleSend(p)} disabled={isTyping}>
         {p}
        </button>
       ))}
      </div>
     </div>

     <form className="chat-input" onSubmit={(e)=>{e.preventDefault();handleSend();}}>
      <input 
       value={q} 
       onChange={e=>setQ(e.target.value)} 
       placeholder="Ask about pricing, services, Keshav Vatsa..."
       disabled={isTyping}
      />
      <button aria-label="Send message" disabled={isTyping || !q.trim()}>
       <Send size={15}/>
      </button>
     </form>

     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'4px 12px 10px'}}>
      <small className="disclaimer" style={{padding:0,margin:0}}>
       Official Kairos Elite AI
      </small>
      <a 
       href="mailto:keshavvatsa61@gmail.com" 
       style={{fontSize:'8px',color:'#176b58',fontWeight:700,textDecoration:'none'}}
      >
       Email Keshav ↗
      </a>
     </div>
    </div>
   )}
  </>
 );
}

function Tools(){
 const [budget,setBudget]=useState(30000),[cpl,setCpl]=useState(300),[rate,setRate]=useState(12),[value,setValue]=useState(12000);
 const leads=Math.floor(budget/Math.max(cpl,1));const customers=Math.floor(leads*rate/100);const revenue=customers*value;
 const [price,setPrice]=useState(25000),[hours,setHours]=useState(30),[rateHour,setRateHour]=useState(500);
 const savings=hours*rateHour;
 const [score,setScore]=useState({website:false,social:false,seo:false,ads:false,follow:false});const scoreCount=Object.values(score).filter(Boolean).length*20;
 return <div className="tools-grid">
  <div className="tool-card"><div className="tool-top"><span className="tool-icon"><TrendingUp size={19}/></span><span className="tool-label">01 / CAMPAIGN PLANNER</span></div><h3>Estimate your campaign potential.</h3><p>Model a simple lead-generation scenario using your own assumptions.</p><label>Monthly ad budget <b>₹{budget.toLocaleString('en-IN')}</b></label><input type="range" min="5000" max="200000" step="5000" value={budget} onChange={e=>setBudget(+e.target.value)}/><label>Estimated cost per lead <b>₹{cpl}</b></label><input type="range" min="50" max="2000" step="25" value={cpl} onChange={e=>setCpl(+e.target.value)}/><label>Lead-to-customer rate <b>{rate}%</b></label><input type="range" min="1" max="50" value={rate} onChange={e=>setRate(+e.target.value)}/><label>Average customer value <b>₹{value.toLocaleString('en-IN')}</b></label><input type="range" min="1000" max="100000" step="1000" value={value} onChange={e=>setValue(+e.target.value)}/><div className="result-strip"><div><small>Estimated leads</small><strong>{leads}</strong></div><div><small>Potential customers</small><strong>{customers}</strong></div><div><small>Illustrative revenue</small><strong>₹{revenue.toLocaleString('en-IN')}</strong></div></div><small className="fine">Illustrative only. Actual results depend on targeting, offer, market and execution; revenue is not guaranteed.</small></div>
  <div className="tool-card"><div className="tool-top"><span className="tool-icon"><Calculator size={19}/></span><span className="tool-label">02 / AUTOMATION VALUE</span></div><h3>What could your time be worth?</h3><p>Estimate the monthly value of hours that might be saved through better workflows.</p><label>Hours spent on repeat tasks / month <b>{hours} hrs</b></label><input type="range" min="1" max="160" value={hours} onChange={e=>setHours(+e.target.value)}/><label>Estimated value of an hour <b>₹{rateHour}</b></label><input type="range" min="100" max="3000" step="50" value={rateHour} onChange={e=>setRateHour(+e.target.value)}/><div className="big-result"><small>Potential monthly time value</small><strong>₹{savings.toLocaleString('en-IN')}</strong><span>{hours} hours × ₹{rateHour.toLocaleString('en-IN')} per hour</span></div><small className="fine">A planning estimate, not guaranteed cash savings. Actual value depends on implementation and adoption.</small></div>
  <div className="tool-card audit-card"><div className="tool-top"><span className="tool-icon"><Target size={19}/></span><span className="tool-label">03 / DIGITAL PRESENCE CHECK</span></div><h3>How complete is your digital foundation?</h3><p>Tick the foundations your business already has. Your score updates instantly.</p><div className="audit-list">{[['website','A clear, mobile-friendly website'],['social','Active and consistent social channels'],['seo','Search and local SEO basics'],['ads','Trackable paid campaigns'],['follow','A lead follow-up process']].map(([k,l])=><label key={k} className="check-row"><input type="checkbox" checked={score[k]} onChange={e=>setScore({...score,[k]:e.target.checked})}/><span>{l}</span><Check size={16}/></label>)}</div><div className="score-row"><div className="score-ring" style={{'--score':scoreCount+'%'}}><strong>{scoreCount}</strong><small>/100</small></div><div><b>{scoreCount>=80?'Strong foundation':scoreCount>=40?'Room to improve':'Start with the basics'}</b><p>{5-Object.values(score).filter(Boolean).length} key foundations left to review.</p></div></div><small className="fine">This is a self-assessment checklist, not a technical website audit.</small></div>
 </div>;
}

function App(){
 const [menu,setMenu]=useState(false),[active,setActive]=useState('home');
 const [form,setForm]=useState({name:'',email:'',service:'Website & digital experience',message:''});
 const submit=e=>{e.preventDefault();const body=`Name: ${form.name}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;window.location.href=`mailto:keshavvatsa61@gmail.com?subject=Project%20enquiry%20-%20Kairos%20Elite&body=${body}`;};
 const close=()=>setMenu(false);
 return <><header className="header"><a className="brand" href="#home" onClick={close}><span className="brand-mark">K<span>.</span></span><span>KAIROS <b>ELITE</b><small>DIGITAL GROWTH STUDIO</small></span></a><button className="mobile-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav className={menu?'nav open':'nav'}>{[['home','Home'],['services','Services'],['about','About'],['tools','Growth tools'],['contact','Contact']].map(([id,label])=><a key={id} href={'#'+id} onClick={close}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Let's talk <ArrowUpRight size={15}/></a></nav></header>
 <main><section className="hero" id="home"><div className="hero-copy"><div className="eyebrow"><span/> STRATEGY · CREATIVE · TECHNOLOGY</div><h1>Make your next<br/>move <em>matter.</em></h1><p className="hero-desc">A digital growth partner for ambitious businesses. Founded by Keshav Vatsa in DLF Phase 1, Gurugram. We bring strategy, design, marketing and technology together to move your business forward.</p><div className="hero-actions"><a className="btn-primary" href="#contact">Build your next chapter <ArrowUpRight size={17}/></a><a className="text-link" href="#services">Explore what we do <ArrowRight size={16}/></a></div><div className="hero-proof"><div className="proof-avatars"><span>K</span><span>✦</span><span>+</span></div><div><b>Built around real business goals</b><small>Thoughtful work. Measurable progress.</small></div></div></div><div className="hero-visual"><div className="visual-glow"/><div className="visual-kicker">MEET KAI <span>AI ASSISTANT</span></div><RobotScene/><div className="float-card float-one"><span className="float-icon"><Sparkles size={16}/></span><div><b>Ideas into impact</b><small>Strategy meets execution</small></div></div><div className="float-card float-two"><span className="pulse-dot"/><div><b>Always exploring</b><small>Your digital growth guide</small></div></div><div className="visual-caption">Curious by design. Helpful by nature.</div></div><div className="hero-bottom"><span>INDEPENDENT DIGITAL AGENCY</span><span>DLF PHASE 1 · GURUGRAM · INDIA</span><span>SCROLL TO EXPLORE ↓</span></div></section>
 <section className="metrics"><div className="metric-intro"><span className="eyebrow">A TRACK RECORD IN MOTION</span><p>Built on relationships, trust and the work that moves businesses forward.</p></div><div className="metric"><strong>₹13.64<span>L</span></strong><small>Value served</small></div><div className="metric"><strong>12<span>+</span></strong><small>Real clients served</small></div><div className="metric"><strong>360°</strong><small>Digital capabilities</small></div><div className="metric-note">Figures supplied by the agency owner Keshav Vatsa. “Value served” is not a claim of revenue or profit.</div></section>
 <section className="section services-section" id="services"><div className="section-head"><div><span className="eyebrow">WHAT WE BRING TO THE TABLE</span><h2>Everything digital.<br/><em>One clear direction.</em></h2></div><p>From the first impression to the final conversion, we connect every part of your digital presence into one considered experience.</p></div><div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.n}><div className="service-number">0{i+1}</div><div className="service-icon"><s.icon size={22}/></div><h3>{s.n}</h3><p>{s.d}</p><div className="tag-row">{s.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact" aria-label={'Enquire about '+s.n}><ArrowUpRight size={18}/></a></article>)}</div></section>
 <section className="manifesto" id="about"><div className="manifesto-left"><span className="eyebrow">THE KAIROS POINT OF VIEW</span><h2>Good timing is<br/>a decision. <em>Not luck.</em></h2><p>Kairos is the moment when the right action creates momentum. Kairos Elite exists to help businesses recognize that moment—and act on it with clarity.</p><a className="text-link" href="#contact">Meet your growth partner <ArrowRight size={16}/></a></div><div className="manifesto-right"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit-core">K<span>.</span></div><div className="orbit-label label-a">CLARITY</div><div className="orbit-label label-b">CREATIVITY</div><div className="orbit-label label-c">COMPOUNDING GROWTH</div></div></section>
 <section className="founder"><div className="founder-card"><div className="founder-monogram">KV<span>.</span></div><div className="founder-copy"><span className="eyebrow">THE PERSON BEHIND THE PARTNERSHIP</span><h2>Keshav Vatsa<span>.</span></h2><p className="founder-role">Founder · Kairos Elite · Gurugram</p><p>Bringing together business thinking, creative execution and digital tools to help brands build a stronger presence and pursue meaningful growth.</p><a href="#contact" className="text-link">Start a conversation <ArrowRight size={16}/></a></div><div className="founder-aside"><Sparkles size={24}/><p>“Make every digital touchpoint count.”</p><small>THE KAIROS ELITE PRINCIPLE</small></div></div></section>
 <section className="section tools-section" id="tools"><div className="section-head"><div><span className="eyebrow">THE GROWTH DESK</span><h2>Think clearly.<br/><em>Choose confidently.</em></h2></div><p>Free, simple tools to help you understand the numbers behind your next business decision.</p></div><Tools/></section>
 <section className="process"><div className="process-head"><span className="eyebrow">HOW WE WORK</span><h2>Clear steps.<br/><em>Meaningful progress.</em></h2></div><div className="process-grid">{[['01','Discover','We understand your business, audience and goals.'],['02','Define','We build a focused plan around the outcomes that matter.'],['03','Create','Our team brings the strategy to life across channels.'],['04','Improve','We learn from performance and keep making it better.']].map(([n,t,d])=><div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
 <section className="contact-section" id="contact"><div className="contact-copy"><span className="eyebrow">YOUR NEXT MOVE STARTS HERE</span><h2>Let's make<br/>something <em>count.</em></h2><p>Tell us where you want to go. We'll help you explore the right way to get there.</p><div className="contact-detail"><Mail size={17}/> keshavvatsa61@gmail.com</div><div className="contact-detail"><Globe2 size={17}/> DLF Phase 1, Gurugram, India · Working everywhere</div></div><form className="contact-form" onSubmit={submit}><div className="form-heading"><b>Tell us about your project</b><span>We’ll take it from here.</span></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label><label>What do you need help with?<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>{['Website & digital experience','Performance marketing','Branding & creative','SEO & online presence','Social media & automation','AI & business technology','Not sure yet'].map(x=><option key={x}>{x}</option>)}</select></label><label>Tell us a little about it<textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your goals, challenges or big idea…"/></label><button className="btn-primary form-submit">Send project enquiry <ArrowUpRight size={17}/></button><small className="fine">This opens your email app with the enquiry pre-filled to keshavvatsa61@gmail.com. No information is stored on this demo website.</small></form></section></main>
 <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span>KAIROS <b>ELITE</b><small>DIGITAL GROWTH STUDIO</small></span></a><p>Digital, elevated. © {new Date().getFullYear()} Kairos Elite · Keshav Vatsa (keshavvatsa61@gmail.com).</p><div className="footer-links"><a href="#services">Services</a><a href="#tools">Growth tools</a><a href="#contact">Contact</a></div></footer><Assistant/></>;
}

createRoot(document.getElementById('root')).render(<App/>);
