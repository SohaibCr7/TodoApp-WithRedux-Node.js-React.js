import { addNewUser, getUser,getUserById } from "../controllers/userControllers";
import { UserLogin } from "../controllers/loginControllers";

const routes = (app) => {
    
    app.route('/login')
    // get login end point
    .post(UserLogin)


    app.route('/signup')

    // Get end Point
    .get(getUser)
    // POST end Point 
    .post(addNewUser)


    app.route("/ResetPasswordPage")
    // Pust end point
    .put(getUserById)
}

export default routes;

