import React, { useState, useEffect, useRef, useCallback } from "react";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = ({ onAudioStart, onAudioEnd }) => {
  const firstLineFull = "Hi, I'm Yagnarashagan";
  const secondLineFull = "AI & Data Science Enthusiast";
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [index, setIndex] = useState(0);
  const audioStartedRef = useRef(false);

  // Typewriter effect
  useEffect(() => {
    if (index < firstLineFull.length + secondLineFull.length) {
      const timeout = setTimeout(() => {
        if (index < firstLineFull.length) {
          setFirstLine((prev) => prev + firstLineFull[index]);
        } else {
          setSecondLine(
            (prev) => prev + secondLineFull[index - firstLineFull.length]
          );
        }
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Improved speech synthesis for natural voice
  // Move playSpeech outside useEffect so userPlayHandler can access it
  const introText =
    "Hi, I'm Yagnarashagan. AI and Data Science Enthusiast. This is my portfolio. I build practical AI solutions, communicate clearly, and deliver results. Hire me to turn data into impact.";

  const triedUserInteractionRef = useRef(false);
  const playedRef = useRef(false);
  const [showPlayHint, setShowPlayHint] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const playSpeech = useCallback(() => {
    console.debug("playSpeech: attempt");
    try {
      if (!("speechSynthesis" in window)) {
        console.error("playSpeech: speechSynthesis not available");
        return;
      }

      // Cancel any ongoing speech first
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        try {
          window.speechSynthesis.resume();
        } catch (resumeErr) {
          console.warn("playSpeech: resume() failed", resumeErr);
        }
      }

      let voices = [];
      try {
        voices = window.speechSynthesis.getVoices() || [];
      } catch (vErr) {
        console.error("playSpeech: getVoices() threw", vErr);
      }

      console.debug("playSpeech: voices count", voices.length);

      if (voices.length > 0) {
        console.debug(
          "playSpeech: available voices:",
          voices.slice(0, 5).map((v) => `${v.name} (${v.lang})`)
        );
      }

      const utter = new window.SpeechSynthesisUtterance(introText);
      utter.lang = "en-US";
      utter.rate = 0.95; // Slightly slower for more natural speech
      utter.pitch = 0.9; // Lower pitch for male voice
      utter.volume = 1.0;

      // Select voice: Try multiple strategies for cross-browser compatibility
      if (voices.length > 0) {
        // Strategy 1: Look for Microsoft Mark voice specifically
        const microsoftMarkVoices = voices.filter((v) =>
          v.name.toLowerCase().includes("microsoft mark")
        );

        // Strategy 2: Look for Google male voices (Chrome/Edge)
        const googleMaleVoices = voices.filter(
          (v) =>
            v.lang === "en-US" &&
            v.name.toLowerCase().includes("google") &&
            (v.name.toLowerCase().includes("male") ||
              v.name.toLowerCase().includes("man"))
        );

        // Strategy 3: Look for male voices
        const maleVoices = voices.filter(
          (v) =>
            v.lang === "en-US" &&
            (v.name.toLowerCase().includes("male") ||
              v.name.toLowerCase().includes("man") ||
              v.name.toLowerCase().includes("natural"))
        );

        // Strategy 4: Use any en-US voice
        const enUsVoices = voices.filter((v) => v.lang === "en-US");

        // Priority: Microsoft Mark > Google Male > Male > en-US > Any voice
        utter.voice =
          microsoftMarkVoices[0] ||
          googleMaleVoices[0] ||
          maleVoices[0] ||
          enUsVoices[0] ||
          voices[0] ||
          null;

        if (utter.voice) {
          console.debug(
            "playSpeech: selected voice:",
            utter.voice.name,
            `(${utter.voice.lang})`
          );
        }
      } else {
        console.warn("playSpeech: no voices available, using browser default");
      }

      utter.onstart = () => {
        console.debug("playSpeech: speech started");
        playedRef.current = true;
        setPermissionGranted(true);
        setShowPlayHint(false);
        if (onAudioStart) onAudioStart();
      };

      utter.onend = () => {
        console.debug("playSpeech: speech ended");
        if (onAudioEnd) onAudioEnd();
      };

      utter.onerror = (event) => {
        console.error("playSpeech: speech error", event.error);
        console.error("playSpeech: error details:", event);
        // If autoplay is blocked, show the play hint
        if (event.error === "not-allowed" || event.error === "interrupted") {
          console.debug("Speech blocked by browser, showing permission button");
          setShowPlayHint(true);
          // Don't call onAudioEnd here as the audio never really started
        }
      };

      try {
        window.speechSynthesis.speak(utter);
        console.debug("playSpeech: speak() called successfully");
        // Only hide play hint if speech actually starts (onstart will handle this)
      } catch (sErr) {
        console.error("playSpeech: speak() failed", sErr);
        setShowPlayHint(true);
      }
    } catch (err) {
      console.error("playSpeech: unexpected error", err);
    }
  }, [onAudioEnd, onAudioStart]);

  const userPlayHandler = useCallback(() => {
    if (
      !triedUserInteractionRef.current &&
      window.speechSynthesis &&
      !window.speechSynthesis.speaking
    ) {
      console.debug(
        "userPlayHandler: User interaction detected, attempting to play speech"
      );
      playSpeech();
      setPermissionGranted(true);
    }
    triedUserInteractionRef.current = true;
  }, [playSpeech]);

  useEffect(() => {
    if (audioStartedRef.current) return; // Only set up once
    audioStartedRef.current = true;

    console.debug("useEffect: initializing audio playback");

    // Detect if browser allows autoplay
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    // Strategy: Try auto-play on mount, with fallbacks for voice loading delays
    const attemptAutoPlay = () => {
      console.debug("useEffect: attemptAutoPlay called");
      if (!playedRef.current) {
        // For Chrome, try autoplay first, only show button if it fails
        if (isChrome) {
          console.debug("Chrome detected, attempting autoplay first");
          playSpeech();
        } else {
          playSpeech();
        }
      }
    };

    // Immediate attempt (voices may already be loaded)
    attemptAutoPlay();

    // Fallback 1: Wait for voiceschanged event if voices aren't loaded yet
    const handleVoicesChanged = () => {
      console.debug("useEffect: voiceschanged event fired");
      if (!playedRef.current) {
        attemptAutoPlay();
      }
    };

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged
    );

    // Fallback 2: Retry after 500ms if still not playing (handles async voice loading)
    const retryTimer = setTimeout(() => {
      if (!playedRef.current) {
        console.debug("useEffect: 500ms retry");
        attemptAutoPlay();
      }
    }, 500);

    // Fallback 3: Show play button as user fallback if auto-play fails after 1200ms
    const showHintTimer = setTimeout(() => {
      if (!playedRef.current && !permissionGranted) {
        console.debug("useEffect: showing play hint button - autoplay failed");
        setShowPlayHint(true);
      }
    }, 1200); // Same timing for all browsers, let speech errors handle Chrome faster

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged
      );
      clearTimeout(retryTimer);
      clearTimeout(showHintTimer);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Remove the complex interaction handling since we're now showing the button proactively
    return undefined;
  }, [showPlayHint, userPlayHandler]);

  return (
    <section id="home" className="overall">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              style={{ minHeight: "2.5rem" }}
            >
              {firstLine}
            </h1>
            <h2
              className="text-2xl md:text-4xl font-semibold text-violet-600 leading-tight"
              style={{ minHeight: "2.5rem" }}
            >
              {secondLine}
              {secondLine.length < secondLineFull.length ? (
                <span className="animate-pulse">|</span>
              ) : null}
            </h2>
            <p className="centered-text-large">
              Turning code into creativity with AI
            </p>
            <p className="centered-text-small">
              B.Tech AI & Data Science Student passionate about building
              impactful AI solutions and solving real-world problems through
              innovative technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center resume-social-container">
            <a
              href="YAGNARASHAGAN_Resume.pdf"
              download="Yagnarashagan_Resume.pdf"
              className="resume-btn"
            >
              <Download size={20} />
              Download Resume
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/yagnarashagan6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yagnarashagan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          {/* Small manual play hint if autoplay is blocked */}
          {showPlayHint && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  console.debug("Play hint button clicked");
                  playSpeech();
                  setShowPlayHint(false);
                  setPermissionGranted(true);
                }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
                aria-label="Play intro audio"
              >
                🎵 Click to enable audio & play intro
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Your browser requires user permission for audio playback
              </p>
            </div>
          )}
          {/* Floating gradient balls */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-violet-600 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
