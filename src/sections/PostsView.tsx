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
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// Server action import
import { fetchPosts } from "@/app/actions/posts";
import { Box, Stack } from "@mui/material";

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
          <Card key={post.id} sx={{ display: "flex", flexDirection: "column", borderRadius: 5, width: "60%", boxShadow: 3, mb: 4 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", padding: 3 }}>
              <CardMedia 
                component="img"
                image={post.user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt={post.user.name || "Neznámy používateľ"}
                sx={{ height: 40, width: 40, borderRadius: "50%", marginRight: 2 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" color="text.primary">
                  {post.user.name || "Neznámy používateľ"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(new Date(post.createdAt)) || "Bez datumu"}
                </Typography>
              </Box>
            </CardContent>
            <CardMedia
              component="img"
              image={post.imageUrl}
              alt={post.caption || "Príspevok bez popisu"}
              sx={{ width: "100%", maxHeight: 500, objectFit: "cover" }}
            />
            <CardContent sx={{ padding: 4 }}>
              <Typography variant="body1" color="text.primary" sx={{ marginBottom: 1 }}>
                {post.caption || "Bez popisu"}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}>
              <div>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </div>
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default PostsView;