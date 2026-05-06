import { BlogList } from '../components/BlogList';
import { Box, Container } from '@mui/material';

export default function Home() {
  return (
    // Den ydre Box giver lodret luft omkring indholdet på forsiden.
    <Box component="main" sx={{ py: 6 }}>
      {/* Container sørger for en fast bredde og centreret indhold på større skærme. */}
      <Container maxWidth="lg">
        <BlogList />
      </Container>
    </Box>
  );
}
