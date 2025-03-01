import type { Snowflake, Integer } from './@type';

export interface UserInterface {
    /**
     * id
     * the user's id
     * @returns {Snowflake}
     */
    readonly id: Snowflake;
    /**
     * username
     * the user's username, not unique across the platform
     * @returns {string}
     */
    readonly username: string;
    /**
     * @deprecated
     * discriminator
     * the user's Discord-tag
     * @returns {string}
     */
    readonly discriminator: string;
    /**
     * global_name
     * the user's display name, if it is set. For bots, this is the application name
     * @returns {string}
     */
    readonly global_name: string;
    /**
     * avatar
     * he user's avatar hash
     * @returns {string}
     */
    readonly avatar: string;
    /**
     * bot
     * whether the user belongs to an OAuth2 application
     * @returns {boolean}
     */
    readonly bot?: boolean;
    /**
     * system
     * whether the user is an Official Discord System user (part of the urgent message system)
     * @returns {boolean}
     */
    readonly system?: boolean;
    /**
     * mfa_enabled
     * whether the user has two factor enabled on their account
     * @returns {boolean}
     */
    readonly mfa_enabled?: boolean;
    /**
     * banner
     * the user's banner hash
     * @returns {string}
     */
    readonly banner?: string;
    /**
     * accent_color
     * the user's banner color encoded as an integer representation of hexadecimal color code
     * @returns {Integer}
     */
    readonly accent_color?: Integer;
    /**
     * locale
     * the user's chosen language option
     * @returns {string}
     */
    readonly locale?: string;
    /**
     * verified
     * whether the email on this account has been verified
     * @returns {boolean}
     */
    readonly verified?: boolean;
    /**
     * email
     * the user's email
     * @returns {string}
     */
    readonly email?: string;
    /**
     * flags
     * the flags on a user's account
     * @returns {Integer}
     */
    readonly flags?: Integer;
    /**
     * premium_type
     * the type of Nitro subscription on a user's account
     * @returns {Integer}
     */
    readonly premium_type?: Integer;
    /**
     * public_flags
     * the public flags on user's account
     * @returns {Integer}
     */
    readonly public_flags?: Integer;
    /**
     * avatar_decoration
     * the user's avatar decoration hash
     * @returns {string}
     */
    readonly avatar_decoration_data?: { sku_id: string; asset: string };
}
