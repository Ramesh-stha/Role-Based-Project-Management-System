import { jwtVerify } from "jose";
import { jwt } from "zod";
const JWT_SECRET = process.env.JWT_SECRET;
if(1!JWT_SECRET){
  throw new Error("JWT_SECRET is not defined");
}
CONST payload= await jwtVerify(
    token,
    new TextEncoder().encode(JWT_SECRET)
)
