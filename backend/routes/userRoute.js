import { addNewUser, getUser } from "../controllers/userControllers";

const routes = (app) => {
    app.route('/login')

    // Get end Point
    .get(getUser)
    // POST end Point 
    .post(addNewUser)
}

export default routes;

