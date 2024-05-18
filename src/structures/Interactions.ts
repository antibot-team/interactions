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
  private routes: Routes;
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
    this.routes = new Routes();
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
      route: this.routes.createApplicationCommand(this.options.botID),
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
        route: this.routes.getGlobalApplicationCommand(this.options.botID, commandId),
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
        route: this.routes.editGlobalApplicationCommand(this.options.botID, commandId),
        contentType: APPLICATION_TYPE.JSON,
        data: command,
      })) as T;
  }
  public async deleteGlobalCommand(commandId: Snowflake): Promise<void> {
    await this.request.DELETE<ApplicationCommand>({
      route: this.routes.deleteGlobalApplicationCommand(
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
        route: this.routes.getApplicationCommands(this.options.botID),
        contentType: APPLICATION_TYPE.JSON,
      })) as T;
  }

  public async overwriteGlobalCommands(...commands: ICommand[]): Promise<void> {
    await this.request.PUT<ApplicationCommand>({
      route: this.routes.bulkOverwriteGlobalApplicationCommands(this.options.botID),
      contentType: APPLICATION_TYPE.JSON,
      data: commands,
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
        route: this.routes.createGuildApplicationCommand(this.options.botID, guildId),
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
        route: this.routes.getGuildApplicationCommands(this.options.botID, guildId),
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
        route: this.routes.editGuildApplicationCommand({
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
      route: this.routes.deleteGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: guildId,
        commandId: commandId,
      }),
      contentType: APPLICATION_TYPE.JSON,
    });
  }

  public async overwriteGuildCommands(
    guildId: Snowflake,
    ...commands: ICommand[]
  ): Promise<void> {
    await this.request.PUT<ApplicationCommand>({
      route: this.routes.bulkOverwriteGuildApplicationCommands(
        this.options.botID,
        guildId
      ),
      contentType: APPLICATION_TYPE.JSON,
      data: commands,
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
        route: this.routes.getGuildApplicationCommand({
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
        route: this.routes.getGuildApplicationCommandPermissions(
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
        route: this.routes.editApplicationCommandPermissions({
          applicationId: this.options.botID,
          guildId: options.guildId,
          commandId: options.commandId,
        }),
        contentType: APPLICATION_TYPE.JSON,
        data: options.permissions,
      })) as T;
  }
}
