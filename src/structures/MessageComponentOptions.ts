import { EmojiInterface } from "./EmojiInterface";

export interface MessageComponentOptions {
  label: string;
  value: string;
  description?: string;
  emoji?: EmojiInterface;
  default?: boolean;
}
