// 

"use client";

// React imports
import { useEffect, useState } from "react";

// MUI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

// Server action import
import { fetchPosts } from "@/app/actions/posts";
import { Stack } from "@mui/material";

// Post interface
interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption?: string | null;
  createdAt: Date; // Adjusted to match fetched data type
  updatedAt: Date; // Adjusted to match fetched data type
  user: {
    image: string | null;
    name: string | null;
  };
}

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('sk-SK', options);
  const formattedTime = date.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' });
  return `${formattedDate} ${formattedTime}`;};

const PostsView = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts: Post[] = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <Container sx={{ pt: 12, mb: "6rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Stack spacing={2} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ display: "flex", flexDirection: "column", borderRadius: 10, width: "60%", boxShadow: "none"}}>
            <CardContent sx={{ display: "flex", alignItems: "center", marginX: "2.5%"}}>
              <CardMedia 
              component="img"
              image={post.user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt={post.user.name || "Neznámy používateľ"}
              sx={{ height: "7.5%", width: "7.5%", borderRadius: "50%" }}
              />
              <Typography variant="h4" color="text.secondary" sx={{ marginLeft: "2.5%"}}>
                {post.user.name || "Neznámy používateľ"}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={post.imageUrl}
              alt={post.caption || "Príspevok bez popisu"}
              sx={{ height: "80%" , width: "100%"}}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", marginX: "2.5%"}}>
              <Typography variant="body1">{post.caption || "Bez popisu"}</Typography>
              <Typography variant="body1">{formatDate(new Date(post.createdAt)) || "Bez datumu"}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default PostsView;