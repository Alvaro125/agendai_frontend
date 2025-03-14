"use server";

import { auth, signIn, signOut } from "@/auth";

export async function authenticate(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) {
  try {
    console.log(await auth);
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "Invalid credentials";
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}
