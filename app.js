// 72+ Golf Academy - Student Portal Logic (First Swing K01)

document.addEventListener("DOMContentLoaded", () => {
  let state = {
    profile: { ...MOCK_STUDENT_PROFILE },
    policy: { ...COURSE_POLICY },
    curriculum: [...CURRICULUM_DATA],
    quizzes: { ...QUIZZES_DATA },
    currentTab: "dashboard",
    isLoggedIn: true,
    selectedSessionDetail: null,
    activeQuizId: null,
    quizState: {
      currentIndex: 0,
      answers: {},
      score: 0,
      isDone: false
    }
  };

  const SVG_ICONS = {
    calendar: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>`,
    location: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z"/></svg>`,
    user: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    clock: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
    book: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>`,
    check: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    play: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
    share: `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>`
  };

  const tabs = document.querySelectorAll(".nav-item");
  const tabContents = document.querySelectorAll(".tab-content");

  initNavigation();
  checkAuthAndRender();

  function initNavigation() {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");
        switchTab(targetTab);
      });
    });
  }

  function switchTab(tabId) {
    state.currentTab = tabId;
    tabs.forEach((t) => {
      t.classList.toggle("active", t.getAttribute("data-tab") === tabId);
    });
    tabContents.forEach((c) => {
      c.classList.toggle("active", c.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkAuthAndRender() {
    if (!state.isLoggedIn) {
      renderLoginScreen();
      return;
    }

    if (!state.profile.isApprovedByAdmin) {
      renderAdminPendingScreen();
      return;
    }

    renderDashboard();
    renderRoadmap();
    renderCurriculum();
    renderQuizzes();
    renderProfile();
  }

  function renderLoginScreen() {
    const dashboardTab = document.getElementById("tab-dashboard");
    if (!dashboardTab) return;

    dashboardTab.innerHTML = `
      <div class="card" style="text-align: center; padding: 24px;">
        <div style="font-size: 24px; font-weight: 900; color: var(--action-red); margin-bottom: 6px;">72+ GOLF ACADEMY</div>
        <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 4px;">ĐĂNG NHẬP HỌC VIÊN</h3>
        <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 16px;">
          Nhập Số điện thoại hoặc Email đã đăng ký lớp First Swing
        </p>

        <div style="margin-bottom: 12px; text-align: left;">
          <input type="text" id="login-input" placeholder="Số điện thoại hoặc Email">
        </div>

        <button id="btn-login-submit" class="btn btn-primary btn-full">
          Đăng Nhập
        </button>
      </div>
    `;

    document.getElementById("btn-login-submit")?.addEventListener("click", () => {
      state.isLoggedIn = true;
      checkAuthAndRender();
    });
  }

  function renderAdminPendingScreen() {
    const dashboardTab = document.getElementById("tab-dashboard");
    if (!dashboardTab) return;

    dashboardTab.innerHTML = `
      <div class="card card-hero">
        <h3 style="font-size: 14px; font-weight: 800; color: white; margin-bottom: 6px;">ĐANG CHỜ PHÊ DUYỆT TÀI KHOẢN</h3>
        <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 14px;">
          Tài khoản của học viên <strong>${state.profile.name}</strong> (${state.profile.phone}) đang được Admin kiểm tra.
        </p>
        <div style="background: rgba(0,0,0,0.25); padding: 10px; border-radius: 4px; font-size: 11px; margin-bottom: 14px;">
          <div>${SVG_ICONS.book} <strong>Lớp:</strong> ${state.policy.cohortName}</div>
          <div>${SVG_ICONS.location} <strong>Cơ sở:</strong> ${state.policy.location}</div>
        </div>
        <button class="btn btn-blue btn-sm" onclick="location.reload()">
          Kiểm Tra Lại
        </button>
      </div>
    `;
  }

  // 1. Dashboard Tab
  function renderDashboard() {
    const dashboardTab = document.getElementById("tab-dashboard");
    if (!dashboardTab) return;

    const upcoming = state.profile.upcomingSession;
    const progressPercent = Math.round((state.profile.attendedCount / state.profile.totalSessions) * 100);

    dashboardTab.innerHTML = `
      <!-- Hero Card: Upcoming Session -->
      <div class="card card-next-immediate">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-red">BUỔI HỌC SẮP TỚI</span>
          <span style="font-size: 12px; color: var(--gold-accent); font-weight: 700;">${state.profile.studentId}</span>
        </div>

        <h2 style="font-size: 16px; font-weight: 800; color: white; margin-bottom: 6px;">
          ${upcoming.title}
        </h2>

        <div style="font-size: 13px; color: var(--gold-accent); font-weight: 700; margin-bottom: 8px;">
          ${SVG_ICONS.calendar} ${upcoming.date} (${upcoming.time})
        </div>

        <div style="font-size: 12px; color: var(--ink-muted); margin-bottom: 14px; display: flex; flex-direction: column; gap: 4px;">
          <div>${SVG_ICONS.location} ${upcoming.location}</div>
          <div>${SVG_ICONS.user} HLV: ${state.profile.coach}</div>
        </div>

        <!-- Inline Compact Buttons -->
        <div style="display: flex; gap: 8px; align-items: center;">
          <button id="btn-confirm-attendance" class="btn ${upcoming.status === 'confirmed' ? 'btn-secondary' : 'btn-primary'} btn-sm">
            ${upcoming.status === 'confirmed' ? SVG_ICONS.check + ' Đã Đăng Ký' : 'Xác Nhận Tham Gia'}
          </button>
          <button id="btn-request-leave" class="btn btn-secondary btn-sm" style="color: #ff7b75; border-color: rgba(239,63,54,0.3);">
            Xin Nghỉ Học
          </button>
        </div>
      </div>

      <!-- Cohort Summary -->
      <div class="card card-hero">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h3 style="font-size: 14px; font-weight: 800; color: white;">${state.policy.cohortName}</h3>
          <span style="font-size: 12px; color: var(--action-blue); font-weight: 700;">${progressPercent}%</span>
        </div>
        <div style="font-size: 12px; color: var(--ink-muted); margin-bottom: 8px;">
          Đã học ${state.profile.attendedCount} / ${state.profile.totalSessions} buổi
        </div>
        <div style="background: rgba(255,255,255,0.08); height: 6px; border-radius: 3px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, var(--action-blue), #5bb3f5); height: 100%; width: ${progressPercent}%;"></div>
        </div>
      </div>

      <!-- Thông tin chung & Chính sách -->
      <div class="section-title">Thông Tin Chung & Chính Sách Khóa Học</div>
      <div class="card">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: var(--ink-light); line-height: 1.5;">
          ${state.policy.policies.map(p => `<li style="padding-left: 12px; position: relative;">• ${p}</li>`).join('')}
        </ul>
      </div>
    `;

    document.getElementById("btn-confirm-attendance")?.addEventListener("click", () => {
      upcoming.status = upcoming.status === 'confirmed' ? 'pending_confirmation' : 'confirmed';
      renderDashboard();
      renderRoadmap();
    });

    document.getElementById("btn-request-leave")?.addEventListener("click", () => {
      alert("Đã gửi thông báo Xin Nghỉ Học đến HLV và bộ phận xếp lịch 72+!");
    });
  }

  // 2. Roadmap Tab
  function renderRoadmap() {
    const roadmapTab = document.getElementById("tab-schedule");
    if (!roadmapTab) return;

    let html = `
      <div class="section-title">Lộ Trình Khóa Học</div>
      <p style="font-size: 12px; color: var(--ink-muted); margin-bottom: 14px; line-height: 1.4;">
        Thẻ xanh: Buổi chưa học | Thẻ xám: Buổi đã qua (nhấp để xem chi tiết & Rating).
      </p>
    `;

    state.curriculum.forEach((phase) => {
      html += `
        <div style="font-size: 11px; font-weight: 800; color: var(--action-blue); text-transform: uppercase; margin: 16px 0 8px; letter-spacing: 0.5px;">
          ${phase.phaseName}
        </div>
      `;

      phase.sessions.forEach((s) => {
        const isPast = s.id < state.profile.currentSession;
        const isCurrent = s.id === state.profile.currentSession;
        const isFuture = s.id > state.profile.currentSession;

        let cardClass = "card-past";
        let badgeClass = "badge-gray";
        let statusText = "ĐÃ HỌC";

        if (isCurrent) {
          cardClass = "card-next-immediate";
          badgeClass = "badge-red";
          statusText = "BUỔI TIẾP THEO";
        } else if (isFuture) {
          cardClass = "card-upcoming";
          badgeClass = "badge-blue";
          statusText = "CHƯA HỌC";
        }

        html += `
          <div class="card ${cardClass}" onclick="openSessionDetailModal(${s.id})" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;">
              <span style="font-weight: 700; font-size: 14px; color: white; flex: 1; line-height: 1.35;">Buổi ${s.id}: ${s.title.split(':')[1] || s.title}</span>
              <span class="badge ${badgeClass}">${statusText}</span>
            </div>
            
            <div style="font-size: 12px; color: var(--gold-accent); font-weight: 600; margin-bottom: 6px;">
              ${SVG_ICONS.calendar} ${s.date || 'Lịch học'} (${s.time || '18:00'})
            </div>

            <p style="font-size: 12px; color: var(--ink-muted); margin-bottom: 10px; line-height: 1.45;">${s.techFocus}</p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; margin-top: 4px;">
              <span style="font-size: 11px; color: var(--ink-muted);">${SVG_ICONS.clock} ${s.duration}</span>
              <span class="action-link">Chi tiết →</span>
            </div>
          </div>
        `;

        // Milestone Test Card (Compact Banner - NOT OVERWHELMING!)
        if (s.milestoneQuizId) {
          const quizObj = state.quizzes[s.milestoneQuizId];
          if (quizObj) {
            const isCompleted = state.profile.completedQuizzes[s.milestoneQuizId] !== undefined;
            html += `
              <div class="card card-hero" style="padding: 12px 14px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span class="badge badge-gold">${quizObj.milestone}</span>
                  <span style="font-size: 10px; color: var(--ink-muted);">${quizObj.coverage}</span>
                </div>
                <div style="font-size: 12px; font-weight: 700; color: white; margin-bottom: 6px;">
                  ${quizObj.title}
                </div>
                <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="event.stopPropagation(); startMilestoneQuiz('${s.milestoneQuizId}')">
                  ${isCompleted ? SVG_ICONS.check + ' Kết quả (' + state.profile.completedQuizzes[s.milestoneQuizId] + '%)' : 'Làm Bài Test Mốc'}
                </button>
              </div>
            `;
          }
        }
      });
    });

    roadmapTab.innerHTML = html;
  }

  // Session Detail Modal (Editorial Article Layout - Tự nhiên như bài báo)
  window.openSessionDetailModal = function (sessionId) {
    let sessionObj = null;
    state.curriculum.forEach(phase => {
      phase.sessions.forEach(s => {
        if (s.id === sessionId) sessionObj = s;
      });
    });

    if (!sessionObj) return;

    const modalBody = document.getElementById("session-detail-body");
    if (!modalBody) return;

    const isPast = sessionObj.id < state.profile.currentSession;
    const mat = sessionObj.learningMaterials;
    const article = mat?.article;

    modalBody.innerHTML = `
      <!-- Article Header -->
      <div style="font-size: 11px; color: var(--gold-accent); font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
        Học liệu chuyên môn • Buổi ${sessionObj.id} / 25
      </div>

      <h2 style="font-size: 16px; font-weight: 800; color: white; margin-bottom: 12px; line-height: 1.35;">
        ${sessionObj.title}
      </h2>

      <!-- Article Flow Content (Tự nhiên như bài báo) -->
      <div style="font-size: 12px; color: #d6daee; line-height: 1.6; margin-bottom: 16px;">
        <p style="margin-bottom: 12px; font-weight: 500; color: #e8ecff;">
          ${sessionObj.techFocus}
        </p>

        ${article ? `
          <div style="white-space: pre-line; margin-bottom: 14px;">
            ${article.fullText}
          </div>
        ` : ''}

        <!-- Embedded Diagram Image (Lồng tự nhiên) -->
        <div style="margin: 14px 0; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; overflow: hidden;">
          <div style="height: 130px; background: rgba(255,255,255,0.03); display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--ink-muted); padding: 10px; text-align: center;">
            [Hình Ảnh / Sơ Đồ Minh Họa Động Tác Kỹ Thuật High-Res]
          </div>
          <div style="padding: 8px 12px; font-size: 10px; color: var(--ink-muted); font-style: italic; background: rgba(0,0,0,0.2);">
            Hình 1: Sơ đồ kỹ thuật set-up tư thế & quỹ đạo mặt gậy Buổi ${sessionObj.id}.
          </div>
        </div>

        <!-- Embedded Short Video Block (Lồng tự nhiên) -->
        <div style="margin: 14px 0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 6px;">
          <div style="font-size: 12px; font-weight: 700; color: white; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span style="color: var(--action-blue);">${SVG_ICONS.play}</span>
            Video Hướng Dẫn: ${sessionObj.drills[0]?.name || 'Bài tập kỹ thuật'}
          </div>
          <p style="font-size: 11px; color: var(--ink-muted);">
            ${sessionObj.drills[0]?.desc || 'Video 15s nắn chỉnh động tác.'}
          </p>
        </div>

        <!-- Etiquette Note (Dạng trích dẫn/callout cuối bài) -->
        <div style="margin-top: 14px; padding: 10px 12px; border-left: 3px solid var(--action-blue); background: rgba(19, 117, 188, 0.08); border-radius: 0 4px 4px 0; font-size: 11px; color: #b0ccef;">
          <strong>Lưu ý Etiquette:</strong> ${sessionObj.etiquetteTip}
        </div>
      </div>

      ${isPast && sessionObj.coachNotes ? `
        <div style="background: rgba(0,0,0,0.25); padding: 10px; border-radius: 4px; font-size: 11px; margin-bottom: 12px;">
          <strong style="color: white;">Nhận xét của HLV:</strong>
          <p style="color: var(--ink-muted); margin-top: 2px;">${sessionObj.coachNotes}</p>
        </div>
      ` : ''}

      <!-- Rating Section -->
      <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; text-align: center;">
        <strong style="color: white; font-size: 10px; text-transform: uppercase;">ĐÁNH GIÁ BUỔI HỌC:</strong>
        <div class="star-rating" id="modal-star-container" style="margin: 6px 0;"></div>
        <button class="btn btn-primary btn-sm" onclick="submitModalRating(${sessionObj.id})">
          Gửi Đánh Giá
        </button>
      </div>
    `;

    document.getElementById("session-detail-modal").classList.add("active");
    renderModalStars(sessionObj.studentRating || 5);
  };

  let modalStarCount = 5;
  function renderModalStars(count) {
    modalStarCount = count;
    const container = document.getElementById("modal-star-container");
    if (!container) return;
    let html = "";
    for (let i = 1; i <= 5; i++) {
      html += `<button class="star-btn ${i <= modalStarCount ? 'active' : ''}" onclick="setModalStarCount(${i})">★</button>`;
    }
    container.innerHTML = html;
  }

  window.setModalStarCount = function (val) {
    renderModalStars(val);
  };

  window.saveStudentDiary = function (sessionId) {
    const val = document.getElementById("student-diary-text")?.value || "";
    state.curriculum.forEach(p => p.sessions.forEach(s => {
      if (s.id === sessionId) s.studentDiary = val;
    }));
    alert("Đã lưu ghi chú nhật ký!");
  };

  window.submitModalRating = function (sessionId) {
    state.curriculum.forEach(p => p.sessions.forEach(s => {
      if (s.id === sessionId) s.studentRating = modalStarCount;
    }));
    alert(`Đã gửi đánh giá ${modalStarCount}★ cho Buổi ${sessionId}!`);
    closeSessionDetailModal();
  };

  window.closeSessionDetailModal = function () {
    document.getElementById("session-detail-modal").classList.remove("active");
  };

  // 3. Curriculum Tab (Listing gọn gàng các buổi học - Bấm vào để xem Học liệu chi tiết)
  function renderCurriculum() {
    const curriculumTab = document.getElementById("tab-curriculum");
    if (!curriculumTab) return;

    let html = `
      <div class="section-title">Danh Sách Học Liệu 24 Buổi</div>
      <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 12px;">
        Bấm vào từng buổi học bên dưới để xem bài viết chuyên sâu, sơ đồ minh họa & video nắn chỉnh kỹ thuật.
      </p>
    `;

    state.curriculum.forEach((phase) => {
      html += `<div style="font-size: 10px; font-weight: 800; color: var(--gold-accent); text-transform: uppercase; margin: 14px 0 6px;">${phase.phaseName}</div>`;

      phase.sessions.forEach((s) => {
        html += `
          <div class="card" onclick="openSessionDetailModal(${s.id})" style="cursor: pointer; margin-bottom: 8px; padding: 12px 14px; transition: background 0.15s ease;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <h4 style="font-weight: 700; font-size: 13px; color: white; margin-bottom: 2px;">
                  Buổi ${s.id}: ${s.title.split(':')[1] || s.title}
                </h4>
                <p style="font-size: 11px; color: var(--ink-muted); line-height: 1.3;">
                  ${s.techFocus.substring(0, 55)}...
                </p>
              </div>
              <span class="action-link" style="margin-left: 10px; font-size: 10px; flex-shrink: 0;">
                Xem học liệu →
              </span>
            </div>
          </div>
        `;
      });
    });

    curriculumTab.innerHTML = html;
  }

  // 4. Quizzes Tab
  function renderQuizzes() {
    const quizzesTab = document.getElementById("tab-quizzes");
    if (!quizzesTab) return;

    let html = `
      <div class="section-title">Hệ Thống Kiểm Tra & Đánh Giá Tốt Nghiệp</div>
      <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 14px;">
        Hệ thống kiểm tra 4 giai đoạn bao gồm: Đánh giá tiêu chuẩn HĐCM (Review HĐCM) & Bài test trắc nghiệm lý thuyết golf.
      </p>
    `;

    Object.keys(state.quizzes).forEach((quizKey) => {
      const q = state.quizzes[quizKey];
      const isCompleted = state.profile.completedQuizzes && state.profile.completedQuizzes[quizKey] !== undefined;

      let criteriaListHtml = "";
      if (q.practicalCriteria && q.practicalCriteria.length > 0) {
        criteriaListHtml = `
          <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; margin: 10px 0;">
            <div style="font-size: 11px; font-weight: 700; color: #ffd700; margin-bottom: 6px;">
              📋 ${q.reviewHeader || 'Tiêu chuẩn đánh giá HĐCM:'}
            </div>
            <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #cbd5e1; line-height: 1.5;">
              ${q.practicalCriteria.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      html += `
        <div class="card card-hero" style="margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="badge badge-gold">KHOẢNG CÁCH DỰ THI</span>
            <span style="font-size: 10px; color: var(--ink-muted);">${q.questions ? q.questions.length + ' câu trắc nghiệm' : ''}</span>
          </div>
          <h3 style="font-size: 14px; font-weight: 800; color: white; margin-bottom: 4px;">${q.title}</h3>
          
          ${criteriaListHtml}
          
          <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="startMilestoneQuiz('${quizKey}')" style="width: 100%; margin-top: 6px;">
            ${isCompleted ? SVG_ICONS.check + ' Đã Hoàn Thành Bài Test (' + state.profile.completedQuizzes[quizKey] + '%)' : '▶ Bắt Đầu Làm Bài Test Trắc Nghiệm'}
          </button>
        </div>
      `;
    });

    quizzesTab.innerHTML = html;
  }

  // Quiz Execution Modal & Dynamic Random Exam Generator
  window.startMilestoneQuiz = function (quizKey) {
    const quiz = state.quizzes[quizKey];
    if (!quiz || !quiz.questions) return;

    // Deep clone and shuffle questions
    let shuffledQuestions = JSON.parse(JSON.stringify(quiz.questions));
    shuffledQuestions.sort(() => Math.random() - 0.5);

    // Shuffle options for each question while preserving correct index
    shuffledQuestions.forEach(q => {
      const correctOptionText = q.options[q.correct];
      q.options.sort(() => Math.random() - 0.5);
      q.correct = q.options.indexOf(correctOptionText);
    });

    state.activeQuizId = quizKey;
    state.quizState = {
      currentIndex: 0,
      answers: {},
      score: 0,
      isDone: false,
      questions: shuffledQuestions
    };
    document.getElementById("quiz-modal").classList.add("active");
    renderQuizQuestionModal();
  };

  function renderQuizQuestionModal() {
    const quizModalBody = document.getElementById("quiz-modal-body");
    const quiz = state.quizzes[state.activeQuizId];
    if (!quiz || !quizModalBody) return;

    const qState = state.quizState;
    const questions = qState.questions || quiz.questions;
    const totalQ = questions.length;

    if (qState.isDone) {
      const scorePercent = Math.round((qState.score / totalQ) * 100);
      const passScore = quiz.passScore || 75;
      const isPassed = scorePercent >= passScore;

      if (!state.profile.completedQuizzes) state.profile.completedQuizzes = {};
      
      // Store best score
      if (!state.profile.completedQuizzes[state.activeQuizId] || scorePercent > state.profile.completedQuizzes[state.activeQuizId]) {
        state.profile.completedQuizzes[state.activeQuizId] = scorePercent;
      }

      let reviewDetailsHtml = questions.map((q, qIdx) => {
        const userChoiceIdx = qState.answers[qIdx];
        const isCorrectChoice = userChoiceIdx === q.correct;

        return `
          <div style="background: rgba(255,255,255,0.04); border-left: 3px solid ${isCorrectChoice ? '#10b981' : '#ef4444'}; padding: 10px; border-radius: 6px; margin-bottom: 12px; text-align: left;">
            <div style="font-size: 12px; font-weight: 700; color: white; margin-bottom: 6px;">
              Câu ${qIdx + 1}: ${q.question}
            </div>
            
            <div style="font-size: 11px; margin-bottom: 4px;">
              <span style="color: var(--ink-muted);">Lựa chọn của bạn: </span>
              <span style="font-weight: 700; color: ${isCorrectChoice ? '#10b981' : '#ef4444'};">
                ${userChoiceIdx !== undefined ? q.options[userChoiceIdx] : 'Chưa chọn'} 
                ${isCorrectChoice ? '✓ (Đúng)' : '✗ (Chưa đúng)'}
              </span>
            </div>

            ${!isCorrectChoice ? `
              <div style="font-size: 11px; color: #10b981; font-weight: 700; margin-bottom: 6px;">
                Đáp án chuẩn 72+: ${q.options[q.correct]}
              </div>
            ` : ''}

            <div style="background: rgba(239, 63, 54, 0.1); padding: 8px; border-radius: 4px; font-size: 11px; color: #cbd5e1; line-height: 1.4; margin-top: 6px;">
              <strong style="color: #ef3f36;">💡 Giải thích chuyên môn 72+:</strong> ${q.explanation}
            </div>
          </div>
        `;
      }).join('');

      quizModalBody.innerHTML = `
        <div style="text-align: center; padding: 6px;">
          <span class="badge ${isPassed ? 'badge-gold' : 'badge-red'}" style="margin-bottom: 8px;">
            ${isPassed ? '🏆 ĐẠT TIÊU CHUẨN' : '⚠️ CHƯA ĐẠT (CẦN ÔN LẠI)'}
          </span>
          <h3 style="font-size: 15px; font-weight: 800; margin-bottom: 4px;">KẾT QUẢ VÀ ĐÁP ÁN CHI TIẾT</h3>
          <div style="font-size: 22px; font-weight: 900; color: ${isPassed ? '#10b981' : '#ef3f36'}; margin-bottom: 8px;">
            ${qState.score} / ${totalQ} CÂU ĐÚNG (${scorePercent}%)
          </div>
          <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 14px;">
            ${isPassed 
              ? 'Chúc mừng anh/chị đã hoàn thành bài test xuất sắc! Anh/chị có thể làm lại bài với đề ngẫu nhiên mới bất kỳ lúc nào.' 
              : `Điểm đạt yêu cầu là ${passScore}%. Anh/chị hãy đọc kỹ giải thích lỗi sai bên dưới và bấm Làm Lại Bài để luyện tập cho tới khi đạt nhé!`}
          </p>

          <div style="max-height: 280px; overflow-y: auto; margin-bottom: 14px; padding-right: 4px;">
            ${reviewDetailsHtml}
          </div>

          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="startMilestoneQuiz('${state.activeQuizId}')" style="flex: 1;">
              🔄 Làm Lại Bài (Đề Khác)
            </button>
            <button class="btn btn-primary btn-sm" onclick="closeQuizModal()" style="flex: 1;">
              Hoàn Tất & Đóng
            </button>
          </div>
        </div>
      `;
      renderRoadmap();
      renderQuizzes();
      return;
    }

    const currentQ = questions[qState.currentIndex];
    const selectedOpt = qState.answers[qState.currentIndex];

    quizModalBody.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--action-blue); font-weight: 700; margin-bottom: 8px;">
        <span>CÂU ${qState.currentIndex + 1} / ${totalQ} (Đề Thi Ngẫu Nhiên)</span>
      </div>

      <h4 style="font-size: 13px; font-weight: 700; color: white; margin-bottom: 14px; line-height: 1.4; text-align: left;">
        ${currentQ.question}
      </h4>

      <div style="margin-bottom: 16px;">
        ${currentQ.options.map((opt, idx) => `
          <div class="quiz-option ${selectedOpt === idx ? 'selected' : ''}" onclick="selectQuizOpt(${idx})" style="text-align: left;">
            <span style="font-size: 12px; font-weight: 600;">${opt}</span>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; gap: 8px;">
        ${qState.currentIndex > 0 ? `
          <button class="btn btn-secondary btn-sm" onclick="prevQuizQ()">← Trước</button>
        ` : ''}
        <button class="btn btn-primary btn-sm" onclick="nextQuizQ()" ${selectedOpt === undefined ? 'disabled style="opacity:0.5"' : ''}>
          ${qState.currentIndex === totalQ - 1 ? 'Nộp Bài & Chấm Điểm' : 'Tiếp Theo →'}
        </button>
      </div>
    `;
  }

  window.selectQuizOpt = function (optIdx) {
    state.quizState.answers[state.quizState.currentIndex] = optIdx;
    renderQuizQuestionModal();
  };

  window.nextQuizQ = function () {
    const qState = state.quizState;
    const questions = qState.questions || state.quizzes[state.activeQuizId].questions;

    if (qState.currentIndex < questions.length - 1) {
      qState.currentIndex++;
      renderQuizQuestionModal();
    } else {
      let score = 0;
      questions.forEach((q, idx) => {
        if (qState.answers[idx] === q.correct) score++;
      });
      qState.score = score;
      qState.isDone = true;
      renderQuizQuestionModal();
    }
  };

  window.prevQuizQ = function () {
    if (state.quizState.currentIndex > 0) {
      state.quizState.currentIndex--;
      renderQuizQuestionModal();
    }
  };

  window.closeQuizModal = function () {
    document.getElementById("quiz-modal").classList.remove("active");
  };

  // 5. Profile Tab
  function renderProfile() {
    const profileTab = document.getElementById("tab-profile");
    if (!profileTab) return;

    profileTab.innerHTML = `
      <div class="section-title">Hồ Sơ Học Viên</div>
      <div class="card" style="padding: 16px;">
        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
          <div style="width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, var(--action-blue), var(--primary-indigo)); display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; color: white;">
            AN
          </div>
          <div>
            <h3 style="font-size: 15px; font-weight: 800; color: white;">${state.profile.name}</h3>
            <p style="font-size: 11px; color: var(--gold-accent); font-weight: 600;">Mã học viên: ${state.profile.studentId}</p>
          </div>
        </div>

        <div style="font-size: 11px; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 4px; display: flex; flex-direction: column; gap: 4px;">
          <div>${SVG_ICONS.book} <strong>Lớp học:</strong> ${state.profile.cohort}</div>
          <div>${SVG_ICONS.user} <strong>HLV phụ trách:</strong> ${state.profile.coach}</div>
        </div>
      </div>

      <div class="section-title">Đánh Giá Chất Lượng Khóa Học</div>
      <div class="card">
        <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 8px;">
          72+ Golf Academy luôn lắng nghe ý kiến đóng góp của anh/chị để không ngừng hoàn thiện chất lượng giảng dạy.
        </p>
        <textarea id="testimonial-text" rows="2" style="font-size: 11px;" placeholder="Nhập ý kiến đóng góp của anh/chị..."></textarea>
        <button class="btn btn-primary btn-sm" onclick="submitTestimonial()" style="margin-top: 8px;">
          Gửi
        </button>
      </div>

      <div class="section-title">Giới Thiệu Học Viên Mới</div>
      <div class="card card-hero">
        <h4 style="font-size: 12px; font-weight: 700; color: white; margin-bottom: 4px;">Tặng Voucher Trải Nghiệm Golf Cho Bạn Bè</h4>
        <p style="font-size: 11px; color: var(--ink-muted); margin-bottom: 10px;">
          Giới thiệu người thân/bạn bè tham gia lớp First Swing tại 72+ Golf Academy.
        </p>
        <button class="btn btn-blue btn-sm" onclick="shareReferral()">
          ${SVG_ICONS.share} Sao Chép Link Giới Thiệu
        </button>
      </div>
    `;
  }

  window.submitTestimonial = function () {
    const text = document.getElementById("testimonial-text")?.value;
    if (!text) { alert("Vui lòng nhập nội dung đánh giá!"); return; }
    alert("Cảm ơn bạn đã gửi!");
    document.getElementById("testimonial-text").value = "";
  };

  window.shareReferral = function () {
    alert("Đã sao chép link giới thiệu học viên mới: https://72plusgolfacademy.edu.vn/referral?code=72GA-2026-089");
  };
});
