const colors = require('tailwindcss/colors');

const colorRange = ['main', 'light', 'dark'];

function getRelatedColorsAndOpacity(variable) {
  const palette = {}
  colorRange.forEach(function(value) {
    palette[value] = ({opacityValue}) => `rgba(var(--${variable}-${value}), ${opacityValue || 1})`;
  })
  return palette
}

/**
 * opacityValue < 1 means it is set by the user.
 * @Note: No intellisense on opacity, but any opacity value can be passed using color/10-90, or arbitrary values like color/[0.99].
*/
function getColorWithDefaultOpacity(variable, defaultOpacity = 1) {
  return ({opacityValue}) => `rgba(var(--${variable}), ${opacityValue < 1 ? opacityValue : defaultOpacity})`;
}

module.exports = {
  inherit: 'inherit',
  transparent: 'transparent',
  current: 'currentColor',
  success: colors.green,
  black: colors.black,

  danger: {
    ...getRelatedColorsAndOpacity('danger'),
  },
  accent: {
    ...getRelatedColorsAndOpacity('accent'),
  },
  primary: {
    ...getRelatedColorsAndOpacity('primary'),
  },
  background: {
    50: getColorWithDefaultOpacity('bg-50'),
    100: getColorWithDefaultOpacity('bg-100'),
    200: getColorWithDefaultOpacity('bg-200'),
    300: getColorWithDefaultOpacity('bg-300'),
    400: getColorWithDefaultOpacity('bg-400'),
    500: getColorWithDefaultOpacity('bg-500'),
    600: getColorWithDefaultOpacity('bg-600'),
    700: getColorWithDefaultOpacity('bg-700', 0.04),
    800: getColorWithDefaultOpacity('bg-700', 0.12),
  },
  txt: {
    main: getColorWithDefaultOpacity('main-txt'),
    muted: getColorWithDefaultOpacity('main-txt', 0.87),
    light: getColorWithDefaultOpacity('main-txt', 0.45),
    disabled: getColorWithDefaultOpacity('main-txt', 0.28),
    focused: getColorWithDefaultOpacity('main-txt', 0.1),
    divider: getColorWithDefaultOpacity('main-txt', 0.08),
    inverted: getColorWithDefaultOpacity(`inverted-txt`)
  }
}