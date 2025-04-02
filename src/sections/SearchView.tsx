"use client";

// React imports
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// MUI imports
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/material";

// Server action import
import { fetchUsers, User as FetchedUser } from "@/app/actions/profiles";

// User interface
interface User extends FetchedUser {
  image: string | null;
  id: string;
  name: string | null;
}

const SearchView = () => {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers: User[] = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = searchTerm
    ? users.filter(user =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : users;

  return (
    <Container sx={{ pt: 12, mb: "6rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        sx={{ 
            mb: 2,
            borderRadius: 25, 
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Stack spacing={2} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {filteredUsers.map((user) => (
          <Card 
            key={user.id} 
            sx={{ display: "flex", flexDirection: "row", borderRadius: 10, width: "100%", boxShadow: 3, mb: 2, alignItems: "center", cursor: "pointer", transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}
            onClick={() => router.push(`/profil/${user.id}`)}
          >
            <CardMedia 
              component="img"
              image={user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt={user.name || "Neznámy používateľ"}
              sx={{ height: 60, width: 60, borderRadius: "50%", margin: 2 }}
            />
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <Typography variant="h6" color="text.primary">
                {user.name || "Neznámy používateľ"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default SearchView;
