'use server';

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import { getServerSession, Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export type LikeActionResponse = {
  success: boolean;
  liked: boolean;
  likesCount: number;
  error?: string;
};

export async function toggleLike(postId: string): Promise<LikeActionResponse> {
  try {
    // Fetch the session to get the userId
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      console.error("User ID not found in session");
      return {
        success: false,
        liked: false,
        likesCount: 0,
        error: "Unauthorized",
      };
    }

    const userId = session.user.id;

    // Verify if the user exists in the database
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      console.error("User does not exist in the database");
      return {
        success: false,
        liked: false,
        likesCount: 0,
        error: "User not found",
      };
    }

    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    if (existingLike) {
      console.log("Unlike post:", postId);
      // Unlike
      await prisma.like.delete({
        where: {
          userId_postId: {
            userId,
            postId,
          },
        },
      });
    } else {
      // Like
      console.log("Like post:", postId);
      await prisma.like.create({
        data: {
          userId,
          postId,
        },
      });
    }

    // Get updated likes count
    const likesCount = await prisma.like.count({
      where: { postId },
    });

    return {
      success: true,
      liked: !existingLike,
      likesCount,
    };
  } catch (error) {
    console.error("Error in toggleLike:", error);
    return {
      success: false,
      liked: false,
      likesCount: 0,
      error: "Failed to toggle like",
    };
  }
}

export async function getLikesCount(postId: string): Promise<number> {
  try {
    return await prisma.like.count({
      where: { postId }
    });
  } catch (error) {
    console.error('Error getting likes count:', error);
    return 0;
  }
}

export async function isPostLiked(postId: string): Promise<boolean> {
  try {
    const session = await getServerSession(authOptions) as Session & { user: { id: string } };
    if (!session?.user?.id) return false;

    const like = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId: session.user.id,
          postId: postId,
        },
      },
    });

    return !!like;
  } catch (error) {
    console.error('Error checking if post is liked:', error);
    return false;
  }
}