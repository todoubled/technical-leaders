import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

interface ChatMessage {
  sender: "t" | "sarah";
  text: string;
  time: string;
}

const CONVERSATION: ChatMessage[] = [
  {
    sender: "t",
    text: "☀️ Good morning, Sarah. Friday, Jan 31.",
    time: "6:00 AM",
  },
  {
    sender: "t",
    text: "📅 YOUR DAY\n• 9:00 — Team standup\n• 11:00 — Client call (Acme Corp)\n• 2:30 — Board prep with CFO\n• 4:00 — Deep work block",
    time: "6:00 AM",
  },
  {
    sender: "t",
    text: "🎯 TOP 3 PRIORITIES\n1. Close the Acme proposal ($240k)\n2. Review Q1 hiring plan\n3. Follow up with investor (day 5)",
    time: "6:00 AM",
  },
  {
    sender: "t",
    text: "📬 2 FOLLOW-UPS OVERDUE\n• Sarah Chen — proposal (5 days)\n• Mike Torres — intro request (3 days)\n\n💡 You've had back-to-back meetings 4 of 5 days. Block deep work today?",
    time: "6:01 AM",
  },
  { sender: "sarah", text: "ya block 4-6pm energy is like a 7 today", time: "6:15 AM" },
  {
    sender: "t",
    text: "✅ Done. Blocked 4-6pm on your calendar.\n\nBased on your energy, I front-loaded the Acme call prep. Draft is ready — want to review now or at 10?",
    time: "6:15 AM",
  },
  { sender: "sarah", text: "send it now also where are we on pipeline this month", time: "6:18 AM" },
  {
    sender: "t",
    text: "📊 JANUARY PIPELINE\n• Closed: $380k (target: $500k)\n• In proposal: $240k (Acme) + $85k (Bolt)\n• Leads in nurture: 12\n\nIf Acme closes today, you hit 124% of target. Want me to draft the follow-up sequence for Bolt?",
    time: "6:18 AM",
  },
  { sender: "sarah", text: "ya 3 email sequence emphasize the roi case study", time: "6:20 AM" },
  {
    sender: "t",
    text: "✅ 3-email nurture drafted for Bolt:\n1. ROI case study (send today)\n2. Objection handler (day 3)\n3. Soft close with calendar link (day 6)\n\nShall I send email 1 now?",
    time: "6:21 AM",
  },
  { sender: "sarah", text: "send it whats our content looking like this week", time: "9:45 AM" },
  {
    sender: "t",
    text: "📝 CONTENT THIS WEEK\n• Blog: \"5 Metrics Every CEO Tracks\" — 142 views, 8 signups\n• LinkedIn post queued for today\n• Newsletter draft ready for Sunday\n\n🔍 SEO opportunity: \"CEO daily routine\" — 4.2k monthly searches. Want me to outline a post?",
    time: "9:45 AM",
  },
  { sender: "sarah", text: "outline it and pull newsletter metrics from last week", time: "9:47 AM" },
  {
    sender: "t",
    text: "📧 LAST WEEK'S NEWSLETTER\n• Sent to: 3,842 subscribers\n• Open rate: 44.2% (avg: 21%)\n• Click rate: 8.1%\n• New subs: +127\n\nYour audience loves the tactical breakdowns. This week's draft leans into that.",
    time: "9:48 AM",
  },
  { sender: "sarah", text: "whats the hiring status", time: "10:02 AM" },
  {
    sender: "t",
    text: "👥 HIRING UPDATE\n• Senior Engineer: 3 finalists, interviews Tues\n• Marketing Lead: 47 applicants, 6 screened\n• Customer Success: Offer to Jamie Park (day 2)\n\n⚠️ Jamie's deadline is Monday. Send a warm nudge?",
    time: "10:02 AM",
  },
  { sender: "sarah", text: "nudge jamie and prep me for the acme call", time: "10:05 AM" },
  {
    sender: "t",
    text: "📋 ACME CALL PREP\n• Decision maker: VP Ops (Lisa Tran)\n• Budget: $240k confirmed\n• Objection: integration timeline\n• Your play: Bolt case study (12-day integration)\n• Ask for: Signed LOI by EOD\n\nOne-pager attached to your email. 🎯",
    time: "10:06 AM",
  },
  { sender: "sarah", text: "acme call done lisa wants to move forward needs legal review tho", time: "11:52 AM" },
  {
    sender: "t",
    text: "🎉 Great signal. I've:\n• Set follow-up reminders for Feb 7 + 14\n• Drafted a recap email to Lisa\n• Updated pipeline: Acme → Legal Review",
    time: "11:52 AM",
  },
  { sender: "sarah", text: "pull our monthly burn and runway", time: "2:00 PM" },
  {
    sender: "t",
    text: "💰 FINANCIAL SNAPSHOT\n• Monthly burn: $82k\n• Revenue (Jan): $380k + $240k pending\n• Cash: $1.2M\n• Runway: 14.6 months\n\nWith Acme, net margin improves to 34%. Update the board deck?",
    time: "2:00 PM",
  },
  { sender: "sarah", text: "ya update the deck add the pipeline slide too", time: "2:03 PM" },
  {
    sender: "t",
    text: "✅ Board deck updated:\n• Slide 4: Revenue → $380k + Acme pending\n• Slide 7: Pipeline funnel added\n• Slide 9: Hiring timeline refreshed\n\nShared to Drive. CFO meeting in 27 min.",
    time: "2:04 PM",
  },
  { sender: "sarah", text: "long day how are customers doing", time: "6:30 PM" },
  {
    sender: "t",
    text: "🤝 CUSTOMER HEALTH\n• NPS: 72 (up from 68)\n• Churn risk: 2 flagged\n  → DataFlow: usage down 40%\n  → Pinnacle: tickets up 3x\n• 🌟 CloudBase renewed 2 years ($156k)\n\nDraft save plays for at-risk accounts?",
    time: "6:30 PM",
  },
  { sender: "sarah", text: "draft them ill review tmrw", time: "6:32 PM" },
  {
    sender: "t",
    text: "🌙 END OF DAY\n\n✅ Done today:\n• Acme → legal ✓\n• Bolt nurture sent ✓\n• Board deck updated ✓\n• Jamie nudged ✓\n• Deep work protected ✓\n\n📌 Monday:\n• Review save plays\n• Finalize Q1 hiring\n• Sunday: strategic review\n\nStrong day, Sarah. Enjoy the weekend. 🧡",
    time: "8:00 PM",
  },
];

