    import React from "react";

    import { BrowserRouter as Router, Route, Link } from "react-router-dom";


    import FirstPage from "../MainPage/FirstPage";
    import Quiz from "../quiz/Quiz";
    import QuizPage1 from "../firstQuizPage/QuizPage1";
    import Index from "../indexPage/Index";

    function RouterPage() {
        return ( 
        <Router >
            <div >
            <Route exact path = "/"component = { Index }/>
            <Route exact path = "/firstPage"component = { FirstPage }/> 
            <Route exact path = "/quizPage1"component = { QuizPage1}/> 
            <Route exact path = "/quiz"component = { Quiz }/>

            { /* <Route exact path="/completed" component={Completed}/> */ }
             </div>
        </Router>

        );
    }


    export default RouterPage;