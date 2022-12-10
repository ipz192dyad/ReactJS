import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import { Button, Grid, Container } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Container>
        <Grid.Container gap={5}>
        <Grid>
          <Button shadow color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="secondary" auto>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="success" auto>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="warning" auto>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="error" auto>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="gradient" auto>
            Gradient
          </Button>
        </Grid>
        </Grid.Container>
      </Container>
  </NextUIProvider>
  );
}

export default App;
