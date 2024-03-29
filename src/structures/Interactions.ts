import type { Snowflake } from "./@type";
import { ApplicationCommand } from "./ApplicationCommand";
import { ApplicationCommandPermissions } from "./ApplicationCommandPermissions";
import { Command, ICommand } from "./Command";
import { Routes } from "./Routes";
import { RequestManager } from "./request/RequestManager";
import { APPLICATION_TYPE } from "./request/typings";
import { Wrap } from "./utils/Wrap";
export class Interactions {
  private request: RequestManager;
  private api: string;
  constructor(
    protected readonly options: {
      publicKey: string;
      botID: string;
      botToken: string;
      debug?: boolean;
    }
  ) {
    this.api = "https://discord.com/api/v10";
    this.options.publicKey = options.publicKey;
    this.options.botID = options.botID;
    this.options.botToken = options.botToken;
    this.request = new RequestManager(
      this.options.publicKey,
      this.options.botToken,
      this.api,
      this.options.debug
    );
  }

  get botID() {
    return this.options.botID;
  }

  get botToken() {
    return this.options.botToken;
  }
  public async createGlobalCommand<T>(command: ICommand): Promise<ApplicationCommand>;
  public async createGlobalCommand<T>(command: ICommand): Promise<void>;
  public async createGlobalCommand<T>(
    command: ICommand
  ): Promise<T> {
    return await Wrap(this.request.POST<T>({
      route: Routes.createApplicationCommand(this.options.botID),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    })) as T;
  }
  public async getGlobalCommand<T>(commandId: string): Promise<ApplicationCommand>;
  public async getGlobalCommand<T>(commandId: string): Promise<void>;
  public async getGlobalCommand<T>(
    commandId: Snowflake
  ): Promise<T> {
    return await Wrap(
      this.request.GET<T>({
        route: Routes.getGlobalApplicationCommand(this.options.botID, commandId),
        contentType: APPLICATION_TYPE.JSON,
      })) as T;
  }
  public async editGlobalCommand<T>(commandId: Snowflake, command: ICommand): Promise<ApplicationCommand>;
  public async editGlobalCommand<T>(commandId: Snowflake, command: ICommand): Promise<void>;
  public async editGlobalCommand<T>(
    commandId: Snowflake,
    command: ICommand
  ): Promise<T> {
    return await Wrap(
      this.request.PATCH<T>({
        route: Routes.editGlobalApplicationCommand(this.options.botID, commandId),
        contentType: APPLICATION_TYPE.JSON,
        data: command,
      })) as T;
  }
  public async deleteGlobalCommand(commandId: Snowflake): Promise<void> {
    await this.request.DELETE<ApplicationCommand>({
      route: Routes.deleteGlobalApplicationCommand(
        this.options.botID,
        commandId
      ),
      contentType: APPLICATION_TYPE.JSON,
    });
  }
  public async getGlobalCommands<T>(): Promise<ApplicationCommand[]>;
  public async getGlobalCommands<T>(): Promise<void>;
  public async getGlobalCommands<T>(): Promise<T> {
    return await Wrap(
      this.request.GET<T>({
        route: Routes.getApplicationCommands(this.options.botID),
        contentType: APPLICATION_TYPE.JSON,
      })) as T;
  }

