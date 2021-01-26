export interface AvatarPropTypes {
  /** Defines the size of the avatar */
  size?: number;
  /** Name will be displayed in a tooltip, also used by screen readers as fallback
   content if the image fails to load. */
  name?: string;
  /** A url to load an image from (this can also be a base64 encoded image). */
  src?: string;
  /** Handler to be called on click. */
  onClick?: () => void;
}
