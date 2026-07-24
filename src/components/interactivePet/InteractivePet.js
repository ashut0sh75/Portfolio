import React, {useEffect, useRef, useState, useCallback} from "react";
import "./InteractivePet.scss";

/* Light-hearted lines shown only when the cursor hovers near the pet. */
const QUIPS = [
  "beep boop 🤖",
  "console.log('hi 👋')",
  "npm run coffee ☕",
  "404: sleep not found",
  "Psst… try clicking things!",
  "I follow your cursor 👀",
  "Refactoring reality...",
  "It works on my machine 🤷"
];

/* Section id -> meaningful thing to say when that section is clicked. */
const SECTION_MSG = {
  greeting: "That's the man himself — Ashutosh! 👨‍💻",
  stats: "The numbers don't lie — real impact 📈",
  skills: "These are Ashutosh's daily-driver tools 🛠️",
  experience: "Production systems 50K+ agents rely on ⚙️",
  education: "KIET grad · CGPA 8.04 🎓",
  achievements: "Top 3% on LeetCode — the grind pays off ♞",
  certificate: "Always leveling up — nice pick! 📜",
  blogs: "110K+ reads on these articles ✍️",
  contact: "Go on, say hi — the inbox is always open! 🤝",
  projects: "One of Ashutosh's favourite builds 🚀"
};
const SECTION_IDS = Object.keys(SECTION_MSG);

const PET_SIZE = 66;