// Timing: Sarah messages get extra frames for typing + send animation
const T_MSG_DURATION = 50; // T messages: just appear
const SARAH_TYPING_FRAMES = 30; // typing into input box
const SARAH_SEND_FRAMES = 8; // send button flash
const SARAH_FLY_FRAMES = 10; // fly up into chat
const SARAH_MSG_DURATION = SARAH_TYPING_FRAMES + SARAH_SEND_FRAMES + SARAH_FLY_FRAMES + 15; // + hold
const MSG_ENTRANCE = 12;

// Precompute absolute start frame for each message
const MSG_START_FRAMES: number[] = [];
let runningFrame = 0;
for (const msg of CONVERSATION) {
  MSG_START_FRAMES.push(runningFrame);
  runningFrame += msg.sender === "sarah" ? SARAH_MSG_DURATION : T_MSG_DURATION;
}
const TOTAL_FRAMES = runningFrame;

const WA_BG = "#0b141a";
const WA_HEADER_BG = "#1f2c34";
const WA_T_BUBBLE = "#005c4b";
const WA_SARAH_BUBBLE = "#1f2c34";

const FONT_SIZE = 46;
const TIMESTAMP_SIZE = 32;
const LINE_HEIGHT = 1.45;
const BUBBLE_PADDING = "28px 36px";
const BUBBLE_RADIUS = 28;
const BUBBLE_GAP = 32;
const FONT_FAMILY = "'SF Pro Text', 'Inter', -apple-system, system-ui, sans-serif";

const isSectionHeader = (line: string) =>
  /^(📅|🎯|📬|📊|📝|📧|👥|📋|💰|🤝|🌙|✅)/.test(line.trim()) &&
  (line.includes("YOUR DAY") ||
    line.includes("TOP 3") ||
    line.includes("FOLLOW-UP") ||
    line.includes("PIPELINE") ||
    line.includes("CONTENT") ||
    line.includes("NEWSLETTER") ||
    line.includes("HIRING") ||
    line.includes("CALL PREP") ||
    line.includes("FINANCIAL") ||
    line.includes("CUSTOMER") ||
    line.includes("END OF DAY") ||
    line.includes("Done today") ||
    line.includes("Monday:") ||
    line.includes("Carry to"));

