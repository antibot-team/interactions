import type { Snowflake } from "./@type";
import type { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";
import { ApplicationCommandType } from "./ApplicationCommandType";
import { ApplicationCommandOptions } from "./ApplicationCommandOptions";

export interface ApplicationCommand {
  /**
   * id
   * Unique ID of command
   * @returns {Snowflake}
   */
  readonly id: Snowflake;
  /**
   * type
   * Type of command, defaults to 1
   * @returns {ApplicationCommandType}
   */
  readonly type?: ApplicationCommandType;
  /**
   * application_id
   * ID of the parent application
   * @returns {Snowflake}
   */
  readonly application_id: Snowflake;
  /**
   * guild_id
   * Guild ID of the command, if not global
   * @returns {Snowflake}
   */
  readonly guild_id?: Snowflake;
  /**
   * name_localization
   * Localization dictionary for name field. Values follow the same restrictions as name
   * @returns {ApplicationCommandLocalization}
   */
  readonly name_localization?: ApplicationCommandLocalization;
  /**
   * name
   * Name of command, 1-32 characters
   * @returns string
   */
  readonly name: string;
  /**
   * description
   * Description for CHAT_INPUT commands, 1-100 characters. Empty string for USER and MESSAGE commands
   * @returns string
   */
  readonly description: string;
  /**
   * description_localizations
   * Localization dictionary for description field. Values follow the same restrictions as description
   * @returns {ApplicationCommandLocalization}
   */
  readonly description_localizations?: ApplicationCommandLocalization;
  /**
   * options
   * Parameters for the command, max of 25
   * @returns {ApplicationCommandOptions[]}
   */
  readonly options?: ApplicationCommandOptions[];
  /**
   * default_member_permissions
   * Set of permissions represented as a bit set
   * @returns string
   */
  readonly default_member_permissions: string;
  /**
   * dm_permission
   * Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
   * @returns boolean
   */
  readonly dm_permission?: boolean;
  /**
   * nsfw
   * Indicates whether the command is age-restricted, defaults to false
   * @returns boolean
   */
  readonly nsfw?: boolean;
  /**
   * version
   * Autoincrementing version identifier updated during substantial record changes
   * @returns {Snowflake}
   */
  readonly version: Snowflake;
}
