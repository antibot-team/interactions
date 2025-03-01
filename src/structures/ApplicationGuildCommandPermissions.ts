import type { Snowflake } from './@type';
import { ApplicationCommandPermissions } from './ApplicationCommandPermissions';

export interface ApplicationGuildCommandPermissions {
    /**
     * id
     * ID of the command or the application ID
     * @returns {Snowflake}
     */
    readonly id: Snowflake;
    /**
     * application_id
     * ID of the application the command belongs to
     * @returns {Snowflake}
     */
    readonly application_id: Snowflake;
    /**
     * guild_id
     * ID of the guild
     * @returns {Snowflake}
     */
    readonly guild_id: Snowflake;
    /**
     * permissions
     * Permissions for the command in the guild, max of 100
     * @returns {ApplicationCommandPermissions[]}
     */
    readonly permissions: ApplicationCommandPermissions[];
}
