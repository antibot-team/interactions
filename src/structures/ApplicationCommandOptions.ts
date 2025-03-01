import {
    ApplicationCommandLocalization,
    ApplicationCommandLocalizationPartial,
} from './ApplicationCommandLocalization';
import { ApplicationCommandOptionsChoice } from './ApplicationCommandOptionsChoice';
import type { ChannelType } from './ChannelType';
import type { Integer } from './@type';
import { ApplicationCommandOptionType } from './ApplicationCommandOptionType';
export interface ApplicationCommandOptions {
    /**
     * type
     * Type of option
     * @returns {ApplicationCommandOptionType}
     */
    readonly type: ApplicationCommandOptionType;
    /**
     * name
     * 1-32 character name
     * @returns string
     */
    readonly name: string;
    /**
     * name_localization
     * Localization dictionary for the name field. Values follow the same restrictions as name
     * @returns {ApplicationCommandLocalization}
     */
    readonly name_localizations?: ApplicationCommandLocalization;
    /**
     * description
     * 1-100 character description
     * @returns string
     */
    readonly description: string;
    /**
     * description_localizations
     * Localization dictionary for the description field. Values follow the same restrictions as description
     * @returns {ApplicationCommandLocalization}
     */
    readonly description_localizations?: ApplicationCommandLocalization;
    /**
     * required
     * If the parameter is required or optional--default false
     * @returns boolean
     */
    readonly required?: boolean;
    /**
     * choices
     * Choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25
     * @returns {ApplicationCommandOptionsChoice[]}
     */
    readonly choices?: ApplicationCommandOptionsChoice[];
    /**
     * options
     * If the option is a subcommand or subcommand group type, these nested options will be the parameters
     * @returns {ApplicationCommandOptions[]}
     */
    readonly options?: ApplicationCommandOptions[];
    /**
     * channel_types
     * If the option is a channel type, the channels shown will be restricted to these types
     * @returns {ChannelType[]}
     */
    readonly channel_types?: ChannelType[];
    /**
     * min_value
     * If the option is an INTEGER or NUMBER type, the minimum value permitted
     * @returns {Integer}
     */
    readonly min_value?: Integer;
    /**
     * max_value
     * If the option is an INTEGER or NUMBER type, the maximum value permitted
     * @returns {Integer}
     */
    readonly max_value?: Integer;
    /**
     * min_length
     * For option type STRING, the minimum allowed length (minimum of 0, maximum of 6000)
     * @returns {Integer}
     */
    readonly min_length?: Integer;
    /**
     * max_length
     * For option type STRING, the maximum allowed length (minimum of 1, maximum of 6000)
     * @returns {Integer}
     */
    readonly max_length?: Integer;
    /**
     * autocomplete
     * If autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option
     * @returns boolean
     */
    readonly autocomplete?: boolean;
}
