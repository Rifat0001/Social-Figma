import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForYou from "./HomeComponents/HomeMiddle/HomeSpecificPages/For You/ForYou";
import Feed from "./HomeComponents/HomeMiddle/HomeSpecificPages/Feed/Feed";
import Photos from "./HomeComponents/HomeMiddle/HomeSpecificPages/Photos/Photos";
import Homelayouts from "./Layouts/Homelayouts/Homelayouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayouts></Homelayouts>,
        children: [
            {
                path: '/',
                element: <ForYou></ForYou>
            },
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