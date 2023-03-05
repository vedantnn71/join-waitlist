use axum::{routing::get};

// what i want to build?
// i want to build a waitlist app which allows the user to signup for the waitlist for an app
// and shows all the users who are in the waitlist
//
// there will be two options:
// - use the default and opinionated ui form
// - use a custom ui form / headless ui form
//

#[tokio::main]
async fn main() {
    let router = rspc::Router::<()>::new()
        .query("version", |t| t(|ctx, input: ()| "0.1.32"))
        .build()
        .arced();


    let app = axum::Router::new()
        .route("/", get(|| async { "Hello 'rspc'!" }))
        .route("/rspc/:id", router.endpoint(||()).axum());


    axum::Server::bind(&"0.0.0.0:4000".parse().unwrap())
        .serve(app.into_make_service())
        .await 
        .unwrap();
}