export default function InteractivePet() {
  const petRef = useRef(null);
  const bodyRef = useRef(null);
  const leftPupil = useRef(null);
  const rightPupil = useRef(null);

  const pos = useRef({x: 80, y: 160});
  const target = useRef({x: 80, y: 160});
  const facing = useRef(1);
  const idleUntil = useRef(0);
  const mouse = useRef({x: window.innerWidth / 2, y: window.innerHeight / 2});
  const frame = useRef(null);
  const msgTimer = useRef(null);
  const proximityCooldown = useRef(0);

  const [message, setMessage] = useState("");
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const say = useCallback(text => {
    setMessage(text);
    clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(""), 3200);
  }, []);

  const hop = useCallback(() => {
    const el = petRef.current;
    if (!el) return;
    el.classList.remove("pet-hop");
    void el.offsetWidth; // reflow so the animation retriggers
    el.classList.add("pet-hop");
  }, []);

  const pickTarget = useCallback(() => {
    const pad = 30;
    target.current = {
      x: pad + Math.random() * (window.innerWidth - PET_SIZE - pad * 2),
      y: 90 + Math.random() * (window.innerHeight - PET_SIZE - 160)
    };
  }, []);

  // Clicking the pet itself -> a friendly nudge, and it hops.
  const handlePetClick = useCallback(
    e => {
      e.stopPropagation();
      say("Click on the sections — I'll tell you about them! ✨");
      hop();
    },
    [say, hop]
  );

  // Work out a meaningful message for whatever component was clicked.
  const contextMessage = useCallback(target => {
    if (target.closest(".icon-button")) {
      return "Let's connect — Ashutosh replies fast! 🔗";
    }
    if (target.closest(".copy-btn")) {
      return "Copied! Now go send that message 📋";
    }
    if (target.closest(".main-button")) {
      return "Good move — that's a solid click! 👍";
    }
    const cert = target.closest(".certificate-card");
    if (cert) {
      const t = cert.querySelector(".card-title");
      const name = t && t.textContent.trim();
      return name ? `“${name}” — earned and proud of it! 📜` : SECTION_MSG.certificate;
    }
    const proj = target.closest(".project-card");
    if (proj) {
      const t = proj.querySelector(".card-title");
      const name = t && t.textContent.trim();
      return name ? `“${name}” — loved building this one 🚀` : SECTION_MSG.projects;
    }
    // Fall back to the nearest known section.
    let n = target;
    while (n && n !== document.body) {
      if (n.id && SECTION_IDS.includes(n.id)) {
        return SECTION_MSG[n.id];
      }
      n = n.parentElement;
    }
    return null;
  }, []);

  useEffect(() => {
    const onMove = e => {
      mouse.current = {x: e.clientX, y: e.clientY};
    };
    window.addEventListener("mousemove", onMove);

    // React to clicks on real components with a meaningful line.
    const onDocClick = e => {
      if (e.target.closest(".pet")) return; // pet has its own handler
      const msg = contextMessage(e.target);
      if (msg) {
        say(msg);
        hop();
      }
    };
    document.addEventListener("click", onDocClick);

    const greet = setTimeout(
      () => say("Hey! I'm Bit — click around and I'll chime in 🤖"),
      1400
    );

    const updateEyes = () => {
      const p = pos.current;
      const cx = p.x + PET_SIZE / 2;
      const cy = p.y + PET_SIZE / 2;
      const ang = Math.atan2(mouse.current.y - cy, mouse.current.x - cx);
      const r = 2.4;
      const ox = Math.cos(ang) * r;
      const oy = Math.sin(ang) * r;
      if (leftPupil.current)
        leftPupil.current.style.transform = `translate(${ox}px, ${oy}px)`;
      if (rightPupil.current)
        rightPupil.current.style.transform = `translate(${ox}px, ${oy}px)`;
    };

    if (reduced) {
      pos.current = {x: 24, y: window.innerHeight - 120};
      if (petRef.current) {
        petRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      const eyeLoop = () => {
        updateEyes();
        frame.current = requestAnimationFrame(eyeLoop);
      };
      eyeLoop();
      return () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("click", onDocClick);
        clearTimeout(greet);
        clearTimeout(msgTimer.current);
        cancelAnimationFrame(frame.current);
      };
    }

    pickTarget();

    const tick = now => {
      const p = pos.current;
      const t = target.current;
      const dx = t.x - p.x;
      const dy = t.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (now > idleUntil.current) {
        if (dist < 3) {
          idleUntil.current = now + 800 + Math.random() * 2200;
          pickTarget();
        } else {
          const speed = Math.min(1.8, dist);
          p.x += (dx / dist) * speed;
          p.y += (dy / dist) * speed;
          if (Math.abs(dx) > 0.5) facing.current = dx < 0 ? -1 : 1;
        }
      }

      // Random quip ONLY when the cursor is hovering near the pet.
      const mdx = mouse.current.x - (p.x + PET_SIZE / 2);
      const mdy = mouse.current.y - (p.y + PET_SIZE / 2);
      if (Math.hypot(mdx, mdy) < 95 && now > proximityCooldown.current) {
        proximityCooldown.current = now + 5000;
        say(QUIPS[Math.floor(Math.random() * QUIPS.length)]);
      }

      if (petRef.current)
        petRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      if (bodyRef.current)
        bodyRef.current.style.transform = `scaleX(${facing.current})`;
      updateEyes();
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);

    const onResize = () => pickTarget();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocClick);
      clearTimeout(greet);
      clearTimeout(msgTimer.current);
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <div className="pet-layer" aria-hidden="true">
      <div
        className="pet"
        ref={petRef}
        onClick={handlePetClick}
        role="button"
        tabIndex={-1}
      >
        {message && <div className="pet-bubble">{message}</div>}
        <div className="pet-body" ref={bodyRef}>
          <div className="pet-visual">
            <svg
              width={PET_SIZE}
              height={PET_SIZE}
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="33" y1="10" x2="33" y2="20" stroke="#818cf8" strokeWidth="2" />
              <circle cx="33" cy="8" r="4" fill="#22d3ee">
                <animate
                  attributeName="opacity"
                  values="1;0.4;1"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>
              <rect x="10" y="18" width="46" height="34" rx="12" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
              <rect x="15" y="23" width="36" height="24" rx="8" fill="#0f172a" />
              <g>
                <circle cx="26" cy="35" r="6" fill="#e5e7eb" />
                <circle ref={leftPupil} cx="26" cy="35" r="3" fill="#0f172a" />
              </g>
              <g>
                <circle cx="40" cy="35" r="6" fill="#e5e7eb" />
                <circle ref={rightPupil} cx="40" cy="35" r="3" fill="#0f172a" />
              </g>
              <circle cx="18" cy="43" r="2" fill="#f472b6" opacity="0.7" />
              <circle cx="48" cy="43" r="2" fill="#f472b6" opacity="0.7" />
              <rect x="20" y="52" width="9" height="6" rx="3" fill="#6366f1" />
              <rect x="37" y="52" width="9" height="6" rx="3" fill="#6366f1" />
            </svg>
          </div>
          <div className="pet-shadow" />
        </div>
      </div>
    </div>
  );
}