  public async overwriteGlobalCommands(command: ICommand): Promise<void> {
    await this.request.PUT<ApplicationCommand>({
      route: Routes.bulkOverGlobalApplicationCommands(this.options.botID),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    });
  }
  public async createGuildCommand<T>(guildId: Snowflake, command: ICommand): Promise<ApplicationCommand>;
  public async createGuildCommand<T>(guildId: Snowflake, command: ICommand): Promise<void>;
  public async createGuildCommand<T>(
    guildId: Snowflake,
    command: ICommand
  ): Promise<T> {
    return await Wrap(
      this.request.POST<T>({
        route: Routes.createGuildApplicationCommand(this.options.botID, guildId),
        contentType: APPLICATION_TYPE.JSON,
        data: command,
      }
      )) as T;
  }
  public async getGuildCommands<T>(guildId: Snowflake): Promise<ApplicationCommand[]>;
  public async getGuildCommands<T>(guildId: Snowflake): Promise<void>;
  public async getGuildCommands<T>(
    guildId: Snowflake
  ): Promise<T> {
    return await Wrap(
      this.request.GET<T>({
        route: Routes.getGuildApplicationCommands(this.options.botID, guildId),
        contentType: APPLICATION_TYPE.JSON,
      })) as any;
  }
  public async editGuildCommand<T>(options: { guildId: Snowflake; commandId: Snowflake; command: ICommand; }): Promise<ApplicationCommand>;
  public async editGuildCommand<T>(options: { guildId: Snowflake; commandId: Snowflake; command: ICommand; }): Promise<void>;
  public async editGuildCommand<T>(options: {
    guildId: Snowflake;
    commandId: Snowflake;
    command: ICommand;
  }): Promise<T> {
    return await Wrap(
      this.request.PATCH<T>({
        route: Routes.editGuildApplicationCommand({
          applicationId: this.options.botID,
          guildId: options.guildId,
          commandId: options.commandId,
        }),
        contentType: APPLICATION_TYPE.JSON,
        data: options.command,
      })) as T;
  }

  public async deleteGuildCommand(
    guildId: Snowflake,
    commandId: Snowflake
  ): Promise<void> {
    await this.request.DELETE<ApplicationCommand>({
      route: Routes.deleteGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: guildId,
        commandId: commandId,
      }),
      contentType: APPLICATION_TYPE.JSON,
    });
  }

  public async overwriteGuildCommands(
    guildId: Snowflake,
    command: ICommand | ICommand[]
  ): Promise<void> {
    await this.request.PUT<ApplicationCommand>({
      route: Routes.bulkOverwriteGuildApplicationCommands(
        this.options.botID,
        guildId
      ),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    });
  }
  public async getGuildCommand<T>(guildId: Snowflake, commandId: Snowflake): Promise<ApplicationCommand>;
  public async getGuildCommand<T>(guildId: Snowflake, commandId: Snowflake): Promise<void>;
  public async getGuildCommand<T>(
    guildId: Snowflake,
    commandId: Snowflake
  ): Promise<T> {
    return await Wrap(
      this.request.GET<T>({
        publicKey: true,
        route: Routes.getGuildApplicationCommand({
          applicationId: this.options.botID,
          guildId: guildId,
          commandId: commandId,
        }),
        contentType: APPLICATION_TYPE.JSON,
      })) as T;
  }
  public async getGuildCommandPermissions<T>(guildId: Snowflake): Promise<ApplicationCommandPermissions[]>;
  public async getGuildCommandPermissions<T>(guildId: Snowflake): Promise<void>;
  public async getGuildCommandPermissions<T>(
    guildId: Snowflake
  ): Promise<T> {
    return await Wrap(
      this.request.GET<T>({
        publicKey: true,
        route: Routes.getGuildApplicationCommandPermissions(
          this.options.botID,
          guildId
        ),
        contentType: APPLICATION_TYPE.JSON,
      })) as T;
  }
  public async editGuildCommandPermissions<T>(options: { guildId: Snowflake; commandId: Snowflake; permissions: ApplicationCommandPermissions[]; }): Promise<ApplicationCommandPermissions>;
  public async editGuildCommandPermissions<T>(options: { guildId: Snowflake; commandId: Snowflake; permissions: ApplicationCommandPermissions[]; }): Promise<void>;
  public async editGuildCommandPermissions<T>(options: {
    guildId: Snowflake;
    commandId: Snowflake;
    permissions: ApplicationCommandPermissions[];
  }): Promise<T> {
    return await Wrap(
      this.request.PUT<T>({
        publicKey: true,
        route: Routes.editApplicationCommandPermissions({
          applicationId: this.options.botID,
          guildId: options.guildId,
          commandId: options.commandId,
        }),
        contentType: APPLICATION_TYPE.JSON,
        data: options.permissions,
      })) as T;
  }
}
