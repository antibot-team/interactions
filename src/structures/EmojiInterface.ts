import type { Snowflake } from "./@type";
import { UserInterface } from "./UserInterface";

export interface EmojiInterface {
  /**
   * id
   * emoji id
   * @returns {Snowflake}
   */
  readonly id: Snowflake;
  /**
   * name
   * emoji name
   * @returns {string}
   */
  readonly name: string;
  /**
   * roles
   * roles allowed to use this emoji
   * @returns {Snowflake[]}
   */
  readonly roles?: Snowflake[];
  /**
   * user
   * user that created this emoji
   * @returns {UserInterface}
   */
  readonly user?: UserInterface;
  /**
   * require_colons
   * whether this emoji must be wrapped in colons
   * @returns {boolean}
   */
  readonly require_colons?: boolean;
  /**
   * managed
   * whether this emoji is managed
   * @returns {boolean}
   */
  readonly managed?: boolean;
  /**
   * animated
   * whether this emoji is animated
   * @returns {boolean}
   */
  readonly animated?: boolean;
  /**
   * available
   * whether this emoji can be used, may be false due to loss of Server Boosts
   * @returns {boolean}
   */
  readonly available?: boolean;
}
