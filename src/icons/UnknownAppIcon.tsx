import { FunctionalComponent, h } from '@stencil/core';

interface UnknownAppIconProps {}

export const UnknownAppIcon: FunctionalComponent<UnknownAppIconProps> = () => (
  <svg viewBox="0 0 426.667 426.667" style={{ enableBackground: 'new 0 0 426.667 426.667' }}>
    <g style={{ transformOrigin: '213.3335px 213.3335px' }} transform="scale(0.65)">
      <circle class="app-menu-icon-accent-color" cx="213.3335px" cy="213.3335px" r="213.3335px" />
      <path
        class="app-menu-icon-primary-color"
        d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0
		z M234.667,362.667H192V320h42.667V362.667z M278.72,197.44l-19.093,19.627c-15.36,15.36-24.96,28.267-24.96,60.267H192v-10.667
		c0-23.573,9.6-44.907,24.96-60.373l26.56-26.88c7.68-7.68,12.48-18.347,12.48-30.08c0-23.573-19.093-42.667-42.667-42.667
		s-42.667,19.093-42.667,42.667H128C128,102.187,166.187,64,213.333,64s85.333,38.187,85.333,85.333
		C298.667,168.107,291.093,185.067,278.72,197.44z"
      />
    </g>
  </svg>
);
