"use client";

import { motion } from "framer-motion";

const orbitItems = [
  {
    type: "package",
    angle: -90,
    color: "#FFED00",
  },
  {
    type: "plane",
    angle: -30,
    color: "#A0D14F",
  },
  {
    type: "cart",
    angle: 30,
    color: "#FFED00",
  },
  {
    type: "people",
    angle: 90,
    color: "#A0D14F",
  },
  {
    type: "mobile",
    angle: 150,
    color: "#FFED00",
  },
  {
    type: "screen",
    angle: 210,
    color: "#A0D14F",
  },
];

function PackageIcon({ color }: { color: string }) {
  return (
    <g>
      <path
        d="M-10 -5 L0 -11 L10 -5 L0 1 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M-10 -5 V6 L0 12 L10 6 V-5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M0 1 V12" stroke={color} strokeWidth="1.4" />
      <path d="M-10 -5 L0 1 L10 -5" stroke={color} strokeWidth="1.4" />
    </g>
  );
}

function PlaneIcon({ color }: { color: string }) {
  return (
    <g>
      <path
        d="M-13 1 L13 -7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M-1 -2 L2 -13 L5 -12 L4 -1"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M1 0 L-7 8 L-4 9 L4 4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </g>
  );
}

function CartIcon({ color }: { color: string }) {
  return (
    <g>
      <path
        d="M-10 -9 H-6 L-3 4 H9"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M-4 -5 H11 L8 2 H-2"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="0" cy="9" r="2" fill={color} />
      <circle cx="8" cy="9" r="2" fill={color} />
    </g>
  );
}

function PeopleIcon({ color }: { color: string }) {
  return (
    <g>
      <circle cx="0" cy="-7" r="4" stroke={color} strokeWidth="1.6" />
      <circle cx="-9" cy="-2" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="9" cy="-2" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M-7 9 C-7 3 -4 0 0 0 C4 0 7 3 7 9"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M-14 8 C-14 4 -12 2 -9 2"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M14 8 C14 4 12 2 9 2"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  );
}

function MobileIcon({ color }: { color: string }) {
  return (
    <g>
      <rect
        x="-7"
        y="-13"
        width="14"
        height="26"
        rx="3"
        stroke={color}
        strokeWidth="1.7"
      />
      <circle cx="0" cy="9" r="1.2" fill={color} />
    </g>
  );
}

function ScreenIcon({ color }: { color: string }) {
  return (
    <g>
      <rect
        x="-13"
        y="-10"
        width="26"
        height="17"
        rx="2"
        stroke={color}
        strokeWidth="1.7"
      />
      <path
        d="M-5 11 H5"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M0 7 V11" stroke={color} strokeWidth="1.7" />
    </g>
  );
}

function OrbitIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "package":
      return <PackageIcon color={color} />;
    case "plane":
      return <PlaneIcon color={color} />;
    case "cart":
      return <CartIcon color={color} />;
    case "people":
      return <PeopleIcon color={color} />;
    case "mobile":
      return <MobileIcon color={color} />;
    case "screen":
      return <ScreenIcon color={color} />;
    default:
      return null;
  }
}

