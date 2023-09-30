export function Permissions(options: PermissionsPartial): bigint {
  let bitField: bigint = 0n;

  if (options.CreateInstantInvite) {
    bitField |= PermissionsBitField.CREATE_INSTANT_INVITE;
  }

  if (options.KickMembers) {
    bitField |= PermissionsBitField.KICK_MEMBERS;
  }

  if (options.BanMembers) {
    bitField |= PermissionsBitField.BAN_MEMBERS;
  }

  if (options.Administrator) {
    bitField |= PermissionsBitField.ADMINISTRATOR;
  }

  if (options.ManageChannels) {
    bitField |= PermissionsBitField.MANAGE_CHANNELS;
  }

  if (options.ManageGuild) {
    bitField |= PermissionsBitField.MANAGE_GUILD;
  }

  if (options.AddReactions) {
    bitField |= PermissionsBitField.ADD_REACTIONS;
  }

  if (options.ViewAuditLog) {
    bitField |= PermissionsBitField.VIEW_AUDIT_LOG;
  }

  if (options.PrioritySpeaker) {
    bitField |= PermissionsBitField.PRIORITY_SPEAKER;
  }

  if (options.Stream) {
    bitField |= PermissionsBitField.STREAM;
  }

  if (options.ViewChannel) {
    bitField |= PermissionsBitField.VIEW_CHANNEL;
  }

  if (options.SendMessages) {
    bitField |= PermissionsBitField.SEND_MESSAGES;
  }

  if (options.SendTTSMessages) {
    bitField |= PermissionsBitField.SEND_TTS_MESSAGES;
  }

  if (options.ManageMessages) {
    bitField |= PermissionsBitField.MANAGE_MESSAGES;
  }

  if (options.EmbedLinks) {
    bitField |= PermissionsBitField.EMBED_LINKS;
  }

  if (options.AttachFiles) {
    bitField |= PermissionsBitField.ATTACH_FILES;
  }

  if (options.ReadMessageHistory) {
    bitField |= PermissionsBitField.READ_MESSAGE_HISTORY;
  }

  if (options.MentionEveryone) {
    bitField |= PermissionsBitField.MENTION_EVERYONE;
  }

  if (options.UseExternalEmojis) {
    bitField |= PermissionsBitField.USE_EXTERNAL_EMOJIS;
  }

  if (options.ViewGuildInsights) {
    bitField |= PermissionsBitField.VIEW_GUILD_INSIGHTS;
  }

  if (options.Connect) {
    bitField |= PermissionsBitField.CONNECT;
  }

  if (options.Speak) {
    bitField |= PermissionsBitField.SPEAK;
  }

  if (options.MuteMembers) {
    bitField |= PermissionsBitField.MUTE_MEMBERS;
  }

  if (options.DeafenMembers) {
    bitField |= PermissionsBitField.DEAFEN_MEMBERS;
  }

  if (options.MoveMembers) {
    bitField |= PermissionsBitField.MOVE_MEMBERS;
  }

  if (options.UseVAD) {
    bitField |= PermissionsBitField.USE_VAD;
  }

  if (options.ChangeNickname) {
    bitField |= PermissionsBitField.CHANGE_NICKNAME;
  }

  if (options.ManageNicknames) {
    bitField |= PermissionsBitField.MANAGE_NICKNAMES;
  }

  if (options.ManageRoles) {
    bitField |= PermissionsBitField.MANAGE_ROLES;
  }

  if (options.ManageWebhooks) {
    bitField |= PermissionsBitField.MANAGE_WEBHOOKS;
  }

  if (options.ManageGuildExpressions) {
    bitField |= PermissionsBitField.MANAGE_GUILD_EXPRESSIONS;
  }

  if (options.UseApplicationCommands) {
    bitField |= PermissionsBitField.USE_APPLICATION_COMMANDS;
  }

  if (options.RequestToSpeak) {
    bitField |= PermissionsBitField.REQUEST_TO_SPEAK;
  }

  if (options.ManageEvents) {
    bitField |= PermissionsBitField.MANAGE_EVENTS;
  }

  if (options.ManageThreads) {
    bitField |= PermissionsBitField.MANAGE_THREADS;
  }

  if (options.CreatePublicThreads) {
    bitField |= PermissionsBitField.CREATE_PUBLIC_THREADS;
  }

  if (options.CreatePrivateThreads) {
    bitField |= PermissionsBitField.CREATE_PRIVATE_THREADS;
  }

  if (options.UseExternalStickers) {
    bitField |= PermissionsBitField.USE_EXTERNAL_STICKERS;
  }

  if (options.SendMessagesInThreads) {
    bitField |= PermissionsBitField.SEND_MESSAGES_IN_THREADS;
  }

  if (options.UseEmbeddedActivites) {
    bitField |= PermissionsBitField.USE_EMBEDDED_ACTIVITIES;
  }

  if (options.ModerateMembers) {
    bitField |= PermissionsBitField.MODERATE_MEMBERS;
  }

  if (options.ViewCreatorMonetizationAnylytics) {
    bitField |= PermissionsBitField.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  }

  if (options.UseSoundboard) {
    bitField |= PermissionsBitField.USE_SOUNDBOARD;
  }

  if (options.UseExternalSounds) {
    bitField |= PermissionsBitField.USE_EXTERNAL_SOUNDS;
  }

  if (options.SendVoiceMessages) {
    bitField |= PermissionsBitField.SEND_VOICE_MESSAGES;
  }

  return bitField;
}

