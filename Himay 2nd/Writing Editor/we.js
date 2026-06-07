document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('assignment-select');
  const area = document.getElementById('writing-area');
  const wordCount = document.getElementById('word-count-display');
  const checkBtn = document.getElementById('check-writing-btn');
  const submitBtn = document.getElementById('submit-assignment-btn');
  const toast = document.getElementById('submit-toast');

  // Simulated Assignment Data
  const assignments = {
    "1": { title: "Research Paper: Climate Change", due: "Jul 15, 2025", words: "1,200" },
    "2": { title: "Analytical Essay: Social Media", due: "Jul 18, 2025", words: "800" }
  };

  // Select Assignment logic
  select.addEventListener('change', () => {
    const data = assignments[select.value];
    if (data) {
      document.getElementById('meta-title').textContent = data.title;
      document.getElementById('meta-due').textContent = data.due;
      document.getElementById('meta-words').textContent = data.words;
    } else {
      document.getElementById('meta-title').textContent = '—';
      document.getElementById('meta-due').textContent = '—';
      document.getElementById('meta-words').textContent = '—';
    }
  });

  // Word Counter logic
  area.addEventListener('input', () => {
    const text = area.innerText || area.textContent || '';
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    wordCount.textContent = `${words.toLocaleString()} word${words !== 1 ? 's' : ''}`;
  });

  // Simulated Submit Feedback
  submitBtn.addEventListener('click', () => {
    if (!select.value) { alert("Please select an assignment first."); return; }
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  });

  // Simulated "Check Writing" Loading State
  checkBtn.addEventListener('click', () => {
    const text = area.innerText || '';
    if (!text.trim()) { alert('Please write something before checking.'); return; }

    // Loading State
    checkBtn.disabled = true;
    checkBtn.innerHTML = `
      <svg class="spin-icon" viewBox="0 0 20 20" fill="currentColor" style="animation:spin .8s linear infinite; width:14px; height:14px;">
        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
      </svg>
      Analyzing…`;

    // Simulated API response delay
    setTimeout(() => {
      checkBtn.disabled = false;
      checkBtn.innerHTML = `
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        Check Writing`;
      
      // Update sidebar mock stats
      document.getElementById('score-num').textContent = "92";
      document.getElementById('score-arc').style.strokeDasharray = "92, 100";
      document.getElementById('score-arc').style.stroke = "var(--green)";
      document.getElementById('error-count').textContent = "1";
      document.getElementById('error-list').innerHTML = `
        <div style="padding: .6rem .75rem; border-radius: 6px; background: var(--gray-50); border: 1px solid var(--gray-100); font-size: .78rem; display: flex; flex-direction: column; gap: .15rem;">
          <span style="font-size: .65rem; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--red);">SPELL</span>
          <span style="font-weight: 600; color: var(--red);">"teh"</span>
          <span style="color: var(--green);">→ the</span>
          <span style="color: var(--gray-500);">Spelling error</span>
        </div>`;
    }, 1500);
  });
});