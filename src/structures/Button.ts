import { ButtonInterface } from './ButtonInterface';
import { ButtonStyle } from './ButtonStyle';
import { EmojiInterface } from './EmojiInterface';

export interface Button extends ButtonInterface {}
export class Button implements ButtonInterface {
    public Style(style: ButtonStyle): this {
        this.style = style;
        return this;
    }

    public Label(label: string): this {
        this.label = label;
        return this;
    }

    public CustomID(custom_id: string): this {
        this.custom_id = custom_id;
        return this;
    }

    public Url(url: string): this {
        this.url = url;
        return this;
    }

    public Disabled(disabled: boolean): this {
        this.disabled = disabled;
        return this;
    }
}
