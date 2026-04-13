import { useState, useEffect, useCallback, createContext, useContext } from "react";

const APP_VERSION = "4.3";

// ============================================================
// INTERNATIONALIZATION
// ============================================================
const translations = {
  ko: {
    appTitle: "빠델 토너먼트",
    admin: "관리자",
    tournaments: "토너먼트",
    register: "참가 신청",
    createTournament: "토너먼트 만들기",
    editTournament: "토너먼트 수정",
    tournamentName: "토너먼트 이름",
    tournamentType: "토너먼트 종류",
    category: "카테고리",
    date: "날짜",
    location: "장소",
    entryFee: "참가비",
    maxTeams: "최대 팀 수",
    description: "설명",
    open: "Open",
    cup: "Cup",
    league: "리그",
    americano: "아메리카노",
    americanoType: "아메리카노 유형",
    americanoNormal: "아메리카노",
    americanoMexicano: "멕시카노",
    americanoTeam: "팀 아메리카노",
    roundRobinGames: "라운드로빈 게임 수",
    knockoutFormat: "녹아웃 스테이지 포맷",
    set3: "3세트",
    set2super: "2세트 + 슈퍼타이브레이크",
    set1game8: "1세트 (8게임)",
    set1game6: "1세트 (6게임)",
    games4: "4게임",
    games5: "5게임",
    games6: "6게임",
    teams4: "4팀",
    teams5: "5팀",
    teams8: "8팀",
    teams10: "10팀",
    leagueTeams: "참가 팀 수",
    americanoPlayers: "참가 인원",
    americanoRounds: "라운드 수",
    americanoPointsPerMatch: "매치당 포인트",
    save: "저장",
    cancel: "취소",
    delete: "삭제",
    edit: "수정",
    settings: "설정",
    status: "상태",
    upcoming: "예정",
    ongoing: "진행 중",
    completed: "완료",
    registration: "참가 신청",
    registrationOpen: "신청 가능",
    registrationClosed: "신청 마감",
    playerName: "신청자 성함",
    playerGender: "신청자 성별",
    playerPhone: "신청자 연락처",
    partnerName: "파트너 성함",
    partnerGender: "파트너 성별",
    partnerPhone: "파트너 연락처",
    teamName: "팀 이름",
    male: "남성",
    female: "여성",
    agreeTerms: "개인정보 수집 및 대회규정에 동의합니다",
    agreeRequired: "동의가 필요합니다",
    submitRegistration: "신청하기",
    pendingPayment: "입금 대기",
    paymentConfirmed: "입금 확인",
    confirmed: "신청 완료",
    confirmPayment: "입금 확인",
    rejectPayment: "거절",
    participants: "참가자",
    bracket: "대진표",
    standings: "순위표",
    roundRobin: "라운드로빈",
    knockout: "녹아웃",
    round: "라운드",
    match: "경기",
    score: "점수",
    vs: "vs",
    winner: "우승",
    groupA: "A조",
    groupB: "B조",
    quarterFinals: "8강",
    semiFinals: "4강",
    final: "결승",
    thirdPlace: "3/4위 결정전",
    points: "포인트",
    wins: "승",
    losses: "패",
    draws: "무",
    played: "경기수",
    goalDiff: "득실차",
    rank: "순위",
    noTournaments: "등록된 토너먼트가 없습니다",
    pastTournaments: "지난 대회",
    backToList: "목록으로",
    startTournament: "토너먼트 시작",
    drawGroups: "조 추첨",
    generateGroupsDraw: "조 편성하기",
    manualGroupAssign: "직접 조 편성",
    unassigned: "미배정",
    generateSchedule: "일정 생성",
    enterScore: "점수 입력",
    saveScore: "점수 저장",
    nextStage: "다음 스테이지",
    openDesc: "라운드로빈 후 녹아웃 스테이지",
    cupDesc: "녹아웃 토너먼트",
    leagueDesc: "리그전",
    americanoDesc: "매 라운드 파트너가 바뀌는 빠델 전용 토너먼트",
    paymentInfo: "참가 신청서 작성 후 아래 계좌로 참가비를 입금하셔야 신청이 완료됩니다",
    bankAccount: "입금 계좌",
    confirmRegistration: "신청을 완료하시겠습니까?",
    registrationSuccess: "신청이 완료되었습니다. 입금 후 관리자 확인을 기다려주세요.",
    all: "전체",
    manage: "관리",
    view: "보기",
    home: "홈",
    set: "세트",
    game: "게임",
    selectCategory: "카테고리 선택",
    categories: "카테고리",
    genderType: "복식 종류",
    level: "레벨",
    menDoubles: "남복",
    womenDoubles: "여복",
    mixedDoubles: "혼복",
    openDoubles: "자유",
    beginner: "비기너",
    bronze: "브론즈",
    silver: "실버",
    silverPlus: "실버+",
    gold: "골드",
    goldPlus: "골드+",
    platinum: "플레티넘",
    platinumPlus: "플레티넘+",
    addCategory: "카테고리 추가",
    removeCategory: "삭제",
    noCategoriesYet: "카테고리를 추가해주세요",
    categoryFilter: "카테고리 필터",
    registrationDeadline: "신청 기한",
    deadlinePassed: "신청 마감",
    daysLeft: "일 남음",
    knockoutFormats: "녹아웃 라운드별 포맷",
    quarterFinalsFormat: "8강 포맷",
    semiFinalsFormat: "4강 포맷",
    finalFormat: "결승 포맷",
    removeParticipant: "참가 취소",
    moveUp: "위로",
    moveDown: "아래로",
    adminPassword: "관리자 비밀번호",
    enterPassword: "비밀번호 입력",
    wrongPassword: "비밀번호가 틀립니다",
    login: "로그인",
    court: "코트",
    assignCourt: "코트 배정",
    courts: "코트 목록",
    matchTime: "경기 시간",
    shareResults: "결과 공유",
    copied: "복사됨!",
    resultsSummary: "대회 결과",
    seed: "시드",
    setSeed: "시드 설정",
    seeded: "시드 배정됨",
    thirdPlaceMatch: "3/4위 결정전",
    runnerUp: "준우승",
    third: "3위",
    fourth: "4위",
    enableThirdPlace: "3/4위전 포함",
    bracketView: "대진표",
    ranking: "랭킹",
    rankingTitle: "PS 포인트 랭킹",
    tournamentGrade: "대회 등급",
    gradeMaster: "Master",
    gradePlatinum: "Platinum",
    gradeGold: "Gold",
    gradeSilver: "Silver",
    gradeBronze: "Bronze",
    gradeFinals: "Finals",
    totalPoints: "총 포인트",
    recentTournaments: "최근 대회",
    pointsAwarded: "포인트 부여됨",
    noRanking: "랭킹 데이터가 없습니다",
    playerRanking: "선수 랭킹",
    pointHistory: "포인트 이력",
    tournamentResult: "대회 결과",
    weeksAgo: "주 전",
    expired: "만료",
    validUntil: "유효기한",
    korean: "한국어",
    english: "English",
    language: "언어",
    players: "선수",
    playerRegistry: "선수 등록부",
    addPlayer: "선수 등록",
    editPlayer: "선수 수정",
    playerBirthdate: "생년월일",
    playerFirstName: "영어 이름 (First Name)",
    playerLastName: "영어 성 (Last Name)",
    playerLevel: "레벨",
    playerCount: "명",
    noPlayers: "등록된 선수가 없습니다",
    searchPlayer: "선수 검색",
    selectPlayer: "선수 선택",
    newPlayer: "신규 등록",
    orRegisterNew: "또는 새로 등록",
    selectedPlayer: "선택된 선수",
  },
  en: {
    appTitle: "Padel Tournament",
    admin: "Admin",
    tournaments: "Tournaments",
    register: "Register",
    createTournament: "Create Tournament",
    editTournament: "Edit Tournament",
    tournamentName: "Tournament Name",
    tournamentType: "Tournament Type",
    category: "Category",
    date: "Date",
    location: "Location",
    entryFee: "Entry Fee",
    maxTeams: "Max Teams",
    description: "Description",
    open: "Open",
    cup: "Cup",
    league: "League",
    americano: "Americano",
    americanoType: "Americano Type",
    americanoNormal: "Americano",
    americanoMexicano: "Mexicano",
    americanoTeam: "Team Americano",
    roundRobinGames: "Round Robin Games",
    knockoutFormat: "Knockout Stage Format",
    set3: "3 Sets",
    set2super: "2 Sets + Super Tiebreak",
    set1game8: "1 Set (8 Games)",
    set1game6: "1 Set (6 Games)",
    games4: "4 Games",
    games5: "5 Games",
    games6: "6 Games",
    teams4: "4 Teams",
    teams5: "5 Teams",
    teams8: "8 Teams",
    teams10: "10 Teams",
    leagueTeams: "Number of Teams",
    americanoPlayers: "Number of Players",
    americanoRounds: "Number of Rounds",
    americanoPointsPerMatch: "Points per Match",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    settings: "Settings",
    status: "Status",
    upcoming: "Upcoming",
    ongoing: "Ongoing",
    completed: "Completed",
    registration: "Registration",
    registrationOpen: "Open",
    registrationClosed: "Closed",
    playerName: "Your Name",
    playerGender: "Your Gender",
    playerPhone: "Your Phone",
    partnerName: "Partner Name",
    partnerGender: "Partner Gender",
    partnerPhone: "Partner Phone",
    teamName: "Team Name",
    male: "Male",
    female: "Female",
    agreeTerms: "I agree to the privacy policy and tournament rules",
    agreeRequired: "Agreement required",
    submitRegistration: "Register",
    pendingPayment: "Pending Payment",
    paymentConfirmed: "Payment Confirmed",
    confirmed: "Confirmed",
    confirmPayment: "Confirm Payment",
    rejectPayment: "Reject",
    participants: "Participants",
    bracket: "Bracket",
    standings: "Standings",
    roundRobin: "Round Robin",
    knockout: "Knockout",
    round: "Round",
    match: "Match",
    score: "Score",
    vs: "vs",
    winner: "Winner",
    groupA: "Group A",
    groupB: "Group B",
    quarterFinals: "Quarter Finals",
    semiFinals: "Semi Finals",
    final: "Final",
    thirdPlace: "3rd Place Match",
    points: "Points",
    wins: "W",
    losses: "L",
    draws: "D",
    played: "P",
    goalDiff: "GD",
    rank: "Rank",
    noTournaments: "No tournaments yet",
    pastTournaments: "Past Tournaments",
    backToList: "Back to List",
    startTournament: "Start Tournament",
    drawGroups: "Draw Groups",
    generateGroupsDraw: "Generate Groups",
    manualGroupAssign: "Manual Group Assignment",
    unassigned: "Unassigned",
    generateSchedule: "Generate Schedule",
    enterScore: "Enter Score",
    saveScore: "Save Score",
    nextStage: "Next Stage",
    openDesc: "Round Robin then Knockout Stage",
    cupDesc: "Knockout Tournament",
    leagueDesc: "League",
    americanoDesc: "Padel-specific format with rotating partners",
    paymentInfo: "Please complete the form and transfer the entry fee to the account below to finalize your registration",
    bankAccount: "Bank Account",
    confirmRegistration: "Confirm your registration?",
    registrationSuccess: "Registration submitted. Please wait for admin confirmation after payment.",
    all: "All",
    manage: "Manage",
    view: "View",
    home: "Home",
    set: "Set",
    game: "Game",
    selectCategory: "Select Category",
    categories: "Categories",
    genderType: "Doubles Type",
    level: "Level",
    menDoubles: "Men's Doubles",
    womenDoubles: "Women's Doubles",
    mixedDoubles: "Mixed Doubles",
    openDoubles: "Open",
    beginner: "Beginner",
    bronze: "Bronze",
    silver: "Silver",
    silverPlus: "Silver+",
    gold: "Gold",
    goldPlus: "Gold+",
    platinum: "Platinum",
    platinumPlus: "Platinum+",
    addCategory: "Add Category",
    removeCategory: "Remove",
    noCategoriesYet: "Please add categories",
    categoryFilter: "Category Filter",
    registrationDeadline: "Registration Deadline",
    deadlinePassed: "Registration Closed",
    daysLeft: "days left",
    knockoutFormats: "Knockout Round Formats",
    quarterFinalsFormat: "Quarter Finals Format",
    semiFinalsFormat: "Semi Finals Format",
    finalFormat: "Final Format",
    removeParticipant: "Remove",
    moveUp: "Up",
    moveDown: "Down",
    adminPassword: "Admin Password",
    enterPassword: "Enter Password",
    wrongPassword: "Wrong password",
    login: "Login",
    court: "Court",
    assignCourt: "Assign Court",
    courts: "Courts",
    matchTime: "Match Time",
    shareResults: "Share Results",
    copied: "Copied!",
    resultsSummary: "Tournament Results",
    seed: "Seed",
    setSeed: "Set Seed",
    seeded: "Seeded",
    thirdPlaceMatch: "3rd Place Match",
    runnerUp: "Runner-up",
    third: "3rd",
    fourth: "4th",
    enableThirdPlace: "Include 3rd Place Match",
    bracketView: "Bracket",
    ranking: "Ranking",
    rankingTitle: "PS Point Ranking",
    tournamentGrade: "Tournament Grade",
    gradeMaster: "Master",
    gradePlatinum: "Platinum",
    gradeGold: "Gold",
    gradeSilver: "Silver",
    gradeBronze: "Bronze",
    gradeFinals: "Finals",
    totalPoints: "Total Points",
    recentTournaments: "Recent Tournaments",
    pointsAwarded: "Points Awarded",
    noRanking: "No ranking data",
    playerRanking: "Player Ranking",
    pointHistory: "Point History",
    tournamentResult: "Result",
    weeksAgo: "weeks ago",
    expired: "Expired",
    validUntil: "Valid until",
    korean: "한국어",
    english: "English",
    language: "Language",
    players: "Players",
    playerRegistry: "Player Registry",
    addPlayer: "Add Player",
    editPlayer: "Edit Player",
    playerBirthdate: "Date of Birth",
    playerFirstName: "First Name",
    playerLastName: "Last Name",
    playerLevel: "Level",
    playerCount: "players",
    noPlayers: "No players registered",
    searchPlayer: "Search player",
    selectPlayer: "Select Player",
    newPlayer: "New Player",
    orRegisterNew: "or register new",
    selectedPlayer: "Selected",
  },
};

const LangContext = createContext();
const useLang = () => useContext(LangContext);
const t = (lang, key) => translations[lang]?.[key] || key;

// ============================================================
// DATA HELPERS
// ============================================================
const generateId = () => Math.random().toString(36).substr(2, 9);

// ============================================================
// FIRESTORE HELPERS (Firestore 전용 — localStorage 사용하지 않음)
// ============================================================
const fsDb = window.db;
const FS_COLLECTION = "appData";

const loadFromFirestore = async (docId) => {
  try {
    if (!fsDb) return null;
    const doc = await fsDb.collection(FS_COLLECTION).doc(docId).get();
    if (doc.exists) {
      const raw = doc.data();
      // 새 형식 (JSON 문자열) 또는 구 형식 (items 배열) 모두 지원
      let items;
      if (raw.data) {
        items = JSON.parse(raw.data);
      } else if (raw.items) {
        items = raw.items;
      } else {
        items = [];
      }
      return { items, updatedAt: raw.updatedAt || null };
    }
    return null;
  } catch (e) {
    console.error("Firestore load error (" + docId + "):", e);
    return null;
  }
};

// 저장 상태 표시 (디버깅용)
const showSaveStatus = (msg, isError) => {
  const el = document.getElementById("save-status");
  if (!el) {
    const div = document.createElement("div");
    div.id = "save-status";
    div.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);padding:8px 16px;border-radius:8px;font-size:12px;z-index:9999;transition:opacity 0.3s;pointer-events:none;";
    document.body.appendChild(div);
  }
  const status = document.getElementById("save-status");
  status.textContent = msg;
  status.style.background = isError ? "#dc2626" : "#16a34a";
  status.style.color = "#fff";
  status.style.opacity = "1";
  setTimeout(() => { status.style.opacity = "0"; }, 2000);
};

const saveToFirestore = async (docId, list) => {
  try {
    if (!fsDb) { showSaveStatus("DB 연결 안됨!", true); return false; }
    // Firestore는 중첩 배열을 지원하지 않으므로 JSON 문자열로 저장
    await fsDb.collection(FS_COLLECTION).doc(docId).set({
      data: JSON.stringify(list),
      updatedAt: new Date().toISOString()
    });
    showSaveStatus("✓ 저장 완료");
    return true;
  } catch (e) {
    console.error("[save] FAILED:", e);
    showSaveStatus("✗ 저장 실패: " + e.message, true);
    return false;
  }
};

const GENDER_TYPES = ["menDoubles", "womenDoubles", "mixedDoubles", "openDoubles"];
const LEVELS = ["beginner", "bronze", "silver", "silverPlus", "gold", "goldPlus", "platinum", "platinumPlus"];

// Build a category label like "남복 골드" or "Men's Doubles Gold"
const categoryLabel = (lang, genderKey, levelKey) => {
  if (!genderKey && !levelKey) return "-";
  const T = (key) => translations[lang]?.[key] || key;
  const parts = [];
  if (genderKey) parts.push(T(genderKey));
  if (levelKey) parts.push(T(levelKey));
  return parts.join(" ");
};

// ============================================================
// KPF POINT SYSTEM
// ============================================================
const TOURNAMENT_GRADES = ["finals", "master", "platinum", "gold", "silver", "bronze"];
const GRADE_COLORS = {
  master: "#b8860b", platinum: "#8b8b8b", gold: "#daa520",
  silver: "#708090", bronze: "#cd7f32", finals: "#104734",
};

// Points: [W, F, SF, QF, R16, R32]
const POINT_TABLE = {
  master:   [2000, 1200, 720, 360, 180, 90],
  platinum: [1000,  600, 360, 180,  90, 45],
  gold:     [ 500,  300, 180,  90,  45, 22],
  silver:   [ 200,  120,  72,  36,  18,  9],
  bronze:   [  80,   48,  28,  14,   7,  4],
  finals:   [1500,  900, 540, 270, 135,  0],
};

// Result index mapping: W=0, F=1, SF=2, QF=3, R16=4, R32=5
const RESULT_LABELS = { ko: ["우승", "준우승", "4강", "8강", "16강", "32강"], en: ["W", "F", "SF", "QF", "R16", "R32"] };


// Calculate points for a placement result in a given tournament grade
const getPoints = (grade, resultIdx) => {
  if (!grade || resultIdx < 0 || resultIdx > 5) return 0;
  return (POINT_TABLE[grade] || [])[resultIdx] || 0;
};

// Check if a ranking entry is still valid (within 52 weeks)
const isRankingValid = (dateStr) => {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const now = new Date();
  const diffWeeks = (now - d) / (1000 * 60 * 60 * 24 * 7);
  return diffWeeks <= 52;
};

// Calculate player rankings from ranking entries
const calcPlayerRankings = (entries, filters, players) => {
  const valid = entries.filter((e) => isRankingValid(e.date));
  let filtered = valid;
  if (filters?.tournamentName) {
    filtered = filtered.filter((e) => e.tournamentName === filters.tournamentName);
  }
  if (filters?.gender) {
    // Build player gender lookup from players list as fallback
    const playerGenderMap = {};
    (players || []).forEach((p) => { if (p.name && p.gender) playerGenderMap[p.name] = p.gender; });
    filtered = filtered.filter((e) => (e.playerGender || playerGenderMap[e.playerName]) === filters.gender);
  }
  if (filters?.level) {
    filtered = filtered.filter((e) => e.categoryLevel === filters.level);
  }

  const playerMap = {};
  filtered.forEach((e) => {
    if (!playerMap[e.playerName]) {
      playerMap[e.playerName] = { name: e.playerName, totalPoints: 0, entries: [] };
    }
    playerMap[e.playerName].totalPoints += e.points;
    playerMap[e.playerName].entries.push(e);
  });

  return Object.values(playerMap).sort((a, b) => b.totalPoints - a.totalPoints);
};

// Determine each player's result index from a completed tournament
const calcTournamentResults = (tournament) => {
  const results = []; // { playerName, resultIdx }
  const regs = tournament.registrations || [];
  const getName = (id) => {
    const r = regs.find((r) => r.id === id);
    return r ? (r.teamName || r.playerName) : null;
  };
  const getPlayerNames = (id) => {
    const r = regs.find((r) => r.id === id);
    if (!r) return [];
    return r.partnerName ? [r.playerName, r.partnerName] : [r.playerName];
  };

  const kb = tournament.knockoutBracket;
  if (kb && kb.rounds.length > 0) {
    const finalRound = kb.rounds[kb.rounds.length - 1];
    const semiRound = kb.rounds.length >= 2 ? kb.rounds[kb.rounds.length - 2] : null;
    const qfRound = kb.rounds.length >= 3 ? kb.rounds[kb.rounds.length - 3] : null;

    // Final → W(0), F(1)
    finalRound.forEach((m) => {
      if (m.completed) {
        const winnerId = m.homeScore > m.awayScore ? m.home : m.away;
        const loserId = m.homeScore > m.awayScore ? m.away : m.home;
        getPlayerNames(winnerId).forEach((n) => results.push({ playerName: n, resultIdx: 0 }));
        getPlayerNames(loserId).forEach((n) => results.push({ playerName: n, resultIdx: 1 }));
      }
    });

    // 3rd place match
    if (kb.thirdPlaceMatch?.completed) {
      const winnerId = kb.thirdPlaceMatch.homeScore > kb.thirdPlaceMatch.awayScore ? kb.thirdPlaceMatch.home : kb.thirdPlaceMatch.away;
      const loserId = kb.thirdPlaceMatch.homeScore > kb.thirdPlaceMatch.awayScore ? kb.thirdPlaceMatch.away : kb.thirdPlaceMatch.home;
      // Winner of 3rd place match gets SF points (idx 2), loser gets SF too (both are 4강)
      // Actually per the table, SF losers get SF points. The 3rd place winner doesn't get extra.
      // But since they already got SF from the semi loss, we skip if already added.
      const alreadyAdded = new Set(results.map((r) => r.playerName));
      getPlayerNames(winnerId).forEach((n) => { if (!alreadyAdded.has(n)) results.push({ playerName: n, resultIdx: 2 }); });
      getPlayerNames(loserId).forEach((n) => { if (!alreadyAdded.has(n)) results.push({ playerName: n, resultIdx: 2 }); });
    } else if (semiRound) {
      // Semi losers → SF(2)
      const alreadyAdded = new Set(results.map((r) => r.playerName));
      semiRound.forEach((m) => {
        if (m.completed) {
          const loserId = m.homeScore > m.awayScore ? m.away : m.home;
          getPlayerNames(loserId).forEach((n) => { if (!alreadyAdded.has(n)) results.push({ playerName: n, resultIdx: 2 }); });
        }
      });
    }

    // QF losers → QF(3)
    if (qfRound) {
      const alreadyAdded = new Set(results.map((r) => r.playerName));
      qfRound.forEach((m) => {
        if (m.completed) {
          const loserId = m.homeScore > m.awayScore ? m.away : m.home;
          getPlayerNames(loserId).forEach((n) => { if (!alreadyAdded.has(n)) results.push({ playerName: n, resultIdx: 3 }); });
        }
      });
    }
    // RR eliminated players (didn't advance to knockout)
    // If knockout starts at SF(idx2), eliminated = QF(idx3)
    // If knockout starts at QF(idx3), eliminated = R16(idx4)
    const knockoutStartIdx = kb.rounds[0].length <= 2 ? 2 : 3; // 2 matches=SF, 4 matches=QF
    const eliminatedIdx = knockoutStartIdx + 1;
    if (tournament.groups) {
      const knockoutPlayerNames = new Set(results.map((r) => r.playerName));
      tournament.groups.forEach((g) => {
        g.teams.forEach((t) => {
          getPlayerNames(t.id).forEach((n) => {
            if (!knockoutPlayerNames.has(n)) {
              results.push({ playerName: n, resultIdx: eliminatedIdx });
            }
          });
        });
      });
    }
  } else if (tournament.type === "league" && tournament.groups) {
    // League: rank by standings
    const group = tournament.groups[0];
    if (group) {
      const standings = calcStandings(group.teams, group.rounds);
      standings.forEach((s, i) => {
        const idx = i === 0 ? 0 : i === 1 ? 1 : i <= 3 ? 2 : 3;
        getPlayerNames(s.team.id).forEach((n) => results.push({ playerName: n, resultIdx: idx }));
      });
    }
  }

  return results;
};

