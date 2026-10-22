// Data constants (QUIZ_BANK, FLASHCARD_BANK, CHEAT_SHEETS) are loaded from constants.js
// ==============================================================================
// VINUNI AV DATA TRACK - APPLICATION LOGIC (app.js)
// Comprehensive State Management, Audio Synth, 3D Flashcards, Exam & Search Engine
// Utilizing Themify Icons, Urbanist & Playwrite_VN_Guides Typography
// ==============================================================================

// --- 1. DATA DEFINITIONS ---

const MODULE_NAMES = {
  1: "Khối 1: Nhận thức 2D (Ngày 1-5)",
  2: "Khối 2: Chất lượng & Vòng đời (Ngày 6-8)",
  3: "Khối 3: Cảm biến chuyên biệt 2D (Ngày 9-11)",
  4: "Khối 4: 3D LiDAR & Multi-Sensor (Ngày 12-14)"
};


// --- 2. GLOBAL APP STATE ---
let currentQuestions = [];
let userAnswers = {};
let isExamSubmitted = false;
let examTimerInterval = null;
let timeLeftSeconds = 90 * 60;
let soundEnabled = true;

// Practice Mode Live Stopwatch State
let practiceSeconds = 0;
let practiceTimerInterval = null;
let isPracticeTimerPaused = false;

let currentFlashcardIndex = 0;
let filteredFlashcards = [...FLASHCARD_BANK];
let learnedCardIds = JSON.parse(localStorage.getItem("vinuni_learned_cards") || "[]");

// --- 3. WEB AUDIO SYNTHESIZER ---
const audioCtx = (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined')
  ? new (window.AudioContext || window.webkitAudioContext)()
  : null;

function playSound(type) {
  if (!soundEnabled || !audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, now);
    osc.frequency.exponentialRampToValueAtTime(830.61, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.16);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'wrong') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.18);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.start(now);
    osc.stop(now + 0.22);
  } else if (type === 'flip') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(560, now + 0.06);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  }
}

