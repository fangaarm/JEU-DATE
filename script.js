// =====================================================
// JEU ÉGALITÉ FEMMES / HOMMES
// - Questions "input" : date / chiffre à taper (3 erreurs max)
// - Questions "choice" : choix (1 tentative)
// - Score -> note /20
// =====================================================

const MAX_ERRORS = 3;

// -----------------------------------------------------
// QUESTIONS (d’après tes images)
// type:
//  - "input" (par défaut) : réponse à taper
//  - "choice" : réponses sous forme de boutons
// Champs utiles:
//  - image (optionnel) : chemin vers l’image à afficher
//  - reveal : mini correction chiffrée (optionnel)
//  - explain : explication (optionnel)
// -----------------------------------------------------
const questions = [
  // =====================================================
  // INÉGALITÉS HOMMES / FEMMES (infographie du bas)
  // =====================================================
  {
    type: "choice",
    title: "Âge au 1er enfant",
    text: "Qui est le plus âgé au 1er enfant ?",
    choices: ["Femme", "Homme"],
    correct: "Homme",
    reveal: "Femme : 29,8 ans • Homme : 32,8 ans",
    explain: "L’infographie montre que les hommes ont l’âge moyen le plus élevé au 1er enfant."
  },
  {
    type: "choice",
    title: "Espérance de vie",
    text: "Qui a la plus grande espérance de vie à la naissance ?",
    choices: ["Femme", "Homme"],
    correct: "Femme",
    reveal: "Femme : 84,9 ans • Homme : 78,5 ans"
  },
  {
    type: "choice",
    title: "Famille monoparentale",
    text: "Qui est le plus souvent chef de famille monoparentale ?",
    choices: ["Femme", "Homme"],
    correct: "Femme",
    reveal: "Femme : 11,9% • Homme : 2,4%"
  },
  {
    type: "choice",
    title: "Scolarisation à 18 ans",
    text: "Qui a le taux de scolarisation à 18 ans le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Femme",
    reveal: "Femme : 73,7% • Homme : 64,7%"
  },
  {
    type: "choice",
    title: "Diplômes du supérieur",
    text: "Qui est le plus diplômé du supérieur ?",
    choices: ["Femme", "Homme"],
    correct: "Femme",
    reveal: "Femme : 38,1% • Homme : 32%"
  },
  {
    type: "choice",
    title: "Taux d’activité",
    text: "Qui a le taux d’activité le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Homme",
    reveal: "Femme : 86,8% • Homme : 95,3%"
  },
  {
    type: "choice",
    title: "Revenu net annuel moyen",
    text: "Qui a le revenu net annuel moyen le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Homme",
    reveal: "Femme : 18 236 € • Homme : 24 548 €"
  },
  {
    type: "choice",
    title: "Salaire net annuel moyen (cadres)",
    text: "Chez les cadres, qui a le salaire net annuel moyen le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Homme",
    reveal: "Femme : 41 967 € • Homme : 53 294 €"
  },
  {
    type: "choice",
    title: "Temps partiel",
    text: "Qui est le plus souvent salarié à temps partiel ?",
    choices: ["Femme", "Homme"],
    correct: "Femme",
    reveal: "Femme : 27,4% • Homme : 5%"
  },
  {
    type: "choice",
    title: "Taux de chômage",
    text: "Qui a le taux de chômage le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Femme",
    reveal: "Femme : 11,5% • Homme : 9,7%"
  },
  // =====================================================
  // PETITE CHRONOLOGIE DU DROIT DES FEMMES (image du haut)
  // =====================================================
  {
    type: "input",
    title: "Olympe de Gouges",
    text: "En quelle année Olympe de Gouges publie la Déclaration des droits de la femme et de la citoyenne ?",
    answer: "1791",
    explain: "Olympe de Gouges publie ce texte en 1791."
  },
  {
    type: "input",
    title: "Droit de vote des femmes",
    text: "En quelle année les femmes obtiennent-elles le droit de vote en France ?",
    answer: "1944",
    explain: "Le droit de vote est accordé aux femmes en 1944."
  },
  {
    type: "input",
    title: "Constitution",
    text: "En quelle année la Constitution affirme l’égalité femmes/hommes ?",
    answer: "1946"
  },
  {
    type: "input",
    title: "1re femme ministre",
    text: "En quelle année une femme obtient le titre de ministre (Germaine Poinso-Chapuis) ?",
    answer: "1947"
  },
  {
    type: "input",
    title: "Autonomie (travail/biens)",
    text: "En quelle année les femmes peuvent gérer leurs biens et travailler sans le consentement du mari ?",
    answer: "1965"
  },
  {
    type: "input",
    title: "Contraception (loi Neuwirth)",
    text: "En quelle année la contraception est autorisée (loi Neuwirth) ?",
    answer: "1967"
  },
  {
    type: "input",
    title: "Égalité salariale",
    text: "En quelle année le principe d’égalité des salaires est posé ?",
    answer: "1972"
  },
  {
    type: "input",
    title: "Loi Veil (IVG)",
    text: "En quelle année la loi Veil autorise l’interruption volontaire de grossesse (IVG) ?",
    answer: "1975"
  },
  {
    type: "input",
    title: "Journée des droits des femmes",
    text: "En quelle année a lieu la 1re Journée nationale des droits des femmes ?",
    answer: "1982"
  },
  {
    type: "input",
    title: "Loi Roudy",
    text: "En quelle année la loi Roudy renforce l’égalité professionnelle ?",
    answer: "1983"
  },
  {
    type: "input",
    title: "Violences faites aux femmes",
    text: "En quelle année est lancé un plan de lutte contre les violences faites aux femmes ?",
    answer: "2004"
  },
  {
    type: "input",
    title: "Loi Copé-Zimmermann",
    text: "En quelle année la loi Copé-Zimmermann impose des quotas dans les conseils d’administration ?",
    answer: "2011"
  },
  {
    type: "input",
    title: "Index égalité",
    text: "En quelle année l’index d’égalité femmes-hommes devient obligatoire en entreprise ?",
    answer: "2019"
  },
  // =====================================================
  // ÉVOLUTION DU DROIT DE VOTE EN FRANCE (frise timeline)
  // =====================================================
  {
    type: "input",
    title: "Suffrage censitaire",
    text: "En quelle année est mis en place le suffrage censitaire pour élire l’Assemblée nationale ?",
    answer: "1791"
  },
  {
    type: "input",
    title: "Suffrage universel masculin",
    text: "En quelle année le suffrage universel masculin est instauré (hommes de plus de 21 ans) ?",
    answer: "1848"
  },
  {
    type: "input",
    title: "Isoloir + enveloppe",
    text: "En quelle année l’usage de l’enveloppe et de l’isoloir devient obligatoire ?",
    answer: "1913"
  },
  {
    type: "input",
    title: "Droit de vote des femmes",
    text: "En quelle année le droit de vote des femmes est accordé en France (sur la frise du vote) ?",
    answer: "1944"
  },
  {
    type: "input",
    title: "Vote des militaires",
    text: "En quelle année le droit de vote est accordé aux militaires (sur la frise) ?",
    answer: "1945"
  },
  {
    type: "input",
    title: "Président au suffrage universel direct",
    text: "En quelle année un référendum adopte l’élection du président au suffrage universel direct ?",
    answer: "1962"
  },
  {
    type: "input",
    title: "Majorité à 18 ans",
    text: "En quelle année la majorité passe-t-elle à 18 ans ?",
    answer: "1974"
  },
  {
    type: "input",
    title: "Droit de vote des citoyens européens",
    text: "En quelle année le droit de vote à certaines élections est accordé aux citoyens européens (sur la frise) ?",
    answer: "1992"
  },
  {
    type: "choice",
    title: "Revenu net annuel moyen",
    text: "Qui a le revenu net annuel moyen le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Homme",
    reveal: "Femme : 18 236 € • Homme : 24 548 €"
  },
  {
    type: "choice",
    title: "Salaire net annuel moyen (cadres)",
    text: "Chez les cadres, qui a le salaire net annuel moyen le plus élevé ?",
    choices: ["Femme", "Homme"],
    correct: "Homme",
    reveal: "Femme : 41 967 € • Homme : 53 294 €"
  }
  ];
