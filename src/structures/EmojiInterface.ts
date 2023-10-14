import type { Snowflake } from "./@type";
import { UserInterface } from "./UserInterface";

export interface EmojiInterface {
  /**
   * id
   * emoji id
   * @returns {Snowflake}
   */
  id: Snowflake;
  /**
   * name
   * emoji name
   * @returns {string}
   */
  name: string;
  /**
   * roles
   * roles allowed to use this emoji
   * @returns {Snowflake[]}
   */
  roles?: Snowflake[];
  /**
   * user
   * user that created this emoji
   * @returns {UserInterface}
   */
  user?: UserInterface;
  /**
   * require_colons
   * whether this emoji must be wrapped in colons
   * @returns {boolean}
   */
  require_colons?: boolean;
  /**
   * managed
   * whether this emoji is managed
   * @returns {boolean}
   */
  managed?: boolean;
  /**
   * animated
   * whether this emoji is animated
   * @returns {boolean}
   */
  animated?: boolean;
  /**
   * available
   * whether this emoji can be used, may be false due to loss of Server Boosts
   * @returns {boolean}
   */
  available?: boolean;
}