// --- 4. TOAST NOTIFICATION ENGINE (THEMIFY ICON AWARE) ---
function showToast(message, iconClass = 'ti-info-alt') {
  let shelf = document.getElementById('toastShelf');
  if (!shelf) {
    shelf = document.createElement('div');
    shelf.id = 'toastShelf';
    shelf.className = 'toast-shelf';
    document.body.appendChild(shelf);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<i class="${iconClass}" style="color: var(--brand-primary); font-size: 16px;"></i><span>${message}</span>`;
  shelf.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// --- 5. THEME & TABS SWITCHING ---
function initTheme() {
  const saved = localStorage.getItem("vinuni_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeButtonUI(saved);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  updateSoundButtonUI(soundEnabled);
  showToast(soundEnabled ? 'Đã bật âm thanh phản hồi' : 'Đã tắt âm thanh', soundEnabled ? 'ti-volume' : 'ti-na');
}

function updateSoundButtonUI(enabled) {
  const btn = document.getElementById("soundToggle");
  if (btn) {
    const iconHtml = enabled
      ? '<i class="ti-volume"></i>'
      : '<svg class="icon-mute-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="22" y1="9" x2="16" y2="15"></line><line x1="16" y1="9" x2="22" y2="15"></line></svg>';
    btn.innerHTML = `${iconHtml} <span class="btn-label">${enabled ? 'Âm thanh' : 'Tắt tiếng'}</span>`;
    btn.setAttribute("title", enabled ? "Bật âm thanh (Đang bật)" : "Tắt âm thanh (Đang tắt)");
    if (!enabled) {
      btn.classList.add("sound-muted");
    } else {
      btn.classList.remove("sound-muted");
    }
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("vinuni_theme", next);
  updateThemeButtonUI(next);
  showToast(next === "dark" ? "Đã bật giao diện tối" : "Đã bật giao diện sáng", "ti-shine");
}

function updateThemeButtonUI(theme) {
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.innerHTML = theme === "dark" 
      ? '<i class="ti-shine"></i> <span class="btn-label">Sáng</span>' 
      : '<i class="ti-shine"></i> <span class="btn-label">Tối</span>';
    btn.setAttribute("title", theme === "dark" ? "Chuyển sang Giao diện Sáng" : "Chuyển sang Giao diện Tối");
  }
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

  const targetBtn = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
  if (targetBtn) targetBtn.classList.add("active");

  const targetPane = document.getElementById(`${tabName}-tab`);
  if (targetPane) targetPane.classList.add("active");

  const stickyBar = document.getElementById("stickyQuizBar");
if (stickyBar) {
    // Ẩn thanh stickyBar nếu KHÔNG phải tab "quiz", hiện lại nếu là tab "quiz"
    stickyBar.classList.toggle("is-hidden", tabName !== "quiz");
  }

  if (tabName === "flashcards") {
    renderFlashcard();
  } else if (tabName === "cheatsheet") {
    renderCheatSheets(CHEAT_SHEETS);
  } else if (tabName === "history") {
    renderHistory();
  }
}

// --- 6. QUIZ CONTROLLER (PRACTICE & EXAM MODES) ---
function startPracticeTimer() {
  clearInterval(practiceTimerInterval);
  practiceSeconds = 0;
  isPracticeTimerPaused = false;
  updatePracticeTimerDisplay();

  const icon = document.getElementById("practiceTimerIcon");
  if (icon) icon.className = "ti-control-pause";
  const chip = document.getElementById("practiceTimer");
  if (chip) chip.classList.remove("paused");

  const stickyChip = document.getElementById("stickyTimerChip");
  if (stickyChip) stickyChip.classList.remove("paused", "urgent");
  const stickyIcon = document.getElementById("stickyTimerActionIcon");
  if (stickyIcon) {
    stickyIcon.className = "ti-control-pause";
    stickyIcon.style.display = "inline-block";
  }
  const stickyLabel = document.getElementById("stickyTimerLabel");
  if (stickyLabel) stickyLabel.innerText = "Làm bài:";

  const sidebarLabel = document.getElementById("sidebarTimerLabel");
  if (sidebarLabel) sidebarLabel.innerText = "Thời Gian Làm Bài";
  const sidebarClock = document.getElementById("sidebarTimerClock");
  if (sidebarClock) sidebarClock.classList.remove("urgent");
  const sidebarSub = document.getElementById("sidebarTimerSubText");
  if (sidebarSub) sidebarSub.innerHTML = '<i id="sidebarTimerIcon" class="ti-control-pause"></i> Nhấp để tạm dừng';

  practiceTimerInterval = setInterval(() => {
    if (!isPracticeTimerPaused) {
      practiceSeconds++;
      updatePracticeTimerDisplay();
    }
  }, 1000);
}

function updatePracticeTimerDisplay() {
  const mins = Math.floor(practiceSeconds / 60);
  const secs = practiceSeconds % 60;
  const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const el = document.getElementById("practiceTimerDisplay");
  if (el) el.innerText = timeStr;

  const stickyEl = document.getElementById("stickyTimerClock");
  if (stickyEl) stickyEl.innerText = timeStr;

  const sidebarEl = document.getElementById("sidebarTimerClock");
  if (sidebarEl) sidebarEl.innerText = timeStr;
}

function togglePracticeTimer() {
  isPracticeTimerPaused = !isPracticeTimerPaused;
  const icon = document.getElementById("practiceTimerIcon");
  const chip = document.getElementById("practiceTimer");
  const stickyIcon = document.getElementById("stickyTimerActionIcon");
  const stickyChip = document.getElementById("stickyTimerChip");
  const sidebarSub = document.getElementById("sidebarTimerSubText");

  if (isPracticeTimerPaused) {
    if (icon) icon.className = "ti-control-play";
    if (chip) chip.classList.add("paused");
    if (stickyIcon) stickyIcon.className = "ti-control-play";
    if (stickyChip) stickyChip.classList.add("paused");
    if (sidebarSub) sidebarSub.innerHTML = '<i class="ti-control-play" style="color:var(--warning)"></i> Đang tạm dừng (Nhấp tiếp tục)';
    showToast("Đã tạm dừng đếm thời gian làm bài", "ti-control-pause");
  } else {
    if (icon) icon.className = "ti-control-pause";
    if (chip) chip.classList.remove("paused");
    if (stickyIcon) stickyIcon.className = "ti-control-pause";
    if (stickyChip) stickyChip.classList.remove("paused");
    if (sidebarSub) sidebarSub.innerHTML = '<i class="ti-control-pause"></i> Nhấp để tạm dừng';
    showToast("Tiếp tục tính thời gian làm bài", "ti-control-play");
  }
}

function handleTimerClick() {
  const mode = document.getElementById("quizModeSelect").value;
  if (mode === "practice") {
    togglePracticeTimer();
  } else {
    const mins = Math.floor(timeLeftSeconds / 60);
    const secs = timeLeftSeconds % 60;
    showToast(`Thời gian làm bài thi còn lại: ${mins} phút ${secs} giây`, "ti-timer");
  }
}

function handleModeChange() {
  const mode = document.getElementById("quizModeSelect").value;
  const filterGroup = document.getElementById("filterGroup");
  const startBtn = document.getElementById("startExamBtn");
  const submitBtn = document.getElementById("submitExamBtn");
  const examTimerBadge = document.getElementById("examTimer");
  const practiceTimerBadge = document.getElementById("practiceTimer");
  const resultDiv = document.getElementById("examResult");
  const progressBanner = document.getElementById("quizProgressBanner");

  const stickyLabel = document.getElementById("stickyTimerLabel");
  const stickyClock = document.getElementById("stickyTimerClock");
  const stickyIcon = document.getElementById("stickyTimerActionIcon");
  const stickyChip = document.getElementById("stickyTimerChip");
  const stickySubBtn = document.getElementById("stickySubmitBtn");

  const sidebarClock = document.getElementById("sidebarTimerClock");
  const sidebarLabel = document.getElementById("sidebarTimerLabel");
  const sidebarSub = document.getElementById("sidebarTimerSubText");
  const sidebarSubBtn = document.getElementById("sidebarSubmitBtn");

  clearInterval(examTimerInterval);
  clearInterval(practiceTimerInterval);
  if (resultDiv) resultDiv.style.display = "none";
  isExamSubmitted = false;
  userAnswers = {};

  if (mode === "exam") {
    currentQuestions = [...QUIZ_BANK];
    updateProgressTracker();

    if (filterGroup) filterGroup.style.display = "none";
    if (practiceTimerBadge) practiceTimerBadge.style.display = "none";
    if (startBtn) {
      startBtn.style.display = "inline-flex";
      startBtn.innerHTML = '<i class="ti-control-play"></i> Bắt Đầu Thi Thử (60 Câu - 90 Phút)';
    }
    if (submitBtn) submitBtn.style.display = "none";
    if (stickySubBtn) stickySubBtn.style.display = "none";
    if (sidebarSubBtn) sidebarSubBtn.style.display = "none";

    if (examTimerBadge) {
      examTimerBadge.style.display = "inline-flex";
      examTimerBadge.classList.remove("urgent");
      const td = document.getElementById("timerDisplay");
      if (td) td.innerText = "90:00";
    }
    if (progressBanner) progressBanner.style.display = "none";

    if (stickyLabel) stickyLabel.innerText = "Còn lại:";
    if (stickyClock) stickyClock.innerText = "90:00";
    if (stickyIcon) stickyIcon.style.display = "none";
    if (stickyChip) stickyChip.classList.remove("paused", "urgent");

    if (sidebarLabel) sidebarLabel.innerText = "Thời Gian Còn Lại";
    if (sidebarClock) {
      sidebarClock.innerText = "90:00";
      sidebarClock.classList.remove("urgent");
    }
    if (sidebarSub) sidebarSub.innerHTML = '<i class="ti-timer"></i> Đếm ngược 90 phút';

    document.getElementById("questionContainer").innerHTML = `
      <div style="text-align: center; padding: 48px 20px;">
        <i class="ti-timer" style="font-size: 48px; color: var(--brand-primary); margin-bottom: 16px; display: inline-block;"></i>
        <h3 style="font-size: 21px; font-weight: 800; margin-bottom: 8px;">Chế Độ Thi Thử Chuẩn Hóa (60 Câu - 90 Phút)</h3>
        <p style="color: var(--text-secondary); max-width: 580px; margin: 0 auto 24px; font-size: 15px; line-height: 1.6;">
          Đề thi thật gồm 60 câu hỏi trắc nghiệm chuyên sâu (15 câu mỗi khối kiến thức) được xáo trộn ngẫu nhiên câu hỏi và đảo thứ tự 4 đáp án A, B, C, D từ toàn bộ 14 ngày học trong slide. Thời gian làm bài: 90 phút.
        </p>
        <button class="btn btn-lg" onclick="startExam()">
          <i class="ti-control-play"></i> Bắt Đầu Làm Bài Ngay (90 Phút)
        </button>
      </div>
    `;
  } else {
    if (filterGroup) filterGroup.style.display = "flex";
    if (practiceTimerBadge) practiceTimerBadge.style.display = "inline-flex";
    if (startBtn) startBtn.style.display = "none";
    if (submitBtn) submitBtn.style.display = "none";
    if (stickySubBtn) stickySubBtn.style.display = "none";
    if (sidebarSubBtn) sidebarSubBtn.style.display = "none";
    if (examTimerBadge) examTimerBadge.style.display = "none";
    if (progressBanner) progressBanner.style.display = "flex";

    if (stickyLabel) stickyLabel.innerText = "Thời gian:";
    if (stickyIcon) stickyIcon.style.display = "inline-block";
    if (stickyChip) stickyChip.classList.remove("paused", "urgent");

    if (sidebarLabel) sidebarLabel.innerText = "Thời Gian Làm Bài";
    if (sidebarClock) sidebarClock.classList.remove("urgent");
    if (sidebarSub) sidebarSub.innerHTML = '<i id="sidebarTimerIcon" class="ti-control-pause"></i> Nhấp để tạm dừng';

    loadQuestions();
    startPracticeTimer();
  }
}

function loadQuestions() {
  const modFilter = document.getElementById("moduleFilter").value;
  if (modFilter === "all") {
    currentQuestions = [...QUIZ_BANK];
  } else {
    const modNum = parseInt(modFilter);
    currentQuestions = QUIZ_BANK.filter(q => q.module === modNum);
  }
  userAnswers = {};
  isExamSubmitted = false;
  renderQuestions();
  updateProgressTracker();
}

function renderSidebarQuestionGrid() {
  const grid = document.getElementById("sidebarQuestionGrid");
  if (!grid) return;

  const legendEl = document.getElementById("sidebarGridLegend");
  if (legendEl) {
    if (isExamSubmitted) {
      legendEl.innerHTML = `
        <span class="legend-dot correct"></span> Đúng
        <span class="legend-dot wrong" style="margin-left: 6px;"></span> Sai
      `;
    } else {
      legendEl.innerHTML = `<span class="legend-dot done"></span> Đã làm`;
    }
  }

  let html = "";
  const markers = ["A", "B", "C", "D"];
  currentQuestions.forEach((q, idx) => {
    const num = idx + 1;
    const isAnswered = userAnswers[q.id] !== undefined;
    let statusClass = "";
    let titleStr = "";

    if (isExamSubmitted) {
      if (!isAnswered) {
        statusClass = "skipped";
        titleStr = `Câu ${num}: Chưa làm (Đáp án đúng: ${markers[q.correctAnswer]})`;
      } else if (userAnswers[q.id] === q.correctAnswer) {
        statusClass = "correct";
        titleStr = `Câu ${num}: Đúng ✓`;
      } else {
        statusClass = "wrong";
        titleStr = `Câu ${num}: Sai ✗ (Bấm để xem giải thích)`;
      }
    } else {
      statusClass = isAnswered ? "answered" : "";
      titleStr = `Câu ${num}: ${isAnswered ? 'Đã trả lời' : 'Chưa làm'}`;
    }

    html += `
      <div class="side-q-cell ${statusClass}" 
           id="side-cell-${q.id}" 
           onclick="jumpToQuestion(${q.id})"
           title="${titleStr}">
        ${num}
      </div>
    `;
  });
  grid.innerHTML = html;
}

function updateProgressTracker() {
  const mode = document.getElementById("quizModeSelect").value;
  const progressBanner = document.getElementById("quizProgressBanner");
  if (progressBanner) {
    if (mode === "exam" && !document.getElementById("startExamBtn").style.display.includes("none")) {
      progressBanner.style.display = "none";
    } else {
      progressBanner.style.display = "flex";
    }
  }

  const total = currentQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = total - answeredCount;
  const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  // Toolbar banner (if exists)
  const countEl = document.getElementById("progressCountText");
  const fillEl = document.getElementById("progressTrackFill");
  if (countEl) countEl.innerText = `Đã trả lời: ${answeredCount} / ${total} câu (${percent}%)`;
  if (fillEl) fillEl.style.width = `${percent}%`;

  // Sticky top bar (Mobile & Tablet)
  const stickyAns = document.getElementById("stickyAnsweredText");
  const stickyFill = document.getElementById("stickyProgressFill");
  const stickyUnans = document.getElementById("stickyUnansweredTag");

  // Desktop sidebar
  const sideFraction = document.getElementById("sidebarProgressFraction");
  const sideFill = document.getElementById("sidebarProgressFill");
  const sideUnans = document.getElementById("sidebarUnansweredTag");

  if (isExamSubmitted) {
    let correctCount = 0;
    currentQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) correctCount++;
    });
    const wrongCount = total - correctCount;
    const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    if (stickyAns) stickyAns.innerText = `${correctCount}/${total} đúng`;
    if (stickyFill) stickyFill.style.width = `${scorePct}%`;
    if (stickyUnans) {
      if (wrongCount === 0) {
        stickyUnans.innerText = "Tuyệt đối 100%!";
        stickyUnans.style.background = "var(--success-bg)";
        stickyUnans.style.color = "var(--success)";
      } else {
        stickyUnans.innerText = `Sai ${wrongCount} câu`;
        stickyUnans.style.background = "var(--danger-bg)";
        stickyUnans.style.color = "var(--danger)";
      }
    }

    if (sideFraction) sideFraction.innerText = `${correctCount} / ${total} câu đúng (${scorePct}%)`;
    if (sideFill) {
      sideFill.style.width = `${scorePct}%`;
      sideFill.style.background = scorePct >= 80 ? 'var(--success)' : (scorePct >= 50 ? 'var(--warning)' : 'var(--danger)');
    }
    if (sideUnans) {
      if (wrongCount === 0) {
        sideUnans.innerHTML = `<i class="ti-check" style="color: var(--success);"></i> <strong>Xuất sắc! Đúng toàn bộ ${total} câu</strong>`;
        sideUnans.style.color = "var(--success)";
      } else {
        sideUnans.innerHTML = `<i class="ti-close" style="color: var(--danger);"></i> Sai <strong>${wrongCount} câu</strong> (Xem ô đỏ bên dưới)`;
        sideUnans.style.color = "var(--danger)";
      }
    }
  } else {
    if (stickyAns) stickyAns.innerText = `${answeredCount}/${total}`;
    if (stickyFill) stickyFill.style.width = `${percent}%`;
    if (stickyUnans) {
      if (unansweredCount === 0) {
        stickyUnans.innerText = "Đã làm hết!";
        stickyUnans.style.background = "var(--success-bg)";
        stickyUnans.style.color = "var(--success)";
      } else {
        stickyUnans.innerText = `Còn ${unansweredCount} câu`;
        stickyUnans.style.background = "rgba(119, 136, 115, 0.12)";
        stickyUnans.style.color = "var(--brand-primary)";
      }
    }

    if (sideFraction) sideFraction.innerText = `${answeredCount} / ${total} câu (${percent}%)`;
    if (sideFill) {
      sideFill.style.width = `${percent}%`;
      sideFill.style.background = "var(--brand-primary)";
    }
    if (sideUnans) {
      if (unansweredCount === 0) {
        sideUnans.innerHTML = `<i class="ti-check" style="color: var(--success);"></i> <strong>Đã làm đủ ${total} câu!</strong>`;
        sideUnans.style.color = "var(--success)";
      } else {
        sideUnans.innerHTML = `<i class="ti-alert"></i> Còn <strong>${unansweredCount} câu</strong> chưa làm`;
        sideUnans.style.color = "#B87C2B";
      }
    }
  }

  renderSidebarQuestionGrid();
  renderJumpDrawerGrid();
}

function renderQuestions() {
  const container = document.getElementById("questionContainer");
  const mode = document.getElementById("quizModeSelect").value;

  if (currentQuestions.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-secondary);">Không tìm thấy câu hỏi phù hợp.</div>`;
    return;
  }

  let html = "";
  const markers = ["A", "B", "C", "D"];
  currentQuestions.forEach((q, idx) => {
    const qNum = idx + 1;
    const moduleLabel = MODULE_NAMES[q.module] || `Khối ${q.module}`;
    const isAnswered = userAnswers[q.id] !== undefined;

    let cardStatusClass = "";
    let badgeResultHtml = "";

    if (isExamSubmitted) {
      if (!isAnswered) {
        cardStatusClass = "card-skipped";
        badgeResultHtml = `<span class="badge-result skipped"><i class="ti-alert"></i> Chưa làm (Đáp án: ${markers[q.correctAnswer]})</span>`;
      } else if (userAnswers[q.id] === q.correctAnswer) {
        cardStatusClass = "card-correct";
        badgeResultHtml = `<span class="badge-result correct"><i class="ti-check"></i> Trả lời Đúng ✓</span>`;
      } else {
        cardStatusClass = "card-wrong";
        badgeResultHtml = `<span class="badge-result wrong"><i class="ti-close"></i> Trả lời Sai ✗ (Đáp án: ${markers[q.correctAnswer]})</span>`;
      }
    } else if (isAnswered) {
      cardStatusClass = "answered-card";
    }

    html += `
      <div class="question-item ${cardStatusClass}" id="q-card-${q.id}">
        <div class="question-meta">
          <div class="meta-badges">
            <span class="badge-tag badge-module-${q.module}">
              <i class="ti-tag"></i> ${moduleLabel}
            </span>
            <span class="badge-day">
              <i class="ti-calendar"></i> Ngày ${q.day}
            </span>
            ${badgeResultHtml}
          </div>
          <div style="font-size: 13.5px; font-weight: 700; color: var(--text-secondary);">
            Câu ${qNum} / ${currentQuestions.length}
          </div>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options-grid">
    `;

    const markers = ["A", "B", "C", "D"];
    q.options.forEach((opt, optIdx) => {
      let optClass = "option-btn";
      const isSelected = userAnswers[q.id] === optIdx;

      if (mode === "practice") {
        if (isAnswered) {
          if (optIdx === q.correctAnswer) optClass += " correct";
          else if (isSelected) optClass += " wrong";
        }
      } else if (isExamSubmitted) {
        if (optIdx === q.correctAnswer) optClass += " correct";
        else if (isSelected) optClass += " wrong";
      } else if (isSelected) {
        optClass += " selected";
      }

      const isDisabled = (mode === 'practice' && isAnswered) || isExamSubmitted;

      html += `
        <button class="${optClass}" onclick="selectOption(${q.id}, ${optIdx})" ${isDisabled ? 'disabled' : ''}>
          <span class="option-marker">${markers[optIdx]}</span>
          <span>${opt}</span>
        </button>
      `;
    });

    html += `</div>`;

    // Explanation Box
    const showExpl = (mode === "practice" && isAnswered) || isExamSubmitted;
    html += `
      <div class="explanation-box ${showExpl ? 'show' : ''}" id="expl-${q.id}">
        <div class="explanation-title">
          <i class="ti-light-bulb"></i> Giải thích chi tiết:
        </div>
        <div>${q.explanation}</div>
      </div>
    </div>`;
  });

  container.innerHTML = html;
  renderJumpDrawerGrid();
}

