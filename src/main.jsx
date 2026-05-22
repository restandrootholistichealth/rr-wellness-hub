import { useState } from "react";

// ─── PATH CONFIG ─────────────────────────────────────────────────────
const PATH_CONFIG = {
  "calcium-shell": {
    name: "Calcium Shell",
    color: "#8B6914",
    light: "#FDF6E3",
    gradient: "linear-gradient(135deg, #8B6914, #C4922A)",
    emoji: "🧱",
    tagline: "Breaking down the wall, building up your life",
    supplements: [
      { name: "Vitamin K2 (MK-7)", product: "Life Extensions Super K", dose: "1 capsule with dinner", timing: "evening", why: "Tells calcium to leave your tissues and go to your bones" },
      { name: "Vitamin A (Retinol)", product: "Pure Encapsulations Vitamin A", dose: "3,000 mcg with food", timing: "morning", why: "Works with K2 to break down the calcium shell" },
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "200 mg before bed", timing: "bedtime", why: "Helps magnesium actually get into your cells as calcium clears" },
      { name: "Multi-Mineral (no Cu/Fe)", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "Replenishes depleted minerals without adding more calcium" },
      { name: "Probiotic", product: "MicroBiome Labs MegaSpore", dose: "Start at 1/4 capsule — build slowly", timing: "morning", why: "Supports the gut health needed for mineral absorption" },
      { name: "Selenium", product: "Pure Encapsulations Selenium", dose: "200 mcg with food", timing: "morning", why: "Supports thyroid function and antioxidant defense" },
    ],
    habits: ["Adrenal cocktail every afternoon", "Potassium-rich food at every meal", "8–9 hours sleep", "Gentle movement only (walks, yoga)", "No calcium supplements", "Filter your water"],
    weeklyMilestones: [
      { week: 1, text: "Starting K2, Vitamin A, and Magnesium. You may not notice much yet — that's normal." },
      { week: 2, text: "Adding multi-mineral and probiotic (start tiny). Focus on getting potassium at every meal." },
      { week: 4, text: "Some people start noticing better sleep around now. Keep going." },
      { week: 6, text: "The calcium shell may start to break. You might feel more emotional or achy — this is GOOD." },
      { week: 8, text: "Emotional and physical symptoms from shell breaking should be easing. Energy often improves." },
      { week: 12, text: "Retest time is approaching. You've been doing the work — your minerals are shifting." },
    ],
    expectWeeks: "Calcium shells take 6+ months to fully resolve. Be patient with your body.",
    keyFoods: ["Avocado", "Swiss chard", "Sweet potato", "Fermented foods", "Pasture-raised eggs", "Wild salmon", "Coconut water"],
  },
  "high-nak": {
    name: "High Na/K",
    color: "#8B2E2E",
    light: "#FDF0F0",
    gradient: "linear-gradient(135deg, #8B2E2E, #C0392B)",
    emoji: "🔥",
    tagline: "Cooling the fire, rebuilding your foundation",
    supplements: [
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "300–400 mg/day, 200 mg before bed", timing: "bedtime", why: "Most important supplement for your pattern — calms the stress response" },
      { name: "Multi-Mineral (no Cu/Fe)", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "Replenishes the minerals being burned through by chronic stress" },
      { name: "Probiotic", product: "MicroBiome Labs MegaSpore", dose: "Start at 1/4 capsule — build slowly", timing: "morning", why: "Gut health reduces the inflammatory burden driving your Na/K" },
      { name: "Selenium", product: "Pure Encapsulations Selenium", dose: "200 mcg with food", timing: "morning", why: "Supports thyroid function — important with Hashimoto's patterns" },
      { name: "Vitamin D3 + K2", product: "Life Extensions Super K + D3", dose: "Per blood test result", timing: "evening", why: "D3 deficiency is almost universal with Hashimoto's and high inflammation" },
      { name: "Digestive Enzymes", product: "Enzymedica Digest Gold", dose: "1–2 capsules with meals", timing: "meals", why: "Ensures you're actually absorbing the nutrients you're eating" },
    ],
    habits: ["Adrenal cocktail every afternoon", "Potassium-rich food at every meal", "Remove gluten completely", "8–9 hours sleep", "No HIIT or intense cardio", "Daily walk outside"],
    weeklyMilestones: [
      { week: 1, text: "Starting magnesium and multi-mineral. Remove gluten now — this is the most impactful change." },
      { week: 2, text: "Adding probiotic at a tiny dose. Gluten removal often shows results within 2 weeks." },
      { week: 4, text: "Energy and sleep usually start improving around week 4 with consistent magnesium." },
      { week: 6, text: "Most clients notice more stable mood and less afternoon crashes by now." },
      { week: 8, text: "Inflammation is reducing. Blood sugar should feel more stable." },
      { week: 12, text: "Retest approaching — your Na/K ratio should be meaningfully lower." },
    ],
    expectWeeks: "Na/K patterns respond well — most clients feel meaningful changes within 4–6 weeks.",
    keyFoods: ["Swiss chard", "Spinach", "Avocado", "Sweet potato", "Wild salmon", "Beets", "Brazil nuts (1–2/day)"],
  },
  "low-nak": {
    name: "Low Na/K",
    color: "#2A4A8B",
    light: "#EEF3FA",
    gradient: "linear-gradient(135deg, #2A4A8B, #3B6EC0)",
    emoji: "📉",
    tagline: "Rebuilding your reserves, restoring your strength",
    supplements: [
      { name: "Digestive Support (HCl + Betaine)", product: "Biotics HCL Plus", dose: "1–2 tablets with meals", timing: "meals", why: "Low Na/K always indicates a need for digestive support" },
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "300–400 mg/day", timing: "bedtime", why: "Supports adrenal recovery and sleep quality" },
      { name: "Multi-Mineral (no Cu/Fe)", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "Replenishes depleted mineral reserves" },
      { name: "Taurine", product: "Life Extensions Taurine", dose: "1,000 mg once daily in morning", timing: "morning", why: "Supports bile production and adrenal function" },
      { name: "Probiotic", product: "MicroBiome Labs MegaSpore", dose: "Start at 1/4 capsule — build slowly", timing: "morning", why: "Adrenal exhaustion always involves gut compromise" },
      { name: "B-Complex (Balancing)", product: "Biotics Bio-B100", dose: "1 capsule 3x/day with food", timing: "meals", why: "Supports adrenal recovery without over-stimulating" },
    ],
    habits: ["Adrenal cocktail every afternoon", "Extra sodium daily (Celtic salt)", "Protein at every meal", "8–9 hours sleep", "Reduce HIIT workouts", "Find daily joy and play"],
    weeklyMilestones: [
      { week: 1, text: "Focus on food first — protein at every meal, potassium-rich foods, and daily adrenal cocktail." },
      { week: 2, text: "Adding supplements. Your body is in a rebuilding phase — don't rush it." },
      { week: 4, text: "Digestive support often shows early wins — less bloating, better energy after meals." },
      { week: 6, text: "Adrenal recovery takes time. Sleep quality often improves significantly around here." },
      { week: 8, text: "Energy should be more consistent. Less wired-and-tired feeling." },
      { week: 12, text: "Retest time. Expect to see Na/K ratio rising toward optimal." },
    ],
    expectWeeks: "Adrenal exhaustion takes 3–6 months to meaningfully recover. Slow and steady wins.",
    keyFoods: ["Potassium-rich vegetables", "Quality protein", "Celtic grey salt", "Bone broth", "Eggs", "Sweet potato", "Coconut water"],
  },
  "four-lows": {
    name: "Four Lows",
    color: "#5C3A8B",
    light: "#F0ECF8",
    gradient: "linear-gradient(135deg, #5C3A8B, #8B59CC)",
    emoji: "🔋",
    tagline: "Recharging from the ground up",
    supplements: [
      { name: "Taurine", product: "Life Extensions Taurine", dose: "1,500 mg once daily in morning", timing: "morning", why: "The most important supplement for Four Lows — supports cellular energy" },
      { name: "Digestive Support", product: "Enzymedica Digest Gold", dose: "1–2 capsules with meals", timing: "meals", why: "Four Lows always involves poor digestion and absorption" },
      { name: "Multi-Mineral", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "All four minerals need replenishment simultaneously" },
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "200 mg before bed — start here, go slow", timing: "bedtime", why: "Four Lows clients are sensitive — start very low" },
      { name: "Probiotic", product: "MicroBiome Labs MegaSpore", dose: "Start at 1/4 capsule — increase very slowly", timing: "morning", why: "Gut healing is foundational for Four Lows recovery" },
    ],
    habits: ["Adrenal cocktail every afternoon", "No HIIT or intense exercise — walks only", "Prioritize rest above everything", "Reduce caffeine and sugar slowly", "Eat enough food — don't undereat", "Meditate or practice stillness daily"],
    weeklyMilestones: [
      { week: 1, text: "Start only taurine and digestive enzymes. Four Lows bodies are sensitive — go very slowly." },
      { week: 2, text: "Add multi-mineral if tolerating week 1 well. Focus on eating enough nourishing food." },
      { week: 4, text: "Magnesium added now at a very low dose. Any improvement in sleep is a win." },
      { week: 6, text: "Some energy improvement is typical by now. Don't push it — rest is still medicine." },
      { week: 8, text: "Digestion usually improving. Energy more consistent through the day." },
      { week: 12, text: "Four Lows takes 6+ months. But you should feel meaningfully different by retest." },
    ],
    expectWeeks: "Four Lows is the most depleted pattern — expect 6+ months for full recovery. Every week counts.",
    keyFoods: ["Bone broth", "Nettles infusion", "Eggs", "Root vegetables", "Quality protein", "Soaked oats", "Avocado"],
  },
  "copper-imbalance": {
    name: "Copper Imbalance",
    color: "#6B3F1A",
    light: "#F8F0E8",
    gradient: "linear-gradient(135deg, #6B3F1A, #A0622A)",
    emoji: "🟤",
    tagline: "Rebalancing gently, healing deeply",
    supplements: [
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "300–400 mg/day", timing: "bedtime", why: "Supports adrenal function needed to process copper properly" },
      { name: "Whole Food Vitamin C (Camu Camu)", product: "Zint Camu Camu Powder", dose: "1/2 tsp in water daily — start slow", timing: "morning", why: "Natural chelator of copper — start slowly to avoid copper dumping" },
      { name: "Taurine", product: "Life Extensions Taurine", dose: "500–1,000 mg once daily", timing: "morning", why: "Supports bile flow — how the body excretes excess copper" },
      { name: "Multi-Mineral (no Cu/Fe)", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "Supports overall mineral balance without adding more copper" },
      { name: "Liver Support", product: "Oregon Wild Harvest Milk Thistle", dose: "Per bottle instructions", timing: "meals", why: "The liver stores and processes copper — it needs support" },
      { name: "Probiotic", product: "MicroBiome Labs MegaSpore", dose: "Start at 1/4 capsule — build slowly", timing: "morning", why: "Gut health supports copper metabolism and elimination" },
    ],
    habits: ["Adrenal cocktail every afternoon", "Prioritize potassium-rich foods", "8–9 hours sleep", "Avoid copper exposure (check water pipes, cookware)", "Gentle movement only", "Support liver with castor oil packs 2–3x/week"],
    weeklyMilestones: [
      { week: 1, text: "Start magnesium only. Copper imbalance requires a gentle start — no rushing." },
      { week: 2, text: "Add taurine and multi-mineral. Watch for any copper dumping signs (mood swings, brain fog, nausea)." },
      { week: 3, text: "Begin Camu Camu at a very small dose. This is the gentle copper mover — go slow." },
      { week: 6, text: "Liver support added now. Energy and mood often improve as copper begins to move." },
      { week: 8, text: "Copper imbalance is a slow process. Any mood stability improvements are signs of progress." },
      { week: 12, text: "Retest will show if copper is beginning to move. This often takes 1–2+ years fully." },
    ],
    expectWeeks: "Copper imbalance is one of the slower patterns to resolve — be patient and go gently.",
    keyFoods: ["Potassium-rich vegetables", "Organic beets", "Lemon juice", "Garlic", "Leafy greens", "Quality protein", "Pumpkin seeds"],
  },
  "camg-blood-sugar": {
    name: "Ca/Mg Blood Sugar",
    color: "#2A6B7D",
    light: "#E8F4F8",
    gradient: "linear-gradient(135deg, #2A6B7D, #3A9BBB)",
    emoji: "🩸",
    tagline: "Balancing your blood sugar, balancing your life",
    supplements: [
      { name: "Multi-Mineral", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "Imbalanced Ca/Mg is often food-driven — minerals support the correction" },
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "300–400 mg/day", timing: "bedtime", why: "Magnesium directly supports healthy blood sugar regulation" },
      { name: "Digestive Support", product: "Enzymedica Digest Gold", dose: "1–2 capsules with meals", timing: "meals", why: "Better digestion means better mineral absorption and blood sugar stability" },
    ],
    habits: ["Protein at every single meal", "No skipping meals", "Adrenal cocktail every afternoon", "Pair all carbs with protein or fat", "Consider a Continuous Glucose Monitor (Veri)", "Reduce simple sugars"],
    weeklyMilestones: [
      { week: 1, text: "Focus on food structure — protein at every meal, no skipping, no eating carbs alone." },
      { week: 2, text: "Start supplements. Blood sugar patterns respond quickly to dietary changes." },
      { week: 4, text: "Energy should feel more even — less spikes and crashes through the day." },
      { week: 6, text: "Most people feel significantly more stable by week 6 with consistent food changes." },
      { week: 8, text: "Consider a CGM now to see how your body responds to specific foods." },
      { week: 12, text: "Retest should show Ca/Mg ratio moving toward optimal range." },
    ],
    expectWeeks: "Blood sugar patterns respond quickly to dietary changes — expect improvement within 4–6 weeks.",
    keyFoods: ["Quality protein at every meal", "Non-starchy vegetables", "Healthy fats", "Avocado", "Eggs", "Wild fish", "Nuts and seeds"],
  },
  "speeding-up": {
    name: "Speeding Up",
    color: "#7A8C2A",
    light: "#F4F8E8",
    gradient: "linear-gradient(135deg, #7A8C2A, #A8C040)",
    emoji: "⚡",
    tagline: "Fueling your engine the right way",
    supplements: [
      { name: "Multi-Mineral (with copper)", product: "Biotics Multi-Mins", dose: "1 tablet 3x/day with food", timing: "meals", why: "Fast oxidizers burn through minerals quickly — replenishment is essential" },
      { name: "Magnesium Glycinate", product: "Pure Encapsulations Magnesium", dose: "300–400 mg/day", timing: "bedtime", why: "Supports sleep and slows the oxidation rate gently" },
      { name: "B-Complex (Relaxing)", product: "Biotics Bio-GGG-B", dose: "1 tablet 3x/day with food", timing: "meals", why: "Relaxing B-complex helps slow the fast oxidation pattern" },
    ],
    habits: ["More protein and fat, fewer simple carbs", "Adrenal cocktail daily", "Moderate exercise — not extreme", "Reduce stimulants (coffee, energy drinks)", "Prioritize sleep", "Build in genuine rest time"],
    weeklyMilestones: [
      { week: 1, text: "Shift your diet toward more protein and fat. Reduce simple carbs and caffeine gradually." },
      { week: 2, text: "Start supplements. The relaxing B-complex is especially important for your pattern." },
      { week: 4, text: "Fast oxidizers often notice better sleep and less wired feeling within a month." },
      { week: 6, text: "Energy should feel more sustainable — less peaks and crashes." },
      { week: 8, text: "Mood and stress tolerance usually improve as oxidation rate normalizes." },
      { week: 12, text: "Retest should show Ca/P ratio moving toward optimal range." },
    ],
    expectWeeks: "Fast oxidation patterns respond well — expect meaningful changes within 6–8 weeks.",
    keyFoods: ["Quality protein (beef, chicken, eggs)", "Healthy fats", "Root vegetables", "Calcium-rich foods", "Magnesium-rich foods", "Minimal sugar and refined carbs"],
  },
};

