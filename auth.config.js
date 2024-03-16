
import Github from "next-auth/providers/github";

const githubId = "2953f957eefea8a3a1e3";
const githubSecret = "b36346ab03a5259582647e4b11805f9aeac03967";

if (!githubId || !githubSecret) {
    throw new Error("GITHUB_ID or GITHUB_SECRET is not set");
    }

export default {

    
  providers: [
    Github({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
} 