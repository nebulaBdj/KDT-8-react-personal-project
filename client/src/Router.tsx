import { createBrowserRouter } from "react-router-dom";

import Blogmain from "./Component/Bloglist";

const Router = createBrowserRouter([
    {
        path : '/',
        element: <Blogmain />,
    },
    {
        path : '/blog_editor',
        
    }
]);

export default Router;