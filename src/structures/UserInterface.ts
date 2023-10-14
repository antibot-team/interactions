import type { Snowflake, Integer } from "./@type";

export interface UserInterface {
  /**
   * id
   * the user's id
   * @returns {Snowflake}
   */
  id: Snowflake;
  /**
   * username
   * the user's username, not unique across the platform
   * @returns {string}
   */
  username: string;
  /**
   * discriminator
   * the user's Discord-tag
   * @returns {string}
   */
  discriminator: string;
  /**
   * global_name
   * the user's display name, if it is set. For bots, this is the application name
   * @returns {string}
   */
  global_name: string;
  /**
   * avatar
   * he user's avatar hash
   * @returns {string}
   */
  avatar: string;
  /**
   * bot
   * whether the user belongs to an OAuth2 application
   * @returns {boolean}
   */
  bot?: boolean;
  /**
   * system
   * whether the user is an Official Discord System user (part of the urgent message system)
   * @returns {boolean}
   */
  system?: boolean;
  /**
   * mfa_enabled
   * whether the user has two factor enabled on their account
   * @returns {boolean}
   */
  mfa_enabled?: boolean;
  /**
   * banner
   * the user's banner hash
   * @returns {string}
   */
  banner?: string;
  /**
   * accent_color
   * the user's banner color encoded as an integer representation of hexadecimal color code
   * @returns {Integer}
   */
  accent_color?: Integer;
  /**
   * locale
   * the user's chosen language option
   * @returns {string}
   */
  locale?: string;
  /**
   * verified
   * whether the email on this account has been verified
   * @returns {boolean}
   */
  verified?: boolean;
  /**
   * email
   * the user's email
   * @returns {string}
   */
  email?: string;
  /**
   * flags
   * the flags on a user's account
   * @returns {Integer}
   */
  flags?: Integer;
  /**
   * premium_type
   * the type of Nitro subscription on a user's account
   * @returns {Integer}
   */
  premium_type?: Integer;
  /**
   * public_flags
   * the public flags on user's account
   * @returns {Integer}
   */
  public_flags?: Integer;
  /**
   * avatar_decoration
   * the user's avatar decoration hash
   * @returns {string}
   */
  avatar_decoration?: string;
}
