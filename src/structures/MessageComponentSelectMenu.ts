import type { Integer } from "./@type";
import { ChannelTypeEnum } from "./ChannelTypeEnum";
import { MessageComponentOptions } from "./MessageComponentOptions";
import { MessageComponentSelectDefaultValue } from "./MessageComponentSelectDefaultValue";
import { MessageComponentType } from "./MessageComponentType";

export interface MessageComponentSelectMenu {
  /**
   * @property {number} type
   * Type of select menu component (text: 3, user: 5, role: 6, mentionable: 7, channels: 8)
   * @returns {MessageComponentType}
   */
  type: MessageComponentType;
  /**
   * @property {string} custom_id
   * ID for the select menu; max 100 characters
   * @returns {string}
   */
  custom_id: string;
  /**
   * @property {array} options
   * Specified choices in a select menu (only required and available for string selects (type 3); max 25
   * @returns {MessageComponentOptions[]}
   */
  options?: MessageComponentOptions[];
  /**
   * @property {array} channel_types
   * List of channel types to include in the channel select component (type 8)
   * @returns {ChannelTypeEnum[]}
   */
  channel_types?: ChannelTypeEnum[];
  /**
   * @property {string} placeholder
   * Placeholder text if nothing is selected; max 150 characters
   * @returns {string}
   */
  placeholder?: string;
  /**
   * @property {array} default_values
   * List of default values for auto-populated select menu components; number of default values must be in the range defined by min_values and max_values
   * @returns {MessageComponentSelectDefaultValue[]}
   */
  default_values?: MessageComponentSelectDefaultValue[];
  /**
   * @property {number} min_values
   * Minimum number of items that must be chosen (defaults to 1); min 0, max 25
   * @returns {Integer}
   */
  min_values?: Integer;
  /**
   * @property {number} max_values
   * Maximum number of items that can be chosen (defaults to 1); max 25
   * @returns {Integer}
   */
  max_values?: Integer;
  /**
   * @property {boolean} disabled
   * Whether select menu is disabled (defaults to false)
   * @returns {boolean}
   */
  disabled?: boolean;
}
