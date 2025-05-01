import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "achievement-card"}>
      <div className="achievement-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="achievement-image"
        ></img>
      </div>
      <div className="achievement-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "achievement-title"}>
          {cardInfo.title}
        </h5>
        <p
          className={
            isDark ? "dark-mode card-subtitle" : "achievement-subtitle"
          }
        >
          {cardInfo.description}
        </p>
      </div>
      <div className="achievement-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={"dark-mode certificate-tag"}
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
