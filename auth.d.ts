import { type DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  type User = {
    _id: string;
    name: string;
    email: string;
    image: string;
  };

  type Session = {
    user: {
      _id: string;
    } & DefaultSession["user"];
  };
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    _id?: string;
  }
}
