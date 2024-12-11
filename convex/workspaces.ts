import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { auth } from "./auth";
export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (userId === null) {
      return null;
    }
    const workspace = await ctx.db.insert("workspaces", {
      name: args.name,
      userId: userId,
      joinCode: "123456",
    });
    return {workspace};
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspaces").collect();
  },
});
