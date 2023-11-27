import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForYou from "./HomeComponents/HomeMiddle/HomeSpecificPages/For You/ForYou";
import Feed from "./HomeComponents/HomeMiddle/HomeSpecificPages/Feed/Feed";
import Photos from "./HomeComponents/HomeMiddle/HomeSpecificPages/Photos/Photos";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: 'forYou',
                element: <ForYou></ForYou>
            },
            {
                path: 'feeds',
                element: <Feed></Feed>
            },
            {
                path: 'photos',
                element: <Photos></Photos>
            }
        ]
    }
]);