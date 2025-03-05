"use client";

// React imports
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// MUI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Server action import
import { fetchUserById, User as FetchedUser } from "@/app/actions/users";
import { fetchPostsByUserId } from "@/app/actions/posts";

// User and Post interfaces
interface User extends FetchedUser {
  bio: string | null;
  location: string | null;
  interests: string[] | null;
}

interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption?: string | null;
}

const ProfileView = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (id) {
      const loadUser = async () => {
        try {
          const fetchedUser: User = await fetchUserById(id as string);
          setUser(fetchedUser);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      };

      const loadPosts = async () => {
        try {
          const fetchedPosts: Post[] = await fetchPostsByUserId(id as string);
          setPosts(fetchedPosts);
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        }
      };

      loadUser();
      loadPosts();
    }
  }, [id]);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ pt: 12, mb: "6rem" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Avatar src={user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} sx={{ width: 100, height: 100, mr: 2 }} />
        <Box>
          <Typography variant="h4">{user.name || "Neznámy používateľ"}</Typography>
          <Typography variant="body1">{user.bio || "No bio available"}</Typography>
          <Typography variant="body2" color="text.secondary">{user.location || "No location available"}</Typography>
          <Typography variant="body2" color="text.secondary">{user.interests?.join(", ") || "No interests available"}</Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ ml: "auto", borderRadius: 25 }}>Follow</Button>
      </Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
            <Card sx={{ height: "100%", borderRadius: 5, transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
              <CardMedia
                component="img"
                image={post.imageUrl}
                alt={post.caption || "Post image"}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="body2">{post.caption || "No caption"}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProfileView;