// Format date with day of week: "2026-04-05 (일)" or "2026-04-05 (Sun)"
const DAY_KO = ["일", "월", "화", "수", "목", "금", "토"];
const DAY_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getDayName = (dateStr, lang) => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr + "T00:00:00");
    return lang === "ko" ? DAY_KO[d.getDay()] : DAY_EN[d.getDay()];
  } catch { return ""; }
};
const formatDate = (dateStr, lang) => {
  if (!dateStr) return "-";
  const day = getDayName(dateStr, lang);
  return day ? `${dateStr} (${day})` : dateStr;
};

// 마감일을 해당일 23:59:59로 설정 (예: "2026-04-08" → 4월 8일 23:59:59)
const deadlineEndOfDay = (dateStr) => {
  const d = new Date(dateStr);
  d.setHours(23, 59, 59, 999);
  return d;
};

// ============================================================
// ROUND ROBIN LOGIC
// ============================================================
function generateRoundRobinSchedule(teams) {
  const n = teams.length;
  const rounds = [];
  const list = [...teams];
  if (n % 2 !== 0) list.push(null); // bye
  const half = list.length / 2;
  for (let r = 0; r < list.length - 1; r++) {
    const roundMatches = [];
    for (let i = 0; i < half; i++) {
      const home = list[i];
      const away = list[list.length - 1 - i];
      if (home && away) {
        roundMatches.push({
          id: generateId(),
          home: home.id,
          away: away.id,
          homeScore: null,
          awayScore: null,
          completed: false,
          court: null,
          matchTime: null,
        });
      }
    }
    rounds.push(roundMatches);
    // rotate: fix first, rotate rest
    list.splice(1, 0, list.pop());
  }
  return rounds;
}

function calcStandings(teams, rounds) {
  const stats = {};
  teams.forEach((team) => {
    stats[team.id] = { team, played: 0, wins: 0, losses: 0, draws: 0, gamesWon: 0, gamesLost: 0 };
  });
  // head-to-head results: h2h[teamA][teamB] = net games won by A vs B
  const h2h = {};
  teams.forEach((t) => { h2h[t.id] = {}; });
  rounds.forEach((round) =>
    round.forEach((m) => {
      if (!m.completed) return;
      const h = stats[m.home];
      const a = stats[m.away];
      if (!h || !a) return;
      h.played++;
      a.played++;
      h.gamesWon += m.homeScore;
      h.gamesLost += m.awayScore;
      a.gamesWon += m.awayScore;
      a.gamesLost += m.homeScore;
      if (m.homeScore > m.awayScore) {
        h.wins++;
        a.losses++;
      } else if (m.homeScore < m.awayScore) {
        a.wins++;
        h.losses++;
      } else {
        h.draws++;
        a.draws++;
      }
      // Track head-to-head game difference
      h2h[m.home][m.away] = (h2h[m.home][m.away] || 0) + (m.homeScore - m.awayScore);
      h2h[m.away][m.home] = (h2h[m.away][m.home] || 0) + (m.awayScore - m.homeScore);
    })
  );
  return Object.values(stats).sort((a, b) => {
    // 1. Wins
    if (b.wins !== a.wins) return b.wins - a.wins;
    // 2. Games won
    if (b.gamesWon !== a.gamesWon) return b.gamesWon - a.gamesWon;
    // 3. Head-to-head record
    const h2hDiff = (h2h[b.team.id]?.[a.team.id] || 0);
    if (h2hDiff !== 0) return h2hDiff;
    return 0;
  });
}

// ============================================================
// KNOCKOUT LOGIC
// ============================================================
function generateKnockoutBracket(teamIds, roundName) {
  const matches = [];
  for (let i = 0; i < teamIds.length; i += 2) {
    matches.push({
      id: generateId(),
      home: teamIds[i] || null,
      away: teamIds[i + 1] || null,
      homeScore: null,
      awayScore: null,
      completed: false,
      round: roundName,
      court: null,
      matchTime: null,
    });
  }
  return matches;
}

// ============================================================
// AMERICANO LOGIC
// ============================================================
// 멕시카노: 순위 기반으로 다음 라운드 매칭 생성
function generateMexicanoNextRound(players, completedRounds, byeTracker) {
  // 현재 순위 계산
  const stats = {};
  players.forEach((p) => { stats[p.id] = { player: p, points: 0 }; });
  completedRounds.forEach((round) =>
    round.forEach((m) => {
      if (!m.completed) return;
      m.team1.forEach((pid) => { if (stats[pid]) stats[pid].points += m.team1Score || 0; });
      m.team2.forEach((pid) => { if (stats[pid]) stats[pid].points += m.team2Score || 0; });
    })
  );

  const n = players.length;
  const byePerRound = n % 4;
  const bt = byeTracker || {};

  // bye 처리
  const { active, byes } = selectPlayersForRound(players, byePerRound, bt);
  byes.forEach((p) => { bt[p.id] = (bt[p.id] || 0) + 1; });

  // 포인트 순으로 정렬 (active만)
  const activeIds = new Set(active.map((p) => p.id));
  const sorted = Object.values(stats).filter((s) => activeIds.has(s.player.id)).sort((a, b) => b.points - a.points);
  const matches = [];

  // 순위 기반 매칭: 1+4 vs 2+3, 5+8 vs 6+7, ...
  for (let i = 0; i < sorted.length - 3; i += 4) {
    const a = sorted[i], b = sorted[i + 3], c = sorted[i + 1], d = sorted[i + 2];
    matches.push({
      id: generateId(),
      team1: [a.player.id, b.player.id],
      team2: [c.player.id, d.player.id],
      team1Score: null,
      team2Score: null,
      completed: false,
    });
  }
  return matches;
}

// 아메리카노: 기존 라운드 히스토리 기반으로 새 라운드 1개 생성
function generateAmericanoNextRound(players, existingRounds) {
  const n = players.length;
  const byePerRound = n % 4;
  const byeTracker = {};
  players.forEach((p) => { byeTracker[p.id] = 0; });

  // 기존 라운드에서 파트너/상대 히스토리 추출
  const pairKey = (a, b) => [a, b].sort().join("-");
  const partnerCount = {};
  const opponentCount = {};
  existingRounds.forEach((round) => {
    // bye 추적: 라운드에 참여하지 않은 선수
    const participated = new Set();
    round.forEach((m) => {
      m.team1.forEach((id) => participated.add(id));
      m.team2.forEach((id) => participated.add(id));
      const pk1 = pairKey(m.team1[0], m.team1[1]);
      const pk2 = pairKey(m.team2[0], m.team2[1]);
      partnerCount[pk1] = (partnerCount[pk1] || 0) + 1;
      partnerCount[pk2] = (partnerCount[pk2] || 0) + 1;
      m.team1.forEach((p1) => m.team2.forEach((p2) => {
        const ok = pairKey(p1, p2);
        opponentCount[ok] = (opponentCount[ok] || 0) + 1;
      }));
    });
    players.forEach((p) => { if (!participated.has(p.id)) byeTracker[p.id]++; });
  });

  const { active } = selectPlayersForRound(players, byePerRound, byeTracker);
  let bestMatches = null;
  let bestScore = Infinity;
  const attempts = Math.min(200, 50 + n * 10);

  for (let attempt = 0; attempt < attempts; attempt++) {
    const shuffled = [...active].sort(() => Math.random() - 0.5);
    const matches = [];
    let score = 0;
    for (let i = 0; i < shuffled.length - 3; i += 4) {
      const a = shuffled[i], b = shuffled[i + 1], c = shuffled[i + 2], d = shuffled[i + 3];
      score += (partnerCount[pairKey(a.id, b.id)] || 0) * 5;
      score += (partnerCount[pairKey(c.id, d.id)] || 0) * 5;
      score += (opponentCount[pairKey(a.id, c.id)] || 0);
      score += (opponentCount[pairKey(a.id, d.id)] || 0);
      score += (opponentCount[pairKey(b.id, c.id)] || 0);
      score += (opponentCount[pairKey(b.id, d.id)] || 0);
      matches.push({
        id: generateId(), team1: [a.id, b.id], team2: [c.id, d.id],
        team1Score: null, team2Score: null, completed: false,
      });
    }
    if (score < bestScore) { bestScore = score; bestMatches = matches; }
    if (score === 0) break;
  }
  return bestMatches || [];
}

// 4명씩 매칭 가능한 인원 선택 (홀수/나머지 인원은 bye)
function selectPlayersForRound(players, byeCount, prevByes) {
  if (byeCount === 0) return { active: [...players], byes: [] };
  // 이전에 쉰 횟수가 적은 사람 우선으로 bye
  const sorted = [...players].sort((a, b) => (prevByes[a.id] || 0) - (prevByes[b.id] || 0));
  const byes = sorted.slice(0, byeCount);
  const byeIds = new Set(byes.map((p) => p.id));
  const active = players.filter((p) => !byeIds.has(p.id));
  return { active, byes };
}

function generateAmericanoRounds(players, numRounds, isTeam = false, isMexicano = false) {
  const n = players.length;
  // 라운드 수 자동 계산: 인원-1, 최소 4, 최대 12
  if (!numRounds || numRounds <= 0) numRounds = Math.min(12, Math.max(4, n - 1));
  const remainder = n % 4;
  const byePerRound = remainder; // 0이면 bye 없음
  const byeTracker = {}; // playerId → 쉰 횟수
  players.forEach((p) => { byeTracker[p.id] = 0; });

  // 멕시카노: 첫 라운드만 랜덤, 나머지는 경기 후 순위 기반으로 생성
  if (isMexicano) {
    const { active, byes } = selectPlayersForRound(players, byePerRound, byeTracker);
    byes.forEach((p) => { byeTracker[p.id]++; });
    const shuffled = [...active].sort(() => Math.random() - 0.5);
    const firstRound = [];
    for (let i = 0; i < shuffled.length - 3; i += 4) {
      firstRound.push({
        id: generateId(),
        team1: [shuffled[i].id, shuffled[i + 1].id],
        team2: [shuffled[i + 2].id, shuffled[i + 3].id],
        team1Score: null, team2Score: null, completed: false,
      });
    }
    return { rounds: [firstRound], totalRounds: numRounds, byeTracker, byePerRound };
  }

  if (isTeam) {
    const teams = [];
    for (let i = 0; i < n; i += 2) {
      teams.push({ id: generateId(), players: [players[i], players[i + 1]] });
    }
    const schedule = generateRoundRobinSchedule(teams);
    return { teams, rounds: schedule.slice(0, numRounds) };
  }

  // Normal americano: 파트너/상대 중복 최소화
  const pairKey = (a, b) => [a, b].sort().join("-");
  const partnerCount = {};
  const opponentCount = {};
  const rounds = [];

  for (let r = 0; r < numRounds; r++) {
    const { active, byes } = selectPlayersForRound(players, byePerRound, byeTracker);
    byes.forEach((p) => { byeTracker[p.id]++; });

    let bestMatches = null;
    let bestScore = Infinity;

    const attempts = Math.min(200, 50 + n * 10);
    for (let attempt = 0; attempt < attempts; attempt++) {
      const shuffled = [...active].sort(() => Math.random() - 0.5);
      const matches = [];
      let score = 0;

      for (let i = 0; i < shuffled.length - 3; i += 4) {
        const a = shuffled[i], b = shuffled[i + 1], c = shuffled[i + 2], d = shuffled[i + 3];
        // 파트너 중복 (가중치 높음)
        score += (partnerCount[pairKey(a.id, b.id)] || 0) * 5;
        score += (partnerCount[pairKey(c.id, d.id)] || 0) * 5;
        // 상대 중복
        score += (opponentCount[pairKey(a.id, c.id)] || 0);
        score += (opponentCount[pairKey(a.id, d.id)] || 0);
        score += (opponentCount[pairKey(b.id, c.id)] || 0);
        score += (opponentCount[pairKey(b.id, d.id)] || 0);

        matches.push({
          id: generateId(),
          team1: [a.id, b.id],
          team2: [c.id, d.id],
          team1Score: null,
          team2Score: null,
          completed: false,
        });
      }

      if (score < bestScore) {
        bestScore = score;
        bestMatches = matches;
      }
      if (score === 0) break;
    }

    // 선택된 매칭의 파트너/상대 카운트 업데이트
    if (bestMatches) {
      bestMatches.forEach((m) => {
        const pk1 = pairKey(m.team1[0], m.team1[1]);
        const pk2 = pairKey(m.team2[0], m.team2[1]);
        partnerCount[pk1] = (partnerCount[pk1] || 0) + 1;
        partnerCount[pk2] = (partnerCount[pk2] || 0) + 1;
        // 상대: 팀1 각자 vs 팀2 각자
        m.team1.forEach((p1) => m.team2.forEach((p2) => {
          const ok = pairKey(p1, p2);
          opponentCount[ok] = (opponentCount[ok] || 0) + 1;
        }));
      });
      // id를 새로 생성 (같은 attempt의 id가 겹치지 않도록)
      bestMatches = bestMatches.map((m) => ({ ...m, id: generateId() }));
      rounds.push(bestMatches);
    }
  }
  return { rounds };
}

function calcAmericanoStandings(players, rounds) {
  const stats = {};
  players.forEach((p) => {
    stats[p.id] = { player: p, points: 0, played: 0 };
  });
  rounds.forEach((round) =>
    round.forEach((m) => {
      if (!m.completed) return;
      m.team1.forEach((pid) => {
        if (stats[pid]) {
          stats[pid].points += m.team1Score || 0;
          stats[pid].played++;
        }
      });
      m.team2.forEach((pid) => {
        if (stats[pid]) {
          stats[pid].points += m.team2Score || 0;
          stats[pid].played++;
        }
      });
    })
  );
  return Object.values(stats).sort((a, b) => b.points - a.points);
}

// 아메리카노 그룹 스테이지 생성 (8명 이상: 4명씩 그룹)
function generateAmericanoGroupStage(players, isMexicano, useSeeds = false) {
  const n = players.length;
  const numGroups = Math.floor(n / 4);
  const groupNames = "ABCDEFGHIJ".split("");

  // 시드가 있으면 스네이크 시딩, 없으면 랜덤 셔플
  let ordered;
  if (useSeeds) {
    // 시드 있는 선수 먼저 (오름차순), 나머지 랜덤
    const seeded = players.filter((p) => p.seed).sort((a, b) => a.seed - b.seed);
    const unseeded = players.filter((p) => !p.seed).sort(() => Math.random() - 0.5);
    ordered = [...seeded, ...unseeded];
  } else {
    ordered = [...players].sort(() => Math.random() - 0.5);
  }

  // 스네이크 시딩으로 그룹 배분: 1→A, 2→B, 3→C, 4→C, 5→B, 6→A, ...
  const groupBuckets = Array.from({ length: numGroups }, () => []);
  ordered.forEach((p, i) => {
    const row = Math.floor(i / numGroups);
    const col = i % numGroups;
    const gi = row % 2 === 0 ? col : (numGroups - 1 - col);
    groupBuckets[gi].push(p);
  });

  const groups = [];
  for (let g = 0; g < numGroups; g++) {
    const gPlayers = groupBuckets[g];

    const byeTracker = {};
    gPlayers.forEach(p => { byeTracker[p.id] = 0; });
    const byePerRound = gPlayers.length % 4;
    const { active, byes } = selectPlayersForRound(gPlayers, byePerRound, byeTracker);
    byes.forEach(p => { byeTracker[p.id]++; });

    const s = [...active].sort(() => Math.random() - 0.5);
    const firstRound = [];
    for (let i = 0; i < s.length - 3; i += 4) {
      firstRound.push({
        id: generateId(),
        team1: [s[i].id, s[i + 1].id],
        team2: [s[i + 2].id, s[i + 3].id],
        team1Score: null, team2Score: null, completed: false,
      });
    }

    groups.push({
      name: groupNames[g] || ("G" + (g + 1)),
      players: gPlayers,
      rounds: [firstRound],
      byeTracker,
    });
  }

  return { players, useGroups: true, phase: "group", groups, finalGroups: null };
}

// 그룹 내 다음 라운드 생성
function generateGroupNextRound(group, isMexicano) {
  if (isMexicano) {
    return generateMexicanoNextRound(group.players, group.rounds, group.byeTracker);
  } else {
    return generateAmericanoNextRound(group.players, group.rounds);
  }
}

// 그룹 스테이지 → 결승 라운드 (승자조/패자조) 전환
function advanceAmericanoToFinal(americanoData, isMexicano, lang) {
  const { groups } = americanoData;
  const winners = [];
  const losers = [];

  groups.forEach(group => {
    const standings = calcAmericanoStandings(group.players, group.rounds);
    // 각 조에서 상위 2명 → 승자조, 나머지 → 패자조
    standings.slice(0, 2).forEach(s => winners.push(s.player));
    standings.slice(2).forEach(s => losers.push(s.player));
  });

  function createFinalGroup(name, players) {
    const byePerRound = players.length % 4;
    const byeTracker = {};
    players.forEach(p => { byeTracker[p.id] = 0; });
    const { active, byes } = selectPlayersForRound(players, byePerRound, byeTracker);
    byes.forEach(p => { byeTracker[p.id]++; });

    const s = [...active].sort(() => Math.random() - 0.5);
    const firstRound = [];
    for (let i = 0; i < s.length - 3; i += 4) {
      firstRound.push({
        id: generateId(),
        team1: [s[i].id, s[i + 1].id],
        team2: [s[i + 2].id, s[i + 3].id],
        team1Score: null, team2Score: null, completed: false,
      });
    }
    return { name, players, rounds: [firstRound], byeTracker };
  }

  return {
    ...americanoData,
    phase: "final",
    finalGroups: [
      createFinalGroup(lang === "ko" ? "승자조" : "Winners", winners),
      createFinalGroup(lang === "ko" ? "패자조" : "Losers", losers),
    ],
  };
}

