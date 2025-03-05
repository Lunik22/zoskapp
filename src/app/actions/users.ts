"use server";

// Import Prisma client
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export interface User {
  id: string;
  name: string | null;
  image: string | null;
  bio: string | null;
  location: string | null;
  interests: string[] | null;
}

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const users = await prisma.user.findMany({
      include: { profile: true },
    });

    return users.map(user => ({
      id: user.id,
      name: user.name || "Neznámy používateľ",
      image: user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      bio: user.profile?.bio || null,
      location: user.profile?.location || null,
      interests: user.profile?.interests || null,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

// Fetch user by ID
export const fetchUserById = async (userId: string): Promise<User> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user.id,
      name: user.name || "Neznámy používateľ",
      image: user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      bio: user.profile?.bio || null,
      location: user.profile?.location || null,
      interests: user.profile?.interests || null,
    };
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};
