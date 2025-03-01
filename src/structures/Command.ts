import { ApplicationCommandOptions } from './ApplicationCommandOptions';
import { ApplicationCommandType } from './ApplicationCommandType';
import type { Snowflake } from './@type';
import type { ApplicationCommandLocalizationPartial } from './ApplicationCommandLocalization';
import { IntegrationType } from './IntegrationTypes';
import { InteractionContextType } from './InteractionContextType';

export interface ICommand {
    name: string;
    type: ApplicationCommandType;
    description: string;
    options: ApplicationCommandOptions[];
    guild_id?: Snowflake;
    name_localizations?: ApplicationCommandLocalizationPartial;
    description_localizations?: ApplicationCommandLocalizationPartial;
    default_member_permissions?: string | bigint;
    dm_permission?: boolean;
    integration_types?: IntegrationType[];
    contexts?: InteractionContextType[];
    nsfw?: boolean;
}

export interface Command extends ICommand {}
export class Command implements ICommand {
    public Type(type: ApplicationCommandType): this {
        this.type = type;
        return this;
    }

    public Name(name: string): this {
        this.name = name;
        return this;
    }

    public Description(description: string): this {
        this.description = description;
        return this;
    }

    public Permissions(...permissions: []): this {
        this.default_member_permissions = String(permissions);
        return this;
    }

    public ForGuild(id: Snowflake): this {
        this.guild_id = id;
        return this;
    }

    public Options(options: ApplicationCommandOptions[]): this {
        this.options = options;
        return this;
    }

    public Localization(options: ApplicationCommandLocalizationPartial): this {
        this.name_localizations = options;
        return this;
    }

    public DescriptionLocalization(options: ApplicationCommandLocalizationPartial): this {
        this.description_localizations = options;
        return this;
    }

    public ForDMS(dms: boolean): this {
        this.dm_permission = dms;
        return this;
    }

    public IntegrationTypes(types: IntegrationType[]): this {
        this.integration_types = types;
        return this;
    }

    public ContextTypes(contexts: InteractionContextType[]): this {
        this.contexts = contexts;
        return this;
    }

    public ForNSFW(nsfw: boolean): this {
        this.nsfw = nsfw;
        return this;
    }

    public toJSON(): ICommand {
        return { ...this } as ICommand;
    }
}
