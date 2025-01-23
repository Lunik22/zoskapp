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
    <Container sx={{ mt: 4, mb: 12, display: "flex", justifyContent: "center"}}>
      <Stack spacing={2}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ display: "flex", flexDirection: "column", borderRadius: 10, width: 600, boxShadow: "none"}}>
            <CardContent sx={{ display: "flex", alignItems: "center", marginX: 2}}>
              <CardMedia 
                component="img"
                image={post.user.image || "/default-avatar.jpg"}
                alt={post.user.name || "Neznámy používateľS"}
                sx={{ height: 40, width: 40, borderRadius: "50%" }}
              />
              <Typography variant="h4" color="text.secondary" sx={{ marginLeft: 2}}>
                  {post.user.name || "Neznámy používateľ"}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={post.imageUrl}
              alt={post.caption || "Príspevok bez popisu"}
              sx={{ height: 450 , width: 600}}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", marginX: 2}}>
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