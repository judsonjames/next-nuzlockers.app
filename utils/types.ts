/**
 * Social Links, each and all are optional
 */
interface SocialLinks {
  twitter?: string;
  twitch?: string;
  youtube?: string;
  website?: string;
}

/**
 * Simulated User Data
 */
export interface User {
  name: string;
  username: string;
  colorTheme: string;
  bannerPic?: string;
  profilePic?: string;
  social?: SocialLinks;
}
