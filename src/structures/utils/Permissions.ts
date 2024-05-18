type PermissionsPartial = Partial<Record<Permissions, boolean>>;
type Permissions =
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
  | "SendVoiceMessages"
  | "SendPolls";

export const PermissionsBitField = {
  CreateInstantInvite: 1n << 0n,
  KickMembers: 1n << 1n,
  BanMembers: 1n << 2n,
  Administrator: 1n << 3n,
  ManageChannels: 1n << 4n,
  ManageGuild: 1n << 5n,
  AddReactions: 1n << 6n,
  ViewAuditLog: 1n << 7n,
  PrioritySpeaker: 1n << 8n,
  Stream: 1n << 9n,
  ViewChannel: 1n << 10n,
  SendMessages: 1n << 11n,
  SendTTSMessages: 1n << 12n,
  ManageMessages: 1n << 13n,
  EmbedLinks: 1n << 14n,
  AttachFiles: 1n << 15n,
  ReadMessageHistory: 1n << 16n,
  MentionEveryone: 1n << 17n,
  UseExternalEmojis: 1n << 18n,
  ViewGuildInsights: 1n << 19n,
  Connect: 1n << 20n,
  Speak: 1n << 21n,
  MuteMembers: 1n << 22n,
  DeafenMembers: 1n << 23n,
  MoveMembers: 1n << 24n,
  UseVAD: 1n << 25n,
  ChangeNickname: 1n << 26n,
  ManageNicknames: 1n << 27n,
  ManageRoles: 1n << 28n,
  ManageWebhooks: 1n << 29n,
  ManageGuildExpressions: 1n << 30n,
  UseApplicationCommands: 1n << 31n,
  RequestToSpeak: 1n << 32n,
  ManageEvents: 1n << 33n,
  ManageThreads: 1n << 34n,
  CreatePublicThreads: 1n << 35n,
  CreatePrivateThreads: 1n << 36n,
  UseExternalStickers: 1n << 37n,
  SendMessagesInThreads: 1n << 38n,
  UseEmbeddedActivites: 1n << 39n,
  ModerateMembers: 1n << 40n,
  ViewCreatorMonetizationAnylytics: 1n << 41n,
  UseSoundboard: 1n << 42n,
  UseExternalSounds: 1n << 45n,
  SendVoiceMessages: 1n << 46n,
  SendPolls: 1n << 49n,
} as const;

export function Permissions(options: PermissionsPartial): bigint {
  return Object.entries(options).reduce((bitField, [key, value]) => {
    if (value) bitField |= PermissionsBitField[key as Permissions];
    return bitField;
  }, 0n);
}

export function PermissionsToHuman(bitField: bigint): Permissions[] {
  return (Object.keys(PermissionsBitField) as Permissions[]).filter(
    (permission) => (bitField & PermissionsBitField[permission]) !== 0n
  );
}

export function PlantBigint(value: bigint): bigint {
  return value;
}

export function PlantPermission(permission: Permissions): bigint {
  return PermissionsBitField[permission];
}

export function PerfectBitNUM(bitField: bigint): number {
  return Number(bitField);
}

export function PerfectBitSTR(bitField: bigint): string {
  return bitField.toString();
}

export function PermissionBitToNumber(permission: any): number {
  return PerfectBitNUM(permission as bigint);
}

export function PermissionBitToString(permission: any): string {
  return PerfectBitSTR(permission as bigint);
}
