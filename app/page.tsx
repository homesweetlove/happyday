"use client";

import Image from "next/image";
import { useState } from "react";

const RECIPIENT = "친구야";
const GIFT_CODE = "P86ZX479LL";
const GIFT_NAME = "배민상품권 2만원 교환권";
const GIFT_EXPIRES = "2026.09.25";
const GIFT_URL = "https://kko.to/jiwAQa-6Jy";

type Phase = "intro" | "cake" | "delivery" | "celebrate";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [blown, setBlown] = useState(false);
  const [copied, setCopied] = useState(false);

  const openCake = () => {
    setBlown(false);
    setCopied(false);
    setPhase("cake");
  };

  const blowCandle = () => {
    if (blown) return;

    setBlown(true);

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(35);
    }

    window.setTimeout(() => {
      setPhase("delivery");

      window.setTimeout(() => {
        setPhase("celebrate");
      }, 4800);
    }, 850);
  };

  const replay = () => {
    setBlown(false);
    setCopied(false);
    setPhase("cake");
  };

  const copyGiftCode = async () => {
    try {
      await navigator.clipboard.writeText(GIFT_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="page">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <section className={`scene ${phase === "intro" ? "isActive" : "isHidden"}`}>
        <div className="introCard">
          <p className="eyebrow">오늘의 작은 이벤트</p>
          <h1>
            아주 중요한 알림이
            <br />
            도착했어.
          </h1>
          <p className="subcopy">
            1년에 딱 한 번만 뜨는 알림이래.
            <br />
            직접 확인해봐 🎈
          </p>
          <button className="primaryButton" onClick={openCake}>
            열어보기
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <section className={`scene cakeScene ${phase === "cake" ? "isActive" : "isHidden"}`}>
        <div className="cakeCopy">
          <p className="eyebrow">소원 하나만 생각해봐</p>
          <h2>촛불을 톡 눌러줘 🎂</h2>
        </div>

        <div className={`cakeWrap ${blown ? "blown" : ""}`}>
          <button
            className="flameButton"
            onClick={blowCandle}
            aria-label="촛불 끄기"
          >
            <span className="flameGlow" />
            <span className="flame" />
            <span className="wick" />
            <span className="smoke smokeOne" />
            <span className="smoke smokeTwo" />
          </button>

          <div className="candle">
            <span className="candleStripe stripeOne" />
            <span className="candleStripe stripeTwo" />
            <span className="candleStripe stripeThree" />
          </div>

          <div className="cake">
            <div className="frosting">
              <span className="drip dripOne" />
              <span className="drip dripTwo" />
              <span className="drip dripThree" />
              <span className="drip dripFour" />
            </div>

            <div className="sprinkles" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, index) => (
                <span key={index} className={`sprinkle sprinkle${index + 1}`} />
              ))}
            </div>
          </div>

          <div className="plate" />
        </div>

        <p className="tapHint">
          {blown ? "소원 접수 완료 ✨" : "불꽃을 눌러봐"}
        </p>
      </section>

      <section className={`scene deliveryScene ${phase === "delivery" ? "isActive" : "isHidden"}`}>
        <div className="deliveryCopy">
          <p className="eyebrow">잠깐, 선물이 오는 중이야</p>
          <h2>배달 출발 🛵</h2>
          <p>조금만 기다려줘. 금방 도착해!</p>
        </div>

        <div className="speedLine speed1" />
        <div className="speedLine speed2" />
        <div className="road" />

        <div className="rider" aria-hidden="true">
          <Image
            src="/delivery-rider.svg"
            alt=""
            width={640}
            height={360}
            priority
          />
        </div>

        <div className="deliveryArrived">선물이 도착했어요 ✓</div>
      </section>

      <section className={`scene celebrateScene ${phase === "celebrate" ? "isActive" : "isHidden"}`}>
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 34 }).map((_, index) => (
            <span
              key={index}
              className={`confettiPiece confettiColor${index % 5}`}
              style={{
                left: `${(index * 29) % 100}%`,
                animationDelay: `${(index % 9) * 85}ms`,
                animationDuration: `${2200 + (index % 6) * 180}ms`,
              }}
            />
          ))}
        </div>

        <div className="celebrateContent">
          <div className="checkBadge" aria-hidden="true">✓</div>
          <p className="eyebrow">오늘의 소원 완료</p>

          <h2>
            {RECIPIENT},
            <br />
            생일 축하해! 🎉
          </h2>

          <p className="message">
            임용 준비하느라 정말 고생 많지.
            <br />
            오늘만큼은 잠깐 쉬어가도 돼.
            <br />
            올해는 좋은 일만 가득했으면 좋겠다 :)
          </p>

          <div className="giftIntro">
            <span>그리고</span>
            <strong>작은 선물도 준비했어.</strong>
          </div>

          <div className="giftCard">
            <div className="giftTopline">
              <div>
                <p>FOR YOU</p>
                <strong>{GIFT_NAME}</strong>
              </div>
              <span className="giftPill">BAEMIN GIFT</span>
            </div>

            <div className="giftCodePanel">
              <span className="giftCodeLabel">선물코드</span>
              <strong className="giftCodeValue">{GIFT_CODE}</strong>
              <button className="copyButton" onClick={copyGiftCode}>
                {copied ? "복사했어 ✓" : "코드 복사"}
              </button>
            </div>

            <div className="giftMeta">
              <div>
                <span>등록 기한</span>
                <strong>{GIFT_EXPIRES}</strong>
              </div>
              <div>
                <span>등록 방법</span>
                <strong>카카오톡 선물함 → 선물코드 등록</strong>
              </div>
            </div>

            <a
              className="redeemButton"
              href={GIFT_URL}
              target="_blank"
              rel="noreferrer"
            >
              선물 등록하러 가기
              <span aria-hidden="true">→</span>
            </a>

            <p className="giftNote">
              위 버튼이 안 열리면 선물코드를 복사해서 카카오톡 선물함에 직접 등록하면 돼.
            </p>
          </div>

          <button className="secondaryButton" onClick={replay}>
            촛불 다시 켜기
          </button>
        </div>
      </section>
    </main>
  );
}