function selectOption(qId, optIdx) {
  const mode = document.getElementById("quizModeSelect").value;
  userAnswers[qId] = optIdx;

  const currentQ = currentQuestions.find(q => q.id === qId);
  const isCorrect = currentQ && currentQ.correctAnswer === optIdx;

  if (mode === "practice") {
    playSound(isCorrect ? 'correct' : 'wrong');
    renderQuestions();
  } else {
    playSound('flip');
    const qCard = document.getElementById(`q-card-${qId}`);
    if (qCard) {
      qCard.classList.add('answered-card');
      qCard.querySelectorAll(".option-btn").forEach((btn, idx) => {
        btn.classList.toggle("selected", idx === optIdx);
      });
    }
  }

  updateProgressTracker();
  renderJumpDrawerGrid();
}

function startExam() {
  const startBtn = document.getElementById("startExamBtn");
  if (startBtn) startBtn.style.display = "none";

  const submitBtn = document.getElementById("submitExamBtn");
  if (submitBtn) submitBtn.style.display = "inline-flex";

  const stickySubBtn = document.getElementById("stickySubmitBtn");
  if (stickySubBtn) stickySubBtn.style.display = "inline-flex";

  const sidebarSubBtn = document.getElementById("sidebarSubmitBtn");
  if (sidebarSubBtn) sidebarSubBtn.style.display = "inline-flex";

  const examResult = document.getElementById("examResult");
  if (examResult) examResult.style.display = "none";

  userAnswers = {};
  isExamSubmitted = false;

  // Real exam standard: 60 questions stratified evenly across the 4 modules (15 questions per module)
  const m1 = QUIZ_BANK.filter(q => q.module === 1).sort(() => 0.5 - Math.random()).slice(0, 15);
  const m2 = QUIZ_BANK.filter(q => q.module === 2).sort(() => 0.5 - Math.random()).slice(0, 15);
  const m3 = QUIZ_BANK.filter(q => q.module === 3).sort(() => 0.5 - Math.random()).slice(0, 15);
  const m4 = QUIZ_BANK.filter(q => q.module === 4).sort(() => 0.5 - Math.random()).slice(0, 15);
  const sampledQuestions = [...m1, ...m2, ...m3, ...m4].sort(() => 0.5 - Math.random());

  // Dynamic shuffling of options (A, B, C, D) so answer positions are randomized every attempt
  currentQuestions = sampledQuestions.map(q => {
    const indices = [0, 1, 2, 3].sort(() => 0.5 - Math.random());
    const shuffledOptions = indices.map(i => q.options[i]);
    const newCorrectAnswer = indices.indexOf(q.correctAnswer);
    return {
      ...q,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  });

  renderQuestions();
  updateProgressTracker();

  const qContainer = document.getElementById("questionContainer");
  if (qContainer) {
    qContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 90 minutes exam timer (90 * 60 seconds)
  timeLeftSeconds = 90 * 60;
  clearInterval(examTimerInterval);
  const timerBadge = document.getElementById("examTimer");
  if (timerBadge) {
    timerBadge.style.display = "inline-flex";
    timerBadge.classList.remove("urgent");
  }

  const stickyLabel = document.getElementById("stickyTimerLabel");
  if (stickyLabel) stickyLabel.innerText = "Còn lại:";
  const stickyChip = document.getElementById("stickyTimerChip");
  if (stickyChip) stickyChip.classList.remove("paused", "urgent");
  const stickyIcon = document.getElementById("stickyTimerActionIcon");
  if (stickyIcon) stickyIcon.style.display = "none";
  const stickyClock = document.getElementById("stickyTimerClock");
  if (stickyClock) stickyClock.innerText = "90:00";

  const sidebarClock = document.getElementById("sidebarTimerClock");
  if (sidebarClock) {
    sidebarClock.innerText = "90:00";
    sidebarClock.classList.remove("urgent");
  }

  examTimerInterval = setInterval(() => {
    timeLeftSeconds--;
    const mins = Math.floor(timeLeftSeconds / 60);
    const secs = timeLeftSeconds % 60;
    const displayStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById("timerDisplay");
    if (timerDisplay) timerDisplay.innerText = displayStr;

    if (stickyClock) stickyClock.innerText = displayStr;
    if (sidebarClock) sidebarClock.innerText = displayStr;

    if (timeLeftSeconds <= 300) {
      if (timerBadge) timerBadge.classList.add("urgent");
      if (stickyChip) stickyChip.classList.add("urgent");
      if (sidebarClock) sidebarClock.classList.add("urgent");
    }

    if (timeLeftSeconds <= 0) {
      clearInterval(examTimerInterval);
      showAlertModal({
        title: "Hết Giờ Làm Bài",
        message: "Đã hết 90 phút làm bài! Hệ thống tự động thu và chấm bài thi 60 câu của bạn ngay bây giờ.",
        buttonText: "Xem Kết Quả",
        type: "info",
        icon: "ti-timer"
      }).then(() => {
        submitExam();
      });
    }
  }, 1000);

  showToast("Bài thi 60 câu trong 90 phút đã bắt đầu! Chúc bạn làm bài thật tốt.", "ti-timer");
}

async function submitExam() {
  if (isExamSubmitted) return;

  const answeredCount = Object.keys(userAnswers).length;
  if (answeredCount < currentQuestions.length) {
    const unanswered = currentQuestions.length - answeredCount;
    const confirmed = await showConfirmModal({
      title: "Chưa Hoàn Thành Bài Thi",
      message: `Bạn vẫn còn <strong>${unanswered} câu</strong> chưa chọn đáp án. Bạn có chắc chắn muốn nộp bài ngay bây giờ không?`,
      confirmText: "Vẫn Nộp Bài",
      cancelText: "Tiếp Tục Làm",
      type: "warning",
      icon: "ti-alert"
    });
    if (!confirmed) return;
  }

  clearInterval(examTimerInterval);
  isExamSubmitted = true;

  const submitBtn = document.getElementById("submitExamBtn");
  if (submitBtn) submitBtn.style.display = "none";
  const stickySubBtn = document.getElementById("stickySubmitBtn");
  if (stickySubBtn) stickySubBtn.style.display = "none";
  const sidebarSubBtn = document.getElementById("sidebarSubmitBtn");
  if (sidebarSubBtn) sidebarSubBtn.style.display = "none";

  const startBtn = document.getElementById("startExamBtn");
  if (startBtn) {
    startBtn.style.display = "inline-flex";
    startBtn.innerHTML = '<i class="ti-reload"></i> Thi Lại Đề Khác';
  }

  let correctCount = 0;
  let modStats = {
    1: { c: 0, t: 0, name: "Khối 1: 2D Perception" },
    2: { c: 0, t: 0, name: "Khối 2: Quality & Lifecycle" },
    3: { c: 0, t: 0, name: "Khối 3: Cabin & SVM 360°" },
    4: { c: 0, t: 0, name: "Khối 4: 3D LiDAR & Fusion" }
  };

  currentQuestions.forEach(q => {
    modStats[q.module].t++;
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
      modStats[q.module].c++;
    }
  });

  const percent = Math.round((correctCount / currentQuestions.length) * 100);

  const scorePercentEl = document.getElementById("scorePercentInside");
  const scoreSummaryEl = document.getElementById("scoreSummary");
  const circleFg = document.getElementById("scoreCircleFg");

  if (scorePercentEl) scorePercentEl.innerText = `${percent}%`;
  if (scoreSummaryEl) {
    scoreSummaryEl.innerText = `Bạn đã trả lời đúng ${correctCount} / ${currentQuestions.length} câu hỏi (${percent}%).`;
  }

  if (circleFg) {
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (percent / 100) * circumference;
    circleFg.style.strokeDashoffset = offset;
    circleFg.style.stroke = percent >= 80 ? 'var(--success)' : (percent >= 50 ? 'var(--warning)' : 'var(--danger)');
  }

  for (let m = 1; m <= 4; m++) {
    const p = modStats[m].t > 0 ? Math.round((modStats[m].c / modStats[m].t) * 100) : 0;
    const statValEl = document.getElementById(`statK${m}`);
    if (statValEl) {
      statValEl.innerText = `${p}% (${modStats[m].c}/${modStats[m].t})`;
      statValEl.style.color = p >= 80 ? 'var(--success)' : (p >= 50 ? 'var(--warning)' : 'var(--danger)');
    }
  }

  const resultDiv = document.getElementById("examResult");
  resultDiv.style.display = "block";
  resultDiv.scrollIntoView({ behavior: 'smooth' });

  const usedSeconds = 90 * 60 - timeLeftSeconds;
  const uMins = Math.floor(usedSeconds / 60);
  const uSecs = usedSeconds % 60;
  const timeTakenStr = `${uMins} phút ${uSecs} giây`;
  const timeTakenEl = document.getElementById("examTimeTakenText");
  if (timeTakenEl) {
    timeTakenEl.innerHTML = `<i class="ti-timer"></i> Thời gian hoàn thành bài thi: <strong>${timeTakenStr}</strong>`;
  }
  saveHistory(percent, correctCount, currentQuestions.length, timeTakenStr);

  if (percent >= 80) {
    triggerConfetti();
    playSound('correct');
    showToast("Chúc mừng! Bạn đã đạt kết quả xuất sắc", "ti-medall");
  } else {
    showToast("Đã hoàn thành bài thi! Xem lại các câu giải thích bên dưới.", "ti-check-box");
  }

  renderQuestions();
  updateProgressTracker();
}

function resetQuiz() {
  const mode = document.getElementById("quizModeSelect").value;
  if (mode === "exam") {
    handleModeChange();
  } else {
    userAnswers = {};
    renderQuestions();
    updateProgressTracker();
    startPracticeTimer();
    showToast("Đã làm mới câu hỏi & khởi động lại bộ đếm giờ!", "ti-reload");
  }
}

// --- 7. QUESTION JUMP DRAWER ---
function toggleJumpDrawer() {
  const modal = document.getElementById("jumpModal");
  if (!modal) return;
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function renderJumpDrawerGrid() {
  const grid = document.getElementById("jumpGrid");
  if (!grid) return;

  const subEl = document.querySelector(".drawer-modal-sub");
  if (subEl) {
    if (isExamSubmitted) {
      subEl.innerHTML = `Kết quả bài thi: <strong style="color:var(--success)">● Xanh: Đúng</strong> &nbsp;|&nbsp; <strong style="color:var(--danger)">● Đỏ: Sai</strong> &nbsp;|&nbsp; <strong style="color:var(--warning)">● Vàng: Chưa làm</strong>. Nhấp vào câu sai để xem ngay lời giải.`;
    } else {
      subEl.innerText = "Ô màu xanh là câu đã chọn đáp án. Bấm vào ô bất kỳ để nhảy thẳng tới câu hỏi đó.";
    }
  }

  let html = "";
  const markers = ["A", "B", "C", "D"];
  currentQuestions.forEach((q, idx) => {
    const num = idx + 1;
    const isAnswered = userAnswers[q.id] !== undefined;
    let statusClass = "";
    let titleStr = "";

    if (isExamSubmitted) {
      if (!isAnswered) {
        statusClass = "skipped";
        titleStr = `Câu ${num}: Chưa làm (Đáp án đúng: ${markers[q.correctAnswer]})`;
      } else if (userAnswers[q.id] === q.correctAnswer) {
        statusClass = "correct";
        titleStr = `Câu ${num}: Đúng ✓`;
      } else {
        statusClass = "wrong";
        titleStr = `Câu ${num}: Sai ✗ (Bấm để xem giải thích)`;
      }
    } else {
      statusClass = isAnswered ? "answered" : "";
      titleStr = `Câu ${num}: ${isAnswered ? 'Đã làm' : 'Chưa làm'}`;
    }

    html += `
      <div class="jump-node ${statusClass}" onclick="jumpToQuestion(${q.id})" title="${titleStr}">
        ${num}
      </div>
    `;
  });
  grid.innerHTML = html;
}

function jumpToQuestion(qId) {
  const modal = document.getElementById("jumpModal");
  if (modal && modal.style.display === "flex") {
    modal.style.display = "none";
  }
  const el = document.getElementById(`q-card-${qId}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.style.transform = 'scale(1.02)';
    el.style.transition = 'transform 0.25s ease';
    setTimeout(() => { el.style.transform = 'none'; }, 400);
  }
}

// --- 8. FLASHCARD ENGINE ---
function renderFlashcard() {
  if (filteredFlashcards.length === 0) {
    document.getElementById("cardCategory").innerText = "Thông báo";
    document.getElementById("cardDay").innerText = "";
    document.getElementById("cardFrontText").innerText = "Không có thẻ nào phù hợp với bộ lọc hiện tại!";
    document.getElementById("cardBackText").innerText = "Hãy chọn bộ lọc 'Tất cả thẻ' để tiếp tục ôn tập nhé.";
    document.getElementById("flashcardCounter").innerHTML = `Thẻ 0/0`;
    return;
  }

  if (currentFlashcardIndex >= filteredFlashcards.length) currentFlashcardIndex = 0;
  if (currentFlashcardIndex < 0) currentFlashcardIndex = filteredFlashcards.length - 1;

  const card = filteredFlashcards[currentFlashcardIndex];
  const isLearned = learnedCardIds.includes(card.id);

  const scene = document.getElementById("flashcardScene");
  if (scene) scene.classList.remove("flipped");

  document.getElementById("cardCategory").innerHTML = isLearned 
    ? `${card.category} <span style="color: var(--success); font-weight:800;"><i class="ti-check"></i> ĐÃ THUỘC</span>`
    : card.category;

  document.getElementById("cardDay").innerHTML = `<i class="ti-calendar"></i> Ngày ${card.day} &bull; Khối ${card.module}`;
  document.getElementById("cardFrontText").innerHTML = card.front;
  document.getElementById("cardBackText").innerHTML = card.back;

  const counterEl = document.getElementById("flashcardCounter");
  if (counterEl) {
    counterEl.innerHTML = `Thẻ <span class="active-counter">${currentFlashcardIndex + 1}</span> / ${filteredFlashcards.length} &bull; Đã thuộc: ${learnedCardIds.length}/${FLASHCARD_BANK.length}`;
  }
}

function flipCard() {
  const scene = document.getElementById("flashcardScene");
  if (scene) {
    scene.classList.toggle("flipped");
    playSound('flip');
  }
}

function nextCard() {
  currentFlashcardIndex = (currentFlashcardIndex + 1) % filteredFlashcards.length;
  renderFlashcard();
}

function prevCard() {
  currentFlashcardIndex = (currentFlashcardIndex - 1 + filteredFlashcards.length) % filteredFlashcards.length;
  renderFlashcard();
}

function markCard(learned) {
  if (filteredFlashcards.length === 0) return;
  const card = filteredFlashcards[currentFlashcardIndex];
  if (learned) {
    if (!learnedCardIds.includes(card.id)) {
      learnedCardIds.push(card.id);
      showToast(`Đã đánh dấu thuộc thẻ #${card.id}!`, "ti-check");
      playSound('correct');
    }
  } else {
    learnedCardIds = learnedCardIds.filter(id => id !== card.id);
    showToast(`Đã đưa thẻ #${card.id} vào danh sách cần ôn lại!`, "ti-alert");
  }
  localStorage.setItem("vinuni_learned_cards", JSON.stringify(learnedCardIds));
  nextCard();
}

function filterFlashcards() {
  const filterVal = document.getElementById("flashcardFilter").value;
  if (filterVal === "all") {
    filteredFlashcards = [...FLASHCARD_BANK];
  } else if (filterVal === "unlearned") {
    filteredFlashcards = FLASHCARD_BANK.filter(c => !learnedCardIds.includes(c.id));
  } else {
    const mod = parseInt(filterVal);
    filteredFlashcards = FLASHCARD_BANK.filter(c => c.module === mod);
  }
  currentFlashcardIndex = 0;
  renderFlashcard();
}

// Flashcard Keyboard Shortcuts
window.addEventListener("keydown", (e) => {
  const flashcardTab = document.getElementById("flashcards-tab");
  if (flashcardTab && flashcardTab.classList.contains("active")) {
    if (e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (e.code === "ArrowRight") {
      nextCard();
    } else if (e.code === "ArrowLeft") {
      prevCard();
    }
  }
});

// --- 9. CHEAT SHEET & SEARCH LOGIC ---
function renderCheatSheets(items) {
  const container = document.getElementById("cheatListContainer");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="ti-search" style="font-size: 32px; display: block; margin-bottom: 8px;"></i>
        Không tìm thấy mục nào phù hợp với từ khóa tra cứu.
      </div>
    `;
    return;
  }

  let html = "";
  items.forEach(c => {
    html += `
      <div class="cheat-card-item">
        <div class="cheat-header">
          <div class="cheat-title-text">
            <i class="ti-book"></i>
            <span>${c.title}</span>
          </div>
          <span class="cheat-tag-badge">${c.category}</span>
        </div>
        ${c.html}
      </div>
    `;
  });
  container.innerHTML = html;
}

function searchCheatSheet() {
  const kw = document.getElementById("cheatSearchInput").value.toLowerCase().trim();
  if (!kw) {
    renderCheatSheets(CHEAT_SHEETS);
    return;
  }
  const matched = CHEAT_SHEETS.filter(c =>
    c.title.toLowerCase().includes(kw) ||
    c.category.toLowerCase().includes(kw) ||
    c.tags.toLowerCase().includes(kw) ||
    c.html.toLowerCase().includes(kw)
  );
  renderCheatSheets(matched);
}

function setCheatSearchTag(tag) {
  const input = document.getElementById("cheatSearchInput");
  if (input) {
    input.value = tag;
    searchCheatSheet();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// --- 10. HISTORY & ANALYTICS ---
function saveHistory(score, correct, total, timeTaken) {
  const history = JSON.parse(localStorage.getItem("vinuni_exam_history") || "[]");
  history.unshift({
    date: new Date().toLocaleString("vi-VN"),
    score: score,
    correct: correct,
    total: total,
    timeTaken: timeTaken || "--"
  });
  if (history.length > 20) history.pop();
  localStorage.setItem("vinuni_exam_history", JSON.stringify(history));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("vinuni_exam_history") || "[]");
  const container = document.getElementById("historyList");
  const statsOverview = document.getElementById("historyOverviewTiles");
  if (!container) return;

  if (history.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="ti-bar-chart" style="font-size: 36px; display: block; margin-bottom: 8px;"></i>
        Chưa có lịch sử làm bài thi. Hãy sang tab <strong>Luyện Thi Trắc Nghiệm</strong> và chọn chế độ Thi Thử để kiểm tra kiến thức nhé!
      </div>
    `;
    if (statsOverview) statsOverview.innerHTML = "";
    return;
  }

  const totalAttempts = history.length;
  const avgScore = Math.round(history.reduce((acc, h) => acc + h.score, 0) / totalAttempts);
  const highestScore = Math.max(...history.map(h => h.score));
  const passCount = history.filter(h => h.score >= 80).length;

  if (statsOverview) {
    statsOverview.innerHTML = `
      <div class="overview-stat-tile">
        <div class="num">${totalAttempts}</div>
        <div class="label"><i class="ti-time"></i> Tổng Lần Thi Thử</div>
      </div>
      <div class="overview-stat-tile">
        <div class="num" style="color: var(--brand-accent);">${avgScore}%</div>
        <div class="label"><i class="ti-stats-up"></i> Điểm Trung Bình</div>
      </div>
      <div class="overview-stat-tile">
        <div class="num" style="color: var(--success);">${highestScore}%</div>
        <div class="label"><i class="ti-cup"></i> Điểm Cao Nhất</div>
      </div>
      <div class="overview-stat-tile">
        <div class="num" style="color: #B87C2B;">${passCount}</div>
        <div class="label"><i class="ti-medall"></i> Lần Đạt Xuất Sắc (&ge;80%)</div>
      </div>
    `;
  }

  let html = `
    <div class="table-responsive-wrapper">
      <table class="data-table">
        <thead>
          <tr><th>Thời Gian</th><th>Thời Lượng Làm Bài</th><th>Số Câu Đúng</th><th>Điểm Số (%)</th><th>Đánh Giá</th></tr>
        </thead>
        <tbody>
  `;

  history.forEach(h => {
    const badgeClass = h.score >= 80 ? "status-pill-success" : (h.score >= 50 ? "status-pill-warning" : "status-pill-danger");
    const statusText = h.score >= 80 ? "XUẤT SẮC" : (h.score >= 50 ? "ĐẠT YÊU CẦU" : "CẦN ÔN LẠI");
    html += `
      <tr>
        <td>${h.date}</td>
        <td><i class="ti-timer" style="color: var(--brand-primary); font-size: 12px; margin-right: 4px;"></i><strong>${h.timeTaken || "--"}</strong></td>
        <td><strong>${h.correct}</strong> / ${h.total}</td>
        <td><span style="font-family: var(--font-mono); font-weight:800; font-size:15px;">${h.score}%</span></td>
        <td><span class="status-pill ${badgeClass}">${statusText}</span></td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

// --- 10.5 CUSTOM MODERN CONFIRM & ALERT MODAL HELPERS ---
function showConfirmModal({
  title = "Xác nhận",
  message = "",
  confirmText = "Đồng Ý",
  cancelText = "Hủy Bỏ",
  type = "warning",
  icon = "ti-alert"
}) {
  return new Promise((resolve) => {
    const backdrop = document.getElementById("customDialogBackdrop");
    const iconWrapper = document.getElementById("customDialogIconWrapper");
    const iconEl = document.getElementById("customDialogIcon");
    const titleEl = document.getElementById("customDialogTitle");
    const msgEl = document.getElementById("customDialogMessage");
    const confirmBtn = document.getElementById("customDialogConfirmBtn");
    const cancelBtn = document.getElementById("customDialogCancelBtn");

    if (!backdrop || !confirmBtn || !cancelBtn) {
      resolve(confirm(message));
      return;
    }

    titleEl.innerText = title;
    msgEl.innerHTML = message;
    confirmBtn.innerText = confirmText;
    cancelBtn.innerText = cancelText;
    cancelBtn.style.display = "inline-flex";

    iconWrapper.className = `custom-dialog-icon-wrapper ${type}`;
    iconEl.className = icon;
    confirmBtn.className = `btn btn-${type === 'danger' ? 'danger' : (type === 'success' ? 'success' : 'primary')}`;

    function cleanUp() {
      backdrop.classList.remove("active");
      setTimeout(() => { backdrop.style.display = "none"; }, 220);
      confirmBtn.removeEventListener("click", onConfirm);
      cancelBtn.removeEventListener("click", onCancel);
    }

    function onConfirm() {
      cleanUp();
      resolve(true);
    }

    function onCancel() {
      cleanUp();
      resolve(false);
    }

    confirmBtn.addEventListener("click", onConfirm);
    cancelBtn.addEventListener("click", onCancel);

    backdrop.style.display = "flex";
    requestAnimationFrame(() => {
      backdrop.classList.add("active");
    });
  });
}

function showAlertModal({
  title = "Thông báo",
  message = "",
  buttonText = "Đã Hiểu",
  type = "info",
  icon = "ti-info-alt"
}) {
  return new Promise((resolve) => {
    const backdrop = document.getElementById("customDialogBackdrop");
    const iconWrapper = document.getElementById("customDialogIconWrapper");
    const iconEl = document.getElementById("customDialogIcon");
    const titleEl = document.getElementById("customDialogTitle");
    const msgEl = document.getElementById("customDialogMessage");
    const confirmBtn = document.getElementById("customDialogConfirmBtn");
    const cancelBtn = document.getElementById("customDialogCancelBtn");

    if (!backdrop || !confirmBtn) {
      alert(message);
      resolve();
      return;
    }

    titleEl.innerText = title;
    msgEl.innerHTML = message;
    confirmBtn.innerText = buttonText;
    confirmBtn.className = "btn btn-primary";
    if (cancelBtn) cancelBtn.style.display = "none";

    iconWrapper.className = `custom-dialog-icon-wrapper ${type}`;
    iconEl.className = icon;

    function onConfirm() {
      backdrop.classList.remove("active");
      setTimeout(() => { backdrop.style.display = "none"; }, 220);
      confirmBtn.removeEventListener("click", onConfirm);
      resolve();
    }

    confirmBtn.addEventListener("click", onConfirm);

    backdrop.style.display = "flex";
    requestAnimationFrame(() => {
      backdrop.classList.add("active");
    });
  });
}

async function clearHistory() {
  const confirmed = await showConfirmModal({
    title: "Xóa Toàn Bộ Lịch Sử?",
    message: "Bạn có chắc chắn muốn xóa toàn bộ lịch sử các lần thi thử không? Toàn bộ dữ liệu điểm số và thống kê sẽ bị xóa vĩnh viễn.",
    confirmText: "Xác Nhận Xóa",
    cancelText: "Hủy Bỏ",
    type: "danger",
    icon: "ti-trash"
  });

  if (confirmed) {
    localStorage.removeItem("vinuni_exam_history");
    renderHistory();
    showToast("Đã xóa sạch lịch sử làm bài!", "ti-trash");
  }
}

// --- 11. CONFETTI CELEBRATION GENERATOR ---
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#778873", "#A1BC98", "#DCCFC0", "#FDF6ED", "#63735F", "#8DA685"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  let animationFrame;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.vRot;
      p.alpha -= 0.009;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  updateConfetti();
}

// --- 12. INITIALIZATION ON DOM READY ---
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateSoundButtonUI(soundEnabled);
  loadQuestions();
  renderFlashcard();
  renderCheatSheets(CHEAT_SHEETS);
  startPracticeTimer();
});

// --- 13. BACK TO TOP CONTROLLER ---
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  if (window.scrollY > 280) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
}, { passive: true });
