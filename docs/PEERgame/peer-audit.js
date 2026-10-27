(function (root) {
  const FIELDS = ["gender", "age", "ethnicity", "ethnicityDetail", "disability", "lgbtq", "faith", "rural"];
  function parseWho(s) { const v = (s || "").split("|"); const o = {}; FIELDS.forEach((f, i) => o[f] = v[i] || ""); return o; }
  function build(LEVELS, T, WHO, CROWD) {
    const rows = [], ids = new Map();
    const pid = spec => { if (!ids.has(spec)) ids.set(spec, "P" + String(ids.size + 1).padStart(3, "0")); return ids.get(spec); };
    const push = (lv, q, it, spec, source, appears, role, note) => {
      if (typeof spec !== "string" || spec === "screen" || (CROWD || []).includes(spec)) return;
      rows.push(Object.assign({ id: pid(spec), spec, level: lv, levelTitle: LEVELS[lv - 1].title, q, lead: it.lead, genre: it.genre, format: it.format, source, appears, role, note: note || "" }, parseWho(WHO[spec])));
    };
    const each = (spec, fn) => Array.isArray(spec) ? spec.forEach(fn) : fn(spec);
    const L = k => (T[k] ? T[k].label : "");
    LEVELS.forEach((lv, i) => lv.items.forEach((it, j) => {
      const n = i + 1, q = n + "." + (j + 1);
      if (lv.kind === "classify") push(n, q, it, it.av, it.source, "Best answer", L(it.answer));
      if (lv.kind === "gap") {
        (it.have || []).forEach(x => push(n, q, it, x.av, x.text, "Draft source", L(x.type)));
        it.options.forEach(o => {
          const best = o.id === it.answer, m = /:\s*(\w+)/.exec(o.tag);
          const role = best && m ? (m[1] === "Representative" ? "Representative" : m[1]) : "";
          each(o.av, s => push(n, q, it, s, o.source, best ? "Best answer" : (o.tag === "Role already covered" ? "Distractor" : "Weak option"), role, best ? "" : o.tag));
        });
      }
      if (lv.kind === "strategy") (it.scene || []).forEach(sc => push(n, q, it, sc.av, sc.cap, sc.cap.indexOf(",") > 0 ? "Scenario source" : "Scenario figure", sc.cap.indexOf(",") > 0 ? "Expertise" : ""));
      if (lv.kind === "slots") it.pool.forEach(p => {
        const slot = it.slots.find(s => s.answer === p.id);
        each(p.av, s => push(n, q, it, s, p.source, slot ? "Best answer" : "Weak option", slot ? L(slot.type) : "", slot ? "" : p.tag));
      });
      if (lv.kind === "build") it.pool.forEach(c => {
        const ok = c.type && (!it.only || it.only.includes(c.type));
        each(c.av, s => push(n, q, it, s, c.source, ok ? "Good choice" : (c.type ? "Distractor" : "Weak option"), c.type ? L(c.type) : "", ok ? "" : (c.type ? "Not needed in this story" : c.tag)));
      });
    }));
    const people = [];
    const seen = new Set();
    rows.forEach(r => { if (!seen.has(r.id)) { seen.add(r.id); people.push({ id: r.id, spec: r.spec, rows: rows.filter(x => x.id === r.id) }); } });
    return { rows, people };
  }
  const COLS = [["id", "Person ID"], ["level", "Level"], ["q", "Question"], ["levelTitle", "Level title"], ["genre", "Genre"], ["format", "Format"], ["lead", "Story lead"], ["source", "Source as shown"], ["appears", "Appears as"], ["role", "PEER role"], ["note", "Why weak"], ["gender", "Gender"], ["age", "Age"], ["ethnicity", "Ethnicity"], ["ethnicityDetail", "Ethnicity (detail)"], ["disability", "Disability"], ["lgbtq", "LGBTQ+"], ["faith", "Faith shown"], ["rural", "Rural or small town"], ["spec", "Avatar spec"]];
  function csv(rows) {
    const esc = v => { v = String(v == null ? "" : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    return [COLS.map(c => c[1]).join(",")].concat(rows.map(r => COLS.map(c => esc(r[c[0]])).join(","))).join("\n");
  }
  root.PEERAudit = { build, csv, parseWho };
})(typeof window !== "undefined" ? window : globalThis);