const ChatBubble: React.FC<{
  message: ChatMessage;
  animProgress: number;
}> = ({ message, animProgress }) => {
  const isT = message.sender === "t";
  const lines = message.text.split("\n");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isT ? "flex-start" : "flex-end",
        opacity: animProgress,
        transform: `translateY(${interpolate(animProgress, [0, 1], [40, 0])}px)`,
        marginBottom: BUBBLE_GAP,
      }}
    >
      <div
        style={{
          maxWidth: "92%",
          backgroundColor: isT ? WA_T_BUBBLE : WA_SARAH_BUBBLE,
          borderRadius: BUBBLE_RADIUS,
          borderTopLeftRadius: isT ? 4 : BUBBLE_RADIUS,
          borderTopRightRadius: isT ? BUBBLE_RADIUS : 4,
          padding: BUBBLE_PADDING,
        }}
      >
        {lines.map((line, i) => {
          const isHeader = isSectionHeader(line);
          const isBullet = line.startsWith("•") || line.startsWith("→");
          const isNumbered = /^\d\./.test(line.trim());

          return (
            <p
              key={i}
              style={{
                margin: 0,
                padding: 0,
                fontSize: FONT_SIZE,
                lineHeight: LINE_HEIGHT,
                color: "#e9edef",
                fontFamily: FONT_FAMILY,
                marginTop:
                  i === 0
                    ? 0
                    : isBullet || isNumbered
                      ? 6
                      : isHeader
                        ? 20
                        : 14,
                fontWeight: isHeader ? 600 : 400,
                whiteSpace: "pre-wrap",
                letterSpacing: "-0.01em",
              }}
            >
              {line}
            </p>
          );
        })}
        <p
          style={{
            margin: 0,
            marginTop: 12,
            fontSize: TIMESTAMP_SIZE,
            color: "rgba(134, 150, 160, 0.8)",
            textAlign: "right",
            fontFamily: FONT_FAMILY,
          }}
        >
          {message.time} {isT && <span style={{ color: "#53bdeb" }}>✓✓</span>}
        </p>
      </div>
    </div>
  );
};

// Estimate bubble height for scroll
const estimateHeight = (msg: ChatMessage): number => {
  const lines = msg.text.split("\n");
  const textHeight = lines.length * FONT_SIZE * LINE_HEIGHT;
  const spacing = lines.length * 8;
  const padding = 56 + 44;
  return textHeight + spacing + padding + BUBBLE_GAP;
};

const CUMULATIVE_HEIGHTS: number[] = [];
let cumHeight = 0;
for (const msg of CONVERSATION) {
  cumHeight += estimateHeight(msg);
  CUMULATIVE_HEIGHTS.push(cumHeight);
}

const CHAT_VISIBLE_HEIGHT = 1520;

