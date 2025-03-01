import type { Integer } from './@type';
import { ButtonStyle } from './ButtonStyle';
import { EmojiInterface } from './EmojiInterface';

export interface ButtonInterface {
    /**
     * type
     * 2 for a button
     * @returns {Integer}
     */
    type: Integer | 2;
    /**
     * style
     * A button style
     * @returns {Integer | ButtonStyle}
     */
    style: Integer | ButtonStyle;
    /**
     * label
     * Text that appears on the button; max 80 characters
     * @returns {string}
     */
    label?: string;
    /**
     * emoji
     * name, id, and animated
     * @returns {EmojiInterface}
     */
    emoji?: Partial<EmojiInterface>;
    /**
     * custom_id
     * Developer-defined identifier for the button; max 100 characters
     * @returns {string}
     */
    custom_id?: string;
    /**
     * url
     * URL for link-style buttons
     * @returns {string}
     */
    url?: string;
    /**
     * disabled
     * Whether the button is disabled (defaults to false)
     * @returns {boolean}
     */
    disabled?: boolean | false;
}