export type PermissionsPartial = Partial<Record<Permissions, boolean>>;
export type Permissions =
  | "CreateInstantInvite"
  | "KickMembers"
  | "BanMembers"
  | "Administrator"
  | "ManageChannels"
  | "ManageGuild"
  | "AddReactions"
  | "ViewAuditLog"
  | "PrioritySpeaker"
  | "Stream"
  | "ViewChannel"
  | "SendMessages"
  | "SendTTSMessages"
  | "ManageMessages"
  | "EmbedLinks"
  | "AttachFiles"
  | "ReadMessageHistory"
  | "MentionEveryone"
  | "UseExternalEmojis"
  | "ViewGuildInsights"
  | "Connect"
  | "Speak"
  | "MuteMembers"
  | "DeafenMembers"
  | "MoveMembers"
  | "UseVAD"
  | "ChangeNickname"
  | "ManageNicknames"
  | "ManageRoles"
  | "ManageWebhooks"
  | "ManageGuildExpressions"
  | "UseApplicationCommands"
  | "RequestToSpeak"
  | "ManageEvents"
  | "ManageThreads"
  | "CreatePublicThreads"
  | "CreatePrivateThreads"
  | "UseExternalStickers"
  | "SendMessagesInThreads"
  | "UseEmbeddedActivites"
  | "ModerateMembers"
  | "ViewCreatorMonetizationAnylytics"
  | "UseSoundboard"
  | "UseExternalSounds"
  | "SendVoiceMessages";

export const PermissionsBitField = {
  CREATE_INSTANT_INVITE: 1n << 0n,
  KICK_MEMBERS: 1n << 1n,
  BAN_MEMBERS: 1n << 2n,
  ADMINISTRATOR: 1n << 3n,
  MANAGE_CHANNELS: 1n << 4n,
  MANAGE_GUILD: 1n << 5n,
  ADD_REACTIONS: 1n << 6n,
  VIEW_AUDIT_LOG: 1n << 7n,
  PRIORITY_SPEAKER: 1n << 8n,
  STREAM: 1n << 9n,
  VIEW_CHANNEL: 1n << 10n,
  SEND_MESSAGES: 1n << 11n,
  SEND_TTS_MESSAGES: 1n << 12n,
  MANAGE_MESSAGES: 1n << 13n,
  EMBED_LINKS: 1n << 14n,
  ATTACH_FILES: 1n << 15n,
  READ_MESSAGE_HISTORY: 1n << 16n,
  MENTION_EVERYONE: 1n << 17n,
  USE_EXTERNAL_EMOJIS: 1n << 18n,
  VIEW_GUILD_INSIGHTS: 1n << 19n,
  CONNECT: 1n << 20n,
  SPEAK: 1n << 21n,
  MUTE_MEMBERS: 1n << 22n,
  DEAFEN_MEMBERS: 1n << 23n,
  MOVE_MEMBERS: 1n << 24n,
  USE_VAD: 1n << 25n,
  CHANGE_NICKNAME: 1n << 26n,
  MANAGE_NICKNAMES: 1n << 27n,
  MANAGE_ROLES: 1n << 28n,
  MANAGE_WEBHOOKS: 1n << 29n,
  MANAGE_GUILD_EXPRESSIONS: 1n << 30n,
  USE_APPLICATION_COMMANDS: 1n << 31n,
  REQUEST_TO_SPEAK: 1n << 32n,
  MANAGE_EVENTS: 1n << 33n,
  MANAGE_THREADS: 1n << 34n,
  CREATE_PUBLIC_THREADS: 1n << 35n,
  CREATE_PRIVATE_THREADS: 1n << 36n,
  USE_EXTERNAL_STICKERS: 1n << 37n,
  SEND_MESSAGES_IN_THREADS: 1n << 38n,
  USE_EMBEDDED_ACTIVITIES: 1n << 39n,
  MODERATE_MEMBERS: 1n << 40n,
  VIEW_CREATOR_MONETIZATION_ANALYTICS: 1n << 41n,
  USE_SOUNDBOARD: 1n << 42n,
  USE_EXTERNAL_SOUNDS: 1n << 45n,
  SEND_VOICE_MESSAGES: 1n << 46n,
} as const;

export function PermissionsToHuman(bitField: bigint): Permissions[] {
  const permissionNames: Permissions[] = [];

  for (const permission of Object.keys(PermissionsBitField) as Permissions[]) {
    if ((bitField & PermissionsBitField[permission]) !== 0n) {
      permissionNames.push(permission);
    }
  }

  return permissionNames;
}

export function PlantBigint(bigint: bigint): bigint {
  return BigInt(bigint);
}

export function PlantPermission(permission: Permissions): bigint {
  return BigInt(permission);
}

export function PerfectBitNUM(bitField: bigint): number {
  //@ts-ignore
  return Number(String(bitField).replace("n", /\s+/));
}

export function PerfectBitSTR(bitField: bigint): string {
  //@ts-ignore
  return String(bitField).replace("n", /\s+/);
}

export function PermissionBitToNumber(permission: typeof Permissions): number {
  return PerfectBitNUM(permission as any);
}

export function PermissionBitToString(permission: typeof Permissions): string {
  return PerfectBitSTR(permission as any);
}