// =====================================================
// DOM
// =====================================================
const screenHome = document.getElementById("screen-home");
const screenGame = document.getElementById("screen-game");
const screenEnd  = document.getElementById("screen-end");

const btnStart = document.getElementById("btnStart");
const btnRestart = document.getElementById("btnRestart");
const btnNext = document.getElementById("btnNext");

const progress = document.getElementById("progress");
const scoreLive = document.getElementById("scoreLive");

const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");

const face = document.getElementById("face");
const errorsEl = document.getElementById("errors");

const feedback = document.getElementById("feedback");
const explain = document.getElementById("explain");

const finalGrade = document.getElementById("finalGrade");
const finalMsg = document.getElementById("finalMsg");
const summary = document.getElementById("summary");

// Saisie (input)
const inputRow = document.querySelector(".inputRow");
const answerInput = document.getElementById("answerInput");
const btnValidate = document.getElementById("btnValidate");

// Choix (balance)
const choiceWrap = document.getElementById("choiceWrap");
const btnChoiceWomen = document.getElementById("btnChoiceWomen");
const btnChoiceMen = document.getElementById("btnChoiceMen");

const answerPopup = document.getElementById("answerPopup");
const popupAnswer = document.getElementById("popupAnswer");
const btnClosePopup = document.getElementById("btnClosePopup");

