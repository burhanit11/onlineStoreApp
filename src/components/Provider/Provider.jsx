import store from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import MuiThemeProvider from "./MuiThemeProvider";

const Provider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </div>
  );
};

export default Provider;
