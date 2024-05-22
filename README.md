# Template: worker-rust

A Cloudflare worker project using [`workers-rs`](https://github.com/cloudflare/workers-rs).

### Examples

- Axum: https://github.com/cloudflare/workers-rs/tree/main/examples/axum

## Usage

This template starts you off with a `src/lib.rs` file, acting as an entrypoint for requests hitting your Worker. Feel free to add more code in this file, or create Rust modules anywhere else for this project to use.

With `wrangler`, you can build, test, and deploy your Worker with the following commands:

```sh
# run your Worker in an ideal development workflow (with a local server, file watcher & more)
$ npm run dev

# deploy your Worker globally to the Cloudflare network (update your wrangler.toml file for configuration)
$ npm run deploy
```

Read the latest `worker` crate documentation here: https://docs.rs/worker

## Advanced Example

As this template comprises only the essential setup, we recommend considering our advanced example to leverage its additional functionalities. The advanced example showcases the creation of multiple routes, logging of requests, retrieval of field data from a form, and other features that may prove useful to your project.  
The following example has been taken from: [workers-rs](https://github.com/cloudflare/workers-rs). You can learn more about how to use workers with rust by going there.

```rust
use worker::*;

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    console_log!(
        "{} {}, located at: {:?}, within: {}",
        req.method().to_string(),
        req.path(),
        req.cf().coordinates().unwrap_or_default(),
        req.cf().region().unwrap_or("unknown region".into())
    );

    if !matches!(req.method(), Method::Post) {
        return Response::error("Method Not Allowed", 405);
    }

    if let Some(file) = req.form_data().await?.get("file") {
        return match file {
            FormEntry::File(buf) => {
                Response::ok(&format!("size = {}", buf.bytes().await?.len()))
            }
            _ => Response::error("`file` part of POST form must be a file", 400),
        };
    }

    Response::error("Bad Request", 400)
}
```

## WebAssembly

`workers-rs` (the Rust SDK for Cloudflare Workers used in this template) is meant to be executed as compiled WebAssembly, and as such so **must** all the code you write and depend upon. All crates and modules used in Rust-based Workers projects have to compile to the `wasm32-unknown-unknown` triple.

Read more about this on the [`workers-rs`](https://github.com/cloudflare/workers-rs) project README.

## Issues

If you have any problems with the `worker` crate, please open an issue on the upstream project issue tracker on the [`workers-rs` repository](https://github.com/cloudflare/workers-rs).
