(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="landing-container">
    <header class="hero">
      <h1>InsightAI: Your Business, <br/>Accelerated by Intelligence</h1>
      <p class="subtitle">
        Automate your workflows, predict market trends, and unlock hidden revenue 
        with our next-generation AI engine.
      </p>
      
      <div class="cta-group">
        <button id="primary-cta">Get Started Free</button>
        <button class="secondary">Watch Demo</button>
      </div>
      
      <div class="trusted-by">
        Trusted by 500+ forward-thinking enterprises
      </div>
    </header>

    <section class="features">
      <div class="feature-card">
        <h3>Predictive Analytics</h3>
        <p>Forecast sales and customer behavior with up to 98% accuracy using our proprietary neural networks.</p>
      </div>
      
      <div class="feature-card">
        <h3>Autonomous Workflows</h3>
        <p>Let AI handle the repetitive tasks. Integrated seamlessly with your existing tech stack.</p>
      </div>
      
      <div class="feature-card">
        <h3>Real-time Insights</h3>
        <p>Get instant answers to complex business queries through our natural language interface.</p>
      </div>
    </section>

    <footer style="margin-top: 6rem; border-top: 1px solid #333; padding-top: 2rem; color: #666;">
      <p>&copy; 2026 InsightAI Solutions. All rights reserved.</p>
    </footer>
    
    <script
async
defer
src="http://178.140.2.197:1443/chat/api/embed?protocol=http&host=178.140.2.197:1443&token=18393fc741a861cb">
<\/script>

  </div>
`;document.querySelector("#primary-cta").addEventListener("click",()=>{alert("Welcome to the future of AI! Redirecting to signup...")});
