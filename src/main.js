import './style.css'

document.querySelector('#app').innerHTML = `
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
      <p>&copy; 2023 InsightAI Solutions. All rights reserved.</p>
    </footer>
  </div>
`

document.querySelector('#primary-cta').addEventListener('click', () => {
  alert('Welcome to the future of AI! Redirecting to signup...');
})