export default function HeroVisual() {
  return (
    <div className="relative h-[420px] w-full sm:h-[500px] lg:h-[540px]">
      <svg
        viewBox="0 20 720 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-label="Global digital technology and commerce visualization"
      >
        <defs>
          {/* ================================================= */}
          {/* GLOWS */}
          {/* ================================================= */}

          <radialGradient id="globeGlow">
            <stop offset="0%" stopColor="#A0D14F" stopOpacity="0.28" />
            <stop offset="35%" stopColor="#A0D14F" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#A0D14F" stopOpacity="0.025" />
            <stop offset="100%" stopColor="#A0D14F" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="yellowGlow">
            <stop offset="0%" stopColor="#FFED00" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFED00" stopOpacity="0" />
          </radialGradient>

          {/* ================================================= */}
          {/* GLOBE */}
          {/* ================================================= */}

          <radialGradient id="globeSurface" cx="35%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#A0D14F" stopOpacity="0.22" />
            <stop offset="42%" stopColor="#15220F" stopOpacity="0.75" />
            <stop offset="78%" stopColor="#07100B" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#020608" />
          </radialGradient>

          <linearGradient
            id="globeEdge"
            x1="210"
            y1="190"
            x2="510"
            y2="520"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E2FF8F" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#A0D14F" stopOpacity="0.45" />
            <stop offset="1" stopColor="#FFED00" stopOpacity="0.7" />
          </linearGradient>

          {/* ================================================= */}
          {/* ORBIT LINES */}
          {/* ================================================= */}

          <linearGradient
            id="orbitGradient"
            x1="100"
            y1="500"
            x2="620"
            y2="190"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A0D14F" stopOpacity="0" />
            <stop offset="0.35" stopColor="#A0D14F" stopOpacity="0.75" />
            <stop offset="0.65" stopColor="#FFED00" stopOpacity="0.95" />
            <stop offset="1" stopColor="#A0D14F" stopOpacity="0" />
          </linearGradient>

          {/* ================================================= */}
          {/* SHADOW */}
          {/* ================================================= */}

          <filter id="blurGlow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="22" />
          </filter>

          <filter id="smallGlow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ================================================= */}
          {/* GLASS BUBBLE */}
          {/* ================================================= */}

          <radialGradient id="bubbleSurface" cx="30%" cy="25%" r="80%">
            <stop stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="0.4" stopColor="#0D151A" stopOpacity="0.9" />
            <stop offset="1" stopColor="#05090D" stopOpacity="0.96" />
          </radialGradient>

          {/* ================================================= */}
          {/* GLOBE MASK */}
          {/* ================================================= */}

          <clipPath id="globeClip">
            <circle cx="360" cy="360" r="150" />
          </clipPath>
        </defs>

        {/* ===================================================== */}
        {/* BACKGROUND ATMOSPHERE */}
        {/* ===================================================== */}

        <circle
          cx="360"
          cy="360"
          r="270"
          fill="url(#globeGlow)"
          filter="url(#blurGlow)"
        />

        <circle
          cx="175"
          cy="170"
          r="130"
          fill="url(#yellowGlow)"
          filter="url(#blurGlow)"
          opacity="0.4"
        />

        {/* ===================================================== */}
        {/* SUBTLE OUTER CIRCLES */}
        {/* ===================================================== */}

        <motion.circle
          cx="360"
          cy="360"
          r="255"
          stroke="#A0D14F"
          strokeOpacity="0.06"
          strokeWidth="1"
          strokeDasharray="2 15"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "360px 360px",
          }}
        />

        <motion.circle
          cx="360"
          cy="360"
          r="290"
          stroke="#FFED00"
          strokeOpacity="0.035"
          strokeWidth="1"
          strokeDasharray="7 24"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "360px 360px",
          }}
        />

        {/* ===================================================== */}
        {/* ORBIT 1 */}
        {/* ===================================================== */}

        <ellipse
          cx="360"
          cy="360"
          rx="280"
          ry="112"
          transform="rotate(-22 360 360)"
          stroke="#A0D14F"
          strokeOpacity="0.13"
          strokeWidth="1"
        />

        <motion.ellipse
          cx="360"
          cy="360"
          rx="280"
          ry="112"
          transform="rotate(-22 360 360)"
          stroke="url(#orbitGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 22"
          animate={{
            strokeDashoffset: [0, -108],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ===================================================== */}
        {/* ORBIT 2 */}
        {/* ===================================================== */}

        <ellipse
          cx="360"
          cy="360"
          rx="285"
          ry="118"
          transform="rotate(28 360 360)"
          stroke="#FFED00"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <motion.ellipse
          cx="360"
          cy="360"
          rx="285"
          ry="118"
          transform="rotate(28 360 360)"
          stroke="url(#orbitGradient)"
          strokeWidth="1.7"
          strokeDasharray="4 26"
          animate={{
            strokeDashoffset: [0, 120],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ===================================================== */}
        {/* GLOWING ORBITING PARTICLES */}
        {/* ===================================================== */}

        <motion.g
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "360px 360px",
          }}
        >
          <circle
            cx="640"
            cy="360"
            r="5"
            fill="#A0D14F"
            filter="url(#smallGlow)"
          />

          <circle
            cx="640"
            cy="360"
            r="12"
            stroke="#A0D14F"
            strokeOpacity="0.13"
          />
        </motion.g>

        <motion.g
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "360px 360px",
          }}
        >
          <circle
            cx="360"
            cy="72"
            r="4"
            fill="#FFED00"
            filter="url(#smallGlow)"
          />
        </motion.g>

        {/* ===================================================== */}
        {/* DIGITAL GLOBE */}
        {/* ===================================================== */}

        <circle
          cx="360"
          cy="360"
          r="180"
          fill="#A0D14F"
          opacity="0.08"
          filter="url(#blurGlow)"
        />

        <circle
          cx="360"
          cy="360"
          r="154"
          fill="#050A0D"
          stroke="#A0D14F"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        <circle
          cx="360"
          cy="360"
          r="150"
          fill="url(#globeSurface)"
          stroke="url(#globeEdge)"
          strokeWidth="1.5"
        />

        {/* ===================================================== */}
        {/* GLOBE LATITUDE */}
        {/* ===================================================== */}

        <g clipPath="url(#globeClip)" opacity="0.45">
          <ellipse
            cx="360"
            cy="360"
            rx="149"
            ry="48"
            stroke="#A0D14F"
            strokeOpacity="0.23"
            strokeWidth="1"
          />

          <ellipse
            cx="360"
            cy="360"
            rx="149"
            ry="88"
            stroke="#A0D14F"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          <ellipse
            cx="360"
            cy="360"
            rx="149"
            ry="118"
            stroke="#A0D14F"
            strokeOpacity="0.1"
            strokeWidth="1"
          />

          <ellipse
            cx="360"
            cy="360"
            rx="55"
            ry="150"
            stroke="#FFED00"
            strokeOpacity="0.12"
            strokeWidth="1"
          />

          <ellipse
            cx="360"
            cy="360"
            rx="100"
            ry="150"
            stroke="#A0D14F"
            strokeOpacity="0.13"
            strokeWidth="1"
          />

          <ellipse
            cx="360"
            cy="360"
            rx="130"
            ry="150"
            stroke="#A0D14F"
            strokeOpacity="0.08"
            strokeWidth="1"
          />

          {/* Digital map-like land masses */}
          <path
            d="M300 260
               C286 267 276 282 281 297
               C286 311 297 313 299 330
               C300 343 292 354 301 365
               C310 376 319 369 326 381
               C335 395 324 411 334 424
               C343 436 352 428 358 413
               C365 395 351 375 360 360
               C368 346 360 333 351 321
               C343 310 337 296 333 282
               C329 268 315 254 300 260 Z"
            fill="#A0D14F"
            fillOpacity="0.16"
          />

          <path
            d="M407 256
               C422 261 430 275 429 289
               C428 301 419 310 423 323
               C428 340 445 344 442 360
               C440 375 428 379 425 392
               C422 407 433 423 425 438
               C417 451 398 449 391 432
               C385 418 393 403 387 389
               C381 376 367 367 371 351
               C375 336 389 326 387 311
               C385 294 391 269 407 256 Z"
            fill="#A0D14F"
            fillOpacity="0.12"
          />

          <path
            d="M466 323
               C481 327 493 337 498 349
               C503 361 496 370 485 375
               C474 380 469 392 463 402
               C457 412 447 408 445 396
               C444 384 451 373 449 361
               C447 348 453 329 466 323 Z"
            fill="#FFED00"
            fillOpacity="0.12"
          />
        </g>

        {/* ===================================================== */}
        {/* DIGITAL DATA POINTS ON GLOBE */}
        {/* ===================================================== */}

        {[
          [297, 292],
          [318, 315],
          [338, 280],
          [390, 292],
          [410, 336],
          [433, 358],
          [396, 398],
          [350, 420],
          [303, 376],
          [453, 304],
          [453, 398],
          [281, 345],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={index}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? 2.2 : 1.4}
            fill={index % 2 === 0 ? "#A0D14F" : "#FFED00"}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2.4 + index * 0.18,
              delay: index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ===================================================== */}
        {/* GLOBE LIGHT SWEEP */}
        {/* ===================================================== */}

        <motion.ellipse
          cx="360"
          cy="360"
          rx="149"
          ry="150"
          stroke="#D9FF82"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="35 270"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "360px 360px",
          }}
        />

        {/* ===================================================== */}
        {/* DIGIGROWTHTERZ LOGO */}
        {/* ===================================================== */}
        <motion.g
          animate={{
            scale: [1, 1.035, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "360px 360px",
          }}
        >
          <image
            href="/images/favicon.png"
            x="328"
            y="328"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </motion.g>

        {/* ===================================================== */}
        {/* HIGHLIGHT */}
        {/* ===================================================== */}

        <ellipse
          cx="315"
          cy="275"
          rx="65"
          ry="34"
          fill="#FFFFFF"
          opacity="0.045"
          transform="rotate(-26 315 275)"
        />

        {/* ===================================================== */}
        {/* ORBIT CAPABILITY BUBBLES */}
        {/* ===================================================== */}

        {orbitItems.map((item, index) => {
          const radius = 255;
          const radians = (item.angle * Math.PI) / 180;

          const x = 360 + radius * Math.cos(radians);

          const y = 360 + radius * Math.sin(radians);

          return (
            <motion.g
              key={item.type}
              animate={{
                y: [0, index % 2 === 0 ? -8 : 8, 0],
              }}
              transition={{
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {/* Outer glow */}
              <circle
                cx={x}
                cy={y}
                r="46"
                fill={item.color}
                opacity="0.045"
                filter="url(#blurGlow)"
              />

              {/* Bubble */}
              <circle
                cx={x}
                cy={y}
                r="34"
                fill="url(#bubbleSurface)"
                stroke={item.color}
                strokeOpacity="0.23"
                strokeWidth="1"
              />

              {/* Bubble highlight */}
              <circle
                cx={x - 9}
                cy={y - 10}
                r="8"
                fill="#FFFFFF"
                opacity="0.04"
              />

              {/* Icon */}
              <g transform={`translate(${x} ${y})`}>
                <OrbitIcon type={item.type} color={item.color} />
              </g>

              {/* Pulse */}
              <motion.circle
                cx={x}
                cy={y}
                r="39"
                stroke={item.color}
                strokeOpacity="0"
                strokeWidth="1"
                animate={{
                  r: [34, 46, 34],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeOut",
                }}
              />
            </motion.g>
          );
        })}

        {/* ===================================================== */}
        {/* CURVED GLOBAL ROUTES */}
        {/* ===================================================== */}

        <motion.path
          d="M135 438
             C230 390 270 280 360 286
             C448 291 500 415 605 430"
          stroke="#A0D14F"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          strokeDasharray="3 17"
          strokeLinecap="round"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M122 300
             C232 345 272 423 360 415
             C455 407 505 282 610 290"
          stroke="#FFED00"
          strokeWidth="1.5"
          strokeOpacity="0.48"
          strokeDasharray="3 20"
          strokeLinecap="round"
          animate={{
            strokeDashoffset: [0, 125],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ===================================================== */}
        {/* TRAVELING ROUTE POINTS */}
        {/* ===================================================== */}

        <motion.circle
          cx="135"
          cy="438"
          r="4"
          fill="#A0D14F"
          filter="url(#smallGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.circle
          cx="605"
          cy="430"
          r="4"
          fill="#FFED00"
          filter="url(#smallGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.2,
            delay: 0.4,
            repeat: Infinity,
          }}
        />

        {/* ===================================================== */}
        {/* RANDOM FLOATING PARTICLES */}
        {/* ===================================================== */}

        {[
          [92, 235],
          [118, 520],
          [190, 104],
          [245, 590],
          [490, 92],
          [575, 118],
          [640, 225],
          [640, 520],
          [530, 615],
          [200, 635],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={index}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? 2.5 : 1.5}
            fill={index % 2 === 0 ? "#A0D14F" : "#FFED00"}
            animate={{
              opacity: [0.12, 0.8, 0.12],
              scale: [1, 1.7, 1],
            }}
            transition={{
              duration: 3 + index * 0.25,
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ===================================================== */}
        {/* DECORATIVE CORNERS */}
        {/* ===================================================== */}

        <path
          d="M72 110 H112 M72 110 V150"
          stroke="#A0D14F"
          strokeOpacity="0.18"
          strokeWidth="1"
        />

        <path
          d="M648 110 H608 M648 110 V150"
          stroke="#FFED00"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        <path
          d="M72 610 H112 M72 610 V570"
          stroke="#FFED00"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M648 610 H608 M648 610 V570"
          stroke="#A0D14F"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
