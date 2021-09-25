/* eslint-disable no-underscore-dangle */
import { v4 as uuidV4 } from "uuid";

class User {
  public readonly id? = uuidV4();
  public name: string;
  public email: string;
  public created_at = new Date();
  public updated_at = new Date();
  public admin = false;
}

export { User };