export const WhatsAppDemo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Determine how many messages are fully "sent" (visible in chat)
  let visibleCount = 0;
  for (let i = 0; i < CONVERSATION.length; i++) {
    const msg = CONVERSATION[i];
    const startFrame = MSG_START_FRAMES[i];
    if (msg.sender === "sarah") {
      // Sarah message is "sent" after typing + send phases
      const sentFrame = startFrame + SARAH_TYPING_FRAMES + SARAH_SEND_FRAMES;
      if (frame >= sentFrame) visibleCount = i + 1;
    } else {
      if (frame >= startFrame) visibleCount = i + 1;
    }
  }

  // Find current active message (the one being animated right now)
  let activeMsgIndex = 0;
  for (let i = CONVERSATION.length - 1; i >= 0; i--) {
    if (frame >= MSG_START_FRAMES[i]) {
      activeMsgIndex = i;
      break;
    }
  }

  const activeMsg = CONVERSATION[activeMsgIndex];
  const activeStartFrame = MSG_START_FRAMES[activeMsgIndex];
  const localFrame = frame - activeStartFrame;

  // Sarah typing state
  const isSarahActive = activeMsg.sender === "sarah";
  const typingProgress = isSarahActive
    ? interpolate(localFrame, [0, SARAH_TYPING_FRAMES], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;
  const typedChars = isSarahActive
    ? Math.floor(typingProgress * activeMsg.text.length)
    : 0;
  const typedText = activeMsg.text.slice(0, typedChars);

  // Send button animation
  const sendPhaseStart = SARAH_TYPING_FRAMES;
  const isSending = isSarahActive && localFrame >= sendPhaseStart && localFrame < sendPhaseStart + SARAH_SEND_FRAMES;
  const sendScale = isSarahActive
    ? interpolate(
        localFrame,
        [sendPhaseStart, sendPhaseStart + 4, sendPhaseStart + SARAH_SEND_FRAMES],
        [1, 0.85, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : 1;

  // Is Sarah currently typing (show text in input)?
  const showTypingInInput = isSarahActive && localFrame < sendPhaseStart + SARAH_SEND_FRAMES;
  // Is Sarah message flying into chat?
  const flyStart = sendPhaseStart + SARAH_SEND_FRAMES;
  const isSarahFlying = isSarahActive && localFrame >= flyStart && localFrame < flyStart + SARAH_FLY_FRAMES;

  // Scroll
  const lastVisibleIndex = visibleCount - 1;
  const contentHeight = lastVisibleIndex >= 0 ? CUMULATIVE_HEIGHTS[lastVisibleIndex] : 0;
  const prevContentHeight = lastVisibleIndex >= 1 ? CUMULATIVE_HEIGHTS[lastVisibleIndex - 1] : 0;

  const targetScroll = Math.max(0, contentHeight - CHAT_VISIBLE_HEIGHT);
  const prevScroll = Math.max(0, prevContentHeight - CHAT_VISIBLE_HEIGHT);

  // Smooth scroll eased per message
  let scrollEase = 1;
  if (visibleCount > 0) {
    const lastMsgStart = MSG_START_FRAMES[lastVisibleIndex];
    const sinceAppear = frame - lastMsgStart;
    // For sarah messages, scroll starts after send
    const scrollDelay = CONVERSATION[lastVisibleIndex].sender === "sarah" ? flyStart : 0;
    const scrollFrame = sinceAppear - scrollDelay;
    scrollEase = interpolate(
      scrollFrame,
      [0, 20],
      [0, 1],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.cubic),
      }
    );
  }

  const totalScroll = prevScroll + (targetScroll - prevScroll) * scrollEase;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        padding: 16,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 48,
          overflow: "hidden",
          border: "3px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: WA_HEADER_BG,
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            gap: 28,
            flexShrink: 0,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#34d399",
              fontSize: 44,
              fontWeight: 700,
              fontFamily: FONT_FAMILY,
            }}
          >
            T
          </div>
          <div>
            <p
              style={{
                margin: 0,
                color: "#e9edef",
                fontSize: 44,
                fontWeight: 600,
                fontFamily: FONT_FAMILY,
              }}
            >
              T
            </p>
            <p
              style={{
                margin: 0,
                color: "#8696a0",
                fontSize: 32,
                fontFamily: FONT_FAMILY,
              }}
            >
              online
            </p>
          </div>
        </div>

        {/* Chat */}
        <div
          style={{
            flex: 1,
            backgroundColor: WA_BG,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              padding: "40px 32px",
              transform: `translateY(${-totalScroll}px)`,
            }}
          >
            {CONVERSATION.slice(0, visibleCount).map((msg, i) => {
              const msgStart = MSG_START_FRAMES[i];
              const msgLocal = frame - msgStart;

              // For Sarah messages that just got sent, animate fly-in
              let progress: number;
              if (msg.sender === "sarah" && i === visibleCount - 1) {
                const flyLocal = msgLocal - flyStart;
                progress = interpolate(
                  flyLocal,
                  [0, SARAH_FLY_FRAMES],
                  [0, 1],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.out(Easing.cubic),
                  }
                );
              } else {
                progress = interpolate(
                  msgLocal,
                  [0, MSG_ENTRANCE],
                  [0, 1],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.out(Easing.cubic),
                  }
                );
              }

              return (
                <ChatBubble
                  key={i}
                  message={msg}
                  animProgress={progress}
                />
              );
            })}
          </div>
        </div>

        {/* Input bar */}
        <div
          style={{
            backgroundColor: WA_HEADER_BG,
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexShrink: 0,
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              flex: 1,
              height: 96,
              borderRadius: 48,
              backgroundColor: "#2a3942",
              paddingLeft: 40,
              paddingRight: 40,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {showTypingInInput && typedChars > 0 ? (
              <span
                style={{
                  color: "#e9edef",
                  fontSize: 36,
                  fontFamily: FONT_FAMILY,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {typedText}
                <span
                  style={{
                    opacity: interpolate(
                      frame % 20,
                      [0, 10, 20],
                      [1, 0, 1],
                      { extrapolateRight: "clamp" }
                    ),
                    color: "#e9edef",
                  }}
                >
                  |
                </span>
              </span>
            ) : (
              <span
                style={{
                  color: "#8696a0",
                  fontSize: 36,
                  fontFamily: FONT_FAMILY,
                }}
              >
                Message
              </span>
            )}
          </div>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              backgroundColor: showTypingInInput && typedChars > 0 ? "#00a884" : "#2a3942",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${sendScale})`,
            }}
          >
            {showTypingInInput && typedChars > 0 ? (
              <span style={{ color: "white", fontSize: 40, marginLeft: 4 }}>➤</span>
            ) : (
              <span style={{ color: "#8696a0", fontSize: 44 }}>🎤</span>
            )}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
