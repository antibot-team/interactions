import { Snowflake } from "./@type";

export class Routes {
  constructor() { }

  private validateApplicationSnowflake(applicationId: Snowflake): void {
    if (!applicationId || typeof applicationId !== "string") {
      throw new ReferenceError("[@antibot/interactions#Routes] Application ID must be a Snowflake.");
    }
  }

  private validateCommandSnowflake(commandId: Snowflake): void {
    if (!commandId || typeof commandId !== "string") {
      throw new ReferenceError("[@antibot/interactions#Routes] Command ID must be a Snowflake.");
    }
  }

  private validateGuildSnowflake(guildId: Snowflake): void {
    if (!guildId || typeof guildId !== "string") {
      throw new ReferenceError("[@antibot/interactions#Routes] Guild ID must be a Snowflake.");
    }
  }

  public getApplicationCommands(applicationId: Snowflake, with_localization?: boolean): string {
    this.validateApplicationSnowflake(applicationId);
    const localizationQuery: string = with_localization ? "true" : "false";
    return `/applications/${applicationId}/commands?with_localizations=${localizationQuery}`;
  }

  public createApplicationCommand(applicationId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    return `/applications/${applicationId}/commands`;
  }

  public getGlobalApplicationCommand(applicationId: Snowflake, commandId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateCommandSnowflake(commandId);
    return `/applications/${applicationId}/commands/${commandId}`;
  }

  public editGlobalApplicationCommand(applicationId: Snowflake, commandId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateCommandSnowflake(commandId);
    return `/applications/${applicationId}/commands/${commandId}`;
  }

  public deleteGlobalApplicationCommand(applicationId: Snowflake, commandId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateCommandSnowflake(commandId);
    return `/applications/${applicationId}/commands/${commandId}`;
  }

  public bulkOverwriteGlobalApplicationCommands(applicationId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    return `/applications/${applicationId}/commands`;
  }

  public getGuildApplicationCommands(applicationId: Snowflake, guildId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateGuildSnowflake(guildId);
    return `/applications/${applicationId}/guilds/${guildId}/commands?with_localizations=true`;
  }

  public createGuildApplicationCommand(applicationId: Snowflake, guildId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateGuildSnowflake(guildId);
    return `/applications/${applicationId}/guilds/${guildId}/commands`;
  }

  public getGuildApplicationCommand(options: { applicationId: Snowflake; guildId: Snowflake; commandId: Snowflake; }): string {
    this.validateApplicationSnowflake(options.applicationId);
    this.validateGuildSnowflake(options.guildId);
    this.validateCommandSnowflake(options.commandId);
    return `/applications/${options.applicationId}/guilds/${options.guildId}/commands/${options.commandId}`;
  }

  public editGuildApplicationCommand(options: { applicationId: Snowflake; guildId: Snowflake; commandId: Snowflake; }): string {
    this.validateApplicationSnowflake(options.applicationId);
    this.validateGuildSnowflake(options.guildId);
    this.validateCommandSnowflake(options.commandId);
    return `/applications/${options.applicationId}/guilds/${options.guildId}/commands/${options.commandId}`;
  }

  public deleteGuildApplicationCommand(options: { applicationId: Snowflake; guildId: Snowflake; commandId: Snowflake; }): string {
    this.validateApplicationSnowflake(options.applicationId);
    this.validateGuildSnowflake(options.guildId);
    this.validateCommandSnowflake(options.commandId);
    return `/applications/${options.applicationId}/guilds/${options.guildId}/commands/${options.commandId}`;
  }

  public bulkOverwriteGuildApplicationCommands(applicationId: Snowflake, guildId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateGuildSnowflake(guildId);
    return `/applications/${applicationId}/guilds/${guildId}/commands`;
  }

  public getGuildApplicationCommandPermissions(applicationId: Snowflake, guildId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateGuildSnowflake(guildId);
    return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
  }

  public getApplicationCommandPermissions(options: { applicationId: Snowflake; guildId: Snowflake; commandId: Snowflake; }): string {
    this.validateApplicationSnowflake(options.applicationId);
    this.validateGuildSnowflake(options.guildId);
    this.validateCommandSnowflake(options.commandId);
    return `/applications/${options.applicationId}/guilds/${options.guildId}/commands/${options.commandId}/permissions`;
  }

  public editApplicationCommandPermissions(options: { applicationId: Snowflake; guildId: Snowflake; commandId: Snowflake; }): string {
    this.validateApplicationSnowflake(options.applicationId);
    this.validateGuildSnowflake(options.guildId);
    this.validateCommandSnowflake(options.commandId);
    return `/applications/${options.applicationId}/guilds/${options.guildId}/commands/${options.commandId}/permissions`;
  }

  public batchEditGuildApplicationCommandPermissions(applicationId: Snowflake, guildId: Snowflake): string {
    this.validateApplicationSnowflake(applicationId);
    this.validateGuildSnowflake(guildId);
    return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
  }
}