// =====================================================
// STATE
// =====================================================
let order = [];
let idx = 0;
let score = 0;
let errors = 0;
let results = []; // {q, ok, user, errors}
let canReveal = false;

// =====================================================
// UTILS
// =====================================================
function shuffle(a){
  return a.map(v => [Math.random(), v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
}

function normalize(s){
  // gère 27,4 -> 27.4
  return String(s ?? "").trim().replace(",", ".");
}

function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }

function setFace(){
  if (errors === 0) face.textContent = "🙂";
  else if (errors === 1) face.textContent = "😐";
  else if (errors === 2) face.textContent = "😕";
  else face.textContent = "😠";
}

function setFeedback(type, msg){
  feedback.className = "feedback " + (type === "good" ? "good" : "bad");
  feedback.textContent = msg;
  show(feedback);
}

function clearFeedback(){
  hide(feedback);
  feedback.textContent = "";
  feedback.className = "feedback hidden";
}

function clearExplain(){
  hide(explain);
  explain.textContent = "";
}

function setHintAvailability(allowed){
  canReveal = allowed;
}

function lockInput(){
  answerInput.disabled = true;
  btnValidate.disabled = true;
}

function unlockInput(){
  answerInput.disabled = false;
  btnValidate.disabled = false;
}

function showAnswerPopup(answer){
  popupAnswer.textContent = `La bonne réponse était : ${answer}`;
  show(answerPopup);
}

function hideAnswerPopup(){
  hide(answerPopup);
}

function resetChoiceButtons(){
  btnChoiceWomen.disabled = false;
  btnChoiceMen.disabled = false;
  btnChoiceWomen.classList.remove("selected", "is-correct", "is-wrong");
  btnChoiceMen.classList.remove("selected", "is-correct", "is-wrong");
  btnChoiceWomen.setAttribute("aria-pressed", "false");
  btnChoiceMen.setAttribute("aria-pressed", "false");
}

function lockChoiceButtons(picked, correct){
  btnChoiceWomen.disabled = true;
  btnChoiceMen.disabled = true;
  btnChoiceWomen.setAttribute("aria-pressed", "false");
  btnChoiceMen.setAttribute("aria-pressed", "false");

  const pickedBtn = picked === "Femme" ? btnChoiceWomen : btnChoiceMen;
  const correctBtn = correct === "Femme" ? btnChoiceWomen : btnChoiceMen;

  pickedBtn.classList.add("selected");
  pickedBtn.setAttribute("aria-pressed", "true");

  if (picked === correct){
    pickedBtn.classList.add("is-correct");
  } else {
    pickedBtn.classList.add("is-wrong");
    correctBtn.classList.add("is-correct");
  }
}

function currentQ(){
  return questions[order[idx]];
}

// =====================================================
// UI MODE SWITCH
// =====================================================
function setMode(q){
  // reset commun
  clearFeedback();
  clearExplain();
  hide(btnNext);
  setHintAvailability(false);
  hideAnswerPopup();


  // mode choice
  if (q.type === "choice"){
    hide(inputRow);
    hide(btnValidate); // au cas où
    show(choiceWrap);
    resetChoiceButtons();

    // (pas besoin d’autofocus input)
  } else {
    // mode input
    show(inputRow);
    show(btnValidate);
    hide(choiceWrap);

    unlockInput();
    answerInput.value = "";
    answerInput.focus();
  }
}

// =====================================================
// GAME FLOW
// =====================================================
function loadQuestion(){
  const q = currentQ();

  errors = 0;
  errorsEl.textContent = errors;
  setFace();

  progress.textContent = `Question ${idx + 1}/${order.length}`;
  scoreLive.textContent = `Score : ${score}`;

  questionTitle.textContent = q.title;
  questionText.textContent = q.text;

  setMode(q);
}

function finishQuestion(ok, userAnswer, revealAllowed){
  const q = currentQ();

  results.push({
    q,
    ok,
    user: userAnswer ?? "",
    errors,
    revealAllowed: !!revealAllowed
  });

  show(btnNext);
}

function validateTyped(){
  const q = currentQ();
  const user = normalize(answerInput.value);

  if (!user){
    setFeedback("bad", "✍️ Tape une réponse avant de valider.");
    return;
  }

  const correct = normalize(q.answer);

  if (user === correct){
    score++;
    scoreLive.textContent = `Score : ${score}`;
    setFeedback("good", "✅ Bonne réponse !");
    setHintAvailability(true);
    showHint();
    finishQuestion(true, user, true);
  } else {
    errors++;
    errorsEl.textContent = errors;
    setFace();
    setFeedback("bad", "❌ Mauvaise réponse.");

    if (errors >= MAX_ERRORS){
      // On révèle + explication possible via bouton
      lockInput();
      setHintAvailability(true);
      showHint();
      showAnswerPopup(q.answer);
      finishQuestion(false, user, true);
    } else {
      // on laisse retenter
      answerInput.focus();
      answerInput.select();
    }
  }
}

function validateChoice(picked){
  const q = currentQ();
  const ok = picked === q.correct;

  lockChoiceButtons(picked, q.correct);

  if (ok){
    score++;
    scoreLive.textContent = `Score : ${score}`;
    setFeedback("good", "✅ Correct !");
    setHintAvailability(true);
    showHint();
  } else {
    errors = 1;
    errorsEl.textContent = errors;
    setFace();
    setFeedback("bad", "❌ Incorrect.");
  }

  // Pour une question “choice”, 1 tentative puis next
  finishQuestion(ok, picked, ok);
}

function showHint(){
  if (!canReveal) return;
  const q = currentQ();

  // explication (sans révéler les dates/chiffres)
  let extra = "";

  if (q.type === "choice"){
    extra = `\n${q.reveal}`;
  }

  explain.textContent = (q.explain || "") + extra;
  show(explain);
}


function next(){
  idx++;
  if (idx >= order.length){
    endGame();
  } else {
    loadQuestion();
  }
}

function endGame(){
  hide(screenGame);
  show(screenEnd);

  const total = order.length;
  const grade = Math.round((score / total) * 20);
  finalGrade.textContent = grade;

  if (grade >= 16) finalMsg.textContent = "🔥 Excellent ! Très bonne maîtrise.";
  else if (grade >= 12) finalMsg.textContent = "✅ Bien joué ! Encore quelques repères à solidifier.";
  else if (grade >= 8) finalMsg.textContent = "👍 Pas mal. Revois les chiffres/dates et ça monte vite.";
  else finalMsg.textContent = "💪 Rejoue et lis les explications : tu vas progresser vite.";

  summary.innerHTML = "";
  results.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "item";
    const infoLine = r.revealAllowed && r.q.type === "choice"
      ? `<em>Info :</em> ${r.q.reveal}<br/>`
      : "";
    const explainLine = r.revealAllowed && r.q.explain ? `<small>${r.q.explain}</small>` : "";
    div.innerHTML = `
      <strong>${i + 1}. ${r.q.title} — ${r.ok ? "✅" : "❌"}</strong><br/>
      ${r.q.text}<br/>
      <em>Ta réponse :</em> ${r.user}<br/>
      ${infoLine}
      ${explainLine}
    `;
    summary.appendChild(div);
  });
}

function start(){
  order = shuffle([...Array(questions.length).keys()]);
  idx = 0;
  score = 0;
  errors = 0;
  results = [];
  hideAnswerPopup();

  hide(screenHome);
  hide(screenEnd);
  show(screenGame);

  loadQuestion();
}

// =====================================================
// EVENTS
// =====================================================
btnStart.addEventListener("click", start);
btnRestart.addEventListener("click", () => {
  hide(screenEnd);
  show(screenHome);
});

btnValidate.addEventListener("click", validateTyped);
answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateTyped();
});

btnChoiceWomen.addEventListener("click", () => validateChoice("Femme"));
btnChoiceMen.addEventListener("click", () => validateChoice("Homme"));

btnNext.addEventListener("click", next);
btnClosePopup.addEventListener("click", hideAnswerPopup);
