// utils/fontPreferences.ts

function jitter(base, range = 0.8) {
  // lệch ± range px, giữ số lẻ giống thật
  return +(base + (Math.random() * 2 - 1) * range).toFixed(4);
}

function randomDuration(min = 80, max = 150) {
  return Math.floor(min + Math.random() * (max - min));
}

// Profile giả lập (Windows Chrome 125% DPI)
const WINDOWS_CHROME_PROFILE = {
  default: 149.3125,
  apple: 149.3125, // vẫn trả về nhưng giống default
  serif: 149.3125,
  sans: 144.0156,
  mono: 121.5156,
  min: 9.3438,
  system: 147.8594,
};

export function randomFontPreferences() {
  return {
    value: {
      default: jitter(WINDOWS_CHROME_PROFILE.default),
      apple: jitter(WINDOWS_CHROME_PROFILE.apple),
      serif: jitter(WINDOWS_CHROME_PROFILE.serif),
      sans: jitter(WINDOWS_CHROME_PROFILE.sans),
      mono: jitter(WINDOWS_CHROME_PROFILE.mono),
      min: jitter(WINDOWS_CHROME_PROFILE.min, 0.2),
      system: jitter(WINDOWS_CHROME_PROFILE.system),
    },
    duration: randomDuration(90, 140),
  };
}
