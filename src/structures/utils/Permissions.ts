type Permissions = keyof typeof PermissionsBitField;
type PermissionsPartial = Partial<Record<Permissions, boolean>>;

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
    ViewCreatorMonetizationAnalytics: 1n << 41n,
    UseSoundboard: 1n << 42n,
    CreateGuildExpressions: 1n << 43n,
    CreateEvents: 1n << 44n,
    UseExternalSounds: 1n << 45n,
    SendVoiceMessages: 1n << 46n,
    SendPolls: 1n << 49n,
    UseExternalApps: 1n << 50n,
} as const;

export function Permissions(options: PermissionsPartial): bigint {
    return Object.entries(options).reduce((bitField, [key, value]) => {
        if (value) bitField |= PermissionsBitField[key as Permissions];
        return bitField;
    }, BigInt(0));
}

export function PermissionsToHuman(bitField: bigint | number | string): Permissions[] {
    const normalizedBitField =
        typeof bitField === 'bigint'
            ? bitField
            : typeof bitField === 'number'
              ? BigInt(bitField)
              : BigInt(bitField);

    return (Object.keys(PermissionsBitField) as Permissions[]).filter(
        (permission) => (normalizedBitField & PermissionsBitField[permission]) !== BigInt(0),
    );
}

export function PlantBigint(value: bigint | number | string): bigint {
    return typeof value === 'bigint'
        ? value
        : typeof value === 'number'
          ? BigInt(value)
          : BigInt(value);
}

export function PlantPermission(permission: Permissions | bigint | number | string): bigint {
    if (typeof permission === 'bigint') {
        return permission;
    }
    if (typeof permission === 'number') {
        return BigInt(permission);
    }
    if (typeof permission === 'string') {
        if (permission.match(/^\d+n?$/)) {
            return BigInt(permission.replace('n', ''));
        }
        if (permission in PermissionsBitField) {
            return PermissionsBitField[permission as Permissions];
        }
    }
    throw new Error(`Invalid permission: ${permission}`);
}

export function PerfectBitNUM(bitField: bigint | number | string): number {
    const value =
        typeof bitField === 'bigint'
            ? bitField
            : typeof bitField === 'number'
              ? BigInt(bitField)
              : BigInt(bitField);
    return Number(value);
}

export function PerfectBitSTR(bitField: bigint | number | string): string {
    const value =
        typeof bitField === 'bigint'
            ? bitField
            : typeof bitField === 'number'
              ? BigInt(bitField)
              : BigInt(bitField);
    return value.toString();
}

export function PermissionBitToNumber(permission: bigint | number | string): number {
    return PerfectBitNUM(permission);
}

export function PermissionBitToString(permission: bigint | number | string): string {
    return PerfectBitSTR(permission);
}
