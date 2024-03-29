export function Permissions(options: PermissionsPartial): bigint {
  let bitField: bigint = 0n;
  bitField |= options.CreateInstantInvite ? PermissionsBitField.CREATE_INSTANT_INVITE : 0n;
  bitField |= options.KickMembers ? PermissionsBitField.KICK_MEMBERS : 0n;
  bitField |= options.BanMembers ? PermissionsBitField.BAN_MEMBERS : 0n;
  bitField |= options.Administrator ? PermissionsBitField.ADMINISTRATOR : 0n;
  bitField |= options.ManageChannels ? PermissionsBitField.MANAGE_CHANNELS : 0n;
  bitField |= options.ManageGuild ? PermissionsBitField.MANAGE_GUILD : 0n;
  bitField |= options.AddReactions ? PermissionsBitField.ADD_REACTIONS : 0n;
  bitField |= options.ViewAuditLog ? PermissionsBitField.VIEW_AUDIT_LOG : 0n;
  bitField |= options.PrioritySpeaker ? PermissionsBitField.PRIORITY_SPEAKER : 0n;
  bitField |= options.Stream ? PermissionsBitField.STREAM : 0n;
  bitField |= options.ViewChannel ? PermissionsBitField.VIEW_CHANNEL : 0n;
  bitField |= options.SendMessages ? PermissionsBitField.SEND_MESSAGES : 0n;
  bitField |= options.SendTTSMessages ? PermissionsBitField.SEND_TTS_MESSAGES : 0n;
  bitField |= options.ManageMessages ? PermissionsBitField.MANAGE_MESSAGES : 0n;
  bitField |= options.EmbedLinks ? PermissionsBitField.EMBED_LINKS : 0n;
  bitField |= options.AttachFiles ? PermissionsBitField.ATTACH_FILES : 0n;
  bitField |= options.ReadMessageHistory ? PermissionsBitField.READ_MESSAGE_HISTORY : 0n;
  bitField |= options.MentionEveryone ? PermissionsBitField.MENTION_EVERYONE : 0n;
  bitField |= options.UseExternalEmojis ? PermissionsBitField.USE_EXTERNAL_EMOJIS : 0n;
  bitField |= options.ViewGuildInsights ? PermissionsBitField.VIEW_GUILD_INSIGHTS : 0n;
  bitField |= options.Connect ? PermissionsBitField.CONNECT : 0n;
  bitField |= options.Speak ? PermissionsBitField.SPEAK : 0n;
  bitField |= options.MuteMembers ? PermissionsBitField.MUTE_MEMBERS : 0n;
  bitField |= options.DeafenMembers ? PermissionsBitField.DEAFEN_MEMBERS : 0n;
  bitField |= options.MoveMembers ? PermissionsBitField.MOVE_MEMBERS : 0n;
  bitField |= options.UseVAD ? PermissionsBitField.USE_VAD : 0n;
  bitField |= options.ChangeNickname ? PermissionsBitField.CHANGE_NICKNAME : 0n;
  bitField |= options.ManageNicknames ? PermissionsBitField.MANAGE_NICKNAMES : 0n;
  bitField |= options.ManageRoles ? PermissionsBitField.MANAGE_ROLES : 0n;
  bitField |= options.ManageWebhooks ? PermissionsBitField.MANAGE_WEBHOOKS : 0n;
  bitField |= options.ManageGuildExpressions ? PermissionsBitField.MANAGE_GUILD_EXPRESSIONS : 0n;
  bitField |= options.UseApplicationCommands ? PermissionsBitField.USE_APPLICATION_COMMANDS : 0n;
  bitField |= options.RequestToSpeak ? PermissionsBitField.REQUEST_TO_SPEAK : 0n;
  bitField |= options.ManageEvents ? PermissionsBitField.MANAGE_EVENTS : 0n;
  bitField |= options.ManageThreads ? PermissionsBitField.MANAGE_THREADS : 0n;
  bitField |= options.CreatePublicThreads ? PermissionsBitField.CREATE_PUBLIC_THREADS : 0n;
  bitField |= options.CreatePrivateThreads ? PermissionsBitField.CREATE_PRIVATE_THREADS : 0n;
  bitField |= options.UseExternalStickers ? PermissionsBitField.USE_EXTERNAL_STICKERS : 0n;
  bitField |= options.SendMessagesInThreads ? PermissionsBitField.SEND_MESSAGES_IN_THREADS : 0n;
  bitField |= options.UseEmbeddedActivites ? PermissionsBitField.USE_EMBEDDED_ACTIVITIES : 0n;
  bitField |= options.ModerateMembers ? PermissionsBitField.MODERATE_MEMBERS : 0n;
  bitField |= options.ViewCreatorMonetizationAnylytics ? PermissionsBitField.VIEW_CREATOR_MONETIZATION_ANALYTICS : 0n;
  bitField |= options.UseSoundboard ? PermissionsBitField.USE_SOUNDBOARD : 0n;
  bitField |= options.UseExternalSounds ? PermissionsBitField.USE_EXTERNAL_SOUNDS : 0n;
  bitField |= options.SendVoiceMessages ? PermissionsBitField.SEND_VOICE_MESSAGES : 0n;
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

export function PermissionBitToNumber(permission: any): number {
  return PerfectBitNUM(permission as any);
}

export function PermissionBitToString(permission: any): string {
  return PerfectBitSTR(permission as any);
}