const SUPPLEMENT_TIMINGS = ["morning", "meals", "evening", "bedtime"];
const TIMING_LABELS = { morning: "☀️ Morning", meals: "🍽️ With Meals", evening: "🌅 Evening", bedtime: "🌙 Before Bed" };

// ─── STORAGE ────────────────────────────────────────────────────────
function useStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch { return defaultValue; }
  });
  const set = (v) => {
    setValue(v);
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  };
  return [value, set];
}

// ─── MAIN APP ────────────────────────────────────────────────────────
export default function WellnessHub() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const pathKey = params.get("path") || "high-nak";
  const clientName = params.get("name") || "Friend";
  const retestDate = params.get("retest") || null;

  const path = PATH_CONFIG[pathKey] || PATH_CONFIG["high-nak"];
  const firstName = clientName.split(" ")[0];

  const [activeSection, setActiveSection] = useState("dashboard");
  const [today] = useState(new Date().toISOString().split("T")[0]);

  // Persistent state
  const [habits, setHabits] = useStorage(`htma-habits-${today}`, {});
  const [supps, setSupps] = useStorage(`htma-supps-${today}`, {});
  const [journal, setJournal] = useStorage(`htma-journal`, []);
  const [todayMood, setTodayMood] = useStorage(`htma-mood-${today}`, null);
  const [startDate] = useStorage("htma-start-date", today);

  // Calculate week number
  const start = new Date(startDate);
  const now = new Date();
  const weekNum = Math.max(1, Math.ceil(((now - start) / (1000 * 60 * 60 * 24 * 7)) + 1));
  const daysIn = Math.floor((now - start) / (1000 * 60 * 60 * 24));

  // Retest countdown
  const retestDays = retestDate
    ? Math.max(0, Math.ceil((new Date(retestDate) - now) / (1000 * 60 * 60 * 24)))
    : Math.max(0, 90 - daysIn);

  const totalDone = Object.values(habits).filter(Boolean).length + Object.values(supps).filter(Boolean).length;
  const totalPossible = path.habits.length + path.supplements.length;
  const todayScore = Math.round((totalDone / totalPossible) * 100);

  const currentMilestone = path.weeklyMilestones.find(m => m.week >= weekNum) || path.weeklyMilestones[path.weeklyMilestones.length - 1];

  const nav = [
    { id: "dashboard", label: "Home", icon: "⌂" },
    { id: "supplements", label: "Supplements", icon: "💊" },
    { id: "habits", label: "Habits", icon: "✓" },
    { id: "journal", label: "Journal", icon: "📓" },
    { id: "protocol", label: "My Protocol", icon: "📋" },
  ];

  const pathStyle = {
    "--path-color": path.color,
    "--path-light": path.light,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF6F0",
      fontFamily: "'Lato', sans-serif",
      color: "#4A3728",
      ...pathStyle,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .rr-brand-bar {
          background: #5C3D2E;
          padding: 8px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          z-index: 200;
        }
        .rr-brand-bar-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .rr-brand-dot {
          width: 28px; height: 28px;
          background: #7A9E7E;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }
        .rr-brand-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #C9A882;
          letter-spacing: 0.3px;
        }
        .rr-brand-tool {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
          text-transform: uppercase;
        }


        .card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 1px 8px rgba(0,0,0,0.06);
          margin-bottom: 16px;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .check-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .check-row:last-child { border-bottom: none; }
        .check-row:hover { opacity: 0.8; }

        .check-box {
          width: 22px; height: 22px;
          border-radius: 6px;
          border: 2px solid #ddd;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.15s;
          font-size: 12px;
          font-weight: 700;
          color: white;
        }

        .check-label {
          font-size: 14px;
          color: #333;
          flex: 1;
          line-height: 1.4;
        }
        .check-label.done {
          text-decoration: line-through;
          color: #aaa;
        }

        .nav-bar {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: white;
          border-top: 1px solid #eee;
          display: flex;
          z-index: 100;
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }

        .nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 4px;
          cursor: pointer;
          transition: all 0.15s;
          border: none;
          background: none;
        }

        .nav-icon { font-size: 20px; line-height: 1; }
        .nav-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 3px;
          font-family: 'Lato', sans-serif;
        }

        .progress-ring-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .score-num {
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: 'Lato', sans-serif;
        }

        .mood-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 2px solid #eee;
          background: white;
          font-size: 22px;
          cursor: pointer;
          transition: all 0.15s;
          display: flex; align-items: center; justify-content: center;
        }
        .mood-btn:hover { transform: scale(1.1); }
        .mood-btn.selected { border-color: var(--path-color); background: var(--path-light); }

        .timing-section {
          margin-bottom: 20px;
        }
        .timing-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 10px;
          font-family: 'Lato', sans-serif;
        }

        .supp-card {
          background: #fafafa;
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 8px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          cursor: pointer;
          border: 1px solid #eee;
          transition: all 0.15s;
        }
        .supp-card:hover { background: #f5f5f5; }
        .supp-card.done { opacity: 0.5; }

        .supp-name {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2px;
        }
        .supp-product {
          font-size: 12px;
          color: #888;
          margin-bottom: 4px;
          font-style: italic;
        }
        .supp-dose {
          font-size: 12px;
          color: #555;
          margin-bottom: 4px;
        }
        .supp-why {
          font-size: 11px;
          color: #aaa;
          font-style: italic;
        }

        .journal-entry {
          background: #fafafa;
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 10px;
          border-left: 3px solid var(--path-color);
        }
        .journal-date {
          font-size: 10px;
          color: #aaa;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .journal-text {
          font-size: 14px;
          color: #444;
          line-height: 1.6;
        }

        .milestone-card {
          background: var(--path-light);
          border-radius: 10px;
          padding: 14px 16px;
          border-left: 3px solid var(--path-color);
        }

        .streak-num {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1;
        }

        .food-chip {
          display: inline-block;
          padding: 5px 12px;
          background: var(--path-light);
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          color: var(--path-color);
          margin: 3px;
          border: 1px solid var(--path-color);
          opacity: 0.8;
        }

        textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          color: #333;
          resize: none;
          outline: none;
          background: #fafafa;
          transition: border-color 0.2s;
          line-height: 1.6;
        }
        textarea:focus { border-color: var(--path-color); background: white; }

        .submit-btn {
          padding: 12px 24px;
          background: var(--path-color);
          color: white;
          border: none;
          border-radius: 10px;
          font-family: 'Lato', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.15s;
          letter-spacing: 0.5px;
        }
        .submit-btn:hover { opacity: 0.85; }

        .countdown-num {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1;
        }

        .section-content {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px 16px 100px;
        }

        .page-header {
          background: white;
          border-bottom: 1px solid #eee;
          padding: 16px 20px;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .page-sub {
          font-size: 12px;
          color: #aaa;
          margin-top: 2px;
        }
      `}</style>

      {/* ── DASHBOARD ──────────────────────────────────── */}
      {activeSection === "dashboard" && (
        <>
          {/* Hero */}
          <div style={{ background: path.gradient, padding: "32px 20px 24px", color: "white" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.75, marginBottom: 6, fontFamily: "'Lato', sans-serif" }}>
              {path.emoji} {path.name} Protocol
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,5vw,32px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 6 }}>
              Hey, {firstName} 👋
            </h1>
            <p style={{ fontSize: 14, opacity: 0.85, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
              {path.tagline}
            </p>
          </div>

          <div className="section-content" style={{ paddingTop: 20 }}>

            {/* Today's score + retest */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 0 }}>
              {/* Today score */}
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#aaa", marginBottom: 12, fontFamily: "'Lato', sans-serif" }}>Today</div>
                <div className="progress-ring-wrap" style={{ marginBottom: 8 }}>
                  <svg width="80" height="80">
                    <circle cx="40" cy="40" r="32" fill="none" stroke="#f0f0f0" strokeWidth="6" />
                    <circle cx="40" cy="40" r="32" fill="none" stroke={path.color} strokeWidth="6"
                      strokeDasharray={`${(todayScore / 100) * 201} 201`}
                      strokeLinecap="round"
                      transform="rotate(-90 40 40)"
                      style={{ transition: "stroke-dasharray 0.5s ease" }} />
                  </svg>
                  <span className="score-num" style={{ color: path.color }}>{todayScore}%</span>
                </div>
                <p style={{ fontSize: 11, color: "#aaa", fontFamily: "'Lato', sans-serif" }}>
                  {totalDone}/{totalPossible} done
                </p>
              </div>

              {/* Retest countdown */}
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#aaa", marginBottom: 12, fontFamily: "'Lato', sans-serif" }}>Retest In</div>
                <div className="countdown-num" style={{ color: path.color }}>{retestDays}</div>
                <p style={{ fontSize: 12, color: "#aaa", marginTop: 4, fontFamily: "'Lato', sans-serif" }}>days</p>
                <p style={{ fontSize: 11, color: "#bbb", marginTop: 6, fontFamily: "'Lato', sans-serif" }}>
                  Week {weekNum} of 12
                </p>
              </div>
            </div>

            {/* Mood check */}
            <div className="card">
              <div className="card-title">How are you feeling today?</div>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", padding: "4px 0" }}>
                {["😴", "😔", "😐", "🙂", "😊"].map((mood, i) => (
                  <button key={mood} className={`mood-btn ${todayMood === i ? "selected" : ""}`}
                    onClick={() => setTodayMood(i)} style={{ "--path-color": path.color, "--path-light": path.light }}>
                    {mood}
                  </button>
                ))}
              </div>
            </div>

            {/* This week's milestone */}
            <div className="card">
              <div className="card-title">📍 Week {weekNum} — What to Expect</div>
              <div className="milestone-card">
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6 }}>{currentMilestone.text}</p>
              </div>
              <p style={{ fontSize: 12, color: "#aaa", marginTop: 10, fontStyle: "italic", fontFamily: "'Lato', sans-serif" }}>
                {path.expectWeeks}
              </p>
            </div>

            {/* Quick habits */}
            <div className="card">
              <div className="card-title" style={{ justifyContent: "space-between" }}>
                <span>Today's Non-Negotiables</span>
                <span className="pill" style={{ background: path.light, color: path.color }}>
                  {Object.values(habits).filter(Boolean).length}/{path.habits.length}
                </span>
              </div>
              {path.habits.slice(0, 4).map((habit, i) => (
                <div key={i} className="check-row" onClick={() => setHabits({ ...habits, [i]: !habits[i] })}>
                  <div className="check-box" style={{ background: habits[i] ? path.color : "white", borderColor: habits[i] ? path.color : "#ddd" }}>
                    {habits[i] && "✓"}
                  </div>
                  <span className={`check-label ${habits[i] ? "done" : ""}`}>{habit}</span>
                </div>
              ))}
              <p style={{ fontSize: 12, color: path.color, marginTop: 10, cursor: "pointer", fontWeight: 700, fontFamily: "'Lato', sans-serif" }}
                onClick={() => setActiveSection("habits")}>
                See all habits →
              </p>
            </div>

            {/* Key foods */}
            <div className="card">
              <div className="card-title">🥗 Eat These This Week</div>
              <div>
                {path.keyFoods.map(food => (
                  <span key={food} className="food-chip">{food}</span>
                ))}
              </div>
            </div>

          </div>
        </>
      )}

      {/* ── SUPPLEMENTS ────────────────────────────────── */}
      {activeSection === "supplements" && (
        <>
          <div className="page-header">
            <div className="page-title">💊 Supplement Schedule</div>
            <div className="page-sub">Tap each one as you take it — resets daily</div>
          </div>
          <div className="section-content">
            {SUPPLEMENT_TIMINGS.map(timing => {
              const timingSupps = path.supplements.filter(s => s.timing === timing);
              if (!timingSupps.length) return null;
              return (
                <div key={timing} className="timing-section">
                  <div className="timing-label">{TIMING_LABELS[timing]}</div>
                  {timingSupps.map((supp, i) => {
                    const key = `${timing}-${i}`;
                    const done = supps[key] || false;
                    return (
                      <div key={key} className={`supp-card ${done ? "done" : ""}`}
                        onClick={() => setSupps({ ...supps, [key]: !done })}>
                        <div className="check-box" style={{ background: done ? path.color : "white", borderColor: done ? path.color : "#ddd", marginTop: 2 }}>
                          {done && "✓"}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div className="supp-name">{supp.name}</div>
                          <div className="supp-product">{supp.product}</div>
                          <div className="supp-dose">{supp.dose}</div>
                          <div className="supp-why">Why: {supp.why}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <div className="card" style={{ background: path.light, border: `1px solid ${path.color}30` }}>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, fontStyle: "italic" }}>
                💡 <strong>Reminder:</strong> Take fat-soluble vitamins (K2, Vitamin A, D3) with a meal that contains fat — avocado, olive oil, eggs, or nuts.
              </p>
            </div>
          </div>
        </>
      )}

      {/* ── HABITS ─────────────────────────────────────── */}
      {activeSection === "habits" && (
        <>
          <div className="page-header">
            <div className="page-title">✓ Daily Habits</div>
            <div className="page-sub">Your protocol non-negotiables — check off daily</div>
          </div>
          <div className="section-content">
            <div className="card">
              <div className="card-title" style={{ justifyContent: "space-between" }}>
                <span>Today's Checklist</span>
                <span className="pill" style={{ background: path.light, color: path.color }}>
                  {Object.values(habits).filter(Boolean).length}/{path.habits.length}
                </span>
              </div>
              {path.habits.map((habit, i) => (
                <div key={i} className="check-row" onClick={() => setHabits({ ...habits, [i]: !habits[i] })}>
                  <div className="check-box" style={{ background: habits[i] ? path.color : "white", borderColor: habits[i] ? path.color : "#ddd" }}>
                    {habits[i] && "✓"}
                  </div>
                  <span className={`check-label ${habits[i] ? "done" : ""}`}>{habit}</span>
                </div>
              ))}
            </div>

            {/* Adrenal cocktail card */}
            <div className="card">
              <div className="card-title">🍊 Adrenal Cocktail</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
                {[["4 oz", "Fresh OJ"], ["1/4 tsp", "Cream of Tartar"], ["1/4 tsp", "Celtic Salt"]].map(([qty, item]) => (
                  <div key={item} style={{ background: path.light, borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: path.color, fontFamily: "'Lato', sans-serif" }}>{qty}</div>
                    <div style={{ fontSize: 11, color: "#666", marginTop: 2, fontFamily: "'Lato', sans-serif" }}>{item}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#888", fontStyle: "italic", fontFamily: "'Lato', sans-serif" }}>
                Stir together and drink every afternoon. Freeze as popsicles for easy prep! Add coconut milk for extra potassium.
              </p>
            </div>
          </div>
        </>
      )}

      {/* ── JOURNAL ────────────────────────────────────── */}
      {activeSection === "journal" && (
        <>
          <div className="page-header">
            <div className="page-title">📓 Weekly Check-In</div>
            <div className="page-sub">Track how you're feeling — see your progress over time</div>
          </div>
          <div className="section-content">
            <JournalSection journal={journal} setJournal={setJournal} pathColor={path.color} pathLight={path.light} weekNum={weekNum} />
          </div>
        </>
      )}

      {/* ── PROTOCOL ───────────────────────────────────── */}
      {activeSection === "protocol" && (
        <>
          <div className="page-header">
            <div className="page-title">📋 My Protocol</div>
            <div className="page-sub">{path.name} — reference guide</div>
          </div>
          <div className="section-content">

            <div className="card" style={{ background: path.gradient, color: "white" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", opacity: 0.75, marginBottom: 8, fontFamily: "'Lato', sans-serif" }}>
                Your Priority Path
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
                {path.emoji} {path.name}
              </h2>
              <p style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                {path.tagline}
              </p>
            </div>

            <div className="card">
              <div className="card-title">🗓️ Your 12-Week Journey</div>
              {path.weeklyMilestones.map((m, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14, opacity: m.week > weekNum + 2 ? 0.4 : 1 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: m.week <= weekNum ? path.color : "#eee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: m.week <= weekNum ? "white" : "#999", fontFamily: "'Lato', sans-serif" }}>
                    {m.week}
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#aaa", marginBottom: 3, fontFamily: "'Lato', sans-serif" }}>Week {m.week}</div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.5, fontFamily: "'Lato', sans-serif" }}>{m.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-title">🥗 Key Foods for Your Pattern</div>
              <div>
                {path.keyFoods.map(food => (
                  <span key={food} className="food-chip">{food}</span>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-title">⏰ What to Expect</div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, fontFamily: "'Lato', sans-serif" }}>
                {path.expectWeeks}
              </p>
            </div>

          </div>
        </>
      )}

      {/* ── BOTTOM NAV ─────────────────────────────────── */}
      <nav className="nav-bar">
        {nav.map(item => (
          <button key={item.id} className="nav-item"
            onClick={() => setActiveSection(item.id)}
            style={{ color: activeSection === item.id ? path.color : "#bbb" }}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

// ─── JOURNAL SECTION ─────────────────────────────────────────────────
function JournalSection({ journal, setJournal, pathColor, pathLight, weekNum }) {
  const [energy, setEnergy] = useState(3);
  const [sleep, setSleep] = useState(3);
  const [mood, setMood] = useState(3);
  const [symptoms, setSymptoms] = useState("");
  const [wins, setWins] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const alreadyLogged = journal.some(e => e.date === today);

  function submitEntry() {
    if (alreadyLogged) return;
    const entry = { date: today, week: weekNum, energy, sleep, mood, symptoms, wins };
    setJournal([entry, ...journal]);
    setSymptoms("");
    setWins("");
  }

  const ScaleRow = ({ label, value, setValue, low, high }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontFamily: "'Lato', sans-serif", fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: "#333" }}>{label}</span>
        <span style={{ color: pathColor, fontWeight: 700 }}>{value}/5</span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[1,2,3,4,5].map(n => (
          <button key={n} onClick={() => setValue(n)}
            style={{ flex: 1, height: 36, border: "none", borderRadius: 8, cursor: "pointer", background: n <= value ? pathColor : "#f0f0f0", color: n <= value ? "white" : "#bbb", fontWeight: 700, fontSize: 13, transition: "all 0.15s", fontFamily: "'Lato', sans-serif" }}>
            {n}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "#bbb", fontFamily: "'Lato', sans-serif" }}>
        <span>{low}</span><span>{high}</span>
      </div>
    </div>
  );

  return (
    <>
      {!alreadyLogged ? (
        <div className="card">
          <div className="card-title">Week {weekNum} Check-In</div>
          <ScaleRow label="Energy" value={energy} setValue={setEnergy} low="Exhausted" high="Great" />
          <ScaleRow label="Sleep Quality" value={sleep} setValue={setSleep} low="Terrible" high="Amazing" />
          <ScaleRow label="Overall Mood" value={mood} setValue={setMood} low="Struggling" high="Thriving" />
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6, fontFamily: "'Lato', sans-serif" }}>
              Any symptoms to note?
            </label>
            <textarea rows={3} value={symptoms} onChange={e => setSymptoms(e.target.value)}
              placeholder="Headaches, joint aches, brain fog, emotional shifts... (these can be signs of healing)" />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6, fontFamily: "'Lato', sans-serif" }}>
              Any wins this week? 🎉
            </label>
            <textarea rows={2} value={wins} onChange={e => setWins(e.target.value)}
              placeholder="Better sleep, more energy, less brain fog, consistent cocktail..." />
          </div>
          <button className="submit-btn" onClick={submitEntry} style={{ background: pathColor }}>
            Save Check-In
          </button>
        </div>
      ) : (
        <div className="card" style={{ background: pathLight, border: `1px solid ${pathColor}30`, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: pathColor }}>
            Already logged today!
          </p>
          <p style={{ fontSize: 13, color: "#888", marginTop: 4, fontFamily: "'Lato', sans-serif" }}>
            Come back tomorrow for your next check-in
          </p>
        </div>
      )}

      {journal.length > 0 && (
        <div className="card">
          <div className="card-title">📈 Your Progress</div>
          {journal.slice(0, 8).map((entry, i) => (
            <div key={i} className="journal-entry" style={{ borderLeftColor: pathColor }}>
              <div className="journal-date">Week {entry.week} — {entry.date}</div>
              <div style={{ display: "flex", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                {[["⚡", "Energy", entry.energy], ["😴", "Sleep", entry.sleep], ["💭", "Mood", entry.mood]].map(([icon, label, val]) => (
                  <div key={label} style={{ fontSize: 12, color: "#666", fontFamily: "'Lato', sans-serif" }}>
                    {icon} {label}: <strong style={{ color: pathColor }}>{val}/5</strong>
                  </div>
                ))}
              </div>
              {entry.wins && <div className="journal-text">🎉 {entry.wins}</div>}
              {entry.symptoms && <div className="journal-text" style={{ marginTop: 4, color: "#888", fontSize: 13 }}>📝 {entry.symptoms}</div>}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
