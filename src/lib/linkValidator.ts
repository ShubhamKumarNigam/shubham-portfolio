import { publications, projects, datasetsModels, talks, profile } from "@/data/profile";

interface LinkIssue {
  type: "hash" | "malformed" | "placeholder" | "duplicate" | "bibtex-placeholder" | "conference-mislabeled" | "proceedings-anthology-duplicate";
  context: string;
  field: string;
  value: string;
}

function isMalformed(url: string): boolean {
  try {
    new URL(url);
    return false;
  } catch {
    return true;
  }
}

function isPlaceholder(url: string): boolean {
  const placeholders = [
    "example.com",
    "placeholder",
    "your-link",
    "coming soon",
    "coming-soon",
    "TODO",
    "todo",
    "fixme",
    "FIXME",
    "tbd",
    "TBD",
    "#",
  ];
  return placeholders.some((p) => url.toLowerCase().includes(p.toLowerCase()));
}

function checkBibtex(pub: typeof publications[number], issues: LinkIssue[]) {
  if (!pub.bibtexText) return;
  const text = pub.bibtexText.toLowerCase();
  const badPatterns = ["coming soon", "placeholder", "todo", "fixme", "tbd", "arxiv:xxxx", "author={???}"];
  for (const p of badPatterns) {
    if (text.includes(p)) {
      issues.push({
        type: "bibtex-placeholder",
        context: `publication: ${pub.title}`,
        field: "bibtexText",
        value: pub.bibtexText.slice(0, 120) + (pub.bibtexText.length > 120 ? "..." : ""),
      });
      return;
    }
  }
}

function checkPublicationData(issues: LinkIssue[]) {
  for (const pub of publications) {
    // Check individual links
    for (const [key, value] of Object.entries(pub.links)) {
      if (typeof value === "string" && value.trim() !== "") {
        const url = value.trim();
        if (url === "#") {
          issues.push({ type: "hash", context: `publication: ${pub.title}`, field: key, value: url });
        } else if (isMalformed(url)) {
          issues.push({ type: "malformed", context: `publication: ${pub.title}`, field: key, value: url });
        } else if (isPlaceholder(url)) {
          issues.push({ type: "placeholder", context: `publication: ${pub.title}`, field: key, value: url });
        }
      }
    }

    // Check BibTeX
    checkBibtex(pub, issues);

    // Check if conference links are mislabeled as project
    if (pub.links.project) {
      const projUrl = pub.links.project;
      const isConfUrl = projUrl.includes("lrec2026") ||
                        projUrl.includes("bridge-ai-law") ||
                        projUrl.includes("bhasha-workshop") ||
                        projUrl.includes("sail-workshop") ||
                        projUrl.includes("smu.edu.sg/icail");
      if (isConfUrl) {
        issues.push({
          type: "conference-mislabeled",
          context: `publication: ${pub.title}`,
          field: "project",
          value: `URL "${projUrl}" appears to be a conference page, not a project page`,
        });
      }
    }

    // Check if proceedings and anthology have the same URL (duplicate button on UI)
    if (pub.links.proceedings && pub.links.anthology && pub.links.proceedings === pub.links.anthology) {
      issues.push({
        type: "proceedings-anthology-duplicate",
        context: `publication: ${pub.title}`,
        field: "proceedings / anthology",
        value: `Same URL "${pub.links.proceedings}" — UI will show duplicate buttons`,
      });
    }
  }
}

function checkProfileAndProjects(issues: LinkIssue[]) {
  // Profile social links
  for (const [key, value] of Object.entries(profile.socials)) {
    if (typeof value === "string" && value.trim() !== "") {
      const url = value.trim();
      if (url === "#" || isMalformed(url) || isPlaceholder(url)) {
        issues.push({ type: (url === "#" ? "hash" : isMalformed(url) ? "malformed" : "placeholder"), context: "profile.socials", field: key, value: url });
      }
    }
  }

  for (const proj of projects) {
    for (const [key, value] of Object.entries(proj.links)) {
      if (typeof value === "string" && value.trim() !== "") {
        const url = value.trim();
        if (url === "#" || isMalformed(url) || isPlaceholder(url)) {
          issues.push({ type: (url === "#" ? "hash" : isMalformed(url) ? "malformed" : "placeholder"), context: `project: ${proj.name}`, field: key, value: url });
        }
      }
    }
  }

  for (const dm of datasetsModels) {
    for (const [key, value] of Object.entries(dm.links)) {
      if (typeof value === "string" && value.trim() !== "") {
        const url = value.trim();
        if (url === "#" || isMalformed(url) || isPlaceholder(url)) {
          issues.push({ type: (url === "#" ? "hash" : isMalformed(url) ? "malformed" : "placeholder"), context: `dataset/model: ${dm.name}`, field: key, value: url });
        }
      }
    }
  }

  for (const talk of talks) {
    for (const [key, value] of Object.entries(talk.links)) {
      if (typeof value === "string" && value.trim() !== "") {
        const url = value.trim();
        if (url === "#" || isMalformed(url) || isPlaceholder(url)) {
          issues.push({ type: (url === "#" ? "hash" : isMalformed(url) ? "malformed" : "placeholder"), context: `talk: ${talk.title}`, field: key, value: url });
        }
      }
    }
  }
}

function runValidation() {
  const issues: LinkIssue[] = [];

  checkPublicationData(issues);
  checkProfileAndProjects(issues);

  console.log(`\n=== Link Validation Report ===\n`);

  const grouped = issues.reduce((acc, issue) => {
    acc[issue.type] = acc[issue.type] || [];
    acc[issue.type].push(issue);
    return acc;
  }, {} as Record<string, LinkIssue[]>);

  const totalReal = (grouped["hash"]&&grouped["hash"].length || 0)
    + (grouped["malformed"]&&grouped["malformed"].length || 0)
    + (grouped["placeholder"]&&grouped["placeholder"].length || 0)
    + (grouped["bibtex-placeholder"]&&grouped["bibtex-placeholder"].length || 0);

  console.log(`Total real issues found: ${totalReal}\n`);

  for (const [type, items] of Object.entries(grouped)) {
    if (type === "proceedings-anthology-duplicate" || type === "conference-mislabeled") continue;
    console.log(`\n${type.toUpperCase()} (${items.length}):`);
    for (const item of items) {
      console.log(`  - [${item.context}] ${item.field}: "${item.value}"`);
    }
  }

  const warnings = issues.filter(i => i.type === "proceedings-anthology-duplicate" || i.type === "conference-mislabeled");
  if (warnings.length > 0) {
    console.log(`\nWARNINGS (${warnings.length}):`);
    for (const item of warnings) {
      console.log(`  - [${item.context}] ${item.field}: ${item.value}`);
    }
  }

  if (totalReal === 0) {
    console.log("✅ All links and BibTeX look good!");
  }

  process.exit(totalReal > 0 ? 1 : 0);
}

runValidation();