// ============================================================
// ICONS (inline SVG)
// ============================================================
const Icon = ({ name, size = 20 }) => {
  const icons = {
    trophy: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    plus: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    users: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    x: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    arrowLeft: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
      </svg>
    ),
    settings: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    globe: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// ============================================================
// STYLES
// ============================================================
// 비밀번호 해시 비교 (SHA-256)
const hashPassword = async (pw) => {
  const encoded = new TextEncoder().encode(pw);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
};
const loadAdminPasswordHash = async () => {
  try {
    if (!fsDb) return null;
    const doc = await fsDb.collection(FS_COLLECTION).doc("config").get();
    if (doc.exists) return doc.data().passwordHash || null;
    return null;
  } catch { return null; }
};

const colors = {
  primary: "#104734",
  primaryDark: "#0b3325",
  primaryLight: "#fbe4dc",
  success: "#16a34a",
  successLight: "#dcfce7",
  warning: "#ea580c",
  warningLight: "#fff7ed",
  danger: "#dc2626",
  dangerLight: "#fef2f2",
  gray50: "#f6f8f7",
  gray100: "#ecf0ee",
  gray200: "#dae1dd",
  gray300: "#b8c5bd",
  gray400: "#5f7a6b",
  gray500: "#496054",
  gray600: "#3a4f42",
  gray700: "#2b3d32",
  gray800: "#1c2b22",
  gray900: "#0f1a13",
  white: "#ffffff",
};

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [lang, setLang] = useState("ko");
  const [page, setPage] = useState("home"); // home, admin, tournament, register
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [showAdminPasswordModal, setShowAdminPasswordModal] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [pendingAdminPage, setPendingAdminPage] = useState("admin");
  const [toastMessage, setToastMessage] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingTournament, setEditingTournament] = useState(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [rankings, setRankings] = useState([]);
  const [players, setPlayers] = useState([]);

  // ── PWA 뒤로가기 처리 ──
  const pageRef = useRef(page);
  const selectedTournamentRef = useRef(selectedTournament);
  useEffect(() => { pageRef.current = page; }, [page]);
  useEffect(() => { selectedTournamentRef.current = selectedTournament; }, [selectedTournament]);

  // 페이지 전환 시 history에 기록
  useEffect(() => {
    const state = { page, hasTournament: !!selectedTournament };
    if (window.history.state?.page !== page || window.history.state?.hasTournament !== state.hasTournament) {
      window.history.pushState(state, "", "");
    }
  }, [page, selectedTournament]);

  // 뒤로가기 이벤트 처리
  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.page) {
        setPage(e.state.page);
        if (!e.state.hasTournament) setSelectedTournament(null);
      } else {
        // 히스토리 끝이면 홈으로 (앱 종료 방지)
        if (pageRef.current !== "home") {
          setPage("home");
          setSelectedTournament(null);
          window.history.pushState({ page: "home", hasTournament: false }, "", "");
        } else {
          // 홈에서 뒤로가기 → 다시 앞으로 밀어서 앱 종료 방지
          window.history.pushState({ page: "home", hasTournament: false }, "", "");
        }
      }
    };
    // 초기 상태 설정
    window.history.replaceState({ page: "home", hasTournament: false }, "", "");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Firestore에서 데이터 로드 (앱 시작 시 1회)
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    if (!window.db) { setDataLoaded(true); return; }
    const load = async () => {
      try {
        const [fsT, fsP, fsR] = await Promise.all([
          loadFromFirestore("tournaments"),
          loadFromFirestore("players"),
          loadFromFirestore("rankings")
        ]);
        if (fsT?.items?.length) setTournaments(fsT.items);
        if (fsP?.items?.length) setPlayers(fsP.items);
        if (fsR?.items?.length) setRankings(fsR.items);
      } catch (e) {
        console.error("Firestore load error:", e);
      }
      setDataLoaded(true);
    };
    load();
  }, []);

  // Firestore 저장 후 React 상태 업데이트 헬퍼
  const tournamentsRef = useRef(tournaments);
  tournamentsRef.current = tournaments;
  const playersRef = useRef(players);
  playersRef.current = players;
  const rankingsRef = useRef(rankings);
  rankingsRef.current = rankings;

  const updateAndSaveTournaments = useCallback(async (updater) => {
    const next = typeof updater === "function" ? updater(tournamentsRef.current) : updater;
    await saveToFirestore("tournaments", next);
    setTournaments(next);
    tournamentsRef.current = next;
    return next;
  }, []);

  const updateAndSavePlayers = useCallback(async (updater) => {
    const next = typeof updater === "function" ? updater(playersRef.current) : updater;
    await saveToFirestore("players", next);
    setPlayers(next);
    playersRef.current = next;
    return next;
  }, []);

  const updateAndSaveRankings = useCallback(async (updater) => {
    const next = typeof updater === "function" ? updater(rankingsRef.current) : updater;
    await saveToFirestore("rankings", next);
    setRankings(next);
    rankingsRef.current = next;
    return next;
  }, []);

  // Check and auto-close registration when deadline passes
  useEffect(() => {
    if (!dataLoaded) return;
    const current = tournamentsRef.current;
    const updated = current.map((t) => {
      if (t.stage === "registration" && t.registrationDeadline) {
        const dl = deadlineEndOfDay(t.registrationDeadline);
        if (dl < new Date() && !t.registrationClosed) {
          return { ...t, registrationClosed: true };
        }
      }
      return t;
    });
    const changed = updated.some((t, i) => t !== current[i]);
    if (changed) updateAndSaveTournaments(updated);
  }, [dataLoaded]);

  const T = useCallback((key) => t(lang, key), [lang]);

  // 관리자 로그인 (Firestore 해시 비교)
  const tryAdminLogin = async () => {
    const storedHash = await loadAdminPasswordHash();
    const inputHash = await hashPassword(adminPasswordInput);
    if (storedHash && inputHash === storedHash) {
      setIsAdminAuthenticated(true);
      setIsAdmin(true);
      setPage(pendingAdminPage);
      setSelectedTournament(null);
      setShowAdminPasswordModal(false);
      setAdminPasswordInput("");
    } else {
      setToastMessage(T("wrongPassword"));
      setTimeout(() => setToastMessage(""), 2000);
    }
  };

  // Player CRUD — Firestore 저장 완료 후 상태 업데이트
  const addPlayer = (player) => {
    updateAndSavePlayers((prev) => [...prev, { ...player, id: generateId(), createdAt: new Date().toISOString() }]);
  };
  const updatePlayer = (id, updates) => {
    // 이름 변경 시: 먼저 oldName을 저장 (updateAndSavePlayers가 ref를 바꾸기 전에)
    const oldPlayer = playersRef.current.find((p) => p.id === id);
    const oldName = oldPlayer?.name;
    const newName = updates.name;

    updateAndSavePlayers((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));

    // 이름이 실제로 변경된 경우에만 동기화
    if (newName && oldName && newName !== oldName) {
      // 토너먼트 등록정보 + 아메리카노 데이터 + 대진표 업데이트
      updateAndSaveTournaments((prev) => prev.map((t) => {
        let changed = false;
        let regs = t.registrations;
        if (regs?.length) {
          regs = regs.map((r) => {
            let u = {};
            if (r.playerName === oldName) { u.playerName = newName; changed = true; }
            if (r.partnerName === oldName) { u.partnerName = newName; changed = true; }
            return Object.keys(u).length ? { ...r, ...u } : r;
          });
        }
        // RR/오픈 대진표 팀이름 업데이트
        let updatedGroups = t.groups;
        if (updatedGroups?.length) {
          updatedGroups = updatedGroups.map((g) => {
            const newTeams = g.teams?.map((tm) => tm.name === oldName ? { ...tm, name: newName } : tm);
            if (newTeams?.some((tm, i) => tm !== g.teams[i])) { changed = true; return { ...g, teams: newTeams }; }
            return g;
          });
        }
        // 녹아웃 대진표 팀이름 업데이트
        let updatedKnockout = t.knockoutBracket;
        if (updatedKnockout?.teams) {
          const newTeams = updatedKnockout.teams.map((tm) => tm.name === oldName ? { ...tm, name: newName } : tm);
          if (newTeams.some((tm, i) => tm !== updatedKnockout.teams[i])) {
            updatedKnockout = { ...updatedKnockout, teams: newTeams };
            changed = true;
          }
        }
        let americanoData = t.americanoData;
        if (americanoData) {
          // 플랫 방식
          if (americanoData.players) {
            const ap = americanoData.players.map((p) => p.name === oldName ? { ...p, name: newName } : p);
            if (ap.some((p, i) => p !== americanoData.players[i])) { americanoData = { ...americanoData, players: ap }; changed = true; }
          }
          // 그룹 방식
          if (americanoData.groups) {
            const gs = americanoData.groups.map((g) => ({ ...g, players: g.players.map((p) => p.name === oldName ? { ...p, name: newName } : p) }));
            americanoData = { ...americanoData, groups: gs }; changed = true;
          }
          if (americanoData.finalGroups) {
            const fg = americanoData.finalGroups.map((g) => ({ ...g, players: g.players.map((p) => p.name === oldName ? { ...p, name: newName } : p) }));
            americanoData = { ...americanoData, finalGroups: fg }; changed = true;
          }
        }
        return changed ? { ...t, registrations: regs, groups: updatedGroups || t.groups, knockoutBracket: updatedKnockout || t.knockoutBracket, americanoData } : t;
      }));
      // 랭킹 업데이트
      updateAndSaveRankings((prev) => prev.map((r) => r.playerName === oldName ? { ...r, playerName: newName } : r));
    }
  };
  const deletePlayer = (id) => {
    updateAndSavePlayers((prev) => prev.filter((p) => p.id !== id));
  };

  const addTournament = (tournament) => {
    updateAndSaveTournaments((prev) => [...prev, { ...tournament, id: generateId(), registrations: [], stage: "registration" }]);
    setShowCreateForm(false);
  };

  const awardPoints = useCallback((tournament, forceRecalc) => {
    if (!tournament.grade) return;
    // Check if points already awarded for this tournament
    const existing = rankings.some((r) => r.tournamentId === tournament.id);
    if (existing && !forceRecalc) return;

    const results = calcTournamentResults(tournament);
    if (results.length === 0) return;

    // Build a lookup for player gender from registrations and players list
    const genderLookup = {};
    (tournament.registrations || []).forEach((r) => {
      if (r.playerName && r.playerGender) genderLookup[r.playerName] = r.playerGender;
      if (r.partnerName && r.partnerGender) genderLookup[r.partnerName] = r.partnerGender;
    });
    players.forEach((p) => {
      if (p.name && p.gender && !genderLookup[p.name]) genderLookup[p.name] = p.gender;
    });

    const newEntries = results.map((r) => ({
      id: generateId(),
      tournamentId: tournament.id,
      tournamentName: tournament.name,
      date: tournament.date || new Date().toISOString().slice(0, 10),
      grade: tournament.grade,
      categoryGender: tournament.categoryGender || null,
      categoryLevel: tournament.categoryLevel || null,
      playerName: r.playerName,
      playerGender: genderLookup[r.playerName] || null,
      resultIdx: r.resultIdx,
      points: getPoints(tournament.grade, r.resultIdx),
    }));

    if (forceRecalc) {
      updateAndSaveRankings((prev) => [...prev.filter((r) => r.tournamentId !== tournament.id), ...newEntries]);
    } else {
      updateAndSaveRankings((prev) => [...prev, ...newEntries]);
    }
  }, [rankings]);

  // Recalculate all ranking points (for when logic changes)
  const recalcAllPoints = useCallback(() => {
    const completedTournaments = tournaments.filter((t) => t.stage === "completed" && t.grade);
    let allEntries = [];
    completedTournaments.forEach((tournament) => {
      const genderLookup = {};
      (tournament.registrations || []).forEach((r) => {
        if (r.playerName && r.playerGender) genderLookup[r.playerName] = r.playerGender;
        if (r.partnerName && r.partnerGender) genderLookup[r.partnerName] = r.partnerGender;
      });
      players.forEach((p) => {
        if (p.name && p.gender && !genderLookup[p.name]) genderLookup[p.name] = p.gender;
      });
      const results = calcTournamentResults(tournament);
      results.forEach((r) => {
        allEntries.push({
          id: generateId(),
          tournamentId: tournament.id,
          tournamentName: tournament.name,
          date: tournament.date || new Date().toISOString().slice(0, 10),
          grade: tournament.grade,
          categoryGender: tournament.categoryGender || null,
          categoryLevel: tournament.categoryLevel || null,
          playerName: r.playerName,
          playerGender: genderLookup[r.playerName] || null,
          resultIdx: r.resultIdx,
          points: getPoints(tournament.grade, r.resultIdx),
        });
      });
    });
    updateAndSaveRankings(allEntries);
  }, [tournaments, players]);

  const updateTournament = async (id, updates) => {
    const nextList = tournamentsRef.current.map((t) => (t.id === id ? { ...t, ...updates } : t));
    // Firestore에 먼저 저장
    await saveToFirestore("tournaments", nextList);
    // 저장 성공 후 React 상태 업데이트
    setTournaments(nextList);
    tournamentsRef.current = nextList;
    // Auto-award points when tournament completes
    if (updates.stage === "completed") {
      const completed = nextList.find((t) => t.id === id);
      if (completed) setTimeout(() => awardPoints(completed), 0);
    }
    if (selectedTournament?.id === id) {
      setSelectedTournament((prev) => ({ ...prev, ...updates }));
    }
  };

  const deleteTournament = async (id) => {
    const next = tournamentsRef.current.filter((t) => t.id !== id);
    await saveToFirestore("tournaments", next);
    setTournaments(next);
    tournamentsRef.current = next;
    if (selectedTournament?.id === id) {
      setSelectedTournament(null);
      setPage("home");
    }
  };

  const confirmPayment = (tournamentId, regId) => {
    updateAndSaveTournaments((prev) =>
      prev.map((t) =>
        t.id === tournamentId
          ? { ...t, registrations: t.registrations.map((r) => (r.id === regId ? { ...r, status: "confirmed" } : r)) }
          : t
      )
    );
  };

  const rejectRegistration = (tournamentId, regId) => {
    updateAndSaveTournaments((prev) =>
      prev.map((t) =>
        t.id === tournamentId
          ? { ...t, registrations: t.registrations.filter((r) => r.id !== regId) }
          : t
      )
    );
  };

  const submitRegistration = (tournamentId, regData) => {
    const reg = { ...regData, id: generateId(), status: "pending", registeredAt: new Date().toISOString() };
    updateAndSaveTournaments((prev) =>
      prev.map((t) => (t.id === tournamentId ? { ...t, registrations: [...t.registrations, reg] } : t))
    );
    return reg;
  };

  // Firestore 로딩 중 표시
  if (!dataLoaded) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: colors.gray50 }}>
        <p style={{ fontSize: 14, color: colors.gray500 }}>{lang === "ko" ? "로딩 중..." : "Loading..."}</p>
      </div>
    );
  }

  return (
    <LangContext.Provider value={{ lang, setLang, T }}>
      <div style={{ minHeight: "100vh", backgroundColor: colors.gray50, color: colors.gray800, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }} onClick={() => showLangMenu && setShowLangMenu(false)}>
        {/* HEADER */}
        <header style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`, color: colors.white, padding: "0 12px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0 }} onClick={() => { setPage("home"); setSelectedTournament(null); }}>
              <Icon name="trophy" size={24} />
              <span style={{ fontSize: 17, fontWeight: 700, whiteSpace: "nowrap" }}>{lang === "ko" ? "빠소" : "PSoc"}</span>
              <span style={{ fontSize: 9, opacity: 0.5, marginLeft: 4 }}>v{APP_VERSION}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
              <NavBtn active={page === "home"} onClick={() => { setPage("home"); setSelectedTournament(null); }}>{T("home")}</NavBtn>
              <NavBtn active={page === "ranking"} onClick={() => { setPage("ranking"); setSelectedTournament(null); }}>{T("ranking")}</NavBtn>
              <NavBtn active={page === "players"} onClick={() => { if (!isAdminAuthenticated) { setPendingAdminPage("players"); setShowAdminPasswordModal(true); } else { setPage("players"); setSelectedTournament(null); } }}>{T("players")}</NavBtn>
              <NavBtn active={page === "admin"} onClick={() => { if (!isAdminAuthenticated) { setPendingAdminPage("admin"); setShowAdminPasswordModal(true); } else { setPage("admin"); setSelectedTournament(null); } }}>{T("admin")}</NavBtn>
              <div style={{ position: "relative", flexShrink: 0, marginLeft: 2 }}>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowLangMenu((v) => !v); }}
                  style={{ display: "flex", alignItems: "center", gap: 3, padding: "5px 6px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: colors.white, cursor: "pointer", fontSize: 11, fontWeight: 600 }}
                >
                  <Icon name="globe" size={14} />
                  {lang === "ko" ? "KR" : "EN"}
                  <span style={{ fontSize: 9, marginLeft: 1 }}>▼</span>
                </button>
                {showLangMenu && (
                  <div style={{ position: "absolute", right: 0, top: "calc(100% + 4px)", background: colors.white, borderRadius: 8, boxShadow: "0 4px 16px rgba(0,0,0,0.15)", overflow: "hidden", zIndex: 300, minWidth: 120 }}>
                    {[{ code: "ko", label: "한국어" }, { code: "en", label: "English" }].map((item) => (
                      <button
                        key={item.code}
                        onClick={() => { setLang(item.code); setShowLangMenu(false); }}
                        style={{
                          display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "10px 16px", border: "none",
                          background: lang === item.code ? colors.primaryLight : colors.white,
                          color: lang === item.code ? colors.primary : colors.gray700,
                          fontWeight: lang === item.code ? 700 : 500,
                          cursor: "pointer", fontSize: 14, textAlign: "left",
                        }}
                      >
                        {lang === item.code && <span style={{ fontSize: 12 }}>✓</span>}
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px" }}>
          {page === "home" && !selectedTournament && (
            <TournamentList
              tournaments={tournaments}
              onSelect={(t) => { setSelectedTournament(t); setPage("tournament"); setIsAdmin(false); }}
              T={T}
              lang={lang}
            />
          )}

          {page === "ranking" && !selectedTournament && (
            <RankingPage rankings={rankings} tournaments={tournaments} players={players} T={T} lang={lang} onRecalcPoints={recalcAllPoints} isAdmin={isAdmin} />
          )}

          {page === "players" && !selectedTournament && (
            <PlayersPage players={players} onAddPlayer={addPlayer} onUpdatePlayer={updatePlayer} onDeletePlayer={deletePlayer} T={T} lang={lang} />
          )}

          {page === "admin" && !selectedTournament && (
            <AdminPanel
              tournaments={tournaments}
              onSelect={(t) => { setSelectedTournament(t); setIsAdmin(true); }}
              onCreate={() => { setShowCreateForm(true); setEditingTournament(null); }}
              onEdit={(t) => { setEditingTournament(t); setShowCreateForm(true); }}
              onDelete={deleteTournament}
              onRecalcPoints={recalcAllPoints}
              T={T}
              lang={lang}
            />
          )}

          {selectedTournament && (
            <TournamentDetail
              tournament={tournaments.find((t) => t.id === selectedTournament.id) || selectedTournament}
              isAdmin={isAdmin}
              onBack={() => { setSelectedTournament(null); setPage(isAdmin ? "admin" : "home"); }}
              onConfirmPayment={confirmPayment}
              onRejectRegistration={rejectRegistration}
              onSubmitRegistration={submitRegistration}
              onUpdateTournament={updateTournament}
              players={players}
              onAddPlayer={addPlayer}
              onUpdateRankings={(oldName, newName) => updateAndSaveRankings((prev) => prev.map((r) => r.playerName === oldName ? { ...r, playerName: newName } : r))}
              T={T}
              lang={lang}
            />
          )}
        </main>

        {/* CREATE/EDIT MODAL */}
        {showCreateForm && (
          <Modal onClose={() => { setShowCreateForm(false); setEditingTournament(null); }}>
            <TournamentForm
              existing={editingTournament}
              onSave={(data) => {
                if (editingTournament) {
                  updateTournament(editingTournament.id, data);
                  setShowCreateForm(false);
                  setEditingTournament(null);
                } else {
                  addTournament(data);
                }
              }}
              onCancel={() => { setShowCreateForm(false); setEditingTournament(null); }}
              T={T}
              lang={lang}
            />
          </Modal>
        )}
        {/* Admin Password Modal */}
        {showAdminPasswordModal && (
          <Modal onClose={() => { setShowAdminPasswordModal(false); setAdminPasswordInput(""); }}>
            <div style={{ padding: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{T("adminPassword")}</h2>
              <FormField label={T("enterPassword")}>
                <input
                  type="password"
                  value={adminPasswordInput}
                  onChange={(e) => setAdminPasswordInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") tryAdminLogin(); }}
                  style={inputStyle}
                  autoFocus
                  placeholder="****"
                />
              </FormField>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
                <Btn variant="outline" onClick={() => { setShowAdminPasswordModal(false); setAdminPasswordInput(""); }}>{T("cancel")}</Btn>
                <Btn onClick={tryAdminLogin}>{T("login")}</Btn>
              </div>
            </div>
          </Modal>
        )}

        {/* Toast */}
        {toastMessage && (
          <div style={{
            position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)",
            padding: "10px 24px", borderRadius: 10, background: colors.gray800, color: colors.white,
            fontSize: 14, fontWeight: 600, zIndex: 999, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}>
            {toastMessage}
          </div>
        )}
      </div>
    </LangContext.Provider>
  );
}

// ============================================================
// NAVIGATION BUTTON
// ============================================================
function NavBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 7px",
        borderRadius: 8,
        border: "none",
        background: active ? "rgba(255,255,255,0.2)" : "transparent",
        color: colors.white,
        cursor: "pointer",
        fontSize: 11,
        fontWeight: active ? 700 : 500,
        whiteSpace: "nowrap",
        flexShrink: 0,
        transition: "all 0.15s",
      }}
    >
      {children}
    </button>
  );
}

// ============================================================
// MODAL
// ============================================================
function Modal({ onClose, children }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 20 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: colors.white, borderRadius: 16, maxWidth: 600, width: "100%", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        {children}
      </div>
    </div>
  );
}

// ============================================================
// BUTTON COMPONENT
// ============================================================
function Btn({ variant = "primary", size = "md", onClick, children, disabled, style: extraStyle }) {
  const variants = {
    primary: { bg: colors.primary, color: colors.white, border: "none" },
    success: { bg: colors.success, color: colors.white, border: "none" },
    danger: { bg: colors.danger, color: colors.white, border: "none" },
    warning: { bg: colors.warning, color: colors.white, border: "none" },
    outline: { bg: "transparent", color: colors.gray700, border: `1px solid ${colors.gray300}` },
    ghost: { bg: "transparent", color: colors.gray600, border: "none" },
  };
  const sizes = { sm: { padding: "4px 10px", fontSize: 12 }, md: { padding: "8px 16px", fontSize: 14 }, lg: { padding: "12px 24px", fontSize: 16 } };
  const v = variants[variant];
  const s = sizes[size];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...s,
        backgroundColor: disabled ? colors.gray300 : v.bg,
        color: disabled ? colors.gray500 : v.color,
        border: v.border,
        borderRadius: 8,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.15s",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        ...extraStyle,
      }}
    >
      {children}
    </button>
  );
}

// ============================================================
// BADGE
// ============================================================
function Badge({ type, children }) {
  const styles = {
    pending: { bg: colors.warningLight, color: colors.warning },
    confirmed: { bg: colors.successLight, color: colors.success },
    danger: { bg: colors.dangerLight, color: colors.danger },
    info: { bg: colors.primaryLight, color: colors.primary },
    default: { bg: colors.gray100, color: colors.gray600 },
  };
  const s = styles[type] || styles.default;
  return (
    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, backgroundColor: s.bg, color: s.color }}>
      {children}
    </span>
  );
}

// ============================================================
// CARD
// ============================================================
function Card({ children, style: extraStyle, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: colors.white,
        borderRadius: 12,
        border: `1px solid ${colors.gray200}`,
        padding: 20,
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.2s",
        ...(onClick ? { boxShadow: "0 1px 3px rgba(0,0,0,0.05)" } : {}),
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// TOURNAMENT LIST (Public View)
// ============================================================
function TournamentList({ tournaments, onSelect, T, lang }) {
  const typeColors = { open: "#3b82f6", cup: "#ef4444", league: "#22c55e", americano: "#f59e0b" };

  if (tournaments.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: colors.gray400 }}>
        <Icon name="trophy" size={64} />
        <p style={{ fontSize: 18, marginTop: 16 }}>{T("noTournaments")}</p>
      </div>
    );
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const upcoming = tournaments.filter((t) => !t.date || new Date(t.date) >= now);
  const past = tournaments.filter((t) => t.date && new Date(t.date) < now);

  const renderCard = (t) => (
    <Card key={t.id} onClick={() => onSelect(t)} style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
            <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700, color: colors.white, backgroundColor: typeColors[t.type] }}>
              {T(t.type)}
            </span>
            {t.grade && (
              <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700, color: colors.white, backgroundColor: GRADE_COLORS[t.grade] || colors.gray400 }}>
                {T("grade" + t.grade.charAt(0).toUpperCase() + t.grade.slice(1))}
              </span>
            )}
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.gray800, margin: 0 }}>{t.name}</h3>
        </div>
        <Badge type={t.stage === "registration" ? "info" : t.stage === "completed" ? "confirmed" : "pending"}>
          {t.stage === "registration" ? T("registrationOpen") : t.stage === "completed" ? T("completed") : T("ongoing")}
        </Badge>
      </div>
      {(t.categoryGender || t.categoryLevel) && (
        <div style={{ margin: "6px 0" }}>
          <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: colors.primaryLight, color: colors.primary }}>
            {categoryLabel(lang, t.categoryGender, t.categoryLevel)}
          </span>
        </div>
      )}
      {t.date && <p style={{ fontSize: 13, color: colors.gray500, margin: "4px 0" }}>{T("date")}: {formatDate(t.date, lang)}</p>}
      {t.registrationDeadline && (
        <p style={{ fontSize: 13, margin: "4px 0", color: deadlineEndOfDay(t.registrationDeadline) < new Date() ? colors.danger : colors.warning }}>
          {T("registrationDeadline")}: {formatDate(t.registrationDeadline, lang)}
          {(() => { const diff = Math.ceil((deadlineEndOfDay(t.registrationDeadline) - new Date()) / 86400000); return diff < 0 ? ` - ${T("deadlinePassed")}` : ` - ${diff}${T("daysLeft")}`; })()}
        </p>
      )}
      {t.location && <p style={{ fontSize: 13, color: colors.gray500, margin: "4px 0" }}>{T("location")}: {t.location}</p>}
      <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: colors.gray500 }}>
        <Icon name="users" size={16} />
        <span>{t.registrations?.filter((r) => r.status === "confirmed").length || 0} / {t.type === "americano" ? (t.americanoPlayers || "?") : (t.maxTeams || "?")}</span>
        {t.entryFee && <span style={{ marginLeft: "auto", fontWeight: 600, color: colors.gray700 }}>{t.entryFee}</span>}
      </div>
    </Card>
  );

  const renderPastCard = (t) => (
    <div key={t.id} onClick={() => onSelect(t)} style={{
      display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
      background: colors.white, borderRadius: 8, border: `1px solid ${colors.gray200}`,
      cursor: "pointer", transition: "all 0.15s",
    }}>
      <div style={{ display: "flex", gap: 4 }}>
        <span style={{ padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 700, color: colors.white, backgroundColor: typeColors[t.type] }}>
          {T(t.type)}
        </span>
        {t.grade && (
          <span style={{ padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 700, color: colors.white, backgroundColor: GRADE_COLORS[t.grade] || colors.gray400 }}>
            {T("grade" + t.grade.charAt(0).toUpperCase() + t.grade.slice(1))}
          </span>
        )}
      </div>
      <span style={{ fontSize: 14, fontWeight: 600, color: colors.gray700, flex: 1 }}>{t.name}</span>
      <span style={{ fontSize: 12, color: colors.gray400, whiteSpace: "nowrap" }}>{formatDate(t.date, lang)}</span>
    </div>
  );

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray800, marginBottom: 20 }}>{T("tournaments")}</h2>
      {upcoming.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
          {upcoming.map(renderCard)}
        </div>
      )}
      {past.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: colors.gray500, marginBottom: 12 }}>{T("pastTournaments")}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {past.map(renderPastCard)}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ADMIN PANEL
// ============================================================
function AdminPanel({ tournaments, onSelect, onCreate, onEdit, onDelete, onRecalcPoints, T, lang }) {
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray800, margin: 0 }}>{T("admin")}</h2>
        <div style={{ display: "flex", gap: 8 }}>
          {onRecalcPoints && <Btn size="sm" variant="outline" onClick={onRecalcPoints}>{lang === "ko" ? "포인트 재계산" : "Recalculate Points"}</Btn>}
          <Btn onClick={onCreate}><Icon name="plus" size={16} />{T("createTournament")}</Btn>
        </div>
      </div>
      {tournaments.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: colors.gray400 }}>
          <p>{T("noTournaments")}</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[...tournaments].sort((a, b) => {
            // 완료된 대회는 밑으로
            const aFinished = a.stage === "finished" ? 1 : 0;
            const bFinished = b.stage === "finished" ? 1 : 0;
            if (aFinished !== bFinished) return aFinished - bFinished;
            // 날짜 최신순
            return (b.date || "").localeCompare(a.date || "");
          }).map((t) => (
            <Card key={t.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ cursor: "pointer", flex: 1 }} onClick={() => onSelect(t)}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Badge type="info">{T(t.type)}</Badge>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: colors.gray800, margin: 0 }}>{t.name}</h3>
                </div>
                <p style={{ fontSize: 13, color: colors.gray500, marginTop: 4 }}>
                  {T("participants")}: {t.registrations?.filter((r) => r.status === "confirmed").length || 0}
                  {(t.categoryGender || t.categoryLevel) && ` · ${categoryLabel(lang, t.categoryGender, t.categoryLevel)}`}
                  {t.date && ` · ${formatDate(t.date, lang)}`}
                </p>
              </div>
              <div style={{ display: "flex", gap: 6 }} onClick={(e) => e.stopPropagation()}>
                <Btn variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); onEdit(t); }}>{T("edit")}</Btn>
                <Btn variant="danger" size="sm" onClick={(e) => { e.stopPropagation(); setConfirmDeleteId(t.id); }}>{T("delete")}</Btn>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDeleteId && (
        <Modal onClose={() => setConfirmDeleteId(null)}>
          <div style={{ padding: 24, textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{"⚠️"}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: colors.gray800 }}>
              {lang === "ko" ? "정말 삭제하시겠습니까?" : "Are you sure you want to delete?"}
            </h3>
            <p style={{ fontSize: 14, color: colors.gray500, marginBottom: 20 }}>
              {lang === "ko" ? "삭제된 토너먼트는 복구할 수 없습니다." : "This action cannot be undone."}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
              <Btn variant="outline" onClick={() => setConfirmDeleteId(null)}>{T("cancel")}</Btn>
              <Btn variant="danger" onClick={() => { onDelete(confirmDeleteId); setConfirmDeleteId(null); }}>{T("delete")}</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// TOURNAMENT FORM (Create / Edit)
// ============================================================
function TournamentForm({ existing, onSave, onCancel, T, lang }) {
  const [form, setForm] = useState(
    existing || {
      name: "",
      type: "open",
      categoryGender: "",
      categoryLevel: "",
      date: "",
      registrationDeadline: "",
      location: "",
      entryFee: "",
      description: "",
      maxTeams: "8",
      roundRobinGames: "4",
      knockoutFormats: { quarterFinals: "set3", semiFinals: "set3", final: "set3" },
      americanoType: "normal",
      americanoPlayers: "8",
      americanoRounds: "6",
      americanoPointsPerMatch: "32",
      bankAccount: "",
      courts: "",
      thirdPlaceEnabled: true,
      grade: "",
    }
  );

  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const openTeamOptions = ["4", "5", "8", "10"];
  const maxTeamsForOpen = { "4": 4, "5": 5, "8": 8, "10": 10 };

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: colors.gray800, marginBottom: 20 }}>
        {existing ? T("editTournament") : T("createTournament")}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FormField label={T("tournamentName")}>
          <input value={form.name} onChange={(e) => set("name", e.target.value)} style={inputStyle} />
        </FormField>

        <FormField label={T("tournamentType")}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {["open", "cup", "league", "americano"].map((type) => (
              <button
                key={type}
                onClick={() => set("type", type)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: `2px solid ${form.type === type ? colors.primary : colors.gray200}`,
                  background: form.type === type ? colors.primaryLight : colors.white,
                  color: form.type === type ? colors.primary : colors.gray600,
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: 14,
                }}
              >
                <div>{T(type)}</div>
                <div style={{ fontSize: 11, fontWeight: 400, marginTop: 2, color: colors.gray500 }}>
                  {T(type + "Desc")}
                </div>
              </button>
            ))}
          </div>
        </FormField>

        <FormField label={T("tournamentGrade")}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button onClick={() => set("grade", "")}
              style={{
                padding: "6px 14px", borderRadius: 20, fontWeight: 700, cursor: "pointer", fontSize: 12,
                border: `2px solid ${!form.grade ? colors.gray500 : colors.gray200}`,
                background: !form.grade ? colors.gray500 : colors.white,
                color: !form.grade ? colors.white : colors.gray600,
              }}>
              {lang === "ko" ? "랭킹 반영 안함" : "Unranked"}
            </button>
            {TOURNAMENT_GRADES.map((g) => (
              <button key={g} onClick={() => set("grade", g)}
                style={{
                  padding: "6px 14px", borderRadius: 20, fontWeight: 700, cursor: "pointer", fontSize: 12,
                  border: `2px solid ${form.grade === g ? GRADE_COLORS[g] : colors.gray200}`,
                  background: form.grade === g ? GRADE_COLORS[g] : colors.white,
                  color: form.grade === g ? colors.white : colors.gray600,
                }}>
                {T("grade" + g.charAt(0).toUpperCase() + g.slice(1))}
              </button>
            ))}
          </div>
        </FormField>

        <FormField label={T("category")}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: colors.gray500, marginBottom: 2, display: "block" }}>{T("genderType")}</label>
              <select value={form.categoryGender} onChange={(e) => set("categoryGender", e.target.value)} style={inputStyle}>
                <option value="">--</option>
                {GENDER_TYPES.map((g) => <option key={g} value={g}>{T(g)}</option>)}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: colors.gray500, marginBottom: 2, display: "block" }}>{T("level")}</label>
              <select value={form.categoryLevel} onChange={(e) => set("categoryLevel", e.target.value)} style={inputStyle}>
                <option value="">--</option>
                {LEVELS.map((l) => <option key={l} value={l}>{T(l)}</option>)}
              </select>
            </div>
          </div>
        </FormField>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <FormField label={T("date")}>
            <DatePickerWithDay value={form.date} onChange={(v) => set("date", v)} lang={lang} />
          </FormField>
          <FormField label={T("registrationDeadline")}>
            <DatePickerWithDay value={form.registrationDeadline || ""} onChange={(v) => set("registrationDeadline", v)} lang={lang} />
          </FormField>
          <FormField label={T("location")}>
            <input value={form.location} onChange={(e) => set("location", e.target.value)} style={inputStyle} />
          </FormField>
        </div>

        <FormField label={T("courts")}>
          <input value={form.courts} onChange={(e) => set("courts", e.target.value)} style={inputStyle} placeholder="코트 1, 코트 2, 코트 3" />
        </FormField>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FormField label={T("entryFee")}>
            <input value={form.entryFee} onChange={(e) => set("entryFee", e.target.value)} placeholder="₩30,000" style={inputStyle} />
          </FormField>
          <FormField label={T("bankAccount")}>
            <input value={form.bankAccount} onChange={(e) => set("bankAccount", e.target.value)} placeholder="카카오뱅크 3333-00-1234567" style={inputStyle} />
          </FormField>
        </div>

        {/* TYPE-SPECIFIC SETTINGS */}
        {form.type === "open" && (
          <>
            <FormField label={T("maxTeams")}>
              <div style={{ display: "flex", gap: 8 }}>
                {openTeamOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => set("maxTeams", n)}
                    style={{
                      flex: 1, padding: "8px", borderRadius: 8, fontWeight: 600, cursor: "pointer",
                      border: `2px solid ${form.maxTeams === n ? colors.primary : colors.gray200}`,
                      background: form.maxTeams === n ? colors.primaryLight : colors.white,
                      color: form.maxTeams === n ? colors.primary : colors.gray600,
                    }}
                  >
                    {n}{lang === "ko" ? "팀" : " Teams"}
                  </button>
                ))}
              </div>
            </FormField>
            <FormField label={T("roundRobinGames")}>
              <div style={{ display: "flex", gap: 8 }}>
                {["4", "5", "6"].map((n) => (
                  <button
                    key={n}
                    onClick={() => set("roundRobinGames", n)}
                    style={{
                      flex: 1, padding: "8px", borderRadius: 8, fontWeight: 600, cursor: "pointer",
                      border: `2px solid ${form.roundRobinGames === n ? colors.primary : colors.gray200}`,
                      background: form.roundRobinGames === n ? colors.primaryLight : colors.white,
                      color: form.roundRobinGames === n ? colors.primary : colors.gray600,
                    }}
                  >
                    {n} {T("game")}
                  </button>
                ))}
              </div>
            </FormField>
          </>
        )}

        {(form.type === "open" || form.type === "cup") && (
          <>
            <KnockoutFormatsPicker
              formats={form.knockoutFormats || { quarterFinals: "set3", semiFinals: "set3", final: "set3" }}
              onChange={(fmts) => set("knockoutFormats", fmts)}
              T={T}
            />
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14, fontWeight: 500, color: colors.gray700 }}>
              <input type="checkbox" checked={form.thirdPlaceEnabled !== false} onChange={(e) => set("thirdPlaceEnabled", e.target.checked)} />
              {T("enableThirdPlace")}
            </label>
          </>
        )}

        {form.type === "cup" && (
          <FormField label={T("maxTeams")}>
            <select value={form.maxTeams} onChange={(e) => set("maxTeams", e.target.value)} style={inputStyle}>
              {[4, 8, 16, 32].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </FormField>
        )}

        {form.type === "league" && (
          <FormField label={T("leagueTeams")}>
            <select value={form.maxTeams} onChange={(e) => set("maxTeams", e.target.value)} style={inputStyle}>
              {[4, 5, 6, 8, 10, 12].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </FormField>
        )}

        {form.type === "americano" && (
          <>
            <FormField label={T("americanoType")}>
              <div style={{ display: "flex", gap: 8 }}>
                {["normal", "mexicano", "team"].map((at) => (
                  <button
                    key={at}
                    onClick={() => set("americanoType", at)}
                    style={{
                      flex: 1, padding: "10px", borderRadius: 8, fontWeight: 600, cursor: "pointer",
                      border: `2px solid ${form.americanoType === at ? colors.primary : colors.gray200}`,
                      background: form.americanoType === at ? colors.primaryLight : colors.white,
                      color: form.americanoType === at ? colors.primary : colors.gray600,
                      fontSize: 13,
                    }}
                  >
                    {at === "normal" ? T("americanoNormal") : at === "mexicano" ? T("americanoMexicano") : T("americanoTeam")}
                  </button>
                ))}
              </div>
            </FormField>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <FormField label={T("americanoPlayers")}>
                <select value={form.americanoPlayers} onChange={(e) => {
                  set("americanoPlayers", e.target.value);
                }} style={inputStyle}>
                  {Array.from({ length: 17 }, (_, i) => i + 4).map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </FormField>
              <FormField label={T("americanoPointsPerMatch")}>
                <input type="number" value={form.americanoPointsPerMatch} onChange={(e) => set("americanoPointsPerMatch", e.target.value)} style={inputStyle} />
              </FormField>
            </div>
          </>
        )}

        <FormField label={T("description")}>
          <textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
        </FormField>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
          <Btn variant="outline" onClick={onCancel}>{T("cancel")}</Btn>
          <Btn onClick={() => onSave(form)} disabled={!form.name}>{T("save")}</Btn>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: colors.gray600, marginBottom: 4 }}>{label}</label>
      {children}
    </div>
  );
}

function GenderSelect({ value, onChange }) {
  const { T } = useContext(LangContext);
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {["male", "female"].map((g) => (
        <button
          key={g}
          onClick={() => onChange(g)}
          style={{
            flex: 1, padding: "8px", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 13,
            border: `2px solid ${value === g ? colors.primary : colors.gray200}`,
            background: value === g ? colors.primaryLight : colors.white,
            color: value === g ? colors.primary : colors.gray600,
          }}
        >
          {T(g)}
        </button>
      ))}
    </div>
  );
}

// ============================================================
// KNOCKOUT FORMATS PICKER (per-round: QF / SF / Final)
// ============================================================
const KNOCKOUT_OPTIONS = ["set3", "set2super", "set1game8", "set1game6"];

function KnockoutFormatsPicker({ formats, onChange, T }) {
  const setFmt = (round, val) => onChange({ ...formats, [round]: val });
  const rounds = [
    { key: "quarterFinals", label: T("quarterFinalsFormat") },
    { key: "semiFinals", label: T("semiFinalsFormat") },
    { key: "final", label: T("finalFormat") },
  ];

  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: colors.gray600, marginBottom: 8 }}>{T("knockoutFormats")}</label>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rounds.map(({ key, label }) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: colors.gray500, minWidth: 70 }}>{label}</span>
            <div style={{ display: "flex", gap: 6, flex: 1 }}>
              {KNOCKOUT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFmt(key, opt)}
                  style={{
                    flex: 1, padding: "6px 4px", borderRadius: 6, fontWeight: 600, cursor: "pointer", fontSize: 12,
                    border: `2px solid ${formats[key] === opt ? colors.primary : colors.gray200}`,
                    background: formats[key] === opt ? colors.primaryLight : colors.white,
                    color: formats[key] === opt ? colors.primary : colors.gray500,
                  }}
                >
                  {T(opt)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// DATE PICKER WITH DAY-OF-WEEK
// ============================================================
function DatePickerWithDay({ value, onChange, lang }) {
  const inputRef = useCallback((node) => { if (node) node._ref = node; }, []);
  const handleClick = (e) => {
    // Find the hidden input and trigger its picker
    const input = e.currentTarget.querySelector("input[type='date']");
    if (input) { try { input.showPicker(); } catch { input.focus(); } }
  };
  const displayText = value ? value : (lang === "ko" ? "날짜 선택" : "Select date");

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100%",
        padding: "8px 12px",
        borderRadius: 8,
        border: `1px solid ${colors.gray300}`,
        fontSize: 14,
        boxSizing: "border-box",
        cursor: "pointer",
        background: colors.white,
        color: value ? colors.gray800 : colors.gray400,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontWeight: value ? 500 : 400 }}>{displayText}</span>
      <span style={{ fontSize: 12, color: colors.gray400 }}>&#x1F4C5;</span>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          opacity: 0, cursor: "pointer",
        }}
      />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px 12px",
  borderRadius: 8,
  border: `1px solid ${colors.gray300}`,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};


// Snake seeding for 8/10 teams in Open format
function applySnakeSeeding(teams, numGroups) {
  if (!teams || teams.length === 0) return [teams];
  const hasSeeds = teams.some(t => t.seed && !isNaN(t.seed));
  if (!hasSeeds) return null;
  const sorted = [...teams].sort((a, b) => (parseInt(a.seed) || 999) - (parseInt(b.seed) || 999));
  const groups = Array.from({ length: numGroups }, () => []);
  sorted.forEach((team, i) => { groups[i % numGroups].push(team); });
  return groups;
}

// ============================================================
// TOURNAMENT DETAIL
// ============================================================
function TournamentDetail({ tournament, isAdmin, onBack, onConfirmPayment, onRejectRegistration, onSubmitRegistration, onUpdateTournament, players, onAddPlayer, onUpdateRankings, T, lang }) {
  const [tab, setTab] = useState("info");
  const [showRegForm, setShowRegForm] = useState(false);
  const [editingSettings, setEditingSettings] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const confirmedRegs = tournament.registrations?.filter((r) => r.status === "confirmed") || [];
  const pendingRegs = tournament.registrations?.filter((r) => r.status === "pending") || [];

  const typeDescMap = {
    open: T("openDesc"),
    cup: T("cupDesc"),
    league: T("leagueDesc"),
    americano: T("americanoDesc"),
  };

  // Generate bracket data for a set of teams given tournament type
  const generateBracketForTeams = (teams, type) => {
    const result = {};
    // Attach seed info from registrations
    const teamsWithSeed = teams.map((t) => {
      const reg = tournament.registrations?.find((r) => r.id === t.id);
      return { ...t, seed: reg?.seed || null };
    });

    if (type === "open") {
      const maxT = parseInt(tournament.maxTeams);
      if (maxT === 4 || maxT === 5) {
        result.groups = [{ name: "A", teams: teamsWithSeed, rounds: generateRoundRobinSchedule(teamsWithSeed) }];
      } else if (maxT === 8 || maxT === 10) {
        const numGroups = 2;
        const seededGroups = applySnakeSeeding(teamsWithSeed, numGroups);
        if (seededGroups) {
          // Snake seeding applied
          const groupNames = ["A", "B"];
          result.groups = seededGroups.map((gTeams, i) => ({
            name: groupNames[i], teams: gTeams, rounds: generateRoundRobinSchedule(gTeams),
          }));
        } else {
          // No seeds — random shuffle
          const shuffled = [...teamsWithSeed].sort(() => Math.random() - 0.5);
          const half = maxT === 10 ? 5 : Math.ceil(shuffled.length / 2);
          result.groups = [
            { name: "A", teams: shuffled.slice(0, half), rounds: generateRoundRobinSchedule(shuffled.slice(0, half)) },
            { name: "B", teams: shuffled.slice(half), rounds: generateRoundRobinSchedule(shuffled.slice(half)) },
          ];
        }
      }
    } else if (type === "cup") {
      // For cup, seeds determine bracket position
      const hasSeeds = teamsWithSeed.some((t) => t.seed);
      let ordered;
      if (hasSeeds) {
        ordered = [...teamsWithSeed].sort((a, b) => (a.seed || 999) - (b.seed || 999));
      } else {
        ordered = [...teamsWithSeed].sort(() => Math.random() - 0.5);
      }
      const teamIds = ordered.map((t) => t.id);
      const roundName = teamIds.length <= 4 ? T("semiFinals") : teamIds.length <= 8 ? T("quarterFinals") : "Round 1";
      result.knockoutBracket = { teams: ordered, rounds: [generateKnockoutBracket(teamIds, roundName)], currentRound: 0 };
    } else if (type === "league") {
      result.groups = [{ name: T("league"), teams: teamsWithSeed, rounds: generateRoundRobinSchedule(teamsWithSeed) }];
    }
    return result;
  };


  
  const needsGroupDraw = (type, maxT) => type === "open" && (maxT === 8 || maxT === 10);

  const startTournament = () => {
    let updates = { stage: "ongoing" };
    const teams = confirmedRegs.map((r) => ({ id: r.id, name: r.teamName || r.playerName }));
    const maxT = parseInt(tournament.maxTeams);

    if (tournament.type === "americano") {
      // 대진표는 시작 후 "대진표 생성" 버튼으로 별도 생성
    } else if (needsGroupDraw(tournament.type, maxT)) {
      // Don't auto-generate groups — let admin use Draw button or manual assignment
    } else {
      const data = generateBracketForTeams(teams, tournament.type);
      updates = { ...updates, ...data };
    }

    onUpdateTournament(tournament.id, updates);
  };

  // Generate groups (auto draw)
  const doGroupDraw = () => {
    const teams = confirmedRegs.map((r) => ({ id: r.id, name: r.teamName || r.playerName }));
    const data = generateBracketForTeams(teams, tournament.type);
    onUpdateTournament(tournament.id, data);
  };

  // Manual group save (admin assigns teams to groups)
  const saveManualGroups = (groupAssignments) => {
    const teams = confirmedRegs.map((r) => ({ id: r.id, name: r.teamName || r.playerName }));
    const maxT = parseInt(tournament.maxTeams);

    if (tournament.type === "league") {
      // League is always 1 group
      const grouped = teams;
      const groups = [{ name: T("league"), teams: grouped, rounds: generateRoundRobinSchedule(grouped) }];
      onUpdateTournament(tournament.id, { groups });
    } else {
      // Open 8/10: 2 groups
      const groupA = [];
      const groupB = [];
      teams.forEach((t) => {
        if (groupAssignments[t.id] === "A") groupA.push(t);
        else if (groupAssignments[t.id] === "B") groupB.push(t);
      });
      const groups = [
        { name: "A", teams: groupA, rounds: generateRoundRobinSchedule(groupA) },
        { name: "B", teams: groupB, rounds: generateRoundRobinSchedule(groupB) },
      ];
      onUpdateTournament(tournament.id, { groups });
    }
  };

  // Advance to knockout from RR — now handled inside BracketTab via updateData
  const advanceToKnockout = (sourceGroups, updateFn) => {
    const maxT = parseInt(tournament.maxTeams);
    let knockoutTeamIds = [];

    if (maxT === 4 || maxT === 5) {
      const standings = calcStandings(sourceGroups[0].teams, sourceGroups[0].rounds);
      const top4 = standings.slice(0, 4).map((s) => s.team.id);
      // 1st vs 4th, 2nd vs 3rd
      knockoutTeamIds = [top4[0], top4[3], top4[1], top4[2]];
    } else if (maxT === 8) {
      const standingsA = calcStandings(sourceGroups[0].teams, sourceGroups[0].rounds);
      const standingsB = calcStandings(sourceGroups[1].teams, sourceGroups[1].rounds);
      knockoutTeamIds = [
        standingsA[0]?.team.id, standingsB[3]?.team.id,
        standingsA[2]?.team.id, standingsB[1]?.team.id,
        standingsB[0]?.team.id, standingsA[3]?.team.id,
        standingsB[2]?.team.id, standingsA[1]?.team.id,
      ].filter(Boolean);
    } else if (maxT === 10) {
      const standingsA = calcStandings(sourceGroups[0].teams, sourceGroups[0].rounds);
      const standingsB = calcStandings(sourceGroups[1].teams, sourceGroups[1].rounds);
      const topA = standingsA.slice(0, 4);
      const topB = standingsB.slice(0, 4);
      knockoutTeamIds = [
        topA[0]?.team.id, topB[3]?.team.id,
        topA[2]?.team.id, topB[1]?.team.id,
        topB[0]?.team.id, topA[3]?.team.id,
        topB[2]?.team.id, topA[1]?.team.id,
      ].filter(Boolean);
    }

    const allTeams = sourceGroups.flatMap((g) => g.teams);
    const roundName = knockoutTeamIds.length <= 4 ? T("semiFinals") : T("quarterFinals");
    const bracket = {
      teams: allTeams,
      rounds: [generateKnockoutBracket(knockoutTeamIds, roundName)],
      currentRound: 0,
    };
    updateFn({ knockoutBracket: bracket });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <Btn variant="ghost" onClick={onBack}><Icon name="arrowLeft" size={18} /></Btn>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: colors.gray800, margin: 0 }}>{tournament.name}</h2>
            <Badge type="info">{T(tournament.type)}</Badge>
          </div>
          <p style={{ fontSize: 13, color: colors.gray500, marginTop: 4 }}>
            {typeDescMap[tournament.type]}
          </p>
          {(tournament.categoryGender || tournament.categoryLevel) && (
            <div style={{ marginTop: 6 }}>
              <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: colors.primaryLight, color: colors.primary }}>
                {categoryLabel(lang, tournament.categoryGender, tournament.categoryLevel)}
              </span>
            </div>
          )}
        </div>
        {isAdmin && tournament.stage === "registration" && confirmedRegs.length >= 2 && (
          <Btn variant="success" onClick={startTournament}>{T("startTournament")}</Btn>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, borderBottom: `2px solid ${colors.gray200}`, marginBottom: 20 }}>
        {["info", "participants", ...(tournament.stage !== "registration" ? ["bracket"] : [])].map((t2) => (
          <button
            key={t2}
            onClick={() => setTab(t2)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderBottom: `3px solid ${tab === t2 ? colors.primary : "transparent"}`,
              background: "none",
              color: tab === t2 ? colors.primary : colors.gray500,
              fontWeight: tab === t2 ? 700 : 500,
              cursor: "pointer",
              fontSize: 14,
              marginBottom: -2,
            }}
          >
            {t2 === "info" ? T("description") : t2 === "participants" ? T("participants") : T("bracket")}
          </button>
        ))}
      </div>

      {/* TAB: Info */}
      {tab === "info" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: colors.gray500, marginBottom: 12 }}>{T("description")}</h3>
            {tournament.description && <p style={{ color: colors.gray700, lineHeight: 1.6, marginBottom: 16 }}>{tournament.description}</p>}
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 12px", fontSize: 14, alignItems: "baseline" }}>
              <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("date")}</span>
              <span style={{ color: colors.gray800 }}>{formatDate(tournament.date, lang)}</span>
              {tournament.registrationDeadline && (
                <>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("registrationDeadline")}</span>
                  <span style={{ color: colors.gray800 }}>
                    {formatDate(tournament.registrationDeadline, lang)}
                    {" "}
                    {(() => {
                      const dl = deadlineEndOfDay(tournament.registrationDeadline);
                      const now = new Date();
                      const diff = Math.ceil((dl - now) / (1000 * 60 * 60 * 24));
                      return diff < 0
                        ? <span style={{ color: colors.danger, fontSize: 12, fontWeight: 600 }}>({T("deadlinePassed")})</span>
                        : <span style={{ color: colors.warning, fontSize: 12, fontWeight: 600 }}>({diff} {T("daysLeft")})</span>;
                    })()}
                  </span>
                </>
              )}
              <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("location")}</span>
              <span style={{ color: colors.gray800 }}>{tournament.location || "-"}</span>
              <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("entryFee")}</span>
              <span style={{ color: colors.gray800 }}>{tournament.entryFee || "-"}</span>
              <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("maxTeams")}</span>
              <span style={{ color: colors.gray800 }}>{tournament.maxTeams || "-"}</span>
              {tournament.type === "open" && (
                <>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("roundRobinGames")}</span>
                  <span style={{ color: colors.gray800 }}>{tournament.roundRobinGames} {T("game")}</span>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("knockoutFormats")}</span>
                  <span style={{ color: colors.gray800, fontSize: 13 }}>
                    {T("quarterFinals")}: {T(tournament.knockoutFormats?.quarterFinals || "set3")} · {T("semiFinals")}: {T(tournament.knockoutFormats?.semiFinals || "set3")} · {T("final")}: {T(tournament.knockoutFormats?.final || "set3")}
                  </span>
                </>
              )}
              {tournament.type === "cup" && (
                <>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("knockoutFormats")}</span>
                  <span style={{ color: colors.gray800, fontSize: 13 }}>
                    {T("quarterFinals")}: {T(tournament.knockoutFormats?.quarterFinals || "set3")} · {T("semiFinals")}: {T(tournament.knockoutFormats?.semiFinals || "set3")} · {T("final")}: {T(tournament.knockoutFormats?.final || "set3")}
                  </span>
                </>
              )}
              {tournament.type === "americano" && (
                <>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("americanoType")}</span>
                  <span style={{ color: colors.gray800 }}>{tournament.americanoType === "mexicano" ? T("americanoMexicano") : tournament.americanoType === "team" ? T("americanoTeam") : T("americanoNormal")}</span>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("americanoRounds")}</span>
                  <span style={{ color: colors.gray800 }}>{tournament.americanoRounds}</span>
                  <span style={{ color: colors.gray500, fontWeight: 600, whiteSpace: "nowrap" }}>{T("americanoPointsPerMatch")}</span>
                  <span style={{ color: colors.gray800 }}>{tournament.americanoPointsPerMatch}</span>
                </>
              )}
            </div>
            {isAdmin && (
              <div style={{ marginTop: 16 }}>
                <Btn variant="outline" size="sm" onClick={() => setEditingSettings(true)}>
                  <Icon name="settings" size={14} />{T("settings")}
                </Btn>
              </div>
            )}
          </Card>
          <Card>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: colors.gray500, marginBottom: 12 }}>{T("registration")}</h3>
            {tournament.bankAccount && (
              <div style={{ padding: 12, background: colors.primaryLight, borderRadius: 8, marginBottom: 12, fontSize: 13 }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{T("bankAccount")}</div>
                <div style={{ color: colors.primary, fontWeight: 700 }}>{tournament.bankAccount}</div>
              </div>
            )}
            <div style={{ fontSize: 14, color: colors.gray600, marginBottom: 12 }}>
              <div>
                {T("participants")}: <strong>{confirmedRegs.length}</strong> / {tournament.type === "americano" ? (tournament.americanoPlayers || "?") : (tournament.maxTeams || "?")}
                {pendingRegs.length > 0 && <span style={{ color: colors.warning }}> ({pendingRegs.length} {T("pendingPayment")})</span>}
              </div>
            </div>
            {tournament.stage === "registration" && (() => {
              const deadlinePassed = tournament.registrationDeadline && deadlineEndOfDay(tournament.registrationDeadline) < new Date();
              return deadlinePassed
                ? <Badge type="danger">{T("deadlinePassed")}</Badge>
                : <Btn onClick={() => setShowRegForm(true)}>{T("submitRegistration")}</Btn>;
            })()}
          </Card>
        </div>
      )}

      {/* TAB: Participants */}
      {tab === "participants" && (
        <ParticipantsTab
          tournament={tournament}
          isAdmin={isAdmin}
          onConfirmPayment={onConfirmPayment}
          onRejectRegistration={onRejectRegistration}
          onUpdateTournament={onUpdateTournament}
          players={players || []}
          onAddPlayer={onAddPlayer}
          onUpdateRankings={onUpdateRankings}
          T={T}
          lang={lang}
        />
      )}

      {/* TAB: Bracket */}
      {tab === "bracket" && (
        <BracketTab
          tournament={tournament}
          isAdmin={isAdmin}
          onUpdateTournament={onUpdateTournament}
          onAdvanceToKnockout={advanceToKnockout}
          onGroupDraw={doGroupDraw}
          onSaveManualGroups={saveManualGroups}
          needsGroupDraw={needsGroupDraw(tournament.type, parseInt(tournament.maxTeams))}
          onShowToast={setToastMsg}
          T={T}
          lang={lang}
        />
      )}

      {/* Registration Modal */}
      {showRegForm && (
        <Modal onClose={() => setShowRegForm(false)}>
          <RegistrationForm
            tournament={tournament}
            onSubmit={(data) => {
              onSubmitRegistration(tournament.id, data);
              setShowRegForm(false);
            }}
            onCancel={() => setShowRegForm(false)}
            T={T}
            isAdmin={isAdmin}
            players={players || []}
            onAddPlayer={onAddPlayer}
          />
        </Modal>
      )}

      {/* Settings Modal */}
      {editingSettings && (
        <Modal onClose={() => setEditingSettings(false)}>
          <TournamentSettingsEditor
            tournament={tournament}
            onSave={(updates) => {
              onUpdateTournament(tournament.id, updates);
              setEditingSettings(false);
            }}
            onCancel={() => setEditingSettings(false)}
            T={T}
            lang={lang}
          />
        </Modal>
      )}

      {/* Toast */}
      {toastMsg && (
        <div style={{
          position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)",
          padding: "10px 24px", borderRadius: 10, background: colors.gray800, color: colors.white,
          fontSize: 14, fontWeight: 600, zIndex: 999, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}>
          {toastMsg}
        </div>
      )}
    </div>
  );
}

// ============================================================
// TOURNAMENT SETTINGS EDITOR (Always editable)
// ============================================================
function TournamentSettingsEditor({ tournament, onSave, onCancel, T, lang }) {
  const [form, setForm] = useState({ ...tournament });
  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>{T("settings")}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {(form.type === "open" || form.type === "cup") && (
          <>
            <KnockoutFormatsPicker
              formats={form.knockoutFormats || { quarterFinals: "set3", semiFinals: "set3", final: "set3" }}
              onChange={(fmts) => set("knockoutFormats", fmts)}
              T={T}
            />
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14, fontWeight: 500, color: colors.gray700 }}>
              <input type="checkbox" checked={form.thirdPlaceEnabled !== false} onChange={(e) => set("thirdPlaceEnabled", e.target.checked)} />
              {T("enableThirdPlace")}
            </label>
          </>
        )}
        {form.type === "open" && (
          <FormField label={T("roundRobinGames")}>
            <div style={{ display: "flex", gap: 8 }}>
              {["4", "5", "6"].map((n) => (
                <button
                  key={n}
                  onClick={() => set("roundRobinGames", n)}
                  style={{
                    flex: 1, padding: "8px", borderRadius: 8, fontWeight: 600, cursor: "pointer",
                    border: `2px solid ${form.roundRobinGames === n ? colors.primary : colors.gray200}`,
                    background: form.roundRobinGames === n ? colors.primaryLight : colors.white,
                    color: form.roundRobinGames === n ? colors.primary : colors.gray600,
                  }}
                >
                  {n} {T("game")}
                </button>
              ))}
            </div>
          </FormField>
        )}
        <FormField label={T("registrationDeadline")}>
          <DatePickerWithDay value={form.registrationDeadline || ""} onChange={(v) => set("registrationDeadline", v)} lang={lang} />
        </FormField>
        <FormField label={T("entryFee")}>
          <input value={form.entryFee} onChange={(e) => set("entryFee", e.target.value)} style={inputStyle} />
        </FormField>
        <FormField label={T("bankAccount")}>
          <input value={form.bankAccount} onChange={(e) => set("bankAccount", e.target.value)} style={inputStyle} />
        </FormField>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <Btn variant="outline" onClick={onCancel}>{T("cancel")}</Btn>
          <Btn onClick={() => onSave(form)}>{T("save")}</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// REGISTRATION FORM
// ============================================================
function RegistrationForm({ tournament, onSubmit, onCancel, T, isAdmin, players, onAddPlayer }) {
  const { lang } = useContext(LangContext);
  const [form, setForm] = useState({
    playerName: "",
    playerGender: "",
    playerPhone: "",
    partnerName: "",
    partnerGender: "",
    partnerPhone: "",
    teamName: "",
    agreeTerms: false,
  });
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const needsPartner = tournament.type !== "americano" || tournament.americanoType === "team";
  const isTeamGame = needsPartner;

  // Player picker component — search & select from registry
  const PlayerPicker = ({ label, onSelect, selected }) => {
    const [query, setQuery] = useState("");
    const [showList, setShowList] = useState(false);
    const results = query.length > 0
      ? (players || []).filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || (p.phone && p.phone.includes(query)))
      : (players || []);

    return (
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: colors.gray500, marginBottom: 4 }}>{label}</div>
        {selected ? (
          <div style={{
            display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
            background: colors.primaryLight, borderRadius: 8, border: `2px solid ${colors.primary}`,
          }}>
            <span style={{ flex: 1, fontWeight: 700, fontSize: 14, color: colors.primary }}>{selected.name}</span>
            <span style={{ fontSize: 11, color: colors.gray500 }}>{selected.gender === "male" ? (lang === "ko" ? "남" : "M") : (lang === "ko" ? "여" : "F")}</span>
            <button onClick={(e) => { e.stopPropagation(); onSelect(null); }} style={{
              background: "none", border: "none", cursor: "pointer", fontSize: 16, color: colors.gray400, padding: "0 4px",
            }}>{"×"}</button>
          </div>
        ) : (
          <>
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowList(true); }}
              onFocus={() => setShowList(true)}
              placeholder={T("searchPlayer") + "..."}
              style={{ ...inputStyle, width: "100%", boxSizing: "border-box" }}
            />
            {showList && (
              <div style={{
                position: "absolute", top: "100%", left: 0, right: 0, zIndex: 100,
                background: colors.white, border: `1px solid ${colors.gray200}`, borderRadius: 8,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxHeight: 200, overflowY: "auto",
              }}>
                {results.map((p) => (
                  <div key={p.id} onClick={() => { onSelect(p); setQuery(""); setShowList(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
                      cursor: "pointer", borderBottom: `1px solid ${colors.gray50}`, fontSize: 13,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = colors.gray50; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontWeight: 600 }}>{p.name}</span>
                    <span style={{ color: colors.gray400, fontSize: 11 }}>{p.gender === "male" ? (lang === "ko" ? "남" : "M") : (lang === "ko" ? "여" : "F")}</span>
                    {p.level && <span style={{ marginLeft: "auto", padding: "1px 6px", borderRadius: 6, fontSize: 10, background: colors.primaryLight, color: colors.primary, fontWeight: 600 }}>{T(p.level)}</span>}
                  </div>
                ))}
                {results.length === 0 && (
                  <div style={{ padding: "12px", textAlign: "center", color: colors.gray400, fontSize: 12 }}>
                    {lang === "ko" ? "검색 결과 없음" : "No results"}
                  </div>
                )}
                <div onClick={() => { setShowList(false); }}
                  style={{ padding: "8px 12px", color: colors.gray400, fontSize: 12, textAlign: "center", cursor: "pointer", borderTop: `1px solid ${colors.gray100}` }}>
                  {T("orRegisterNew")} {"↓"}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  // Select player from registry and fill form
  const selectPlayer = (p) => {
    if (p) {
      setForm((prev) => ({ ...prev, playerName: p.name, playerGender: p.gender, playerPhone: p.phone || prev.playerPhone }));
    } else {
      setForm((prev) => ({ ...prev, playerName: "", playerGender: "", playerPhone: "" }));
    }
    setSelectedPlayerObj(p);
  };
  const selectPartner = (p) => {
    if (p) {
      setForm((prev) => ({ ...prev, partnerName: p.name, partnerGender: p.gender, partnerPhone: p.phone || prev.partnerPhone }));
    } else {
      setForm((prev) => ({ ...prev, partnerName: "", partnerGender: "", partnerPhone: "" }));
    }
    setSelectedPartnerObj(p);
  };
  const [selectedPlayerObj, setSelectedPlayerObj] = useState(null);
  const [selectedPartnerObj, setSelectedPartnerObj] = useState(null);

  const canSubmit = isAdmin
    ? (form.playerName && form.playerGender && (!needsPartner || (form.partnerName && form.partnerGender)))
    : (form.playerName && form.playerGender && form.playerPhone && form.agreeTerms
      && (!needsPartner || (form.partnerName && form.partnerGender && form.partnerPhone)));

  const hasPlayers = players && players.length > 0;

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{T("registration")}</h2>
      {tournament.bankAccount && (
        <div style={{ padding: 12, background: colors.warningLight, borderRadius: 8, marginBottom: 16, fontSize: 13, lineHeight: 1.5 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{T("paymentInfo")}</div>
          <div style={{ fontWeight: 700, color: colors.warning, fontSize: 15 }}>{tournament.bankAccount}</div>
          {tournament.entryFee && <div style={{ marginTop: 4 }}>{T("entryFee")}: {tournament.entryFee}</div>}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Applicant info */}
        <div style={{ padding: 14, background: colors.gray50, borderRadius: 10, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.gray700 }}>{lang === "ko" ? "신청자 정보" : "Applicant Info"}</div>
          {/* Player picker from registry */}
          {hasPlayers && (
            <PlayerPicker label={T("selectPlayer")} onSelect={selectPlayer} selected={selectedPlayerObj} />
          )}
          {/* Manual input (shown when no player selected from registry, or always if no players) */}
          {!selectedPlayerObj && (
            <>
              {hasPlayers && <div style={{ fontSize: 11, color: colors.gray400, textAlign: "center" }}>{T("orRegisterNew")}</div>}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <FormField label={T("playerName")}>
                  <input value={form.playerName} onChange={(e) => set("playerName", e.target.value)} style={inputStyle} />
                </FormField>
                <FormField label={T("playerGender")}>
                  <GenderSelect value={form.playerGender} onChange={(v) => set("playerGender", v)} />
                </FormField>
              </div>
            </>
          )}
          {!isAdmin && !selectedPlayerObj && (
            <FormField label={T("playerPhone")}>
              <input type="tel" value={form.playerPhone} onChange={(e) => set("playerPhone", e.target.value)} style={inputStyle} placeholder="010-0000-0000" />
            </FormField>
          )}
        </div>

        {/* Partner info */}
        {needsPartner && (
          <div style={{ padding: 14, background: colors.gray50, borderRadius: 10, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.gray700 }}>{lang === "ko" ? "파트너 정보" : "Partner Info"}</div>
            {hasPlayers && (
              <PlayerPicker label={T("selectPlayer")} onSelect={selectPartner} selected={selectedPartnerObj} />
            )}
            {!selectedPartnerObj && (
              <>
                {hasPlayers && <div style={{ fontSize: 11, color: colors.gray400, textAlign: "center" }}>{T("orRegisterNew")}</div>}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <FormField label={T("partnerName")}>
                    <input value={form.partnerName} onChange={(e) => set("partnerName", e.target.value)} style={inputStyle} />
                  </FormField>
                  <FormField label={T("partnerGender")}>
                    <GenderSelect value={form.partnerGender} onChange={(v) => set("partnerGender", v)} />
                  </FormField>
            </div>
            {!isAdmin && !selectedPartnerObj && (
              <FormField label={T("partnerPhone")}>
                <input type="tel" value={form.partnerPhone} onChange={(e) => set("partnerPhone", e.target.value)} style={inputStyle} placeholder="010-0000-0000" />
              </FormField>
            )}
              </>
            )}
          </div>
        )}

        {/* Team name */}
        {isTeamGame && (
          <FormField label={T("teamName")}>
            <input value={form.teamName} onChange={(e) => set("teamName", e.target.value)} style={inputStyle} placeholder={form.playerName && form.partnerName ? `${form.playerName} & ${form.partnerName}` : ""} />
          </FormField>
        )}

        {/* Terms agreement — hide for admin */}
        {!isAdmin && (
          <div
            onClick={() => set("agreeTerms", !form.agreeTerms)}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 8, cursor: "pointer", border: `1px solid ${form.agreeTerms ? colors.primary : colors.gray300}`, background: form.agreeTerms ? colors.primaryLight : colors.white }}
          >
            <div style={{
              width: 20, height: 20, borderRadius: 4, border: `2px solid ${form.agreeTerms ? colors.primary : colors.gray300}`,
              background: form.agreeTerms ? colors.primary : colors.white,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {form.agreeTerms && <span style={{ color: colors.white, fontSize: 14, lineHeight: 1 }}>✓</span>}
            </div>
            <span style={{ fontSize: 13, color: form.agreeTerms ? colors.primary : colors.gray600, fontWeight: 500 }}>{T("agreeTerms")}</span>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 4 }}>
          <Btn variant="outline" onClick={onCancel}>{T("cancel")}</Btn>
          <Btn onClick={() => {
            if (!form.teamName && form.playerName && form.partnerName) {
              form.teamName = `${form.playerName} & ${form.partnerName}`;
            } else if (!form.teamName) {
              form.teamName = form.playerName;
            }
            onSubmit(form);
          }} disabled={!canSubmit}>{T("submitRegistration")}</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PARTICIPANTS TAB
// ============================================================
function ParticipantsTab({ tournament, isAdmin, onConfirmPayment, onRejectRegistration, onUpdateTournament, players, onAddPlayer, onUpdateRankings, T, lang }) {
  const regs = tournament.registrations || [];
  const confirmed = regs.filter((r) => r.status === "confirmed");
  const pending = regs.filter((r) => r.status === "pending");
  const [editingReg, setEditingReg] = useState(null); // { regId, field, value }

  // Check if a name is already in the player registry
  const isRegisteredPlayer = (name) => (players || []).some((p) => p.name === name);

  // Register all participants as players
  const registerAllAsPlayers = () => {
    if (!onAddPlayer) return;
    let count = 0;
    regs.forEach((r) => {
      if (r.playerName && !isRegisteredPlayer(r.playerName)) {
        onAddPlayer({ name: r.playerName, gender: r.playerGender || "", phone: r.playerPhone || "", level: "", birthdate: "" });
        count++;
      }
      if (r.partnerName && !isRegisteredPlayer(r.partnerName)) {
        onAddPlayer({ name: r.partnerName, gender: r.partnerGender || "", phone: r.partnerPhone || "", level: "", birthdate: "" });
        count++;
      }
    });
    return count;
  };

  // Register single participant
  const registerOnePlayer = (name, gender, phone) => {
    if (!onAddPlayer || !name || isRegisteredPlayer(name)) return;
    onAddPlayer({ name, gender: gender || "", phone: phone || "", level: "", birthdate: "" });
  };

  const moveParticipant = (idx, direction) => {
    if (direction === "up" && idx === 0) return;
    if (direction === "down" && idx === confirmed.length - 1) return;
    const newRegs = [...regs];
    const confirmedStartIdx = regs.findIndex((r) => r.status === "confirmed");
    const newIdx = direction === "up" ? idx - 1 : idx + 1;
    [newRegs[confirmedStartIdx + idx], newRegs[confirmedStartIdx + newIdx]] = [newRegs[confirmedStartIdx + newIdx], newRegs[confirmedStartIdx + idx]];
    onUpdateTournament(tournament.id, { registrations: newRegs });
  };

  const removeParticipant = (regId) => {
    if (window.confirm(T("removeParticipant"))) {
      const newRegs = regs.filter((r) => r.id !== regId);
      onUpdateTournament(tournament.id, { registrations: newRegs });
    }
  };

  const setSeed = (regId, seedVal) => {
    const newRegs = regs.map((r) => r.id === regId ? { ...r, seed: seedVal } : r);
    onUpdateTournament(tournament.id, { registrations: newRegs });
  };

  // 참가자 이름 수정 (등록정보 + 아메리카노 + 랭킹 동기화)
  const saveRegName = (regId, field, newName) => {
    const reg = regs.find((r) => r.id === regId);
    if (!reg || !newName.trim()) { setEditingReg(null); return; }
    const oldName = reg[field];
    if (oldName === newName.trim()) { setEditingReg(null); return; }
    const trimmed = newName.trim();

    // 등록정보 업데이트
    const newRegs = regs.map((r) => r.id === regId ? { ...r, [field]: trimmed } : r);

    // 아메리카노 데이터 동기화
    let americanoData = tournament.americanoData;
    if (americanoData) {
      if (americanoData.players) {
        americanoData = { ...americanoData, players: americanoData.players.map((p) => p.name === oldName ? { ...p, name: trimmed } : p) };
      }
      if (americanoData.groups) {
        americanoData = { ...americanoData, groups: americanoData.groups.map((g) => ({ ...g, players: g.players.map((p) => p.name === oldName ? { ...p, name: trimmed } : p) })) };
      }
      if (americanoData.finalGroups) {
        americanoData = { ...americanoData, finalGroups: americanoData.finalGroups.map((g) => ({ ...g, players: g.players.map((p) => p.name === oldName ? { ...p, name: trimmed } : p) })) };
      }
    }

    // RR 그룹/녹아웃 대진표 동기화
    let updatedGroups = tournament.groups;
    if (updatedGroups?.length) {
      updatedGroups = updatedGroups.map((g) => ({ ...g, teams: g.teams?.map((tm) => tm.name === oldName ? { ...tm, name: trimmed } : tm) }));
    }
    let updatedKnockout = tournament.knockoutBracket;
    if (updatedKnockout?.teams) {
      updatedKnockout = { ...updatedKnockout, teams: updatedKnockout.teams.map((tm) => tm.name === oldName ? { ...tm, name: trimmed } : tm) };
    }

    onUpdateTournament(tournament.id, { registrations: newRegs, americanoData, groups: updatedGroups || tournament.groups, knockoutBracket: updatedKnockout || tournament.knockoutBracket });

    // 랭킹 동기화
    if (onUpdateRankings) {
      onUpdateRankings(oldName, trimmed);
    }

    setEditingReg(null);
  };

  return (
    <div>
      {isAdmin && pending.length > 0 && (
        <Card style={{ marginBottom: 16, borderLeft: `4px solid ${colors.warning}` }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: colors.warning, marginBottom: 12 }}>{T("pendingPayment")} ({pending.length})</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {pending.map((r) => (
              <div key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: colors.warningLight, borderRadius: 8 }}>
                <div>
                  <div style={{ fontWeight: 700, color: colors.gray800 }}>{r.teamName || r.playerName}</div>
                  <div style={{ fontSize: 12, color: colors.gray500, marginTop: 2 }}>
                    {r.playerName} {r.playerPhone}
                    {r.partnerName && <span> · {r.partnerName} {r.partnerPhone}</span>}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <Btn variant="success" size="sm" onClick={() => onConfirmPayment(tournament.id, r.id)}>
                    <Icon name="check" size={14} />{T("confirmPayment")}
                  </Btn>
                  <Btn variant="danger" size="sm" onClick={() => onRejectRegistration(tournament.id, r.id)}>
                    <Icon name="x" size={14} />
                  </Btn>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: colors.gray700, margin: 0 }}>
            {T("confirmed")} ({confirmed.length})
          </h3>
          {isAdmin && onAddPlayer && confirmed.length > 0 && (
            <Btn size="sm" variant="outline" onClick={() => {
              const count = registerAllAsPlayers();
              if (count > 0) {
                alert(lang === "ko" ? `${count}명 선수 등록 완료!` : `${count} players registered!`);
              } else {
                alert(lang === "ko" ? "모두 이미 등록된 선수입니다" : "All already registered");
              }
            }}>{lang === "ko" ? "전체 선수 등록" : "Register All"}</Btn>
          )}
        </div>
        {confirmed.length === 0 ? (
          <p style={{ color: colors.gray400, fontSize: 14 }}>-</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {confirmed.map((r, i) => (
              <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: i % 2 === 0 ? colors.gray50 : colors.white, borderRadius: 8 }}>
                <span style={{ width: 28, fontWeight: 700, color: colors.gray400, fontSize: 13, alignSelf: "flex-start", marginTop: 2 }}>{i + 1}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: colors.gray800 }}>{r.teamName || r.playerName}</div>
                  {isAdmin && (
                    <div style={{ fontSize: 12, color: colors.gray500, marginTop: 2, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
                      {editingReg?.regId === r.id && editingReg?.field === "playerName" ? (
                        <input
                          autoFocus
                          defaultValue={r.playerName}
                          onBlur={(e) => saveRegName(r.id, "playerName", e.target.value)}
                          onKeyDown={(e) => { if (e.key === "Enter") saveRegName(r.id, "playerName", e.target.value); if (e.key === "Escape") setEditingReg(null); }}
                          style={{ fontSize: 12, padding: "2px 6px", borderRadius: 4, border: `1px solid ${colors.primary}`, width: 80 }}
                        />
                      ) : (
                        <span onClick={() => setEditingReg({ regId: r.id, field: "playerName" })} style={{ cursor: "pointer", borderBottom: `1px dashed ${colors.gray300}` }}>{r.playerName}</span>
                      )}
                      {r.playerPhone && <span>{r.playerPhone}</span>}
                      {onAddPlayer && !isRegisteredPlayer(r.playerName) && (
                        <button onClick={(e) => { e.stopPropagation(); registerOnePlayer(r.playerName, r.playerGender, r.playerPhone); }}
                          style={{ padding: "1px 6px", borderRadius: 6, border: `1px solid ${colors.primary}`, background: colors.primaryLight, color: colors.primary, fontSize: 10, fontWeight: 700, cursor: "pointer" }}>
                          +{lang === "ko" ? "선수" : "Reg"}
                        </button>
                      )}
                      {onAddPlayer && isRegisteredPlayer(r.playerName) && (
                        <span style={{ fontSize: 10, color: colors.success, fontWeight: 600 }}>{"✓"}</span>
                      )}
                      {r.partnerName && (
                        <>
                          <span style={{ color: colors.gray300 }}>·</span>
                          {editingReg?.regId === r.id && editingReg?.field === "partnerName" ? (
                            <input
                              autoFocus
                              defaultValue={r.partnerName}
                              onBlur={(e) => saveRegName(r.id, "partnerName", e.target.value)}
                              onKeyDown={(e) => { if (e.key === "Enter") saveRegName(r.id, "partnerName", e.target.value); if (e.key === "Escape") setEditingReg(null); }}
                              style={{ fontSize: 12, padding: "2px 6px", borderRadius: 4, border: `1px solid ${colors.primary}`, width: 80 }}
                            />
                          ) : (
                            <span onClick={() => setEditingReg({ regId: r.id, field: "partnerName" })} style={{ cursor: "pointer", borderBottom: `1px dashed ${colors.gray300}` }}>{r.partnerName}</span>
                          )}
                          {r.partnerPhone && <span>{r.partnerPhone}</span>}
                          {onAddPlayer && !isRegisteredPlayer(r.partnerName) && (
                            <button onClick={(e) => { e.stopPropagation(); registerOnePlayer(r.partnerName, r.partnerGender, r.partnerPhone); }}
                              style={{ padding: "1px 6px", borderRadius: 6, border: `1px solid ${colors.primary}`, background: colors.primaryLight, color: colors.primary, fontSize: 10, fontWeight: 700, cursor: "pointer" }}>
                              +{lang === "ko" ? "선수" : "Reg"}
                            </button>
                          )}
                          {onAddPlayer && isRegisteredPlayer(r.partnerName) && (
                            <span style={{ fontSize: 10, color: colors.success, fontWeight: 600 }}>{"✓"}</span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
                {r.seed && <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700, background: colors.warningLight, color: colors.warning }}>S{r.seed}</span>}
                {isAdmin && tournament.stage === "registration" && (
                  <select value={r.seed || ""} onChange={(e) => setSeed(r.id, e.target.value ? parseInt(e.target.value) : null)}
                    style={{ width: 56, padding: "4px", borderRadius: 6, border: `1px solid ${colors.gray300}`, fontSize: 12, textAlign: "center", flexShrink: 0 }}>
                    <option value="">{T("seed")}</option>
                    {Array.from({ length: confirmed.length }, (_, k) => k + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                )}
                {isAdmin && (
                  <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
                    <Btn size="sm" variant="outline" onClick={() => moveParticipant(i, "up")} disabled={i === 0}>{T("moveUp")}</Btn>
                    <Btn size="sm" variant="outline" onClick={() => moveParticipant(i, "down")} disabled={i === confirmed.length - 1}>{T("moveDown")}</Btn>
                    <Btn size="sm" variant="danger" onClick={() => removeParticipant(r.id)}>{T("removeParticipant")}</Btn>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

// ============================================================
// BRACKET TAB
// ============================================================
function BracketTab({ tournament, isAdmin, onUpdateTournament, onAdvanceToKnockout, onGroupDraw, onSaveManualGroups, needsGroupDraw, onShowToast, T, lang }) {
  const [scoreModal, setScoreModal] = useState(null);
  const [manualMode, setManualMode] = useState(false);
  const [groupAssign, setGroupAssign] = useState({});
  const [editingKnockout, setEditingKnockout] = useState(false);
  const [knockoutEdit, setKnockoutEdit] = useState(null); // { roundIdx, matches: [{id, home, away}] }

  const groups = tournament.groups || null;
  const knockoutBracket = tournament.knockoutBracket || null;
  const americanoData = tournament.americanoData || null;

  const getTeamName = (teamId) => {
    if (!teamId) return "TBD";
    const reg = tournament.registrations?.find((r) => r.id === teamId);
    if (reg) return reg.teamName || reg.playerName;
    if (americanoData?.players) {
      const p = americanoData.players.find((p) => p.id === teamId);
      if (p) return p.name;
    }
    if (groups) {
      for (const g of groups) {
        const t = g.teams.find((t) => t.id === teamId);
        if (t) return t.name;
      }
    }
    return "TBD";
  };

  // Save helper — update top-level tournament data
  const updateData = (updates) => {
    onUpdateTournament(tournament.id, updates);
  };

  // Start editing knockout matchups
  const startKnockoutEdit = () => {
    if (!knockoutBracket) return;
    const firstRound = knockoutBracket.rounds[0];
    setKnockoutEdit({
      roundIdx: 0,
      matches: firstRound.map((m) => ({ id: m.id, home: m.home, away: m.away })),
    });
    setEditingKnockout(true);
  };

  // Save edited knockout matchups
  const saveKnockoutEdit = () => {
    if (!knockoutEdit) return;
    const bracket = { ...knockoutBracket };
    bracket.rounds = bracket.rounds.map((round, ri) =>
      ri === knockoutEdit.roundIdx
        ? round.map((m) => {
            const edit = knockoutEdit.matches.find((e) => e.id === m.id);
            return edit ? { ...m, home: edit.home, away: edit.away } : m;
          })
        : round
    );
    updateData({ knockoutBracket: bracket });
    setEditingKnockout(false);
    setKnockoutEdit(null);
  };

  // Update a team in knockout edit
  const setKnockoutMatchTeam = (matchId, side, teamId) => {
    setKnockoutEdit((prev) => ({
      ...prev,
      matches: prev.matches.map((m) => m.id === matchId ? { ...m, [side]: teamId } : m),
    }));
  };

  const saveScore = (groupIdx, roundIdx, matchId, homeScore, awayScore, setScores, extra) => {
    const isScheduleOnly = extra?.completed === false;
    const newGroups = [...groups];
    const group = { ...newGroups[groupIdx] };
    group.rounds = group.rounds.map((round, ri) =>
      ri === roundIdx
        ? round.map((m) => m.id === matchId ? {
            ...m,
            ...(isScheduleOnly ? {} : { homeScore: parseInt(homeScore), awayScore: parseInt(awayScore), completed: true }),
            ...(extra || {}),
          } : m)
        : round
    );
    newGroups[groupIdx] = group;
    updateData({ groups: newGroups });
    setScoreModal(null);
  };

  const saveKnockoutScore = (roundIdx, matchId, homeScore, awayScore, setScores, extra) => {
    const isScheduleOnly = extra?.completed === false;
    const bracket = { ...knockoutBracket };
    bracket.rounds = bracket.rounds.map((round, ri) =>
      ri === roundIdx
        ? round.map((m) => (m.id === matchId ? {
            ...m,
            ...(isScheduleOnly ? {} : { homeScore: parseInt(homeScore), awayScore: parseInt(awayScore), setScores: setScores || null, completed: true }),
            ...(extra || {}),
          } : m))
        : round
    );
    // Auto-complete if this was the final and no 3rd place match pending
    const lastRd = bracket.rounds[bracket.rounds.length - 1];
    const lastRdUpdated = lastRd.map((m2) => m2.id === matchId ? { ...m2, homeScore: parseInt(homeScore), awayScore: parseInt(awayScore), completed: true } : m2);
    if (lastRdUpdated.length === 1 && lastRdUpdated[0].completed && (!bracket.thirdPlaceMatch || bracket.thirdPlaceMatch.completed)) {
      updateData({ knockoutBracket: bracket, stage: "completed" });
    } else {
      updateData({ knockoutBracket: bracket });
    }
    setScoreModal(null);
  };

  const advanceKnockout = () => {
    const bracket = { ...knockoutBracket };
    const currentRound = bracket.rounds[bracket.rounds.length - 1];
    const winners = currentRound.filter((m) => m.completed).map((m) => (m.homeScore > m.awayScore ? m.home : m.away));
    const losers = currentRound.filter((m) => m.completed).map((m) => (m.homeScore > m.awayScore ? m.away : m.home));

    if (winners.length < 2) {
      // Only mark completed if no pending 3rd place match
      if (!bracket.thirdPlaceMatch || bracket.thirdPlaceMatch.completed) {
        onUpdateTournament(tournament.id, { stage: "completed" });
      }
      return;
    }
    const roundName = winners.length <= 2 ? T("final") : winners.length <= 4 ? T("semiFinals") : T("quarterFinals");
    const newRound = generateKnockoutBracket(winners, roundName);
    bracket.rounds = [...bracket.rounds, newRound];
    bracket.currentRound = bracket.rounds.length - 1;

    // If this is the final (2 winners from semis), create 3rd place match
    if (winners.length === 2 && tournament.thirdPlaceEnabled !== false && losers.length === 2) {
      bracket.thirdPlaceMatch = {
        id: generateId(),
        home: losers[0],
        away: losers[1],
        homeScore: null,
        awayScore: null,
        completed: false,
        round: T("thirdPlace"),
        court: null,
        matchTime: null,
      };
    }

    updateData({ knockoutBracket: bracket });
  };

  const saveThirdPlaceScore = (homeScore, awayScore, setScores, extra) => {
    const bracket = { ...knockoutBracket };
    bracket.thirdPlaceMatch = {
      ...bracket.thirdPlaceMatch,
      homeScore: parseInt(homeScore),
      awayScore: parseInt(awayScore),
      setScores: setScores || null,
      completed: true,
      ...(extra || {}),
    };
    // Check if everything is done (final + 3rd place)
    const finalRound = bracket.rounds[bracket.rounds.length - 1];
    const finalDone = finalRound && finalRound.every((m) => m.completed) && finalRound.length === 1;
    const updates = { knockoutBracket: bracket };
    if (finalDone) {
      updates.stage = "completed";
    }
    updateData(updates);
    setScoreModal(null);
  };

  // === AMERICANO SCORE / ROUND / RESET (그룹 + 플랫 모두 지원) ===
  const saveAmericanoScore = (roundIdx, matchId, team1Score, team2Score, groupIdx) => {
    const data = { ...americanoData };
    if (data.useGroups && groupIdx != null) {
      const phase = data.phase === "final" ? "finalGroups" : "groups";
      const gArr = [...data[phase]];
      const g = { ...gArr[groupIdx] };
      g.rounds = g.rounds.map((round, ri) =>
        ri === roundIdx ? round.map((m) => m.id === matchId ? { ...m, team1Score: parseInt(team1Score), team2Score: parseInt(team2Score), completed: true } : m) : round
      );
      gArr[groupIdx] = g;
      data[phase] = gArr;
    } else {
      data.rounds = data.rounds.map((round, ri) =>
        ri === roundIdx ? round.map((m) => m.id === matchId ? { ...m, team1Score: parseInt(team1Score), team2Score: parseInt(team2Score), completed: true } : m) : round
      );
    }
    updateData({ americanoData: data });
    setScoreModal(null);
  };

  const addNextRound = (groupIdx) => {
    const data = { ...americanoData };
    const isMexicano = tournament.americanoType === "mexicano";
    if (data.useGroups && groupIdx != null) {
      const phase = data.phase === "final" ? "finalGroups" : "groups";
      const gArr = [...data[phase]];
      const g = { ...gArr[groupIdx] };
      const nextRound = generateGroupNextRound(g, isMexicano);
      g.rounds = [...g.rounds, nextRound];
      gArr[groupIdx] = g;
      data[phase] = gArr;
    } else {
      let nextRound;
      if (isMexicano) {
        nextRound = generateMexicanoNextRound(data.players, data.rounds, data.byeTracker);
      } else {
        nextRound = generateAmericanoNextRound(data.players, data.rounds);
      }
      data.rounds = [...data.rounds, nextRound];
    }
    updateData({ americanoData: data });
  };

  const finishAmericano = () => {
    onUpdateTournament(tournament.id, { stage: "completed" });
  };

  const doAdvanceToFinal = () => {
    const isMexicano = tournament.americanoType === "mexicano";
    const newData = advanceAmericanoToFinal(americanoData, isMexicano, lang);
    updateData({ americanoData: newData });
  };

  // 대진표 초기화 (americanoData를 null로 → 생성 전 화면으로)
  const clearAmericanoBracket = () => {
    updateData({ americanoData: null });
  };

  // 대진표 생성 (시드 반영)
  const generateAmericanoBracket = () => {
    const confirmedForAmericano = tournament.registrations?.filter((r) => r.status === "confirmed") || [];
    let players = confirmedForAmericano.map((r) => ({ id: r.id, name: r.playerName, seed: r.seed || null }));
    if (players.length < 4) return;
    const isMexicano = tournament.americanoType === "mexicano";
    if (players.length >= 8) {
      // 시드가 있으면 스네이크 시딩으로 그룹 배분
      const hasSeeds = players.some((p) => p.seed);
      updateData({ americanoData: generateAmericanoGroupStage(players, isMexicano, hasSeeds) });
    } else {
      const data = generateAmericanoRounds(players, 1, tournament.americanoType === "team", isMexicano);
      updateData({ americanoData: { ...data, players } });
    }
  };

  // 그룹 렌더링 헬퍼 (조별/결승 공용)
  const renderAmericanoGroup = (group, groupIdx, phase) => {
    const standings = calcAmericanoStandings(group.players, group.rounds);
    const lastRound = group.rounds[group.rounds.length - 1];
    const lastRoundDone = lastRound?.every((m) => m.completed);
    const isGroupPhase = phase === "group";
    const promotionCount = 2; // 상위 2명 승자조

    return (
      <Card key={group.name} style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: colors.primary }}>
          {group.name}{isGroupPhase ? (lang === "ko" ? "조" : " Group") : ""}
        </h3>

        {/* 순위 */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${colors.gray200}` }}>
              <th style={{ padding: "6px 4px", textAlign: "left" }}>#</th>
              <th style={{ padding: "6px 4px", textAlign: "left" }}>{T("playerName")}</th>
              <th style={{ padding: "6px 4px", textAlign: "center" }}>{T("played")}</th>
              <th style={{ padding: "6px 4px", textAlign: "center" }}>{T("points")}</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((s, i) => (
              <tr key={s.player.id} style={{
                borderBottom: `1px solid ${colors.gray100}`,
                background: isGroupPhase && i < promotionCount ? colors.successLight : "transparent",
              }}>
                <td style={{ padding: "6px 4px", fontWeight: 700 }}>{i + 1}</td>
                <td style={{ padding: "6px 4px" }}>{s.player.name}</td>
                <td style={{ padding: "6px 4px", textAlign: "center" }}>{s.played}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", fontWeight: 700 }}>{s.points}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 라운드 */}
        {group.rounds.map((round, ri) => {
          const roundDone = round.every((m) => m.completed);
          return (
            <div key={ri} style={{ marginBottom: 8, padding: 10, background: colors.gray50, borderRadius: 8, opacity: roundDone && ri < group.rounds.length - 1 ? 0.6 : 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: roundDone ? colors.gray400 : colors.primary, marginBottom: 6 }}>
                {T("round")} {ri + 1} {roundDone ? "✓" : ""}
              </div>
              {round.map((m) => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${colors.gray100}` }}>
                  <div style={{ flex: 1, fontSize: 13 }}>
                    <span>{m.team1?.map((pid) => getTeamName(pid)).join(" & ")}</span>
                    <span style={{ color: colors.gray400, margin: "0 6px" }}>vs</span>
                    <span>{m.team2?.map((pid) => getTeamName(pid)).join(" & ")}</span>
                  </div>
                  {m.completed ? (
                    <span style={{ fontWeight: 700, fontSize: 15, flexShrink: 0, marginLeft: 8 }}>{m.team1Score} - {m.team2Score}</span>
                  ) : isAdmin ? (
                    <Btn size="sm" onClick={() => setScoreModal({ type: "americano", roundIdx: ri, match: m, groupIdx })}>{T("enterScore")}</Btn>
                  ) : (
                    <span style={{ color: colors.gray400, fontSize: 12 }}>-</span>
                  )}
                </div>
              ))}
            </div>
          );
        })}

        {/* 관리자: 그룹 내 다음 라운드 */}
        {isAdmin && tournament.stage === "ongoing" && (
          <div style={{ marginTop: 8 }}>
            <Btn size="sm" onClick={() => addNextRound(groupIdx)} disabled={!lastRoundDone}>
              <Icon name="plus" size={14} />{lang === "ko" ? "다음 라운드" : "Next Round"}
            </Btn>
          </div>
        )}
      </Card>
    );
  };

  // AMERICANO VIEW: 대진표 미생성 상태
  if (tournament.type === "americano" && !americanoData) {
    const confirmedRegsForDraw = tournament.registrations?.filter((r) => r.status === "confirmed") || [];
    const confirmedCount = confirmedRegsForDraw.length;
    const hasSeeds = confirmedRegsForDraw.some((r) => r.seed);

    const setAmericanoSeed = (regId, seedVal) => {
      const newRegs = (tournament.registrations || []).map((r) => r.id === regId ? { ...r, seed: seedVal ? parseInt(seedVal) : null } : r);
      updateData({ registrations: newRegs });
    };

    return (
      <div style={{ padding: "20px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.gray800, marginBottom: 8 }}>
            {lang === "ko" ? "대진표를 생성해주세요" : "Generate the bracket"}
          </h3>
          <p style={{ fontSize: 14, color: colors.gray500 }}>
            {lang === "ko" ? `확정 참가자: ${confirmedCount}명` : `Confirmed: ${confirmedCount} players`}
            {confirmedCount >= 8 && (lang === "ko" ? ` → ${Math.floor(confirmedCount / 4)}개 조` : ` → ${Math.floor(confirmedCount / 4)} groups`)}
          </p>
        </div>

        {/* 시드 배정 */}
        {isAdmin && confirmedCount >= 4 && (
          <Card style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: colors.gray600, marginBottom: 10 }}>
              {lang === "ko" ? "시드 배정 (선택사항)" : "Seed Assignment (optional)"}
            </h4>
            <p style={{ fontSize: 12, color: colors.gray400, marginBottom: 12 }}>
              {lang === "ko" ? "시드를 배정하면 스네이크 시딩으로 조가 균등하게 배분됩니다." : "Seeds distribute players evenly across groups via snake seeding."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {confirmedRegsForDraw.map((r, i) => (
                <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", background: i % 2 === 0 ? colors.gray50 : "transparent", borderRadius: 6 }}>
                  <select
                    value={r.seed || ""}
                    onChange={(e) => setAmericanoSeed(r.id, e.target.value)}
                    style={{ width: 52, padding: "4px", borderRadius: 6, border: `1px solid ${colors.gray300}`, fontSize: 12, textAlign: "center" }}
                  >
                    <option value="">-</option>
                    {Array.from({ length: confirmedCount }, (_, k) => k + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.gray800 }}>{r.playerName}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {isAdmin && tournament.stage === "ongoing" && (
          <div style={{ textAlign: "center" }}>
            <Btn onClick={generateAmericanoBracket} disabled={confirmedCount < 4}>
              {lang === "ko" ? "대진표 생성" : "Generate Bracket"}
              {hasSeeds && (lang === "ko" ? " (시드 적용)" : " (seeded)")}
            </Btn>
          </div>
        )}
        {confirmedCount < 4 && (
          <p style={{ fontSize: 12, color: colors.warning, textAlign: "center", marginTop: 8 }}>
            {lang === "ko" ? "최소 4명 이상 필요합니다" : "Minimum 4 players required"}
          </p>
        )}
      </div>
    );
  }

  // AMERICANO VIEW: 대진표 생성 완료
  if (tournament.type === "americano" && americanoData) {
    // 그룹 스테이지 방식
    if (americanoData.useGroups) {
      const phase = americanoData.phase || "group";
      const activeGroups = phase === "final" ? (americanoData.finalGroups || []) : (americanoData.groups || []);
      const allGroupsDone = activeGroups.every(g => g.rounds.length > 0 && g.rounds.every(r => r.every(m => m.completed)));

      return (
        <div>
          {/* 페이즈 표시 + 관리자 버튼 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <Badge type={phase === "final" ? "warning" : "info"}>
              {phase === "final" ? (lang === "ko" ? "결승 라운드" : "Final Round") : (lang === "ko" ? "조별 리그" : "Group Stage")}
            </Badge>
            {isAdmin && tournament.stage === "ongoing" && (
              <div style={{ display: "flex", gap: 6 }}>
                <Btn size="sm" variant="outline" onClick={generateAmericanoBracket}>
                  {lang === "ko" ? "대진표 재설정" : "Reset Bracket"}
                </Btn>
                <Btn size="sm" variant="danger" onClick={clearAmericanoBracket}>
                  {lang === "ko" ? "대진표 초기화" : "Clear Bracket"}
                </Btn>
              </div>
            )}
          </div>

          {/* 그룹들 */}
          {activeGroups.map((g, gi) => renderAmericanoGroup(g, gi, phase))}

          {/* 관리자: 단계 전환 / 종료 */}
          {isAdmin && tournament.stage === "ongoing" && (
            <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "center" }}>
              {phase === "group" && (
                <Btn onClick={doAdvanceToFinal} disabled={!allGroupsDone}>
                  {lang === "ko" ? "결승 라운드로 →" : "Advance to Finals →"}
                </Btn>
              )}
              <Btn variant="danger" onClick={finishAmericano}>
                {lang === "ko" ? "대회 종료" : "End Tournament"}
              </Btn>
            </div>
          )}

          {scoreModal?.type === "americano" && (
            <ScoreModal
              match={scoreModal.match}
              homeName={scoreModal.match.team1?.map((pid) => getTeamName(pid)).join(" & ")}
              awayName={scoreModal.match.team2?.map((pid) => getTeamName(pid)).join(" & ")}
              isAmericano
              onSave={(s1, s2) => saveAmericanoScore(scoreModal.roundIdx, scoreModal.match.id, s1, s2, scoreModal.groupIdx)}
              onClose={() => setScoreModal(null)}
              T={T}
            />
          )}
        </div>
      );
    }

    // 기존 플랫 방식 (7명 이하 또는 레거시)
    const { rounds, players } = americanoData;
    const standings = calcAmericanoStandings(players, rounds);
    const lastRound = rounds[rounds.length - 1];
    const lastRoundDone = lastRound?.every((m) => m.completed);

    return (
      <div>
        {isAdmin && tournament.stage === "ongoing" && (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginBottom: 12 }}>
            <Btn size="sm" variant="outline" onClick={generateAmericanoBracket}>
              {lang === "ko" ? "대진표 재설정" : "Reset Bracket"}
            </Btn>
            <Btn size="sm" variant="danger" onClick={clearAmericanoBracket}>
              {lang === "ko" ? "대진표 초기화" : "Clear Bracket"}
            </Btn>
          </div>
        )}

        {/* 순위 */}
        <Card style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{T("standings")}</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${colors.gray200}` }}>
                <th style={{ padding: "8px 4px", textAlign: "left" }}>#</th>
                <th style={{ padding: "8px 4px", textAlign: "left" }}>{T("playerName")}</th>
                <th style={{ padding: "8px 4px", textAlign: "center" }}>{T("played")}</th>
                <th style={{ padding: "8px 4px", textAlign: "center" }}>{T("points")}</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((s, i) => (
                <tr key={s.player.id} style={{ borderBottom: `1px solid ${colors.gray100}`, background: i < 3 ? colors.successLight : "transparent" }}>
                  <td style={{ padding: "8px 4px", fontWeight: 700 }}>{i + 1}</td>
                  <td style={{ padding: "8px 4px" }}>{s.player.name}</td>
                  <td style={{ padding: "8px 4px", textAlign: "center" }}>{s.played}</td>
                  <td style={{ padding: "8px 4px", textAlign: "center", fontWeight: 700 }}>{s.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* 라운드 */}
        {rounds.map((round, ri) => {
          const roundDone = round.every((m) => m.completed);
          return (
            <Card key={ri} style={{ marginBottom: 12, opacity: roundDone && ri < rounds.length - 1 ? 0.6 : 1 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: roundDone ? colors.gray400 : colors.primary }}>
                {T("round")} {ri + 1} {roundDone ? "✓" : ""}
              </h4>
              {round.map((m) => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${colors.gray100}` }}>
                  <div style={{ flex: 1, fontSize: 13 }}>
                    <span>{m.team1?.map((pid) => getTeamName(pid)).join(" & ")}</span>
                    <span style={{ color: colors.gray400, margin: "0 6px" }}>vs</span>
                    <span>{m.team2?.map((pid) => getTeamName(pid)).join(" & ")}</span>
                  </div>
                  {m.completed ? (
                    <span style={{ fontWeight: 700, fontSize: 15, flexShrink: 0, marginLeft: 8 }}>{m.team1Score} - {m.team2Score}</span>
                  ) : isAdmin ? (
                    <Btn size="sm" onClick={() => setScoreModal({ type: "americano", roundIdx: ri, match: m })}>{T("enterScore")}</Btn>
                  ) : (
                    <span style={{ color: colors.gray400, fontSize: 12 }}>-</span>
                  )}
                </div>
              ))}
            </Card>
          );
        })}

        {isAdmin && tournament.stage === "ongoing" && (
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <Btn onClick={() => addNextRound()} disabled={!lastRoundDone}>
              <Icon name="plus" size={14} />{lang === "ko" ? "다음 라운드 생성" : "Next Round"}
            </Btn>
            <Btn variant="danger" onClick={finishAmericano}>
              {lang === "ko" ? "대회 종료" : "End Tournament"}
            </Btn>
          </div>
        )}

        {scoreModal?.type === "americano" && (
          <ScoreModal
            match={scoreModal.match}
            homeName={scoreModal.match.team1?.map((pid) => getTeamName(pid)).join(" & ")}
            awayName={scoreModal.match.team2?.map((pid) => getTeamName(pid)).join(" & ")}
            isAmericano
            onSave={(s1, s2) => saveAmericanoScore(scoreModal.roundIdx, scoreModal.match.id, s1, s2)}
            onClose={() => setScoreModal(null)}
            T={T}
          />
        )}
      </div>
    );
  }

  // Check if all RR matches are done
  const allRRDone = groups?.every((g) => g.rounds.every((round) => round.every((m) => m.completed)));
  // Check if any RR match has been played (to prevent re-draw after scores entered)
  const anyRRPlayed = groups?.some((g) => g.rounds.some((round) => round.some((m) => m.completed)));
  // Can re-draw: groups exist but no scores entered yet, and multiple groups
  const canRedraw = groups && groups.length >= 2 && !anyRRPlayed && !knockoutBracket;

  // Confirmed registrations for group draw
  const confirmedForDraw = tournament.registrations?.filter((r) => r.status === "confirmed") || [];

  // Handle manual group assignment change
  const handleAssignChange = (teamId, group) => {
    setGroupAssign((prev) => ({ ...prev, [teamId]: group }));
  };

  // Check if all teams are assigned (for manual mode)
  const maxT = parseInt(tournament.maxTeams);
  const numGroups = tournament.type === "league" ? 1 : 2;
  const allAssigned = tournament.type === "league" || confirmedForDraw.every((r) => groupAssign[r.id] === "A" || groupAssign[r.id] === "B");

  return (
    <div>
      {/* Group Draw UI — shown when groups not yet generated */}
      {needsGroupDraw && !groups && tournament.stage === "ongoing" && isAdmin && (
        <Card style={{ marginBottom: 24, background: colors.primaryLight, border: `2px dashed ${colors.primary}` }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.primary, marginBottom: 16 }}>{T("drawGroups")}</h3>

          {!manualMode ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ fontSize: 14, color: colors.gray600, margin: 0 }}>
                {lang === "ko" ? `${confirmedForDraw.length}개 팀이 준비되었습니다. 조 추첨을 하거나 직접 배정할 수 있습니다.` : `${confirmedForDraw.length} teams ready. You can auto-draw groups or assign manually.`}
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <Btn variant="success" onClick={onGroupDraw}>{T("generateGroupsDraw")}</Btn>
                <Btn variant="outline" onClick={() => {
                  setManualMode(true);
                  // Initialize assignments
                  const init = {};
                  confirmedForDraw.forEach((r) => { init[r.id] = ""; });
                  setGroupAssign(init);
                }}>{T("manualGroupAssign")}</Btn>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: 14, color: colors.gray600, margin: "0 0 12px 0" }}>
                {lang === "ko" ? "각 팀을 A조 또는 B조에 배정하세요." : "Assign each team to Group A or Group B."}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                {confirmedForDraw.map((r) => (
                  <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: colors.white, borderRadius: 8 }}>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>{r.teamName || r.playerName}</span>
                    {["A", "B"].map((g) => (
                      <button key={g} onClick={() => handleAssignChange(r.id, g)} style={{
                        padding: "6px 16px", borderRadius: 8, border: `2px solid ${groupAssign[r.id] === g ? colors.primary : colors.gray300}`,
                        background: groupAssign[r.id] === g ? colors.primary : colors.white,
                        color: groupAssign[r.id] === g ? colors.white : colors.gray600,
                        fontWeight: 700, fontSize: 13, cursor: "pointer",
                      }}>{g}{lang === "ko" ? "조" : ""}</button>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Btn variant="success" disabled={!allAssigned} onClick={() => {
                  onSaveManualGroups(groupAssign);
                  setManualMode(false);
                }}>{lang === "ko" ? "조 편성 확정" : "Confirm Groups"}</Btn>
                <Btn variant="outline" onClick={() => setManualMode(false)}>{T("cancel")}</Btn>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Non-admin: waiting for group draw */}
      {needsGroupDraw && !groups && tournament.stage === "ongoing" && !isAdmin && (
        <Card style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎱</div>
          <p style={{ color: colors.gray500, fontSize: 15 }}>{lang === "ko" ? "조 추첨 대기 중..." : "Waiting for group draw..."}</p>
        </Card>
      )}

      {/* Round Robin Groups */}
      {groups && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>{T("roundRobin")}</h3>
            <div style={{ display: "flex", gap: 8 }}>
              {isAdmin && canRedraw && (
                <>
                  <Btn size="sm" variant="outline" onClick={onGroupDraw}>{lang === "ko" ? "다시 추첨" : "Re-draw"}</Btn>
                  <Btn size="sm" variant="outline" onClick={() => {
                    setManualMode(true);
                    const init = {};
                    // Pre-fill current assignments
                    groups.forEach((g) => g.teams.forEach((t) => { init[t.id] = g.name; }));
                    setGroupAssign(init);
                  }}>{T("manualGroupAssign")}</Btn>
                </>
              )}
              {isAdmin && allRRDone && !knockoutBracket && tournament.type === "open" && (
                <Btn variant="success" onClick={() => onAdvanceToKnockout(groups, updateData)}>{T("nextStage")} → {T("knockout")}</Btn>
              )}
            </div>
          </div>
          {/* Manual re-assignment UI */}
          {manualMode && canRedraw && (
            <Card style={{ marginBottom: 16, background: colors.primaryLight, border: `2px dashed ${colors.primary}` }}>
              <p style={{ fontSize: 14, color: colors.gray600, margin: "0 0 12px 0", fontWeight: 600 }}>
                {lang === "ko" ? "각 팀을 A조 또는 B조에 배정하세요." : "Assign each team to Group A or Group B."}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                {confirmedForDraw.map((r) => (
                  <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: colors.white, borderRadius: 8 }}>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>{r.teamName || r.playerName}</span>
                    {["A", "B"].map((g) => (
                      <button key={g} onClick={() => handleAssignChange(r.id, g)} style={{
                        padding: "6px 16px", borderRadius: 8, border: `2px solid ${groupAssign[r.id] === g ? colors.primary : colors.gray300}`,
                        background: groupAssign[r.id] === g ? colors.primary : colors.white,
                        color: groupAssign[r.id] === g ? colors.white : colors.gray600,
                        fontWeight: 700, fontSize: 13, cursor: "pointer",
                      }}>{g}{lang === "ko" ? "조" : ""}</button>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Btn variant="success" disabled={!allAssigned} onClick={() => {
                  onSaveManualGroups(groupAssign);
                  setManualMode(false);
                }}>{lang === "ko" ? "조 편성 확정" : "Confirm Groups"}</Btn>
                <Btn variant="outline" onClick={() => setManualMode(false)}>{T("cancel")}</Btn>
              </div>
            </Card>
          )}
          {groups.map((group, gi) => {
            const standings = calcStandings(group.teams, group.rounds);
            return (
              <div key={gi} style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: colors.primary, marginBottom: 8 }}>{group.name}{lang === "ko" ? "조" : " Group"}</h4>
                {/* Standings table */}
                <Card style={{ marginBottom: 12 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: `2px solid ${colors.gray200}` }}>
                        <th style={{ padding: "8px 4px", textAlign: "left" }}>#</th>
                        <th style={{ padding: "8px 4px", textAlign: "left" }}>{T("teamName")}</th>
                        <th style={{ padding: "8px 4px", textAlign: "center" }}>{T("played")}</th>
                        <th style={{ padding: "8px 4px", textAlign: "center" }}>{T("wins")}</th>
                        <th style={{ padding: "8px 4px", textAlign: "center" }}>{T("draws")}</th>
                        <th style={{ padding: "8px 4px", textAlign: "center" }}>{T("losses")}</th>
                        <th style={{ padding: "8px 4px", textAlign: "center" }}>{lang === "ko" ? "이긴 게임" : "GW"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((s, i) => (
                        <tr key={s.team.id} style={{ borderBottom: `1px solid ${colors.gray100}` }}>
                          <td style={{ padding: "8px 4px", fontWeight: 700 }}>{i + 1}</td>
                          <td style={{ padding: "8px 4px", fontWeight: 600 }}>{s.team.name}</td>
                          <td style={{ padding: "8px 4px", textAlign: "center" }}>{s.played}</td>
                          <td style={{ padding: "8px 4px", textAlign: "center" }}>{s.wins}</td>
                          <td style={{ padding: "8px 4px", textAlign: "center" }}>{s.draws}</td>
                          <td style={{ padding: "8px 4px", textAlign: "center" }}>{s.losses}</td>
                          <td style={{ padding: "8px 4px", textAlign: "center", fontWeight: 700, color: colors.primary }}>{s.gamesWon}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
                {/* Matches */}
                {(() => {
                  let matchNum = 0;
                  return group.rounds.map((round, ri) => (
                    round.map((m) => {
                      matchNum++;
                      return (
                        <div key={m.id} style={{ display: "flex", alignItems: "center", padding: "6px 12px", background: colors.gray50, borderRadius: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 11, fontWeight: 600, color: colors.gray400, minWidth: 50, flexShrink: 0 }}>{T("match")} {matchNum}</span>
                          <span style={{ flex: 1, textAlign: "right", fontWeight: 500, fontSize: 13 }}>{getTeamName(m.home)}</span>
                          {m.completed ? (
                            <span style={{ padding: "0 16px", fontWeight: 700, fontSize: 15, cursor: isAdmin ? "pointer" : "default" }}
                              onClick={() => isAdmin && setScoreModal({ type: "rr", groupIdx: gi, roundIdx: ri, match: m })}
                            >{m.homeScore} - {m.awayScore}</span>
                          ) : isAdmin ? (
                            <span style={{ padding: "0 8px" }}>
                              <Btn size="sm" variant="outline" onClick={() => setScoreModal({ type: "rr", groupIdx: gi, roundIdx: ri, match: m })}>{T("enterScore")}</Btn>
                            </span>
                          ) : (
                            <span style={{ padding: "0 16px", color: colors.gray400 }}>vs</span>
                          )}
                          <span style={{ flex: 1, fontWeight: 500, fontSize: 13 }}>{getTeamName(m.away)}</span>
                        </div>
                      );
                    })
                  ));
                })()}
              </div>
            );
          })}
        </div>
      )}

      {/* Knockout Bracket — Tree Visualization */}
      {knockoutBracket && (() => {
        const fmts = tournament.knockoutFormats || {};
        const getRoundFormat = (roundLabel) => {
          if (roundLabel === T("quarterFinals")) return fmts.quarterFinals;
          if (roundLabel === T("semiFinals")) return fmts.semiFinals;
          if (roundLabel === T("final")) return fmts.final;
          return "";
        };

        // Advance button logic
        const lastRound = knockoutBracket.rounds[knockoutBracket.rounds.length - 1];
        const lastAllDone = lastRound.every((m) => m.completed);
        const lastWinners = lastRound.filter((m) => m.completed).map((m) => (m.homeScore > m.awayScore ? m.home : m.away));
        const isFinalDone = lastAllDone && lastWinners.length === 1;
        const thirdMatch = knockoutBracket.thirdPlaceMatch;
        const allKnockoutDone = isFinalDone && (!thirdMatch || thirdMatch.completed);

        // Helper to render a single match card
        const MatchCard = ({ m, ri, roundFormat, isThirdPlace }) => (
          <div style={{
            border: `1px solid ${colors.gray200}`, borderRadius: 10, overflow: "hidden",
            background: colors.white, minWidth: 220, boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}>
            {/* Home team row */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "8px 12px", borderBottom: `1px solid ${colors.gray100}`,
              background: m.completed && m.homeScore > m.awayScore ? colors.successLight : "transparent",
              fontWeight: m.completed && m.homeScore > m.awayScore ? 700 : 400,
            }}>
              <span style={{ fontSize: 13, color: colors.gray800 }}>{getTeamName(m.home)}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {m.setScores ? m.setScores.map((s, si) => (
                  <span key={si} style={{ fontSize: 12, fontWeight: s.h > s.a ? 700 : 400, color: s.h > s.a ? colors.primary : colors.gray400, minWidth: 14, textAlign: "center" }}>{s.h}</span>
                )) : (
                  <span style={{ fontWeight: 700, fontSize: 16 }}>{m.completed ? m.homeScore : ""}</span>
                )}
              </div>
            </div>
            {/* Away team row */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "8px 12px",
              background: m.completed && m.awayScore > m.homeScore ? colors.successLight : "transparent",
              fontWeight: m.completed && m.awayScore > m.homeScore ? 700 : 400,
            }}>
              <span style={{ fontSize: 13, color: colors.gray800 }}>{getTeamName(m.away)}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {m.setScores ? m.setScores.map((s, si) => (
                  <span key={si} style={{ fontSize: 12, fontWeight: s.a > s.h ? 700 : 400, color: s.a > s.h ? colors.primary : colors.gray400, minWidth: 14, textAlign: "center" }}>{s.a}</span>
                )) : (
                  <span style={{ fontWeight: 700, fontSize: 16 }}>{m.completed ? m.awayScore : ""}</span>
                )}
              </div>
            </div>
            {/* Court/time info */}
            {(m.court || m.matchTime) && (
              <div style={{ padding: "4px 12px", borderTop: `1px solid ${colors.gray100}`, fontSize: 11, color: colors.gray400 }}>
                {m.court && <span>{m.court}</span>}
                {m.court && m.matchTime && <span> | </span>}
                {m.matchTime && <span>{m.matchTime}</span>}
              </div>
            )}
            {/* Admin actions */}
            {isAdmin && m.home && m.away && (
              <div style={{ padding: "6px 12px", borderTop: `1px solid ${colors.gray100}` }}>
                {m.completed ? (
                  <Btn size="sm" variant="outline" style={{ width: "100%" }} onClick={() => {
                    if (isThirdPlace) {
                      setScoreModal({ type: "thirdPlace", match: m, format: getRoundFormat(T("semiFinals")) });
                    } else {
                      setScoreModal({ type: "knockout", roundIdx: ri, match: m, format: roundFormat });
                    }
                  }}>{T("edit")}</Btn>
                ) : (
                  <Btn size="sm" style={{ width: "100%" }} onClick={() => {
                    if (isThirdPlace) {
                      setScoreModal({ type: "thirdPlace", match: m, format: getRoundFormat(T("semiFinals")) });
                    } else {
                      setScoreModal({ type: "knockout", roundIdx: ri, match: m, format: roundFormat });
                    }
                  }}>{T("enterScore")}</Btn>
                )}
              </div>
            )}
          </div>
        );

        // Check if first round has no completed matches (can edit matchups)
        const firstRound = knockoutBracket.rounds[0];
        const firstRoundNoScores = firstRound.every((m) => !m.completed);
        // All knockout team IDs for dropdown
        const allKnockoutTeamIds = knockoutBracket.teams?.map((t) => t.id) || firstRound.flatMap((m) => [m.home, m.away]).filter(Boolean);

        return (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{T("knockout")}</h3>
              <div style={{ display: "flex", gap: 8 }}>
                {isAdmin && firstRoundNoScores && !editingKnockout && (
                  <Btn size="sm" variant="outline" onClick={startKnockoutEdit}>{lang === "ko" ? "대진 수정" : "Edit Matchups"}</Btn>
                )}
                {isAdmin && lastAllDone && lastWinners.length >= 2 && (
                  <Btn variant="success" onClick={advanceKnockout}>{T("nextStage")}</Btn>
                )}
                {allKnockoutDone && <Badge type="confirmed">{T("completed")}</Badge>}
              </div>
            </div>

            {/* Knockout matchup edit UI */}
            {editingKnockout && knockoutEdit && (
              <Card style={{ marginBottom: 16, background: colors.primaryLight, border: `2px dashed ${colors.primary}` }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: colors.primary, margin: "0 0 12px 0" }}>
                  {lang === "ko" ? "각 경기의 대진을 수정하세요" : "Edit matchups for each game"}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                  {knockoutEdit.matches.map((m, mi) => (
                    <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: colors.white, borderRadius: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: colors.gray400, minWidth: 60 }}>{lang === "ko" ? `경기 ${mi + 1}` : `Match ${mi + 1}`}</span>
                      <select value={m.home || ""} onChange={(e) => setKnockoutMatchTeam(m.id, "home", e.target.value)}
                        style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 13, fontWeight: 600 }}>
                        <option value="">-</option>
                        {allKnockoutTeamIds.map((tid) => (
                          <option key={tid} value={tid}>{getTeamName(tid)}</option>
                        ))}
                      </select>
                      <span style={{ fontWeight: 700, color: colors.gray400, fontSize: 14 }}>vs</span>
                      <select value={m.away || ""} onChange={(e) => setKnockoutMatchTeam(m.id, "away", e.target.value)}
                        style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 13, fontWeight: 600 }}>
                        <option value="">-</option>
                        {allKnockoutTeamIds.map((tid) => (
                          <option key={tid} value={tid}>{getTeamName(tid)}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <Btn variant="success" onClick={saveKnockoutEdit}>{lang === "ko" ? "대진 확정" : "Confirm Matchups"}</Btn>
                  <Btn variant="outline" onClick={() => { setEditingKnockout(false); setKnockoutEdit(null); }}>{T("cancel")}</Btn>
                </div>
              </Card>
            )}

            {/* Tree layout: rounds as columns */}
            <div style={{ display: "flex", gap: 24, overflowX: "auto", padding: "8px 0" }}>
              {knockoutBracket.rounds.map((round, ri) => {
                const roundLabel = round[0]?.round || `${T("round")} ${ri + 1}`;
                const roundFormat = getRoundFormat(roundLabel);
                const matchGap = ri === 0 ? 12 : 12 + ri * 40;

                return (
                  <div key={ri} style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: matchGap, minWidth: 240 }}>
                    <div style={{ textAlign: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: colors.primary }}>{roundLabel}</span>
                      {roundFormat && <div style={{ fontSize: 11, color: colors.gray400 }}>{T(roundFormat)}</div>}
                    </div>
                    {round.map((m) => (
                      <MatchCard key={m.id} m={m} ri={ri} roundFormat={roundFormat} />
                    ))}
                  </div>
                );
              })}

              {/* Winner display */}
              {isFinalDone && (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 160, alignItems: "center" }}>
                  <div style={{ textAlign: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b" }}>{T("winner")}</span>
                  </div>
                  <div style={{
                    padding: "16px 24px", borderRadius: 12, textAlign: "center",
                    background: "linear-gradient(135deg, #fef3c7, #fde68a)", border: "2px solid #f59e0b",
                    boxShadow: "0 2px 8px rgba(245,158,11,0.2)",
                  }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>{"🏆"}</div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: colors.gray800 }}>{getTeamName(lastWinners[0])}</div>
                  </div>
                </div>
              )}
            </div>

            {/* 3rd Place Match */}
            {thirdMatch && (
              <div style={{ marginTop: 24 }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: colors.warning, marginBottom: 10 }}>{T("thirdPlaceMatch")}</h4>
                <div style={{ maxWidth: 280 }}>
                  <MatchCard m={thirdMatch} ri={-1} roundFormat={getRoundFormat(T("semiFinals"))} isThirdPlace />
                </div>
              </div>
            )}
          </div>
        );
      })()}


      {/* Score Modal */}
      {scoreModal && scoreModal.type !== "americano" && (
        <ScoreModal
          match={scoreModal.match}
          homeName={getTeamName(scoreModal.match.home)}
          awayName={getTeamName(scoreModal.match.away)}
          format={scoreModal.format || null}
          onSave={(s1, s2, setScores, extra) => {
            if (scoreModal.type === "rr") {
              saveScore(scoreModal.groupIdx, scoreModal.roundIdx, scoreModal.match.id, s1, s2, setScores, extra);
            } else if (scoreModal.type === "thirdPlace") {
              saveThirdPlaceScore(s1, s2, setScores, extra);
            } else {
              saveKnockoutScore(scoreModal.roundIdx, scoreModal.match.id, s1, s2, setScores, extra);
            }
          }}
          onClose={() => setScoreModal(null)}
          T={T}
        />
      )}
    </div>
  );
}

// ============================================================
// RANKING PAGE
// ============================================================
function PlayersPage({ players, onAddPlayer, onUpdatePlayer, onDeletePlayer, T, lang }) {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [filterGender, setFilterGender] = useState("all"); // "all" | "male" | "female"
  const [filterLevel, setFilterLevel] = useState("all");
  const [form, setForm] = useState({ name: "", gender: "", phone: "", level: "", birthdate: "", firstName: "", lastName: "" });

  const allLevels = [...new Set(players.map((p) => p.level).filter(Boolean))].sort();

  const filtered = players
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) || (p.phone && p.phone.includes(search))
      || (p.firstName && p.firstName.toLowerCase().includes(search.toLowerCase()))
      || (p.lastName && p.lastName.toLowerCase().includes(search.toLowerCase()))
    )
    .filter((p) => filterGender === "all" || p.gender === filterGender)
    .filter((p) => filterLevel === "all" || p.level === filterLevel)
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

  const openEdit = (p) => {
    setForm({ name: p.name, gender: p.gender, phone: p.phone || "", level: p.level || "", birthdate: p.birthdate || "", firstName: p.firstName || "", lastName: p.lastName || "" });
    setEditingPlayer(p.id);
    setShowForm(true);
  };

  const openAdd = () => {
    setForm({ name: "", gender: "", phone: "", level: "", birthdate: "", firstName: "", lastName: "" });
    setEditingPlayer(null);
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name || !form.gender) return;
    if (editingPlayer) {
      onUpdatePlayer(editingPlayer, form);
    } else {
      onAddPlayer(form);
    }
    setShowForm(false);
    setEditingPlayer(null);
  };

  const levelLabel = (lv) => T(lv) || lv;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray800, margin: 0 }}>{T("playerRegistry")}</h2>
          <p style={{ fontSize: 13, color: colors.gray500, marginTop: 4 }}>{lang === "ko" ? `총 ${players.length}명 등록` : `${players.length} registered`}</p>
        </div>
        <Btn onClick={openAdd}>{T("addPlayer")}</Btn>
      </div>

      {/* Search + Filters */}
      <div style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={T("searchPlayer") + "..."}
          style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1px solid ${colors.gray300}`, fontSize: 14, boxSizing: "border-box" }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {/* Gender filter */}
          {[
            { value: "all", label: lang === "ko" ? "전체" : "All" },
            { value: "male", label: lang === "ko" ? "남" : "M" },
            { value: "female", label: lang === "ko" ? "여" : "F" },
          ].map((opt) => (
            <button key={opt.value} onClick={() => setFilterGender(opt.value)}
              style={{
                padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
                border: filterGender === opt.value ? `2px solid ${colors.primary}` : `1px solid ${colors.gray300}`,
                background: filterGender === opt.value ? colors.primaryLight : colors.white,
                color: filterGender === opt.value ? colors.primary : colors.gray600,
              }}
            >{opt.label}</button>
          ))}
          <span style={{ width: 1, height: 16, background: colors.gray200 }} />
          {/* Level filter */}
          <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}
            style={{ padding: "4px 8px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 12, color: filterLevel === "all" ? colors.gray500 : colors.primary, fontWeight: filterLevel === "all" ? 400 : 600 }}>
            <option value="all">{lang === "ko" ? "레벨 전체" : "All Levels"}</option>
            {allLevels.map((lv) => <option key={lv} value={lv}>{T(lv) || lv}</option>)}
          </select>
          {/* Count */}
          <span style={{ marginLeft: "auto", fontSize: 12, color: colors.gray500, fontWeight: 600 }}>
            {filtered.length}{lang === "ko" ? "명" : " players"}
          </span>
        </div>
      </div>

      {/* Player List */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: colors.gray400 }}>
          <Icon name="user" size={48} />
          <p style={{ fontSize: 16, marginTop: 12 }}>{T("noPlayers")}</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtered.map((p) => (
            <Card key={p.id} style={{ cursor: "pointer" }} onClick={() => openEdit(p)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  background: p.gender === "male" ? "#dbeafe" : p.gender === "female" ? "#fce7f3" : colors.gray100,
                  color: p.gender === "male" ? "#2563eb" : p.gender === "female" ? "#db2777" : colors.gray500,
                  fontWeight: 700, fontSize: 16, flexShrink: 0,
                }}>
                  {p.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: colors.gray800 }}>{p.name}</span>
                    {(p.firstName || p.lastName) && (
                      <span style={{ fontSize: 12, color: colors.gray400 }}>{p.firstName} {p.lastName}</span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: colors.gray400, display: "flex", gap: 8, marginTop: 2 }}>
                    <span>{p.gender === "male" ? (lang === "ko" ? "남" : "M") : (lang === "ko" ? "여" : "F")}</span>
                    {p.phone && <span>{p.phone}</span>}
                    {p.birthdate && <span>{p.birthdate}</span>}
                  </div>
                </div>
                {p.level && (
                  <span style={{ padding: "4px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, background: colors.primaryLight, color: colors.primary }}>
                    {levelLabel(p.level)}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showForm && (
        <Modal onClose={() => { setShowForm(false); setEditingPlayer(null); }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{editingPlayer ? T("editPlayer") : T("addPlayer")}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <FormField label={T("playerName")}>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 14, boxSizing: "border-box" }} />
            </FormField>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <FormField label={T("playerFirstName")}>
                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="Jiwon"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 14, boxSizing: "border-box" }} />
              </FormField>
              <FormField label={T("playerLastName")}>
                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Kim"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 14, boxSizing: "border-box" }} />
              </FormField>
            </div>
            <FormField label={T("playerGender")}>
              <GenderSelect value={form.gender} onChange={(v) => setForm({ ...form, gender: v })} />
            </FormField>
            <FormField label={T("playerPhone")}>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="010-0000-0000"
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 14, boxSizing: "border-box" }} />
            </FormField>
            <FormField label={T("playerLevel")}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {LEVELS.map((lv) => (
                  <button key={lv} onClick={() => setForm({ ...form, level: lv })} style={{
                    padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
                    border: `2px solid ${form.level === lv ? colors.primary : colors.gray200}`,
                    background: form.level === lv ? colors.primaryLight : colors.white,
                    color: form.level === lv ? colors.primary : colors.gray600,
                  }}>{levelLabel(lv)}</button>
                ))}
              </div>
            </FormField>
            <FormField label={T("playerBirthdate")}>
              <input type="date" value={form.birthdate} onChange={(e) => setForm({ ...form, birthdate: e.target.value })}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1px solid ${colors.gray300}`, fontSize: 14, boxSizing: "border-box" }} />
            </FormField>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <Btn variant="success" onClick={handleSave} disabled={!form.name || !form.gender} style={{ flex: 1 }}>{T("save")}</Btn>
            {editingPlayer && (
              <Btn variant="danger" onClick={() => setConfirmDeleteId(editingPlayer)}>{T("delete")}</Btn>
            )}
            <Btn variant="outline" onClick={() => { setShowForm(false); setEditingPlayer(null); }}>{T("cancel")}</Btn>
          </div>
        </Modal>
      )}

      {/* Delete confirmation modal */}
      {confirmDeleteId && (
        <Modal onClose={() => setConfirmDeleteId(null)}>
          <div style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{"⚠️"}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{lang === "ko" ? "정말 삭제하시겠습니까?" : "Delete this player?"}</h3>
            <p style={{ fontSize: 14, color: colors.gray500, marginBottom: 20 }}>{lang === "ko" ? "이 작업은 되돌릴 수 없습니다." : "This action cannot be undone."}</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <Btn variant="danger" onClick={() => { onDeletePlayer(confirmDeleteId); setConfirmDeleteId(null); setShowForm(false); setEditingPlayer(null); }}>{T("delete")}</Btn>
              <Btn variant="outline" onClick={() => setConfirmDeleteId(null)}>{T("cancel")}</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// RANKING PAGE
// ============================================================
function RankingPage({ rankings, tournaments, players, T, lang, onRecalcPoints, isAdmin }) {
  const [tournamentFilter, setTournamentFilter] = useState(null);
  const [genderFilter, setGenderFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [expandedPlayer, setExpandedPlayer] = useState(null);

  const playerRankings = calcPlayerRankings(rankings, {
    tournamentName: tournamentFilter,
    gender: genderFilter,
    level: levelFilter,
  }, players);

  // Collect unique tournament names, levels from ranking entries
  const tournamentOptions = [];
  const tSet = new Set();
  const levelOptions = [];
  const lSet = new Set();
  rankings.forEach((e) => {
    if (e.tournamentName && !tSet.has(e.tournamentName)) {
      tSet.add(e.tournamentName);
      tournamentOptions.push(e.tournamentName);
    }
    if (e.categoryLevel && !lSet.has(e.categoryLevel)) {
      lSet.add(e.categoryLevel);
      levelOptions.push(e.categoryLevel);
    }
  });

  const getResultLabel = (idx) => (RESULT_LABELS[lang] || RESULT_LABELS.en)[idx] || "";

  const getWeeksAgo = (dateStr) => {
    const d = new Date(dateStr);
    const now = new Date();
    return Math.floor((now - d) / (1000 * 60 * 60 * 24 * 7));
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray800, margin: 0 }}>{T("rankingTitle")}</h2>
      </div>
      <p style={{ fontSize: 13, color: colors.gray500, marginBottom: 20 }}>
        {lang === "ko" ? "최근 52주 이내 대회 결과 기반" : "Based on results from the last 52 weeks"}
      </p>

      {/* Point Table Reference */}
      <Card style={{ marginBottom: 20, overflowX: "auto" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: colors.gray600, marginBottom: 12 }}>
          {lang === "ko" ? "포인트 배점표" : "Point Table"}
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 500 }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${colors.gray200}` }}>
              <th style={{ padding: "6px 8px", textAlign: "left" }}>{lang === "ko" ? "등급" : "Grade"}</th>
              <th style={{ padding: "6px 8px", textAlign: "center" }}>W</th>
              <th style={{ padding: "6px 8px", textAlign: "center" }}>F</th>
              <th style={{ padding: "6px 8px", textAlign: "center" }}>SF</th>
              <th style={{ padding: "6px 8px", textAlign: "center" }}>QF</th>
              <th style={{ padding: "6px 8px", textAlign: "center" }}>R16</th>
              <th style={{ padding: "6px 8px", textAlign: "center" }}>R32</th>
            </tr>
          </thead>
          <tbody>
            {TOURNAMENT_GRADES.map((g) => (
              <tr key={g} style={{ borderBottom: `1px solid ${colors.gray100}` }}>
                <td style={{ padding: "6px 8px" }}>
                  <span style={{ padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, color: colors.white, background: GRADE_COLORS[g] }}>
                    {T("grade" + g.charAt(0).toUpperCase() + g.slice(1))}
                  </span>
                </td>
                {POINT_TABLE[g].map((pts, i) => (
                  <td key={i} style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600, color: i === 0 ? colors.primary : colors.gray600 }}>
                    {pts || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {/* Tournament Filter */}
        {tournamentOptions.length > 0 && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: colors.gray500, marginBottom: 6 }}>{lang === "ko" ? "대회" : "Tournament"}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <button onClick={() => setTournamentFilter(null)}
                style={{
                  padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600,
                  border: `1px solid ${!tournamentFilter ? colors.primary : colors.gray300}`,
                  background: !tournamentFilter ? colors.primary : colors.white,
                  color: !tournamentFilter ? colors.white : colors.gray600,
                }}>
                {T("all")}
              </button>
              {tournamentOptions.map((name) => {
                const active = tournamentFilter === name;
                return (
                  <button key={name} onClick={() => setTournamentFilter(active ? null : name)}
                    style={{
                      padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600,
                      border: `1px solid ${active ? colors.primary : colors.gray300}`,
                      background: active ? colors.primary : colors.white,
                      color: active ? colors.white : colors.gray600,
                    }}>
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {/* Gender Filter */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.gray500, marginBottom: 6 }}>{lang === "ko" ? "성별" : "Gender"}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button onClick={() => setGenderFilter(null)}
              style={{
                padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600,
                border: `1px solid ${!genderFilter ? colors.primary : colors.gray300}`,
                background: !genderFilter ? colors.primary : colors.white,
                color: !genderFilter ? colors.white : colors.gray600,
              }}>
              {T("all")}
            </button>
            {[{ key: "male", label: lang === "ko" ? "남자" : "Male" }, { key: "female", label: lang === "ko" ? "여자" : "Female" }].map((g) => {
              const active = genderFilter === g.key;
              return (
                <button key={g.key} onClick={() => setGenderFilter(active ? null : g.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600,
                    border: `1px solid ${active ? colors.primary : colors.gray300}`,
                    background: active ? colors.primary : colors.white,
                    color: active ? colors.white : colors.gray600,
                    }}>
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>
        {/* Level Filter */}
        {levelOptions.length > 0 && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: colors.gray500, marginBottom: 6 }}>{lang === "ko" ? "레벨" : "Level"}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <button onClick={() => setLevelFilter(null)}
                style={{
                  padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600,
                  border: `1px solid ${!levelFilter ? colors.primary : colors.gray300}`,
                  background: !levelFilter ? colors.primary : colors.white,
                  color: !levelFilter ? colors.white : colors.gray600,
                }}>
                {T("all")}
              </button>
              {levelOptions.map((l) => {
                const active = levelFilter === l;
                return (
                  <button key={l} onClick={() => setLevelFilter(active ? null : l)}
                    style={{
                      padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600,
                      border: `1px solid ${active ? colors.primary : colors.gray300}`,
                      background: active ? colors.primary : colors.white,
                      color: active ? colors.white : colors.gray600,
                    }}>
                    {T(l)}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Ranking List */}
      {playerRankings.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: colors.gray400 }}>
          <Icon name="trophy" size={48} />
          <p style={{ fontSize: 16, marginTop: 12 }}>{T("noRanking")}</p>
        </div>
      ) : (() => {
        // Compute tied ranks: same points = same rank
        const ranks = [];
        let currentRank = 1;
        playerRankings.forEach((p, i) => {
          if (i === 0) {
            ranks.push(currentRank);
          } else if (p.totalPoints === playerRankings[i - 1].totalPoints) {
            ranks.push(ranks[i - 1]); // same rank as previous
          } else {
            currentRank = i + 1; // skip to actual position
            ranks.push(currentRank);
          }
        });
        return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {playerRankings.map((p, i) => {
            const rank = ranks[i];
            const isTied = (i > 0 && ranks[i] === ranks[i - 1]) || (i < ranks.length - 1 && ranks[i] === ranks[i + 1]);
            return (
            <Card key={p.name} style={{ cursor: "pointer" }} onClick={() => setExpandedPlayer(expandedPlayer === p.name ? null : p.name)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Rank */}
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: rank <= 3 ? 16 : 14, flexShrink: 0,
                  background: rank === 1 ? "#fef3c7" : rank === 2 ? "#f3f4f6" : rank === 3 ? "#fff7ed" : colors.gray50,
                  color: rank === 1 ? "#b8860b" : rank === 2 ? "#6b7280" : rank === 3 ? "#cd7f32" : colors.gray500,
                  border: `2px solid ${rank === 1 ? "#daa520" : rank === 2 ? "#9ca3af" : rank === 3 ? "#cd7f32" : colors.gray200}`,
                }}>
                  {isTied ? "T" + rank : rank}
                </div>

                {/* Name */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: colors.gray800 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: colors.gray400 }}>
                    {p.entries.length} {T("recentTournaments")}
                  </div>
                </div>

                {/* Points */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, fontSize: 20, color: colors.primary }}>{p.totalPoints.toLocaleString()}</div>
                  <div style={{ fontSize: 11, color: colors.gray400 }}>{T("totalPoints")}</div>
                </div>
              </div>

              {/* Expanded: point history */}
              {expandedPlayer === p.name && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${colors.gray100}` }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: colors.gray500, marginBottom: 8 }}>{T("pointHistory")}</div>
                  {p.entries
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((e) => (
                    <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: `1px solid ${colors.gray50}`, fontSize: 13 }}>
                      <span style={{ padding: "2px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700, color: colors.white, background: GRADE_COLORS[e.grade] || colors.gray400 }}>
                        {T("grade" + e.grade.charAt(0).toUpperCase() + e.grade.slice(1))}
                      </span>
                      <span style={{ flex: 1, color: colors.gray700 }}>{e.tournamentName}</span>
                      <span style={{ color: colors.gray400, fontSize: 11 }}>{getResultLabel(e.resultIdx)}</span>
                      <span style={{ fontWeight: 700, color: colors.primary, minWidth: 50, textAlign: "right" }}>+{e.points}</span>
                      <span style={{
                        fontSize: 10, color: isRankingValid(e.date) ? colors.gray400 : colors.danger,
                        minWidth: 50, textAlign: "right",
                      }}>
                        {isRankingValid(e.date) ? `${getWeeksAgo(e.date)}${T("weeksAgo")}` : T("expired")}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
          })}
        </div>
        );
      })()}
    </div>
  );
}

// ============================================================
// SCORE MODAL
// ============================================================
function ScoreModal({ match, homeName, awayName, isAmericano, format, onSave, onClose, T }) {
  // Determine number of sets based on format
  // set3: best of 3 sets, set2super: 2 sets + super tiebreak, set1game8/set1game6: 1 set
  const getSetCount = () => {
    if (!format || isAmericano) return 0; // 0 = simple score mode
    if (format === "set3") return 3;
    if (format === "set2super") return 3; // 2 sets + super tiebreak (3rd)
    return 1; // set1game8, set1game6
  };
  const setCount = getSetCount();
  const isSetMode = setCount > 0;

  // Simple score mode (RR, americano, or 1-set formats)
  const [s1, setS1] = useState(match.homeScore ?? match.team1Score ?? "");
  const [s2, setS2] = useState(match.awayScore ?? match.team2Score ?? "");

  // Court and matchTime fields
  const [court, setCourt] = useState(match.court || "");
  const [matchTime, setMatchTime] = useState(match.matchTime || "");

  // Set-based score mode
  const initSets = () => {
    if (match.setScores && match.setScores.length > 0) {
      const sets = match.setScores.map((s) => ({ h: String(s.h ?? ""), a: String(s.a ?? "") }));
      while (sets.length < setCount) sets.push({ h: "", a: "" });
      return sets;
    }
    return Array.from({ length: setCount }, () => ({ h: "", a: "" }));
  };
  const [sets, setSets] = useState(initSets);

  const updateSet = (idx, side, val) => {
    setSets((prev) => prev.map((s, i) => i === idx ? { ...s, [side]: val } : s));
  };

  const getSetLabel = (idx) => {
    if (format === "set2super" && idx === 2) return lang === "ko" ? "슈퍼 타이브레이크" : "Super Tiebreak";
    return `${T("set")} ${idx + 1}`;
  };

  const { lang } = useContext(LangContext);

  // For set mode: need at least first set filled. 3rd set optional if not needed.
  const calcSetWins = () => {
    let hWins = 0, aWins = 0;
    sets.forEach((s) => {
      const h = parseInt(s.h), a = parseInt(s.a);
      if (!isNaN(h) && !isNaN(a)) {
        if (h > a) hWins++;
        else if (a > h) aWins++;
      }
    });
    return { hWins, aWins };
  };

  const canSaveSet = () => {
    if (!isSetMode) return s1 !== "" && s2 !== "";
    // At least first set must be filled
    const first = sets[0];
    if (first.h === "" || first.a === "") return false;
    if (setCount === 1) return true;
    // For 2+ sets: second set should be filled
    const second = sets[1];
    if (second.h === "" || second.a === "") return false;
    // 3rd set is optional (only if 1-1)
    return true;
  };

  const hasScheduleInfo = court !== "" || matchTime !== "";
  const hasScore = !isSetMode ? (s1 !== "" && s2 !== "") : (sets[0].h !== "" && sets[0].a !== "");

  const handleSave = () => {
    const extra = { court, matchTime };
    if (!isSetMode) {
      // 스코어 없이 경기시간/코트만 저장하는 경우
      if (s1 === "" && s2 === "" && hasScheduleInfo) {
        onSave("", "", null, { ...extra, completed: false });
        return;
      }
      onSave(s1, s2, null, extra);
      return;
    }
    // Filter out empty sets
    const filledSets = sets.filter((s) => s.h !== "" && s.a !== "").map((s) => ({ h: parseInt(s.h), a: parseInt(s.a) }));
    // 스코어 없이 경기시간/코트만 저장
    if (filledSets.length === 0 && hasScheduleInfo) {
      onSave("", "", null, { ...extra, completed: false });
      return;
    }
    const { hWins, aWins } = calcSetWins();
    onSave(hWins, aWins, filledSets, extra);
  };

  // Simple mode (RR / americano / 1-set knockout)
  if (!isSetMode || setCount <= 1) {
    return (
      <Modal onClose={onClose}>
        <div style={{ padding: 24 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{T("enterScore")}</h3>
          {format && <p style={{ fontSize: 13, color: colors.primary, fontWeight: 600, margin: "0 0 16px" }}>{T(format)}</p>}
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: colors.gray700 }}>{homeName}</div>
              <input type="number" value={isSetMode ? sets[0].h : s1} onChange={(e) => isSetMode ? updateSet(0, "h", e.target.value) : setS1(e.target.value)}
                style={{ ...inputStyle, textAlign: "center", fontSize: 24, fontWeight: 700, width: 80, margin: "0 auto" }} min="0" />
            </div>
            <span style={{ fontSize: 20, fontWeight: 700, color: colors.gray400 }}>-</span>
            <div style={{ textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: colors.gray700 }}>{awayName}</div>
              <input type="number" value={isSetMode ? sets[0].a : s2} onChange={(e) => isSetMode ? updateSet(0, "a", e.target.value) : setS2(e.target.value)}
                style={{ ...inputStyle, textAlign: "center", fontSize: 24, fontWeight: 700, width: 80, margin: "0 auto" }} min="0" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            <div>
              <label style={{ fontSize: 12, color: colors.gray500, marginBottom: 4, display: "block" }}>{T("court")}</label>
              <input type="text" value={court} onChange={(e) => setCourt(e.target.value)} style={inputStyle} placeholder="코트 1" />
            </div>
            <div>
              <label style={{ fontSize: 12, color: colors.gray500, marginBottom: 4, display: "block" }}>{T("matchTime")}</label>
              <input type="time" value={matchTime} onChange={(e) => setMatchTime(e.target.value)} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <Btn variant="outline" onClick={onClose}>{T("cancel")}</Btn>
            <Btn onClick={handleSave} disabled={!hasScore && !hasScheduleInfo}>{T("saveScore")}</Btn>
          </div>
        </div>
      </Modal>
    );
  }

  // Multi-set mode (set3 / set2super)
  const { hWins, aWins } = calcSetWins();
  const needThirdSet = sets[0].h !== "" && sets[0].a !== "" && sets[1].h !== "" && sets[1].a !== "" &&
    ((parseInt(sets[0].h) > parseInt(sets[0].a)) !== (parseInt(sets[1].h) > parseInt(sets[1].a)));

  return (
    <Modal onClose={onClose}>
      <div style={{ padding: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{T("enterScore")}</h3>
        <p style={{ fontSize: 13, color: colors.primary, fontWeight: 600, margin: "0 0 20px" }}>{T(format)}</p>

        {/* Team names header */}
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 30px 1fr", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <div />
          <div style={{ textAlign: "center", fontSize: 14, fontWeight: 700, color: colors.gray700 }}>{homeName}</div>
          <div />
          <div style={{ textAlign: "center", fontSize: 14, fontWeight: 700, color: colors.gray700 }}>{awayName}</div>
        </div>

        {/* Set rows */}
        {sets.map((s, i) => {
          // Hide 3rd set if not needed
          if (i === 2 && !needThirdSet) return null;
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 30px 1fr", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: i === 2 && format === "set2super" ? colors.warning : colors.gray500 }}>
                {getSetLabel(i)}
              </span>
              <input type="number" value={s.h} onChange={(e) => updateSet(i, "h", e.target.value)}
                style={{ ...inputStyle, textAlign: "center", fontSize: 20, fontWeight: 700, padding: "8px 4px" }} min="0" />
              <span style={{ textAlign: "center", fontWeight: 700, color: colors.gray400 }}>-</span>
              <input type="number" value={s.a} onChange={(e) => updateSet(i, "a", e.target.value)}
                style={{ ...inputStyle, textAlign: "center", fontSize: 20, fontWeight: 700, padding: "8px 4px" }} min="0" />
            </div>
          );
        })}

        {/* Set wins summary */}
        {(hWins > 0 || aWins > 0) && (
          <div style={{ textAlign: "center", marginTop: 12, padding: "8px 0", background: colors.gray50, borderRadius: 8, fontSize: 15, fontWeight: 700 }}>
            <span style={{ color: hWins > aWins ? colors.success : colors.gray500 }}>{hWins}</span>
            <span style={{ color: colors.gray400, margin: "0 8px" }}>-</span>
            <span style={{ color: aWins > hWins ? colors.success : colors.gray500 }}>{aWins}</span>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16, marginBottom: 16 }}>
          <div>
            <label style={{ fontSize: 12, color: colors.gray500, marginBottom: 4, display: "block" }}>{T("court")}</label>
            <input type="text" value={court} onChange={(e) => setCourt(e.target.value)} style={inputStyle} placeholder="코트 1" />
          </div>
          <div>
            <label style={{ fontSize: 12, color: colors.gray500, marginBottom: 4, display: "block" }}>{T("matchTime")}</label>
            <input type="time" value={matchTime} onChange={(e) => setMatchTime(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          <Btn variant="outline" onClick={onClose}>{T("cancel")}</Btn>
          <Btn onClick={handleSave} disabled={!canSaveSet() && !hasScheduleInfo}>{T("saveScore")}</Btn>
        </div>
      </div>
    </Modal>
  );
}
