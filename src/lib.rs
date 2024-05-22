mod models;
mod schema;

use crate::schema::QueryRoot;
use async_graphql::{http::GraphiQLSource, EmptyMutation, EmptySubscription, Schema};
use async_graphql_axum::GraphQL;
use axum::Router;
use axum::{
    response::{self, IntoResponse},
    routing::get,
};
use schema::MutationRoot;
use tower_http::cors::{Any, CorsLayer};
use tower_service::Service;
use worker::{event, Context, Env, HttpRequest, Result};

async fn graphiql() -> impl IntoResponse {
    response::Html(GraphiQLSource::build().endpoint("/").finish())
}

fn router() -> Router {
    let schema = Schema::build(QueryRoot, MutationRoot, EmptySubscription).finish();
    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_origin(Any)
        .allow_headers(Any);
    let app = Router::new()
        .route(
            "/",
            get(graphiql).post_service(GraphQL::new(schema.clone())),
        )
        .layer(cors);
    app
}

#[event(fetch)]
async fn main(
    req: HttpRequest,
    env: Env,
    ctx: Context,
) -> Result<axum::http::Response<axum::body::Body>> {
    Ok(router().call(req).await?)

    // Response::ok("Hello, World!")
}
